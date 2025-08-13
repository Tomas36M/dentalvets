export default function manifest() {
  return {
    name: 'DentalVets - Profilaxis Dental para Perros',
    short_name: 'DentalVets',
    description: 'Servicio profesional de profilaxis dental para perros sin anestesia y sin curetas. Atención a domicilio con ultrasonido.',
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
