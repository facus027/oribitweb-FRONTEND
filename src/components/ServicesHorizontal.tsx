
const services = [
    {
        area: "Diseño Gráfico",
        servicios: [
            "Diseño audiovisual - ",
            "Campañas publicitarias - ",
            "Papelería Corporativa - ",
            "branding - ",
            "Post para redes - ",
            "Diseño de Flyers",
        ],
    },
    {
        area: "Marketing Digital",
        servicios: [
            "Gestión de Redes - ",
            "Campañas de Ads - ",
            "Email Marketing - ",
            "Calendarizacion de contenido - ",
            "Estrategia de Marca - ",
            "Optimización de Contenidos",
        ],
    },
    {
        area: "Desarrollo Web",
        servicios: [
            "Landing Page - ",
            "Tienda Online - ",
            "Posicionamiento web - ",
            "Blog Administrable - ",
            "E commerce",
        ],
    },
];


export default function ServiciosHorizontales() {
    return (
        <div className="overflow-hidden w-full absolute z-20">
            <div className="whitespace-nowrap animate-slider flex transition-all duration-300 font-title">
                {services.map((bloque, index) => (
                    <div
                        key={index}
                    >
                        <span className="text-accent-cyan tracking-wide text-6xl font-bold mx-8 shrink-0">
                            {bloque.area}
                        </span>
                        <span
                            className="text-accent-violet  tracking-wider uppercase gap-7 text-5xl font-extrabold mx-8 shrink-0 "
                        >
                            {bloque.servicios}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}