import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";


export default function Header() {
    return (
        <header className=' shadow-md flex opacity-90  fixed h-16 rounded-full w-full mx-auto justify-center z-40 py-2'>
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <div className="flex gap-5">
                    <div
                        onClick={() => scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuad" })}
                    >
                        <img className="h-56 pt-2 items-center justify-center cursor-pointer hidden dark:block" src="/public/logo.png" alt="logoOrbitWeb" />
                    </div>
                </div>
                <div className="flex">
                    <nav>
                        <ul className="flex justify-between cursor-pointer pt-2">
                            <li className="md:mx-5 xs:mx-3 mx-1.5 mb-1 md:mb-0 whitespace-nowrap bg-transparent">
                                <LinkScroll to="servicios" smooth={true} duration={600} offset={-80} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-4xl font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Servicios</LinkScroll>
                            </li>
                            <li className="md:mx-5 xs:mx-3 mx-1.5 mb-1 md:mb-0 whitespace-nowrap">
                                <LinkScroll to="faq" smooth={true} duration={600} offset={-80} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-4xl font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Faq</LinkScroll>
                            </li>
                            <li className="md:mx-5 xs:mx-3 mx-1.5 mb-1 md:mb-0 whitespace-nowrap">
                                <LinkScroll to="nosotros" smooth={true} duration={600} offset={0} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-4xl font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Nosotros</LinkScroll>
                            </li>
                            <li className="md:mx-5 xs:mx-3 mx-1.5 mb-1 md:mb-0 whitespace-nowrap">
                                <LinkScroll to="contacto" smooth={true} duration={600} offset={-80} className="transition-all hover:text-primary-light transform text-primary xs:text-base md:text-2xl text-4xl font-bold font-orbit hover:font-extrabold duration-100 tracking-wider">Contactanos</LinkScroll>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}