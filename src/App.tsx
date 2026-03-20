import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="grow">
      </main>
      <Footer />
    </div>
  )
}

export default App