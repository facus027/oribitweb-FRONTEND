import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactFooterSection() {
  return (
    <footer
      id="contacto"
      className="relative w-full py-20 bg-background text-text-light overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/public/contactoYfooter.jpg')`, // tu imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center flex flex-col gap-12">
        <motion.h2
          className="text-4xl md:text-5xl font-orbit text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Listo para impulsar tu presencia digital?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Contactanos y descubrí cómo podemos ayudarte a llevar tu negocio a la órbita digital.
          Diseñamos sitios web rápidos, profesionales y adaptados a cada marca.
        </motion.p>

        {/* Botones de contacto */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="mailto:contacto@orbitwebstudio.com"
            className="bg-primary hover:bg-primary-light px-6 py-3 rounded-lg font-medium text-white transition-all"
          >
            ✉️ Enviar correo
          </a>
          <a
            href="https://wa.me/549XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-violet hover:bg-accent-cyan px-6 py-3 rounded-lg font-medium text-white transition-all"
          >
            💬 WhatsApp
          </a>
          <a
            href="https://www.instagram.com/orbitwebstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            📷 Instagram
          </a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary/30 w-full mt-12" />

        {/* Footer info */}
        <footer className="bg-gradient-to-b from-violet-light-secu to-violet-light-pri text-black px-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Identidad */}
                <div>
                    <div
                    >
                        <img className="h-40 items-center justify-center" src="/public/logo.png" alt="logoOrbitWeb" />
                    </div>
                    <p className="text-sm text-primary mt-2 font-title">
                        Soluciones creativas para emprendedores digitales.
                    </p>
                </div>

                {/* Navegación */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 font-title text-primary">Enlaces</h3>
                    <ul className="space-y-2 text-sm font-body text-accent-violet">
                        <li><p className="hover:cursor-pointer">Inicio</p></li>
                        <li><p >Servicios</p></li>
                        <li><p >Preguntas Frecuentes</p></li>
                        <li><p >Contacto</p></li>
                    </ul>
                </div>

                {/* Redes */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 font-title text-primary">Conectá con nosotros</h3>
                    <div className="flex items-center gap-4 text-white">
                        <a href="https://www.instagram.com/viralmkt23" target="_blank" aria-label="Instagram">
                            <FaInstagram className="w-5 h-5 hover:text-pink-400" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=542616388808" target="_blank" aria-label="whatsapp">
                            <FaWhatsapp className="w-5 h-5 hover:text-blue-400" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=542634903811" aria-label="whatsapp">
                            <FaWhatsapp className="w-5 h-5 hover:text-rose-400" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Legal */}
            <div className="mt-10 border-t pt-6 text-sm text-primary-light text-center">
                ©{new Date().getFullYear()} OrbitWeb Studio Todos los derechos reservados.
            </div>
        </footer>
      </div>
    </footer>
  );
}
