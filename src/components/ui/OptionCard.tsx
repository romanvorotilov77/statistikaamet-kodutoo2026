import { IconCheckFilled } from "../../icons"

type OptionCardProps = {
  option: string
  questionId: number
  isSelected: boolean
  isSubmitted: boolean
  onChange: (option: string) => void
}

export function OptionCard({
  option,
  questionId,
  isSelected,
  isSubmitted,
  onChange,
}: OptionCardProps) {
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
      className={`relative w-full border-2 px-6 py-5 flex items-center gap-4 transition-all rounded-none ${optionStateClass} ${
        isSubmitted ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <input
        type="radio"
        name={`question-${questionId}`}
        value={option}
        className="peer sr-only"
        checked={isSelected}
        onChange={() => onChange(option)}
        disabled={isSubmitted}
      />
      <span
        className={`relative w-6 h-6 border-2 rounded-full shrink-0 overflow-hidden transition-colors peer-checked:border-transparent peer-checked:[&>.checked-shape]:scale-100 peer-checked:[&>.checked-icon]:opacity-100 ${indicatorStateClass}`}
      >
        <span className="checked-shape absolute inset-0 rounded-full bg-stat-success scale-0 transition-transform" />
        <IconCheckFilled className="checked-icon absolute left-[18%] right-[18%] top-[22%] bottom-[22%] w-auto h-auto opacity-0 text-white transition-opacity" />
      </span>
      <span className="body-medium text-stat-grey">{option}</span>
    </label>
  )
}
