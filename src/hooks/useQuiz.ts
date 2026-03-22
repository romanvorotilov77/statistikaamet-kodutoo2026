import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import type { Question, QuizResult } from "../types"

type UseQuizReturn = {
  started: boolean
  currentIndex: number
  selectedAnswers: Record<number, string>
  results: Record<number, QuizResult>
  finished: boolean
  showSelectionError: boolean
  currentQuestion: Question | undefined
  selectedOption: string | undefined
  currentResult: QuizResult | undefined
  isSubmitted: boolean
  score: number
  finalMessage: string
  handleStart: () => void
  handleSelect: (option: string) => void
  handleCheckAnswer: () => void
  handleNext: () => void
}

export function useQuiz(questions: Question[]): UseQuizReturn {
  const { t } = useTranslation()
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

  const finalMessage = useMemo(() => {
    if (score === questions.length) return t("quiz.final.excellent")
    if (score >= Math.ceil(questions.length / 2)) return t("quiz.final.good")
    return t("quiz.final.start")
  }, [questions.length, score, t])

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

  return {
    started,
    currentIndex,
    selectedAnswers,
    results,
    finished,
    showSelectionError,
    currentQuestion,
    selectedOption,
    currentResult,
    isSubmitted,
    score,
    finalMessage,
    handleStart,
    handleSelect,
    handleCheckAnswer,
    handleNext,
  }
}
