import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Banner } from "./components/Banner"
import { Quiz } from "./components/Quiz"

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Banner />
      <div className="relative w-full">
        <div className="bg-dots absolute left-0 right-0 -top-1.25 h-104.5" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4.75 pt-4.75 pb-4.75">
          <section className="bg-white w-full pt-5 pl-14.25 pr-8 md:pr-16 flex flex-col gap-8">
            <div className="max-w-6xl mx-auto w-full">
              <Quiz />
            </div>
          </section>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default App