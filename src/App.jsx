import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Sales from "./components/Sales"
import Stories from "./components/Stories"
import heroapi, { story } from "./data/data"
import { popularsales,topratesales } from "./data/data"
function App() {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col gap-16 relative">
      <Hero {...heroapi}/>
      <Sales {...popularsales}/>
      <Sales {...topratesales}/>
      <Stories {...story}/>
    </main>
    </>
  )
}

export default App
