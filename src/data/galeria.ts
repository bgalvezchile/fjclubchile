export type ItemGaleria = {
  caption: string;
  salida?: string;
  tipo: "foto" | "video";
};

export const galeria: ItemGaleria[] = [
  { caption: "Laguna del Yeso, 2025", salida: "Cajón del Maipo", tipo: "foto" },
  { caption: "Duna Mayor, San Pedro, 2025", salida: "Atacama", tipo: "video" },
  { caption: "Farellones, invierno 2025", salida: "Farellones", tipo: "foto" },
  { caption: "Paso Vergara, 2024", salida: "Cordillera", tipo: "foto" },
  { caption: "Salar de Atacama, 2025", salida: "Atacama", tipo: "foto" },
  { caption: "Convoy en ripio, Cajón del Maipo", salida: "Cajón del Maipo", tipo: "video" },
  { caption: "Vadeo, río Yeso, 2024", salida: "Cajón del Maipo", tipo: "foto" },
  { caption: "Amanecer en altiplano, 2025", salida: "Atacama", tipo: "foto" },
  { caption: "Grupo FJ Club, Farellones 2025", salida: "Farellones", tipo: "foto" },
];
