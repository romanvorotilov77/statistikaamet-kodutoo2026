import { useQuery } from '@tanstack/react-query'
import type { Question, QuestionsByLanguage } from '../types'

async function fetchQuestions(): Promise<QuestionsByLanguage> {
  const response = await fetch('/data/questions.json')

  if (!response.ok) {
    throw new Error('Failed to load quiz questions')
  }

  return response.json() as Promise<QuestionsByLanguage>
}

export function useQuestions(language: string) {
  return useQuery<QuestionsByLanguage, Error, Question[]>({
    queryKey: ['questions'],
    queryFn: fetchQuestions,
    staleTime: Infinity,
    select: (data) => data[language] ?? data.et ?? [],
  })
}