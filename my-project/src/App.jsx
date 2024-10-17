import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-5" id="Home"><HeroSection /></div>
      <div className="max-w-7xl mx-auto pt-20 px-5" id="Products"><Cards /></div>
      <div className="pt-20"><Footer /></div>
</div>
  )
}

export default App
