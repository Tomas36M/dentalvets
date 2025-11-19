import { Heart, Shield, Clock, Star, Stethoscope, FlaskConical, Activity, Bone, Syringe, Dna, Scissors, HeartPulse } from 'lucide-react';

export const landingContent = {
  hero: {
    badge: "Tecnología de ultrasonido avanzada",
    title: {
      highlight: "Sonrisas saludables",
      rest: "para tu mejor amigo"
    },
    description: "Profilaxis dental profesional para perros sin anestesia general, sin curetas y con atención a domicilio. Resultados visibles en solo 40 minutos.",
    cta: {
      primary: "Agenda cita con nosotros",
      secondary: "Conoce nuestros servicios"
    },
    features: [
      "Sin anestesia general",
      "Sin curetas",
      "A domicilio"
    ],
    image: {
      src: "https://res.cloudinary.com/dge1sssip/image/upload/v1755069850/DENTALVETS_logo.jpg_ny2gel.jpg",
      alt: "DentalVets - Dentistas Veterinarios"
    }
  },
  stats: [
    { number: '1,000+', label: 'Perros felices', icon: Heart },
    { number: '40min', label: 'Duración promedio', icon: Clock },
    { number: '100%', label: 'Sin anestesia general', icon: Shield },
    { number: '5★', label: 'Calificación promedio', icon: Star },
  ],
  benefits: {
    title: "¿Por qué elegir DentalVets?",
    subtitle: "Somos pioneros en cuidado dental canino con tecnología avanzada y un enfoque humano",
    items: [
      {
        icon: Shield,
        title: 'Sin anestesia general ni curetas',
        description: 'Procedimiento completamente seguro y no invasivo. Tu mascota estará cómoda durante todo el proceso.',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      },
      {
        icon: Clock,
        title: 'Resultados en 40 minutos',
        description: 'Proceso rápido y eficiente con resultados visibles inmediatamente. Tecnología de ultrasonido avanzada.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      },
      {
        icon: Heart,
        title: 'Atención a domicilio',
        description: 'Tu mascota estará cómoda, en su hogar y acompañada por sus tutores durante todo el proceso.',
        color: 'text-red-600',
        bgColor: 'bg-red-50'
      },
    ]
  },
  pricing: {
    title: "Nuestros paquetes",
    subtitle: "Planes diseñados para el cuidado dental integral de tu mascota",
    items: [
      {
        title: "Básico",
        price: "$80.000",
        description: "Ideal para mantenimiento regular",
        features: [
          "Evaluación dental completa",
          "Limpieza con ultrasonido",
          "Recomendaciones de cuidado",
          "Revisión pieza por pieza"
        ],
        highlight: false,
        cta: "Agendar ahora"
      },
      {
        title: "Completo",
        price: "$120.000",
        description: "Cuidado dental integral",
        features: [
          "Todo lo del paquete básico",
          "Aplicación de pasta profiláctica",
          "Revisión pieza por pieza",
          "Seguimiento post-visita"
        ],
        highlight: true,
        badge: "Más popular",
        cta: "Agendar ahora"
      },
      {
        title: "Premium",
        price: "$160.000",
        description: "Atención VIP para tu mascota",
        features: [
          "Todo lo del paquete completo",
          "Consulta veterinaria básica",
          "Plan de cuidado personalizado",
          "Próxima cita con descuento"
        ],
        highlight: false,
        cta: "Agendar ahora"
      }
    ]
  },
  process: {
    title: "Nuestro proceso en 4 pasos",
    subtitle: "Un procedimiento simple y efectivo diseñado para el bienestar de tu mascota",
    steps: [
      {
        step: '1',
        title: 'Evaluación inicial',
        description: 'Examen general y bucal de nuestros pacientes, determinando sus requerimientos individuales.'
      },
      {
        step: '2',
        title: 'Preparación',
        description: 'Instalación de nuestros equipos especializados y preparación del lugar donde se realizará el procedimiento para generar la mayor comodidad al paciente.'
      },
      {
        step: '3',
        title: 'Limpieza dental',
        description: 'Realizamos la profilaxis con ultrasonido y pasta profiláctica removiendo sarro y placa bacteriana. Revisión pieza por pieza para determinar que no hay ningún tipo de dolor/sensibilidad o cualquier clase de afección bucal.'
      },
      {
        step: '4',
        title: 'Cuidados post-limpieza',
        description: 'Proporcionamos recomendaciones para mantener la salud dental de tu mascota desde casa para que su profilaxis dure el mayor tiempo posible.'
      },
    ]
  },
  services: {
    title: "Otros servicios veterinarios",
    subtitle: "Ofrecemos una amplia gama de servicios para el cuidado integral de tu mascota en Bogotá y alrededores",
    items: [
      {
        icon: Stethoscope,
        title: 'Consultas veterinarias',
        description: 'Exámenes generales y diagnósticos'
      },
      {
        icon: FlaskConical,
        title: 'Toma de exámenes',
        description: 'Laboratorio clínico completo'
      },
      {
        icon: Activity,
        title: 'Ecografías',
        description: 'Diagnóstico por imágenes'
      },
      {
        icon: Bone,
        title: 'Radiografías',
        description: 'Estudios radiológicos'
      },
      {
        icon: Syringe,
        title: 'Vacunación',
        description: 'Esquemas de vacunación completos'
      },
      {
        icon: Dna,
        title: 'Desparasitación',
        description: 'Control de parásitos internos y externos'
      },
      {
        icon: Scissors,
        title: 'Cirugías menores',
        description: 'Procedimientos quirúrgicos ambulatorios'
      },
      {
        icon: HeartPulse,
        title: 'Medicina preventiva',
        description: 'Programas de salud integral'
      },
    ]
  },
  testimonials: {
    title: "Lo que dicen nuestros clientes",
    subtitle: "Testimonios reales de dueños satisfechos con nuestro servicio",
    items: [
      {
        name: 'María González',
        pet: 'Max - Golden Retriever',
        rating: 5,
        comment: 'Increíble servicio! Max se mantuvo súper tranquilo durante todo el procedimiento. El cambio fue notorio inmediatamente. ¡100% recomendado!'
      },
      {
        name: 'Carlos Rodríguez',
        pet: 'Luna - Pastor Alemán',
        rating: 5,
        comment: 'Me encantó que vinieran a casa. Luna es muy nerviosa y aquí se sintió cómoda. El resultado superó mis expectativas.'
      },
      {
        name: 'Ana Martínez',
        pet: 'Toby - Bulldog Francés',
        rating: 5,
        comment: 'Profesionales increíbles. El proceso fue rapidísimo y Toby no sufrió nada. Su aliento mejoró muchísimo.'
      },
      {
        name: 'Jorge López',
        pet: 'Bella - Labrador',
        rating: 5,
        comment: 'Servicio excepcional. La explicación fue muy clara y los resultados inmediatos. Bella quedó con una sonrisa perfecta.'
      },
      {
        name: 'Lucia Herrera',
        pet: 'Rocky - Schnauzer',
        rating: 5,
        comment: 'Sin anestesia fue la mejor decisión. Rocky es mayor y me daba miedo, pero todo salió perfecto. Muy recomendado.'
      },
      {
        name: 'Miguel Torres',
        pet: 'Coco - Poodle',
        rating: 5,
        comment: 'Excelente atención y muy profesionales. Coco tenía mucho sarro y ahora sus dientes se ven como nuevos.'
      }
    ]
  },
  commitment: {
    title: "Nuestro compromiso",
    description: "Somos un equipo de especialistas en salud bucal veterinaria con una misión clara: brindar bienestar sin comprometer la seguridad de tu mascota. Nos dedicamos con pasión a cada procedimiento, usando técnicas seguras, sin anestesia general, y con un enfoque amable y respetuoso hacia los animales.",
    items: [
      {
        icon: "🎯",
        title: "ATENCIÓN PERSONALIZADA",
        description: "Evaluamos a tu mascota, creamos un plan personalizado y realizamos la limpieza con delicadeza y precisión."
      },
      {
        icon: "📋",
        title: "SEGUIMIENTO POST VISITA",
        description: "Te acompañamos después del procedimiento con consejos y seguimiento para mantener la salud dental de tu mascota."
      },
      {
        icon: "🏠",
        title: "EN BOGOTÁ Y ALREDEDORES",
        description: "Llevamos nuestros servicios directamente a tu hogar en Bogotá y ciudades aledañas para mayor comodidad."
      }
    ]
  },
  cta: {
    title: "¿Listo para mejorar la salud dental de tu mascota?",
    subtitle: "Agenda una cita gratuita y descubre por qué somos la mejor opción en cuidado dental canino",
    primary: "Agenda cita con nosotros",
    secondary: "Más información"
  }
};
