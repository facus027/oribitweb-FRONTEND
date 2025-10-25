import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

 const faqs = [
  {
    question: "¿Cuánto tarda el desarrollo de un sitio web?",
    answer:
      "El tiempo depende del tipo y alcance del proyecto. Una landing page suele completarse en 7 a 10 días hábiles, mientras que un sitio corporativo o e-commerce puede requerir entre 3 y 5 semanas. Incluimos etapas de revisión y ajustes para asegurar un resultado óptimo.",
  },
  {
    question: "¿Qué necesito para comenzar un proyecto con OrbitSpace?",
    answer:
      "Solo una idea clara de tus objetivos. Nosotros te guiamos con un diagnóstico inicial y un brief creativo para definir la identidad visual, estructura y funcionalidades del sitio. Si aún no tenés dominio o hosting, también te asesoramos en esa parte.",
  },
  {
    question: "¿Puedo actualizar o ampliar mi sitio en el futuro?",
    answer:
      "Sí. Todos nuestros proyectos están diseñados para ser escalables. Podés solicitar mantenimiento mensual, agregar secciones, optimizar el rendimiento o sumar nuevas integraciones como pasarelas de pago, formularios o paneles administrativos.",
  },
  {
    question: "¿Ofrecen mantenimiento o soporte técnico?",
    answer:
      "Sí. Contamos con planes de mantenimiento mensual que incluyen actualizaciones, soporte técnico, optimización de velocidad y copias de seguridad automáticas. También brindamos asistencia puntual cuando la necesitás.",
  },
  {
    question: "¿Trabajan con clientes de otras provincias o países?",
    answer:
      "Sí. OrbitSpace Studio trabaja de forma 100% remota con clientes de toda Argentina y del exterior. Coordinamos reuniones por videollamada y entregamos cada etapa mediante plataformas digitales seguras.",
  },
  {
    question: "¿Ofrecen diseño de marca o identidad visual?",
    answer:
      "Sí. Además del desarrollo web, podemos crear o actualizar tu identidad visual: logo, paleta de colores, tipografía y guía de estilo. Todo alineado a la estética OrbitSpace para lograr coherencia visual en tu ecosistema digital.",
  },
  {
    question: "¿Cómo se realiza el proceso de pago?",
    answer:
      "Trabajamos con un sistema de dos etapas: 50% de anticipo al iniciar el proyecto y 50% al finalizar, antes de la entrega final. Aceptamos transferencias, Mercado Pago y otros medios según el país del cliente.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative w-full h-screen flex items-center justify-center text-center z-10 text-text-light overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/ycvtgboew4v7za7lexsh.jpg')`, // reemplazar por tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange:"transform",
      }}
    >

        {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="flex flex-col relative z-10 gap-8">
        <h2 className="text-4xl md:text-6xl font-orbit text-primary lg:mb-7 mb-3 text-center ">
        Preguntas frecuentes
      </h2>

      <div className="lg:max-w-3xl w-10/12 lg:w-full space-y-6 mx-auto ">
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
              <span className="lg:text-lg text-sm font-medium">{faq.question}</span>
              <motion.span
                animate={{ rotate: open === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary text-xl font-bold animate-arrow-move"
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
