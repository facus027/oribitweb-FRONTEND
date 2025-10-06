import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Cuánto tarda el desarrollo de una página web?",
    answer:
      "Depende del tipo de proyecto. Una landing page suele demorar entre 5 y 10 días hábiles, mientras que un sitio corporativo o e-commerce puede requerir entre 2 y 4 semanas.",
  },
  {
    question: "¿Puedo actualizar mi sitio más adelante?",
    answer:
      "Sí. Todos los proyectos incluyen la posibilidad de mantenimiento o actualización mensual. OrbitWeb Studio puede gestionar los cambios por vos o enseñarte a hacerlo.",
  },
  {
    question: "¿Qué necesito para empezar un proyecto?",
    answer:
      "Solo una idea clara de lo que querés mostrar. Te ayudamos a definir la estructura, los textos y el estilo visual. También podemos asesorarte si aún no tenés dominio o hosting.",
  },
  {
    question: "¿Trabajan con clientes de otras provincias o países?",
    answer:
      "Sí, trabajamos de forma remota con clientes de toda Argentina y del exterior. Coordinamos por email o videollamadas y entregamos todo online.",
  },
  {
    question: "¿Ofrecen diseño en modo claro y modo oscuro?",
    answer:
      "Sí, podés elegir entre ambos estilos o tener los dos. El modo oscuro está incluido como opción premium en nuestros servicios.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative w-full h-screen flex items-center justify-center text-center z-10 text-text-light overflow-hidden"
      style={{
        backgroundImage: `url('/public/nosotrosSection.jpg')`, // reemplazar por tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

        {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="flex flex-col relative z-10 gap-10">
        <h2 className="text-4xl md:text-6xl font-orbit text-primary mb-10 text-center ">
        Preguntas frecuentes
      </h2>

      <div className="max-w-3xl w-full space-y-6 ">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-background-secondary rounded-xl border border-primary/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <motion.span
                animate={{ rotate: open === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary text-xl font-bold"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="p-4 text-text-muted text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
