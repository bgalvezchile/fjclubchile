export type Foto = {
  src: string;
  caption: string;
};

export type Album = {
  slug: string;
  titulo: string;
  fecha: string; // texto libre, ej. "Junio 2026"
  lugar: string;
  oficial: boolean;
  portada: string;
  fotos: Foto[];
};

export const albumes: Album[] = [
  {
    slug: "dunas-practica",
    titulo: "Práctica en las dunas",
    fecha: "2026",
    lugar: "Dunas",
    oficial: false,
    portada: "/hero-dunas.jpg",
    fotos: [
      { src: "/hero-dunas.jpg", caption: "Convoy en la duna, con la bandera" },
    ],
  },
];
