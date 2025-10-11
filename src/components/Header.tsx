import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md flex opacity-90 fixed h-16 rounded-full w-full mx-auto -mt-3 lg:mt-0 justify-center z-50 py-0 md:py-2 bg-background/70 backdrop-blur-md">
      <div className="flex flex-col md:flex-row justify-between items-center -mt-4 md:mt-0 w-11/12 mx-auto relative">
        {/* LOGO + MENÚ BOTÓN */}
        <div className="flex items-center gap-2">
          <div
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <img
              className="md:h-28 h-24 pt-2 cursor-pointer hidden dark:block"
              src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1760051125/kzp1cjy0oplk3nbjitfo.png"
              alt="logoOrbitWeb"
            />
          </div>

          {/* Botón hamburguesa */}
          <button
            className="lg:hidden text-primary focus:outline-none ml-2 z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Navegación */}
        <nav
          className={`absolute lg:static top-16 left-0 w-full transition-all duration-300 ease-in-out lg:opacity-100 lg:translate-y-0 z-[55]
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none lg:pointer-events-auto"
            }`}
        >
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0 py-4 lg:py-0 bg-background-secondary/95 lg:bg-transparent rounded-xl shadow-lg lg:shadow-none mx-4 lg:mx-0">
            {[
              { to: "servicios", label: "Servicios" },
              { to: "faq", label: "Faq" },
              { to: "nosotros", label: "Nosotros" },
              { to: "contacto", label: "Contactanos" },
            ].map((item) => (
              <li
                key={item.to}
                className="md:mx-5 xs:mx-3 mx-2 mb-1 md:mb-0 whitespace-nowrap"
              >
                <LinkScroll
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="transition-all hover:text-primary-light text-primary xs:text-base md:text-2xl text-lg font-bold font-orbit tracking-wider cursor-pointer"
                >
                  {item.label}
                </LinkScroll>
              </li>
            ))}
          </ul>
        </nav>

        {/* Fondo oscuro (overlay mobile) */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[50] lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
