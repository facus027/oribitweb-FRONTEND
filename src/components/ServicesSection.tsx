import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiPlanetBold,PiChartLineUpBold,PiStorefrontBold  } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { useContactModal } from "./modal/useContactModal";
import { ContactModal } from "./modal/ContactModal";



const services = [
  {
    id: 1,
    title: "Landing Page",
    icon: <PiPlanetBold className="text-primary text-3xl" />,
    description:
      "Ideal para campañas, lanzamientos o eventos. Una pagina poderosa, clara y con propósito. Tu historia, contada en un solo impacto.",
    projects: [
     {
    id: 1,
    name: "Productos y puntos de venta",
    description:
      "Página de presentación dinámica que muestra productos destacados y ubicaciones donde comprarlos.Diseñada para marcas que aún no requieren e-commerce completo, pero necesitan mostrar su catálogo, mapas interactivos y llamados a la acción claros.Ideal para distribuidores, emprendimientos gastronómicos o marcas locales con presencia física.",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/ukpuv5sai39xb5wszwe0.png",
    link: "https://serrano-andes.vercel.app/",
  },
   {
    id: 2,
    name: "Estudio de abogados",
    description:
      "Landing profesional con estética sobria y elegante, orientada a generar contacto y transmitir autoridad jurídica.Incluye mensajes claros, secciones esenciales y una arquitectura visual que refuerza la credibilidad y el prestigio de la marca.Pensada para profesionales o estudios que desean una presencia online impactante y funcional, sin complicaciones técnicas.",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/nvql2whndvumhv2vsqiz.png",
    link: "https://www.estudiopalma.com.ar/",
  },
],
    cta:"Quiero mi landing",
  },

  {
    id: 2,
    title: "Sitio Corporativo",
     icon: <PiChartLineUpBold className="text-primary text-3xl" />,
    description:
      "Mostrá tu empresa con una presencia sólida,moderna y confiable. Diseñamos sitios que transmiten profesionalismo y credibilidad.",
    projects: [
      {
    id: 1,
    name: "Estudio de abogados",
    description:
      "Landing profesional con estética sobria y elegante, orientada a generar contacto y transmitir autoridad jurídica.Incluye mensajes claros, secciones esenciales y una arquitectura visual que refuerza la credibilidad y el prestigio de la marca.Pensada para profesionales o estudios que desean una presencia online impactante y funcional, sin complicaciones técnicas.",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/nvql2whndvumhv2vsqiz.png",
    link: "https://www.estudiopalma.com.ar/",
  },
  {
    id: 2,
    name: "Agencia de marketing",
    description:
      "Un sitio institucional moderno que combina estrategia y diseño visual para potenciar la presencia digital de una agencia de marketing.Destaca por su estructura clara, animaciones sutiles y un enfoque centrado en transmitir confianza y profesionalismo.Ideal para empresas que buscan comunicar sus servicios de manera ordenada, con identidad propia y foco en la conversión.",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/yyjgkzprqrbzspcg1dbl.png",
    link: "https://viral-mkt.vercel.app/",
  }
    ],
    cta:"Empezar mi proyecto",
  },

  {
    id: 3,
    title: "E-commerce",
    icon: <PiStorefrontBold className="text-primary text-3xl" />,
    description:
      "Convertí visitas en venta con una tienda online rápida,segura y adaptable. Tu negocio disponible 24/7 en todo el país.",
    projects: [
      {
    id: 1,
    name: "E-commerce completo con panel administrativo",
    description:
      "Tienda online robusta y autogestionable que permite administrar productos, imágenes y recetas desde un panel interno.Todo se renderiza automáticamente en el sitio público, ofreciendo una experiencia fluida y actualizada.Un desarrollo 100% personalizado, escalable y optimizado para crecer junto con el negocio.Perfecto para marcas que buscan independencia, control total y un diseño alineado a su identidad.",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/kc1ez8psdf6ou3oydwmc.png",
    link: "https://www.cotillonsanmartin.com.ar/",
  },
],
    cta:"Mi tienda online",
  },
  {
    id: 4,
    title: "Mantenimiento web",
       icon: <FiSettings className="text-primary text-3xl" />,
    description:
      "Nos ocupamos de que tu sitio siga funcionando perfecto. Actualizaciones, soporte y mejoras continuas, para que vos te enfoques en lo importante.",
    projects: [{
    id: 1,
    name: "Sitio de eventos – RestoBar",
    description:
      "Sitio de eventos con carta interactiva y diseño moderno.OrbitSpace se encarga del mantenimiento semanal, actualizando eventos y banners del sitio original en WordPress.La versión recreada muestra cómo transformamos sitios existentes en experiencias más rápidas, interactivas y fáciles de gestionar.",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/qcu4un67ujqggo8rcs0g.png",
    link: "https://restobar-frontend.vercel.app/",
  }],
    cta:"Solicitar mantenimiento",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  const { isOpen, openModal, closeModal, context } = useContactModal();

  return (
    <section
  id="servicios"
  className="relative w-full min-h-screen flex flex-col items-center justify-center text-center z-10 text-text-light overflow-hidden px-4 py-16"
  style={{
    backgroundImage: `url('https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/pwjcqexiyybxaipzueih.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    willChange:"transform",
  }}
>
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="flex flex-col relative z-10 max-w-6xl w-full">
    {/* Encabezado */}
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbit tracking-wide italic text-primary mb-4 text-center">
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
            <span>{service.icon}</span>{service.title}
          </h3>
          <p className="text-text-muted text-base sm:text-lg">
            {service.description.slice(0, 90)}...
          </p>
          <button className="mt-6 px-5 py-2 bg-primary rounded-md text-sm font-medium hover:bg-primary-light transition">
            Ver mas
          </button>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Modal */}
  <AnimatePresence>
    {active && (
      <motion.div
      onClick={(e) => e.stopPropagation()} // ← evita que clic dentro lo cierre
        className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
         onClick={(e) => e.stopPropagation()} // ← evita que clic dentro lo cierre
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
          <ul className="text-text-light space-y-1 text-sm sm:text-base z-50">
            {services
              .find((s) => s.id === active)
              ?.projects.map((project) => (
                        <motion.a
                          key={project.id}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="relative rounded-2xl overflow-hidden flex bg-background hover:shadow-xl hover:shadow-primary/20 transition-all group"
                        >
                          {/* Imagen del proyecto */}
                          <img
                          loading="lazy"
                            src={project.image}
                            alt={project.name}
                            className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
                          />
              
                          {/* Overlay de información */}
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                            <h3 className=" text-lg md:text-2xl font-semibold text-primary mb-2">
                              {project.name}
                            </h3>
                            <p className=" *text-sm text-text-muted mb-4">
                              {project.description}
                            </p>
                            <span className="inline-block px-4 py-2 bg-primary rounded-md text-white font-medium hover:bg-primary-light transition">
                              Ver proyecto
                            </span>
                          </div>
                        </motion.a>
                      ))}
          </ul>

          <button
            onClick={() => openModal(services.find((s) => s.id === active)?.cta)}
            className="mt-8 px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-primary-light transition-all"
          >
            {services.find((s) => s.id === active)?.cta}
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  <ContactModal isOpen={isOpen} onClose={closeModal} context={context} />
</section>

  );
}
