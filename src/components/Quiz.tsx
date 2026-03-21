import { useState } from "react"
import { questions } from "../data/questions"
import { QuestionElement } from "./QuestionElement"
import QuizIntro from "./QuizIntro"

export function Quiz() {
  const [started, setStarted] = useState(false)

  return (
    <section className="py-6">
      <div className="w-full space-y-6">
        <QuizIntro onStart={() => setStarted(true)} />

        {started && (
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
        )}
      </div>
    </section>
  )
}
