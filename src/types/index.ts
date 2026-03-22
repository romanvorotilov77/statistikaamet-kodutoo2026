export type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export type QuestionsByLanguage = Record<string, Question[]>

export type QuizResult = {
  selected: string
  isCorrect: boolean
}

export type IconProps = {
  className?: string
}