import type { Question } from "../../types"
import { useTranslation } from "react-i18next"
import { Button, OptionCard, FeedbackMessage } from "../ui"

type QuestionElementProps = {
  question: Question
  questionIndex: number
  totalQuestions: number
  selectedOption: string | undefined
  isSubmitted: boolean
  isCorrect: boolean | null
  showSelectionError: boolean
  onSelect: (option: string) => void
  onCheckAnswer: () => void
  onNext: () => void
}

export function QuestionElement({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  isSubmitted,
  isCorrect,
  showSelectionError,
  onSelect,
  onCheckAnswer,
  onNext,
}: QuestionElementProps) {
  const { t } = useTranslation()
  const isSuccessFeedback = isSubmitted && Boolean(isCorrect)
  const showFeedback = isSubmitted || showSelectionError
  
  const feedbackMessage = showSelectionError
    ? t("quiz.feedback.selectFirst")
    : isSuccessFeedback
      ? t("quiz.feedback.correct")
      : t("quiz.feedback.wrong", { correctAnswer: question.correctAnswer })

  return (
    <article className="bg-white border-2 border-stat-light-grey rounded-2xl p-8 md:p-10">
      <p className="label-medium text-stat-grey mb-4 block">
        {t("quiz.questionCounter", { current: questionIndex + 1, total: totalQuestions })}
      </p>
      <h2 className="headline-small mb-8">{question.question}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <OptionCard
            key={option}
            option={option}
            questionId={question.id}
            isSelected={selectedOption === option}
            isSubmitted={isSubmitted}
            onChange={onSelect}
          />
        ))}
      </div>

      {showFeedback && (
        <FeedbackMessage isSuccess={isSuccessFeedback} message={feedbackMessage} />
      )}

      <div className="flex justify-end gap-4 mt-8">
        {!isSubmitted ? (
          <Button onClick={onCheckAnswer}>{t("quiz.buttons.check")}</Button>
        ) : (
          <Button onClick={onNext}>
            {questionIndex === totalQuestions - 1 ? t("quiz.buttons.results") : t("quiz.buttons.next")}
          </Button>
        )}
      </div>
    </article>
  )
}
