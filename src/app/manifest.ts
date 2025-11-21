export default function manifest() {
  return {
    name: 'DentalVets - Limpieza Dental para Perros y Gatos sin Anestesia',
    short_name: 'DentalVets',
    description: 'Profilaxis dental profesional para perros y gatos sin anestesia en Bogotá. Servicio a domicilio con ultrasonido.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6d9293',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
