import type { Question } from "../data/questions"

type QuestionElementProps = {
  question: Question
  questionIndex: number
  totalQuestions: number
}

export function QuestionElement({ question, questionIndex, totalQuestions }: QuestionElementProps) {
  return (
    <article className="bg-white border-2 border-stat-light-grey rounded-2xl p-8 md:p-10">
      <p className="label-medium text-stat-grey mb-4 block">
        Küsimus {questionIndex + 1} / {totalQuestions}
      </p>
      <h2 className="heading-small mb-8">{question.question}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <label
            key={option}
            className="relative w-full bg-white border-2 border-stat-light-grey hover:border-stat-grey px-6 py-5 flex items-center gap-4 cursor-pointer transition-all rounded-none"
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              className="peer sr-only"
            />
            <span className="relative w-6 h-6 border-2 border-stat-light-grey rounded-full shrink-0 overflow-hidden transition-colors peer-checked:border-transparent peer-checked:[&>.checked-shape]:scale-100 peer-checked:[&>.checked-icon]:opacity-100">
              <span className="checked-shape absolute inset-0 rounded-full bg-stat-success scale-0 transition-transform" />
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="checked-icon absolute left-[18%] right-[18%] top-[22%] bottom-[22%] w-auto h-auto opacity-0 transition-opacity"
              >
                <path d="M20.285 6.709a1 1 0 010 1.414l-9.193 9.193a1 1 0 01-1.414 0L3.715 11.35a1 1 0 111.414-1.414l5.256 5.256 8.486-8.483a1 1 0 011.414 0z" fill="#FFFFFF" />
              </svg>
            </span>
            <span className="body-medium text-stat-grey">{option}</span>
          </label>
        ))}
      </div>
    </article>
  )
}
