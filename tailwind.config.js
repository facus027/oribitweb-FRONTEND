/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'1rem',
      screens:{
        'xs': '480px',
        sm: '640px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        '2xl':'1536px',
        '3xl':'1720px',
        '4xl':'1920px',
      },
    },
    extend: {
      fontSize:{
        'fluid-xl':'clamp(1.25rem,1.1vw + 1rem, 1.75rem)',
        'fluid-2xl':'clamp(1.5rem,1.4vw + 1rem, 2.25rem)',
        'fluid-4xl':'clamp(2rem,2.2vw + 1rem, 3rem)',    
        },
      spacing:{'fluid-section-y':'clamp(3rem, 6vh, 8rem)'},
      colors: {
    // Fondo base oscuro (Hero + secciones dark)
    background: {
      DEFAULT: "#0F172A", // negro azulado profundo
      secondary: "#1E293B", // gris azulado
    },
    // Acentos (neón futurista)
    primary: {
      DEFAULT: "#3B82F6", // azul eléctrico
      light: "#60A5FA",   // azul más claro (hover)
      dark: "#1E40AF",   // azul intenso
    },
    accent: {
      violet: "#8B5CF6", // violeta futurista
      cyan: "#06B6D4",   // cian brillante
    },
    // Texto
    text: {
      light: "#F1F5F9", // casi blanco
      muted: "#94A3B8", // gris claro
    }
  },
   fontFamily: {
    sans: ["Inter", "sans-serif"], // textos
    orbit: ["Orbitron", "sans-serif"], // títulos / logo
  }  
    },
  },
  plugins: [],
}

