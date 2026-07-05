import type { Metadata } from "next";
import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "FJ Club Chile — Club de propietarios Toyota FJ Cruiser",
  description:
    "Comunidad de propietarios de Toyota FJ Cruiser en Chile. Salidas off-road, cordillera, desierto y costa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${oswald.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
