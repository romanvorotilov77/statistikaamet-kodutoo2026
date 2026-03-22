import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useQuestions } from "../hooks/useQuestions"
import type { QuizResult } from "../types"
import { QuestionElement } from "./QuestionElement"
import { QuizIntro } from "./QuizIntro"
import { Tulemus } from "./Tulemus"

export function Quiz() {
  const { t, i18n } = useTranslation()
  const { data: questions = [], isLoading, isError } = useQuestions(i18n.language)
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [results, setResults] = useState<Record<number, QuizResult>>({})
  const [finished, setFinished] = useState(false)
  const [showSelectionError, setShowSelectionError] = useState(false)

  const currentQuestion = questions[currentIndex]
  const selectedOption = currentQuestion ? selectedAnswers[currentQuestion.id] : undefined
  const currentResult = currentQuestion ? results[currentQuestion.id] : undefined
  const isSubmitted = Boolean(currentResult)
  const score = useMemo(
    () => Object.values(results).filter((result) => result.isCorrect).length,
    [results],
  )

  const handleStart = () => {
    setStarted(true)
    setCurrentIndex(0)
    setFinished(false)
    setSelectedAnswers({})
    setResults({})
    setShowSelectionError(false)
  }

  const handleSelect = (option: string) => {
    if (isSubmitted || !currentQuestion) return

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }))
    setShowSelectionError(false)
  }

  const handleCheckAnswer = () => {
    if (!currentQuestion || isSubmitted) return
    if (!selectedOption) {
      setShowSelectionError(true)
      return
    }

    setShowSelectionError(false)

    setResults((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selected: selectedOption,
        isCorrect: selectedOption === currentQuestion.correctAnswer,
      },
    }))
  }

  const handleNext = () => {
    if (!isSubmitted) return

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      return
    }

    setFinished(true)
  }

  const finalMessage = useMemo(() => {
    if (score === questions.length) return t("quiz.final.excellent")
    if (score >= Math.ceil(questions.length / 2)) return t("quiz.final.good")
    return t("quiz.final.start")
  }, [questions.length, score, t])

  if (isLoading) {
    return (
      <section className="py-6">
        <div className="w-full">
          <p className="body-medium text-stat-grey">{t("quiz.loading")}</p>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="py-6">
        <div className="w-full">
          <p className="body-medium text-stat-error">{t("quiz.error")}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-6">
      <div className="w-full space-y-6">
        {!started && <QuizIntro onStart={handleStart} />}

        {started && !finished && currentQuestion && (
          <div className="pt-2">
            <QuestionElement
              question={currentQuestion}
              questionIndex={currentIndex}
              totalQuestions={questions.length}
              selectedOption={selectedOption}
              isSubmitted={isSubmitted}
              isCorrect={currentResult?.isCorrect ?? null}
              showSelectionError={showSelectionError}
              onSelect={handleSelect}
              onCheckAnswer={handleCheckAnswer}
              onNext={handleNext}
            />
          </div>
        )}

        {started && finished && (
          <Tulemus
            questions={questions}
            results={results}
            score={score}
            finalMessage={finalMessage}
            onRestart={handleStart}
          />
        )}
      </div>
    </section>
  )
}
