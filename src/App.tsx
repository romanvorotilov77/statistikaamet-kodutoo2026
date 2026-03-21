import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Banner } from "./components/Banner"
import QuizIntro from "./components/QuizIntro"
import { questions } from "./data/questions"

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Banner />
      <div className="relative w-full -mt-1" style={{ height: '456px' }}>
        <div className="absolute inset-0 bg-dots" />
        <div className="relative z-10">
              <QuizIntro />
        </div>
      </div>
      <main className="grow">
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 space-y-8">
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
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App