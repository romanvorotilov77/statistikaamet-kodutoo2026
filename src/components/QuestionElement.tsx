import type { Question } from "../types"
import { IconCheckFilled, IconStatusCheck, IconStatusClose } from "../icons"
import { useTranslation } from "react-i18next"

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
  const feedbackClass = isSuccessFeedback ? "feedback-success" : "feedback-error"
  const accentBarClass = isSuccessFeedback ? "feedback-accent-success" : "feedback-accent-error"
  const textColorClass = isSuccessFeedback ? "text-stat-success" : "text-stat-error"
  
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
        {question.options.map((option) => {
          const isSelected = selectedOption === option
          const isDisabledVariant = isSubmitted && !isSelected
          const optionStateClass = isDisabledVariant
            ? "bg-stat-light-grey border-stat-light-grey cursor-not-allowed"
            : isSelected
              ? "bg-white border-stat-success"
              : "bg-white border-stat-light-grey hover:border-stat-grey"
          const indicatorStateClass = isDisabledVariant
            ? "border-stat-grey bg-stat-light-grey"
            : "border-stat-light-grey"

          return (
            <label
              key={option}
              className={`relative w-full border-2 px-6 py-5 flex items-center gap-4 transition-all rounded-none ${optionStateClass} ${
                isSubmitted ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                className="peer sr-only"
                checked={selectedOption === option}
                onChange={() => onSelect(option)}
                disabled={isSubmitted}
              />
              <span className={`relative w-6 h-6 border-2 rounded-full shrink-0 overflow-hidden transition-colors peer-checked:border-transparent peer-checked:[&>.checked-shape]:scale-100 peer-checked:[&>.checked-icon]:opacity-100 ${indicatorStateClass}`}>
                <span className="checked-shape absolute inset-0 rounded-full bg-stat-success scale-0 transition-transform" />
                <IconCheckFilled className="checked-icon absolute left-[18%] right-[18%] top-[22%] bottom-[22%] w-auto h-auto opacity-0 text-white transition-opacity" />
              </span>
              <span className="body-medium text-stat-grey">{option}</span>
            </label>
          )
        })}
      </div>

      {showFeedback && (
        <div
          className={`relative mt-6 w-full border px-5 py-4 pl-6 ${feedbackClass}`}
        >
          <span
            className={`feedback-accent-bar ${accentBarClass}`}
            aria-hidden="true"
          />

          <div className={`flex items-center gap-3 ${textColorClass}`}>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-current" aria-hidden="true">
              {isSuccessFeedback ? (
                <IconStatusCheck className="h-4 w-4" />
              ) : (
                <IconStatusClose className="h-4 w-4" />
              )}
            </span>

            <p className="title-medium">
              {feedbackMessage}
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-end gap-4 mt-8">
        {!isSubmitted ? (
          <button
            type="button"
            onClick={onCheckAnswer}
            className="title-medium px-6 py-3 bg-black text-white border-2 border-transparent hover:border-black hover:bg-white hover:text-black active:bg-black active:text-white active:border-black transition-all duration-100"
          >
            {t("quiz.buttons.check")}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="title-medium px-6 py-3 bg-black text-white border-2 border-transparent hover:border-black hover:bg-white hover:text-black active:bg-black active:text-white active:border-black transition-all duration-100"
          >
            {questionIndex === totalQuestions - 1 ? t("quiz.buttons.results") : t("quiz.buttons.next")}
          </button>
        )}
      </div>
    </article>
  )
}
