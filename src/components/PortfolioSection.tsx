import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Cotillón San Martín",
    description:
      "E-commerce minorista con integración de pagos, gestión de stock e interfaz moderna.",
    image: "/assets/projects/cotillon-sm.jpg",
    link: "https://www.cotillonsanmartin.com.ar/",
  },
  {
    id: 2,
    name: "La Central del Cotillón",
    description:
      "Plataforma mayorista con catálogo filtrable por categorías y login para clientes.",
    image: "/assets/projects/la-central.jpg",
    link: "https://www.lacentraldelcotillon.com/",
  },
  {
    id: 3,
    name: "Serrano Andes",
    description:
      "Sitio institucional minimalista para bodega regional, con diseño responsive.",
    image: "/assets/projects/serrano-andes.jpg",
    link: "#",
  },
  {
    id: 4,
    name: "Estudio Palma",
    description:
      "Página profesional con enfoque en branding y fotografía, con animaciones suaves.",
    image: "/assets/projects/estudio-palma.jpg",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full py-20 bg-background-secondary text-text-light flex flex-col items-center px-4"
    >
      <h2 className="text-4xl md:text-5xl font-orbit text-primary mb-10 text-center">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl overflow-hidden bg-background hover:shadow-xl hover:shadow-primary/20 transition-all group"
          >
            {/* Imagen del proyecto */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
            />

            {/* Overlay de información */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-text-muted mb-4">
                {project.description}
              </p>
              <span className="inline-block px-4 py-2 bg-primary rounded-md text-white font-medium hover:bg-primary-light transition">
                Ver proyecto
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
