export type Miembro = {
  nombre: string;
  modelo: string;
  anio: string;
  region: string;
  desde: string;
};

export const miembros: Miembro[] = [
  { nombre: "Rodrigo A.", modelo: "FJ Cruiser", anio: "2012", region: "Santiago", desde: "2021" },
  { nombre: "Marcela T.", modelo: "FJ Cruiser", anio: "2014", region: "Santiago", desde: "2022" },
  { nombre: "Ignacio P.", modelo: "FJ Cruiser", anio: "2010", region: "Valparaíso", desde: "2020" },
  { nombre: "Camila R.", modelo: "FJ Cruiser", anio: "2013", region: "Santiago", desde: "2023" },
  { nombre: "Felipe S.", modelo: "FJ Cruiser", anio: "2011", region: "Concepción", desde: "2021" },
  { nombre: "Daniela M.", modelo: "FJ Cruiser", anio: "2015", region: "Santiago", desde: "2024" },
  { nombre: "Andrés V.", modelo: "FJ Cruiser", anio: "2009", region: "La Serena", desde: "2019" },
  { nombre: "Paula G.", modelo: "FJ Cruiser", anio: "2014", region: "Santiago", desde: "2022" },
];
