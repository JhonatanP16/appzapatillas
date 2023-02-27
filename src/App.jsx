import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Sales from "./components/Sales"
import Stories from "./components/Stories"
import Cart from "./components/Cart"
import heroapi, { story } from "./data/data"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { popularsales,topratesales } from "./data/data"
function App() {
  return (
    <>
    <Navbar/>
    <Cart/>
    <ToastContainer
    position="bottom-left"
    autoClose={1500}
    hideProgressBar
    theme="colored"
    limit={3}
    />
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
