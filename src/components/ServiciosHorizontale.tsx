
const services = [
    {
        area: "Diseñamos experiencias",
        servicios: "que orbitan en tu espacio digital."
    },
    {
        area: "OrbitSpace Studio",
        servicios: "Diseñamos experiencias que orbitan en tu espacio digital.",
    },
];


export default function ServiciosHorizontale() {
    return (
        <div className="overflow-hidden w-full absolute z-20">
            <div className="whitespace-nowrap animate-slider flex transition-all duration-300 font-title">
                {services.map((bloque, index) => (
                    <div
                        key={index}
                    >
                        <span className="text-accent-cyan tracking-wide lg:text-6xl text-3xl font-bold mx-8 shrink-0">
                            {bloque.area}
                        </span>
                        <span
                            className="text-accent-violet  tracking-wider uppercase gap-7 lg:text-5xl text-2xl font-extrabold mx-8 shrink-0 "
                        >
                            {bloque.servicios}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}