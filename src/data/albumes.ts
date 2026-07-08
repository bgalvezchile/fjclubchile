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
    titulo: "Salida de práctica sobre dunas en Ritoque",
    fecha: "Sábado 27 de junio 2026",
    lugar: "Ritoque",
    oficial: false,
    portada: "/galeria/dunas-practica/foto-15.jpg",
    fotos: [
      { src: "/galeria/dunas-practica/foto-01.jpg", caption: "Cruzando las dunas, con el pueblo de fondo" },
      { src: "/galeria/dunas-practica/foto-02.jpg", caption: "Subiendo con la bandera al viento" },
      { src: "/galeria/dunas-practica/foto-03.jpg", caption: "Coronando la duna" },
      { src: "/galeria/dunas-practica/foto-04.jpg", caption: "Subida con la bandera y la cordillera de fondo" },
      { src: "/galeria/dunas-practica/foto-05.jpg", caption: "En la cresta de la duna" },
      { src: "/galeria/dunas-practica/foto-06.jpg", caption: "Bajando en convoy" },
      { src: "/galeria/dunas-practica/foto-07.jpg", caption: "El grupo completo con la bandera" },
      { src: "/galeria/dunas-practica/foto-08.jpg", caption: "Foto grupal en la duna" },
      { src: "/galeria/dunas-practica/foto-09.jpg", caption: "Convoy detenido junto a las dunas" },
      { src: "/galeria/dunas-practica/foto-10.jpg", caption: "Con la bandera en alto" },
      { src: "/galeria/dunas-practica/foto-11.jpg", caption: "Conversando en el punto de parada" },
      { src: "/galeria/dunas-practica/foto-12.jpg", caption: "El convoy bajo el sol" },
      { src: "/galeria/dunas-practica/foto-13.jpg", caption: "Selfie en la duna, con el convoy detrás" },
      { src: "/galeria/dunas-practica/foto-14.jpg", caption: "El convoy visto desde abajo de la duna" },
      { src: "/galeria/dunas-practica/foto-15.jpg", caption: "Los FJ en fila con la bandera de Chile" },
      { src: "/galeria/dunas-practica/foto-16.jpg", caption: "Entre dos FJ, en la cima" },
      { src: "/galeria/dunas-practica/foto-17.jpg", caption: "Selfie grupal con el convoy de fondo" },
      { src: "/galeria/dunas-practica/foto-18.jpg", caption: "Ruta hacia la cruz de la duna" },
      { src: "/galeria/dunas-practica/foto-19.jpg", caption: "Siguiendo al convoy, bandera al viento" },
    ],
  },
];
