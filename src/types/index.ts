export type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export type QuestionsByLanguage = Record<string, Question[]>