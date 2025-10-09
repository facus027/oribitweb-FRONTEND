import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const services = [
  {
    id: 1,
    title: "Landing Page",
    description:
      "Ideal para campañas, lanzamientos o eventos. Una pagina poderosa, clara y con propósito. Tu historia, contada en un solo impacto.",
    projects: ["Cotillón San Martín", "Estudio Palma"],
    cta:"Quiero mi landing",
  },
  {
    id: 2,
    title: "Sitio Corporativo",
    description:
      "Mostrá tu empresa con una presencia sólida,moderna y confiable. Diseñamos sitios que transmiten profesionalismo y credibilidad.",
    projects: ["La Central del Cotillón", "Serrano Andes"],
    cta:"Empecemos tu proyecto",
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "Convertí visitas en venta con una tienda online rápida,segura y adaptable. Tu negocio disponible 24/7 en todo el país.",
    projects: ["Cotillón SM", "Restobar Frontend"],
    cta:"Ver ejemplos",
  },
  {
    id: 4,
    title: "Mantenimiento web",
    description:
      "Nos ocupamos de que tu sitio siga funcionando perfecto. Actualizaciones, soporte y mejoras continuas, para que vos te enfoques en lo importante.",
    projects: ["OrbitWeb Clientes", "La Central del Cotillón"],
    cta:"Solicitar mantenimiento",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
  id="servicios"
  className="relative w-full min-h-screen flex flex-col items-center justify-center text-center z-10 text-text-light overflow-hidden px-4 py-16"
  style={{
    backgroundImage: `url('https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/pwjcqexiyybxaipzueih.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="flex flex-col relative z-10 max-w-6xl w-full">
    {/* Encabezado */}
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-orbit tracking-wide italic text-primary mb-4 text-center">
        Servicios
      </h2>
      <div className="text-primary-light text-base sm:text-lg md:text-xl leading-relaxed">
        <p>
          En{" "}
          <span className="text-accent-cyan italic font-bold">
            OrbitSpace Studio
          </span>{" "}
          te acompañamos en cada etapa del viaje digital.
        </p>
        <p>
          Diseñamos soluciones web que se adaptan a vos, a tu marca y a tu ritmo.
        </p>
      </div>
    </div>

    {/* Grid de tarjetas responsive */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-28 mx-auto">
      {services.map((service) => (
        <motion.div
          key={service.id}
          whileHover={{ scale: 1.05 }}
          className="bg-background-secondary border border-primary/30 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition"
          onClick={() => setActive(service.id)}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-accent-violet">
            {service.title}
          </h3>
          <p className="text-text-muted text-base sm:text-lg">
            {service.description.slice(0, 90)}...
          </p>
          <button className="mt-6 px-5 py-2 bg-primary rounded-md text-sm font-medium hover:bg-primary-light transition">
            {service.cta}
          </button>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Modal */}
  <AnimatePresence>
    {active && (
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-background-secondary max-w-md w-full rounded-2xl p-8 relative text-center shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-text-muted hover:text-white text-xl"
          >
            ✕
          </button>

          <h3 className="text-2xl sm:text-3xl font-orbit text-primary mb-4">
            {services.find((s) => s.id === active)?.title}
          </h3>
          <p className="text-text-muted mb-6 text-base sm:text-lg">
            {services.find((s) => s.id === active)?.description}
          </p>

          <h4 className="text-accent-violet text-lg mb-3 font-semibold">
            Proyectos relacionados:
          </h4>
          <ul className="text-text-light space-y-1 text-sm sm:text-base">
            {services
              .find((s) => s.id === active)
              ?.projects.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
          </ul>

          <button
            onClick={() => setActive(null)}
            className="mt-8 px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-primary-light transition-all"
          >
            Cerrar
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>

  );
}
