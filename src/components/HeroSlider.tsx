import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "./modal/useContactModal";
import { ContactModal } from "./modal/ContactModal";

const slides = [
  {
    title: "Diseñamos tu presencia digital",
    subtitle: "Sitios web modernos, rápidos y minimalistas que reflejan tu marca.",
    cta: "Despega con nosotros",
  },
  {
    title: "Tu marca en órbita",
    subtitle: "Destacá con experiencias digitales confiables y de vanguardia.",
    cta: "Conoce nuestros servicios",
  },
  {
    title: "De la idea a la realidad digital",
    subtitle: "Creamos soluciones personalizadas que conectan y generan impacto.",
    cta: "Armemos tu sitio",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const { isOpen, openModal, closeModal, context } = useContactModal();

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-text-light overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_auto,dpr_auto,c_fill/vgzk5ro5a2e1ixxtzxav.jpg')`, // reemplazar por tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange:"transform",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido slider */}
      <div className="relative z-10 max-w-3xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-orbit mb-6">
              {slides[index].title}
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8">
              {slides[index].subtitle}
            </p>
            <button
             onClick={() => openModal("")}
              className="bg-primary px-6 py-3 rounded-lg text-white hover:text-black hover:font-bold duration-200 font-medium hover:bg-primary-light transition-all"
            >
              {slides[index].cta}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-primary w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
      <ContactModal isOpen={isOpen} onClose={closeModal} context={context} />
    </section>
  );
}
