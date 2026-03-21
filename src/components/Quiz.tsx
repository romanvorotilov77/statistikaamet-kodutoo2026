import { questions } from "../data/questions"
import { QuestionElement } from "./QuestionElement"
import QuizIntro from "./QuizIntro"

export function Quiz() {
  return (
    <section className="py-6">
      <div className="w-full space-y-6">
        <QuizIntro />

        <div className="space-y-8 pt-2">
          {questions.map((question, questionIndex) => (
            <QuestionElement
              key={question.id}
              question={question}
              questionIndex={questionIndex}
              totalQuestions={questions.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
