import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Milagros Castro Ruiz | Abogada & Contadora Pública",
  description:
    "Portafolio profesional de Milagros Castro Ruiz, Abogada y Contadora Pública, especialista en Tributación y Derecho Administrativo.",
  keywords: [
    "abogada",
    "contadora pública",
    "asesoría legal",
    "asesoría contable",
    "asesoría tributaria",
    "derecho administrativo",
    "tributación",
    "Colombia"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sansBody antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
