import { questions } from "../data/questions"

const QuizIntro = () => {
  return (
    <section className="py-6">
      <div className="w-full">
        <h1 className="display text-center mb-8">Viktoriin</h1>
        
        <div className="space-y-6">
          <p className="body-large text-center text-stat-grey">
            Testi oma teadmisi Eesti kohta!
          </p>
          
          <div className="bg-white border border-stat-light-grey rounded-lg p-8 md:p-12">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-stat-success font-bold text-xl">✓</span>
                <p className="body-medium text-stat-grey">
                  Küsimused avanevad ükshaaval. Veendu, et oled vastuse valinud, ja kui oled valmis, vajuta järgmisele küsimusele!
                </p>
              </li>
              
              <li className="flex gap-4">
                <span className="text-stat-success font-bold text-xl">✓</span>
                <p className="body-medium text-stat-grey">
                  Saad kohe teada, kas vastasid õigesti või mitte. Lõpus näed lõpptulemust ja õigeid vastuseid.
                </p>
              </li>
              
              <li className="flex gap-4">
                <span className="text-stat-success font-bold text-xl">✓</span>
                <p className="body-medium text-stat-grey">
                  Ole tähelepanelik ja õnne lahendamisel!
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-8 pt-2">
            {questions.map((question, questionIndex) => (
              <article key={question.id} className="bg-white border-2 border-stat-light-grey rounded-lg p-8 md:p-10">
                <p className="label-medium text-stat-grey mb-4 block">
                  Küsimus {questionIndex + 1} / {questions.length}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuizIntro