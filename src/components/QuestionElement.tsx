import type { Question } from "../data/questions"
import { IconCheckFilled, IconStatusCheck, IconStatusClose } from "../icons"

type QuestionElementProps = {
  question: Question
  questionIndex: number
  totalQuestions: number
  selectedOption: string | undefined
  isSubmitted: boolean
  isCorrect: boolean | null
  showSelectionError: boolean
  onSelect: (option: string) => void
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
}: QuestionElementProps) {
  const isSuccessFeedback = isSubmitted && Boolean(isCorrect)
  const showFeedback = isSubmitted || showSelectionError
  const feedbackStyle = {
    borderColor: isSuccessFeedback ? "var(--color-stat-success)" : "var(--color-stat-error)",
    backgroundColor: "var(--color-stat-bg)",
  }

  return (
    <article className="bg-white border-2 border-stat-light-grey rounded-2xl p-8 md:p-10">
      <p className="label-medium text-stat-grey mb-4 block">
        Küsimus {questionIndex + 1} / {totalQuestions}
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
          className="relative mt-6 w-full border px-5 py-4 pl-6"
          style={feedbackStyle}
        >
          <span
            className="absolute left-0 top-0 h-full w-1.5"
            style={{ backgroundColor: isSuccessFeedback ? "var(--color-stat-success)" : "var(--color-stat-error)" }}
            aria-hidden="true"
          />

          <div className={`flex items-center gap-3 ${isSuccessFeedback ? "text-stat-success" : "text-stat-error"}`}>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-current" aria-hidden="true">
              {isSuccessFeedback ? (
                <IconStatusCheck className="h-4 w-4" />
              ) : (
                <IconStatusClose className="h-4 w-4" />
              )}
            </span>

            <p className="title-medium">
              {showSelectionError
                ? "Palun vali enne vastus"
                : isSuccessFeedback
                  ? "Õige vastus!"
                  : `Vale vastus. Õige vastus on: ${question.correctAnswer}`}
            </p>
          </div>
        </div>
      )}
    </article>
  )
}
