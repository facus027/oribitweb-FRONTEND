import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative w-full h-screen flex items-center justify-center text-center text-text-light overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto,w_1920/zdogp2eek53b6nm4a48c.jpg')`, // reemplazá por tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange:"transform",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-orbit text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre OrbitWeb Studio
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
       <div className="lg:hidden block">
           En <span className="text-primary font-semibold">OrbitSpace Studio </span> 
          ayudamos a marcas y negocios a construir su presencia digital con una 
          identidad sólida, moderna y confiable.  
          Somos un estudio profesional que combina diseño minimalista, 
          tecnología actual y una comunicación clara para lograr resultados reales.
       </div>
          <div className="hidden lg:block">
            En <span className="text-primary font-semibold">OrbitSpace Studio </span> 
           combinamos diseño web, estrategia digital y posicionamiento SEO para ayudar a las marcas a crecer online.
          Somos una consultora digital boutique que trabaja con negocios que buscan presencia, claridad y resultados reales.

          Nuestro equipo está formado por especialistas en diseño UX/UI, desarrollo web, redacción digital, optimización SEO y análisis de datos.
          Unimos lo creativo con lo estratégico para crear sitios que se ven bien, funcionan bien y se encuentran fácilmente.

          Creemos en los procesos claros, la comunicación cercana y las soluciones que generan valor a largo plazo.
          Más que diseñar sitios, construimos experiencias digitales que impulsan marcas.
          </div>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Misión */}
          <motion.div
            className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Nuestra Misión
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Crear experiencias web funcionales, rápidas y atractivas 
              que impulsen la presencia digital de nuestros clientes, 
              transmitiendo confianza y profesionalismo.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Nuestra Visión
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Convertirnos en un referente en desarrollo web minimalista 
              y escalable, brindando soluciones a medida para negocios 
              que buscan un salto de calidad en su imagen digital.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Nuestros Valores
            </h3>
            <ul className="text-sm text-text-muted leading-relaxed list-disc list-inside space-y-1">
              <li>Diseño minimalista y funcional</li>
              <li>Rendimiento y optimización</li>
              <li>Confianza y comunicación clara</li>
              <li>Trato personalizado y humano</li>
              <li>Pasión por el detalle</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
