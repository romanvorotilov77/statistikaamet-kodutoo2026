import type { Question } from "../data/questions"

type QuestionElementProps = {
  question: Question
  questionIndex: number
  totalQuestions: number
}

export function QuestionElement({ question, questionIndex, totalQuestions }: QuestionElementProps) {
  return (
    <article className="bg-white border-2 border-stat-light-grey rounded-lg p-8 md:p-10">
      <p className="label-medium text-stat-grey mb-4 block">
        Küsimus {questionIndex + 1} / {totalQuestions}
      </p>
      <h2 className="headline-large mb-8">{question.question}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <label
            key={option}
            className="relative w-full bg-white border-2 border-stat-light-grey hover:border-stat-grey px-6 py-5 flex items-center gap-4 cursor-pointer transition-all rounded-md"
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              className="w-6 h-6 accent-stat-success shrink-0 cursor-pointer"
            />
            <span className="body-medium text-stat-grey">{option}</span>
          </label>
        ))}
      </div>
    </article>
  )
}
