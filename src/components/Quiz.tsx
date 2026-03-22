import { useState } from "react"
import { questions } from "../data/questions"
import { QuestionElement } from "./QuestionElement"
import QuizIntro from "./QuizIntro"
import { Tulemus } from "./Tulemus"

export function Quiz() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [results, setResults] = useState<Record<number, { selected: string; isCorrect: boolean }>>({})
  const [finished, setFinished] = useState(false)
  const [showSelectionError, setShowSelectionError] = useState(false)

  const currentQuestion = questions[currentIndex]
  const selectedOption = currentQuestion ? selectedAnswers[currentQuestion.id] : undefined
  const currentResult = currentQuestion ? results[currentQuestion.id] : undefined
  const isSubmitted = Boolean(currentResult)
  const score = Object.values(results).filter((result) => result.isCorrect).length

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

  const getFinalMessage = () => {
    if (score === questions.length) return "Suurepärane tulemus! Vastasid kõigile küsimustele õigesti."
    if (score >= Math.ceil(questions.length / 2)) return "Tubli! Sul on tugevad teadmised, jatka samas vaimus."
    return "Hea algus! Proovi uuesti ja paranda oma tulemust."
  }

  return (
    <section className="py-6">
      <div className="w-full space-y-6">
        {!started && <QuizIntro onStart={handleStart} />}

        {started && !finished && currentQuestion && (
          <div className="space-y-8 pt-2">
            <QuestionElement
              question={currentQuestion}
              questionIndex={currentIndex}
              totalQuestions={questions.length}
              selectedOption={selectedOption}
              isSubmitted={isSubmitted}
              isCorrect={currentResult?.isCorrect ?? null}
              showSelectionError={showSelectionError}
              onSelect={handleSelect}
            />

            <div className="flex justify-end gap-4">
              {!isSubmitted ? (
                <button
                  type="button"
                  onClick={handleCheckAnswer}
                  className="title-medium px-6 py-3 bg-black text-white border-2 border-black"
                >
                  Kontrolli
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="title-medium px-6 py-3 bg-black text-white border-2 border-black"
                >
                  {currentIndex === questions.length - 1 ? "Vaata tulemusi" : "Järgmine"}
                </button>
              )}
            </div>
          </div>
        )}

        {started && finished && (
          <Tulemus
            questions={questions}
            results={results}
            score={score}
            finalMessage={getFinalMessage()}
            onRestart={handleStart}
          />
        )}
      </div>
    </section>
  )
}
