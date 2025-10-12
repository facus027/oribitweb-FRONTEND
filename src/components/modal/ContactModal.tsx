
import { motion, AnimatePresence } from "framer-motion";


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: string; // CTA que lo activó ("landing", "mantenimiento", etc.)
}

export function ContactModal({ isOpen, onClose, context }: ContactModalProps) {
  const whatsappNumber = "5492634381630"; // Número OrbitSpace
  const discoveryFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeqATxjCxEaawmJidCiZraVCX11dRdgM7_S-ZF0JoOgOf7C0Q/viewform?usp=dialog"; // URL del formulario de Descubrimiento

  const message = encodeURIComponent(
    `Hola! Quiero ${context || "empezar un proyecto"} con OrbitSpace Studio 🚀`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-background-secondary max-w-md w-full rounded-2xl p-8 relative text-center shadow-2xl border border-primary/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-muted hover:text-white text-2xl"
            >
              ✕
            </button>

            <h3 className="text-2xl md:text-3xl font-orbit text-primary mb-4">
              Antes de comenzar 🚀
            </h3>
            <p className="text-text-muted mb-6">
              Gracias por tu interés en OrbitSpace Studio.
              Vas a ser redirigido al Te vamos a dirigir al primer formulario de descubrimiento, donde podrás contarnos un poco sobre tu marca,
               tus objetivos y el tipo de proyecto que te interesa.
              Con esa información, nuestro equipo podrá prepararte una propuesta clara y personalizada.
              <span className="text-accent-cyan font-semibold">
                Si preferís hablar directo, también podés contactarnos por WhatsApp y te guiamos paso a paso.
              </span>
              
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={discoveryFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-primary-light transition-all"
              >
                Ir al formulario
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary/50 rounded-lg text-primary font-medium hover:bg-primary/10 transition-all"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <p className="text-sm text-text-muted mt-6">
              OrbitSpace Studio • Consultoría digital y desarrollo web
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
