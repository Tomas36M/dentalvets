import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./visible-text.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DentalVets - Limpieza Dental para Perros y Gatos sin Anestesia | Bogotá",
  description: "Profilaxis dental profesional para perros y gatos sin anestesia en Bogotá. Atención veterinaria a domicilio con ultrasonido. Cuidado dental canino y felino especializado. ⭐ Resultados en 2 horas.",
  keywords: "limpieza dental perros Bogotá, profilaxis dental perros, limpieza dental gatos, veterinaria dental Bogotá, sin anestesia, ultrasonido dental perros, cuidado dental mascotas, veterinaria a domicilio Bogotá, dentista veterinario, higiene bucal perros, dentista para perros, limpieza dental canina, salud dental mascotas, profilaxis canina, servicio veterinario dental, dental pets, veterinaria sin anestesia, limpieza dental mascotas domicilio",
  authors: [{ name: "DentalVets" }],
  creator: "DentalVets",
  publisher: "DentalVets",
  robots: "index, follow",
  alternates: {
    canonical: "https://dentalvets.com.co",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://dentalvets.com.co",
    siteName: "DentalVets",
    title: "DentalVets - Limpieza Dental para Perros y Gatos sin Anestesia en Bogotá",
    description: "Profilaxis dental profesional para perros y gatos sin anestesia. Atención veterinaria a domicilio en Bogotá con tecnología de ultrasonido. Resultados en 2 horas.",
    images: [
      {
        url: "https://dentalvets.com.co/dentalvets-logo.jpg",
        width: 1200,
        height: 630,
        alt: "DentalVets - Cuidado dental profesional para perros y gatos en Bogotá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalVets - Limpieza Dental para Mascotas sin Anestesia",
    description: "Profilaxis dental profesional para perros y gatos sin anestesia en Bogotá. Atención a domicilio. Resultados en 2 horas.",
    images: ["https://dentalvets.com.co/dentalvets-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6d9293" />
        <meta name="geo.region" content="CO-DC" />
        <meta name="geo.placename" content="Bogotá" />
        <meta name="geo.position" content="4.710989;-74.072092" />
        <meta name="ICBM" content="4.710989, -74.072092" />
        {/* Preconnect to third-party origins */}
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.cdninstagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://instagram.fbog4-1.fna.fbcdn.net" />
        <link rel="dns-prefetch" href="https://instagram.fbog4-2.fna.fbcdn.net" />
        <link rel="dns-prefetch" href="https://instagram.fbog4-3.fna.fbcdn.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "DentalVets",
              "image": "https://dentalvets.com.co/dentalvets-logo.jpg",
              "@id": "https://dentalvets.com.co",
              "url": "https://dentalvets.com.co",
              "telephone": "+573150340084",
              "email": "dental.vetsco@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Servicio a Domicilio",
                "addressLocality": "Bogotá",
                "addressRegion": "DC",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 4.710989,
                "longitude": -74.072092
              },
              "areaServed": {
                "@type": "City",
                "name": "Bogotá"
              },
              "priceRange": "$80.000 - $160.000",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/dental.vets/",
                "https://www.facebook.com/profile.php?id=61563836805202",
                "https://www.tiktok.com/@dentalvets4"
              ],
              "serviceType": "Profilaxis dental para perros y gatos sin anestesia",
              "availableService": [
                {
                  "@type": "Service",
                  "name": "Limpieza dental sin anestesia",
                  "description": "Profilaxis dental profesional para perros y gatos utilizando ultrasonido, sin anestesia general"
                },
                {
                  "@type": "Service",
                  "name": "Atención veterinaria a domicilio",
                  "description": "Servicio de cuidado dental en la comodidad de tu hogar en Bogotá"
                }
              ]
            })
          }}
        />
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
