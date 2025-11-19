'use client';
import Image from 'next/image';
import {
  Heart,
  Shield,
  CheckCircle,
  Sparkles,
  Stethoscope,
  Home
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';
import InstagramVideo from '@/components/InstagramVideo';
import { instagramVideos } from '@/data/instagramVideos';

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop"
            alt="Perro feliz en consulta"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-gray-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              Servicios Profesionales
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 drop-shadow-sm">
              Cuidado dental <span className="text-primary-500">sin estrés</span> para tu mascota
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium max-w-2xl mx-auto">
              Especialistas en profilaxis dental canina y felina sin anestesia. 
              Llevamos el consultorio a la comodidad de tu hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" size="lg" className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Agendar Cita
              </Button>
              <Button href="#proceso" variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                Ver Proceso
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Service Detail */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 skew-x-12 translate-x-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://res.cloudinary.com/dge1sssip/image/upload/v1755739260/Cartel_vertical_adopcio%CC%81n_de_mascotas_moderno_azul_lsbx0a.png"
                  alt="Profilaxis Dental"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-bold text-lg">Tecnología Ultrasónica</p>
                  <p className="text-gray-200 text-sm">Limpieza profunda sin dolor</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Profilaxis Dental <span className="text-primary-500">Sin Anestesia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro servicio estrella utiliza tecnología de ultrasonido de última generación para eliminar el sarro y la placa bacteriana sin necesidad de sedar a tu mascota. Es un procedimiento seguro, rápido y libre de estrés.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: '100% Seguro',
                    desc: 'Sin los riesgos asociados a la anestesia general, ideal para mascotas mayores.'
                  },
                  {
                    icon: Home,
                    title: 'Servicio a Domicilio',
                    desc: 'Evita el estrés del traslado. Nosotros vamos a donde tú estés.'
                  },
                  {
                    icon: Sparkles,
                    title: 'Resultados Inmediatos',
                    desc: 'Dientes visiblemente más limpios y aliento fresco desde la primera sesión.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                    <div className="bg-primary-100 p-3 rounded-xl text-primary-600 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button href="/contacto" className="w-full sm:w-auto shadow-lg">
                  ¡Quiero este servicio para mi mascota!
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="proceso" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso simple y transparente diseñado para la comodidad de tu peludo
            </p>
          </AnimatedSection>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Evaluación',
                  desc: 'Revisamos el estado de salud general y dental de tu mascota.',
                  icon: Stethoscope
                },
                {
                  step: '02',
                  title: 'Adaptación',
                  desc: 'Creamos un vínculo de confianza para que se sienta segura.',
                  icon: Heart
                },
                {
                  step: '03',
                  title: 'Limpieza',
                  desc: 'Removemos el sarro con ultrasonido de forma suave y efectiva.',
                  icon: Sparkles
                },
                {
                  step: '04',
                  title: 'Prevención',
                  desc: 'Te enseñamos cómo mantener su higiene dental en casa.',
                  icon: CheckCircle
                }
              ].map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 0.2}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-14 h-14 bg-primary-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-md rotate-3 group-hover:rotate-0 transition-transform">
                    {item.step}
                  </div>
                  <div className="mb-4 text-primary-500">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Reales
            </h2>
            <p className="text-xl text-gray-600">
              La diferencia es clara. Salud que se ve y se siente.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Caso 1: Sarro Moderado',
                before: 'https://res.cloudinary.com/dge1sssip/image/upload/v1755074991/WhatsApp_Image_2025-08-12_at_21.31.59_pj1lib.jpg',
                after: 'https://res.cloudinary.com/dge1sssip/image/upload/v1755074980/WhatsApp_Image_2025-08-12_at_21.31.59_1_wfduj4.jpg',
                desc: 'Recuperación total del blanco natural en una sola sesión.'
              },
              {
                title: 'Caso 2: Gingivitis Inicial',
                before: 'https://res.cloudinary.com/dge1sssip/image/upload/v1755074991/WhatsApp_Image_2025-08-12_at_21.31.59_pj1lib.jpg',
                after: 'https://res.cloudinary.com/dge1sssip/image/upload/v1755074980/WhatsApp_Image_2025-08-12_at_21.31.59_1_wfduj4.jpg',
                desc: 'Eliminación de inflamación y bacterias causantes del mal aliento.'
              }
            ].map((caso, index) => (
              <AnimatedSection key={index} delay={index * 0.2} className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative group">
                    <Image
                      src={caso.before}
                      alt="Antes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-bold">Antes</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">ANTES</div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={caso.after}
                      alt="Después"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-bold">Después</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">DESPUÉS</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{caso.title}</h3>
                  <p className="text-gray-600">{caso.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Videos */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Pacientes Felices
            </h2>
            <p className="text-xl text-gray-600">
              Mira cómo transformamos sonrisas todos los días
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramVideos.map((video, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <InstagramVideo 
                  embedCode={video.embedCode} 
                  title={video.title} 
                  description={video.description}
                />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              href="https://instagram.com/dentalvets" 
              variant="outline"
              size="lg"
              className="bg-white hover:bg-gray-50"
            >
              Ver más en Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-primary-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Tu mascota tiene mal aliento?
              </h2>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                Podría ser el primer signo de enfermedad dental. No esperes a que sea doloroso.
                Agenda una evaluación hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contacto" 
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-gray-100 border-none shadow-lg"
                >
                  Agendar Evaluación
                </Button>
                <Button 
                  href="https://wa.me/573150340084" 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
