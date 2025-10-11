import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";


export default function Header() {
    return (
        <header className=' shadow-md flex opacity-90 fixed h-16 rounded-full w-full mx-auto -mt-3 lg:mt-0 justify-center z-40 py-0 md:py-2'>
            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto">
                <div className="flex lg:gap-5 gap-1">
                    <div
                        onClick={() => scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuad" })}
                    >
                        <img className="md:h-28 h-24 pt-2 items-center justify-center cursor-pointer hidden dark:block" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1760051125/kzp1cjy0oplk3nbjitfo.png" alt="logoOrbitWeb" />
                    </div>
                </div>
                <div>
                   
                </div>
                <div className="flex">
                    <nav className="lg:mt-0 -mt-3">
                        <ul className="flex justify-between cursor-pointer lg:pt-2 pt-0">
                            <li className="md:mx-5 xs:mx-3 mx-2 mb-1 md:mb-0 whitespace-nowrap bg-transparent">
                                <LinkScroll to="servicios" smooth={true} duration={600} offset={-80} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-lg font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Servicios</LinkScroll>
                            </li>
                            <li className="md:mx-5 xs:mx-3 mx-2 mb-1 md:mb-0 whitespace-nowrap">
                                <LinkScroll to="faq" smooth={true} duration={600} offset={-80} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-lg font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Faq</LinkScroll>
                            </li>
                            <li className="md:mx-5 xs:mx-3 mx-2 mb-1 md:mb-0 whitespace-nowrap">
                                <LinkScroll to="nosotros" smooth={true} duration={600} offset={0} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-lg font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Nosotros</LinkScroll>
                            </li>
                            <li className="md:mx-5 xs:mx-3 mx-2 mb-1 md:mb-0 whitespace-nowrap">
                                <LinkScroll to="contacto" smooth={true} duration={600} offset={-80} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-lg font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Contactanos</LinkScroll>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}