import AboutSection from "./components/AboutSection"
import ContactFooterSection from "./components/ContactFooterSection"
import FaqSection from "./components/FaqSection"
import Header from "./components/Header"
import HeroSlider from "./components/HeroSlider"
import ServiciosHorizontales from "./components/ServicesHorizontal"
import ServicesSection from "./components/ServicesSection"


function App() {


  return (
    <>

     <div>
      <Header/>
     </div>

     <div>
      <HeroSlider/>
     </div>
      <div className="relative">
       <ServiciosHorizontales/>
      </div>
      <div>
        <ServicesSection/>
      </div>
      <div className="relative top-12">
       <ServiciosHorizontales/>
      </div>
      <div>
        <FaqSection/>
      </div>
      <div className="relative top-12">
       <ServiciosHorizontales/>
      </div>
      <div>
        <AboutSection/>
      </div>
      <div>
        <ContactFooterSection/>
      </div>
      
    </>
  )
}

export default App
