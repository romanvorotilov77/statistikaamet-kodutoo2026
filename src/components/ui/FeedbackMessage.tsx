import { IconStatusCheck, IconStatusClose } from "../../icons"

type FeedbackMessageProps = {
  isSuccess: boolean
  message: string
}

export function FeedbackMessage({ isSuccess, message }: FeedbackMessageProps) {
  const feedbackClass = isSuccess ? "feedback-success" : "feedback-error"
  const accentBarClass = isSuccess ? "feedback-accent-success" : "feedback-accent-error"
  const textColorClass = isSuccess ? "text-stat-success" : "text-stat-error"

  return (
     <div className={`relative w-full border px-5 py-4 pl-6 mt-8 ${feedbackClass}`} role="alert">
      <span className={`feedback-accent-bar ${accentBarClass}`} aria-hidden="true" />

      <div className={`flex items-center gap-3 ${textColorClass}`}>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-current" aria-hidden="true">
          {isSuccess ? (
            <IconStatusCheck className="h-4 w-4" />
          ) : (
            <IconStatusClose className="h-4 w-4" />
          )}
        </span>

        <p className="title-medium">{message}</p>
      </div>
    </div>
  )
}
