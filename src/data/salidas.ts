export type Salida = {
  slug: string;
  titulo: string;
  fecha: string; // ISO
  lugar: string;
  region: string;
  dificultad: "Fácil" | "Moderada" | "Exigente";
  coordenadas: string;
  cupos: number;
  descripcion: string;
};

export const salidas: Salida[] = [
  {
    slug: "farellones-julio",
    titulo: "Subida a Farellones",
    fecha: "2026-07-19",
    lugar: "Farellones, Región Metropolitana",
    region: "Metropolitana",
    dificultad: "Fácil",
    coordenadas: "33.3547° S, 70.3167° W",
    cupos: 15,
    descripcion:
      "Salida de nivel de entrada para calentar motores en el segundo semestre. Camino de ripio en buen estado, ideal para nuevos socios.",
  },
  {
    slug: "yeso-agosto",
    titulo: "Laguna del Yeso",
    fecha: "2026-08-09",
    lugar: "Cajón del Maipo, Región Metropolitana",
    region: "Metropolitana",
    dificultad: "Moderada",
    coordenadas: "33.6667° S, 70.0833° W",
    cupos: 12,
    descripcion:
      "Ruta de altura con vados y pendiente sostenida. Se recomienda snorkel y neumáticos AT/MT en buen estado.",
  },
  {
    slug: "atacama-septiembre",
    titulo: "Expedición Atacama",
    fecha: "2026-09-18",
    lugar: "San Pedro de Atacama, Región de Antofagasta",
    region: "Antofagasta",
    dificultad: "Exigente",
    coordenadas: "22.9087° S, 68.1997° W",
    cupos: 8,
    descripcion:
      "Salida de fin de semana largo. Dunas, salares y altiplano. Requiere experiencia previa en arena e inscripción anticipada.",
  },
];
