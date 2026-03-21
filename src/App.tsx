import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Banner } from "./components/Banner"
import { questions } from "./data/questions"

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Banner />
      <div>
        <h1 className="text-center text-[40px] md:text-[50px] leading-[1.2] font-bold mt-10 mb-6">Viktoriin</h1>
        <p className="text-center text-stat-grey text-[18px] mb-10">Testi oma teadmisi Eesti kohta! </p>
        <p className="text-center text-stat-grey text-[18px] mb-10">Küsimused avanevad ükshaaval. Veendu, et oled vastuse valinud, ja kui oled valmis, vajuta järgmisele küsimusele! </p>
        <p className="text-center text-stat-grey text-[18px] mb-10">Saad kohe teada, kas vastasid õigesti või mitte. Lõpus näed lõpptulemust ja õigeid vastuseid. Ole tähelepanelik!</p>
        <p className="text-center text-stat-grey text-[18px] mb-10">Ole tähelepanelik ja õnne lahendamisel! </p>
      </div>
      <main className="grow">
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 space-y-8">
          {questions.map((question, questionIndex) => (
            <article key={question.id} className="bg-[#F5F5F5] border border-[#D6D6D6] p-6 md:p-8">
              <p className="text-stat-grey text-[22px] leading-[1.2] mb-5">
                Kusimus {questionIndex + 1} / {questions.length}
              </p>
              <h2 className="text-[24px] md:text-[34px] leading-[1.2] font-bold mb-6 max-w-5xl">{question.question}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {question.options.map((option) => (
                  <label
                    key={option}
                    className="w-full text-left bg-white border border-[#D0D0D0] hover:border-[#BDBDBD] px-4 py-4 flex items-center gap-3 cursor-pointer transition-colors"
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      className="w-5 h-5 accent-stat-success shrink-0"
                    />
                    <span className="text-[26px] leading-tight text-[#111111]">{option}</span>
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