import AboutSection from "./components/AboutSection"
import ContactFooterSection from "./components/ContactFooterSection"
import FaqSection from "./components/FaqSection"
import Header from "./components/Header"
import HeroSlider from "./components/HeroSlider"
import ServiciosHorizontal from "./components/ServicesHorizontal"
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
      <div>
        <ServicesSection/>
      </div>
           <div className="relative md:top- -top-5">
       <ServiciosHorizontales/>
      </div>
      <div>
        <FaqSection/>
      </div>
      <div className="relative md:top-8 -top-4">
       <ServiciosHorizontal/>
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
