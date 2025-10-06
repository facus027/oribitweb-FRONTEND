import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Landing Page",
    description:
      "Ideal para mostrar tu marca o campaña con un diseño atractivo y moderno. Rápida, optimizada y adaptable a todos los dispositivos.",
    projects: ["Cotillón San Martín", "Estudio Palma"],
  },
  {
    id: 2,
    title: "Sitio Corporativo",
    description:
      "Web profesional con secciones informativas, blog, contacto y diseño institucional. Transmite confianza y solidez.",
    projects: ["La Central del Cotillón", "Serrano Andes"],
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "Tienda online personalizada, con gestión de productos, carrito y medios de pago integrados. Ideal para escalar tu negocio.",
    projects: ["Cotillón SM", "Restobar Frontend"],
  },
  {
    id: 4,
    title: "Mantenimiento",
    description:
      "Nos encargamos de que tu sitio siempre funcione perfecto. Actualizaciones, optimización y soporte técnico mensual.",
    projects: ["OrbitWeb Clientes", "La Central del Cotillón"],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      className="relative w-full h-screen flex items-center justify-center text-center z-10 text-text-light overflow-hidden"
      style={{
        backgroundImage: `url('/public/serviceSection.jpg')`, // reemplazar por tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
     
        {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

     <div className="flex flex-col relative z-10">
       <h2 className="text-4xl md:text-6xl font-bold font-orbit tracking-wide text-accent-cyan mb-14 text-center">
        Nuestros Destacados
      </h2>


      {/* Grid de tarjetas */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-44 max-w-6xl">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.15 }}
            className="bg-background-secondary border border-primary/30 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition"
            onClick={() => setActive(service.id)}
          >
            <h3 className="text-3xl font-semibold mb-3 text-accent-violet">
              {service.title}
            </h3>
            <p className="text-text-muted text-lg">
              {service.description.slice(0, 90)}...
            </p>
            <button className="mt-6 px-4 py-2 bg-primary rounded-md text-sm font-medium hover:bg-primary-light transition">
              Ver más
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

              <h3 className="text-3xl font-orbit text-primary mb-4">
                {services.find((s) => s.id === active)?.title}
              </h3>
              <p className="text-text-muted mb-6">
                {services.find((s) => s.id === active)?.description}
              </p>

              <h4 className="text-accent-violet text-lg mb-3 font-semibold">
                Proyectos relacionados:
              </h4>
              <ul className="text-text-light space-y-1">
                {services
                  .find((s) => s.id === active)
                  ?.projects.map((p, i) => (
                    <li key={i} className="text-sm">
                      • {p}
                    </li>
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
