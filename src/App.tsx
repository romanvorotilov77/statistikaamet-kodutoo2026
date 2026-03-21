import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Banner } from "./components/Banner"

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Banner />
      <main className="grow">
      </main>
      <Footer />
    </div>
  )
}

export default App