import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./visible-text.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentalVets - Profilaxis Dental para Perros sin Anestesia | Cuidado Dental Canino",
  description: "Servicio profesional de profilaxis dental para perros sin anestesia y sin curetas. Atención a domicilio con ultrasonido. Camila y Ana, veterinarias especializadas en salud dental canina.",
  keywords: "profilaxis dental perros, limpieza dental canina, veterinaria dental, sin anestesia, ultrasonido dental perros, cuidado dental mascotas, veterinaria a domicilio",
  authors: [{ name: "DentalVets" }],
  creator: "DentalVets",
  publisher: "DentalVets",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dentalvets.com",
    siteName: "DentalVets",
    title: "DentalVets - Profilaxis Dental para Perros sin Anestesia",
    description: "Servicio profesional de profilaxis dental para perros sin anestesia. Atención a domicilio con tecnología de ultrasonido.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DentalVets - Cuidado dental profesional para perros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalVets - Profilaxis Dental para Perros sin Anestesia",
    description: "Servicio profesional de profilaxis dental para perros sin anestesia. Atención a domicilio.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://dentalvets.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6d9293" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
