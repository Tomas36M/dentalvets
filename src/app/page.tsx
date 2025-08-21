'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Shield, Clock, Star, CheckCircle, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';
import InstagramEmbed from '@/components/InstagramEmbed';
import { instagramVideos } from '@/data/instagramVideos';

export default function Home() {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dge1sssip/image/upload/a_-90/a_90/a_hflip/a_vflip/c_crop,ar_9:16/v1755736685/Imagen_cbywxp.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        objectFit: 'cover'
      }}
    >
      <Header />
      
      {/* Hero Section - Transparente para mostrar fondo */}
      <section className="relative bg-transparent pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Sparkles size={16} />
                  <span>Tecnología de ultrasonido avanzada</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-primary-600">Sonrisas saludables</span> para tu mejor amigo
                </h1>
                
                <p className="text-xl leading-relaxed hero-description text-white" style={{ color: '#cce8f6ff' }}>
                  Profilaxis dental profesional para perros <strong>sin anestesia general, sin curetas</strong> y con <strong>atención a domicilio</strong>. 
                  Resultados visibles en solo 40 minutos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href="https://wa.me/573150340084">
                  Agenda cita con nosotros
                </Button>
                <Button variant="outline" size="lg" href="/servicios">
                  Conoce nuestros servicios
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm hero-features">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-white force-white-text" style={{ color: '#ffffff' }}>Sin anestesia general</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-white force-white-text" style={{ color: '#ffffff' }}>Sin curetas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-white force-white-text" style={{ color: '#ffffff' }}>A domicilio</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div 
                className="relative rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300"
                style={{ backgroundColor: '#6395b2' }}
              >
                <div className="w-full h-64 rounded-xl overflow-hidden">
                  <Image 
                    src="https://res.cloudinary.com/dge1sssip/image/upload/v1755069850/DENTALVETS_logo.jpg_ny2gel.jpg" 
                    alt="DentalVets - Dentistas Veterinarios" 
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-full shadow-lg"
              >
                <Star size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Fondo blanco sólido */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '1,000+', label: 'Perros felices', icon: Heart },
              { number: '40min', label: 'Duración promedio', icon: Clock },
              { number: '100%', label: 'Sin anestesia general', icon: Shield },
              { number: '5★', label: 'Calificación promedio', icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:bg-gray-200 transition-colors"
                  style={{ backgroundColor: '#e5f3ff' }}
                >
                  <stat.icon size={32} style={{ color: '#000000', strokeWidth: 2.5 }} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section - Transparente para mostrar fondo */}
      <AnimatedSection className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por qué elegir DentalVets?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Somos pioneros en cuidado dental canino con tecnología avanzada y un enfoque humano
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Sin anestesia general ni curetas',
                description: 'Procedimiento completamente seguro y no invasivo. Tu mascota estará cómoda durante todo el proceso.',
                color: 'text-green-600'
              },
              {
                icon: Clock,
                title: 'Resultados en 40 minutos',
                description: 'Proceso rápido y eficiente con resultados visibles inmediatamente. Tecnología de ultrasonido avanzada.',
                color: 'text-blue-600'
              },
              {
                icon: Heart,
                title: 'Atención a domicilio',
                description: 'Tu mascota estará cómoda, en su hogar y acompañada por sus tutores durante todo el proceso.',
                color: 'text-red-600'
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} bg-gray-100 rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Section - Fondo blanco sólido */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros paquetes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Planes diseñados para el cuidado dental integral de tu mascota
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Paquete Básico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Básico</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$80.000</div>
                <p className="text-gray-600 mb-6">Ideal para mantenimiento regular</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Evaluación dental completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Limpieza con ultrasonido</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Recomendaciones de cuidado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Revisión pieza por pieza</span>
                  </li>
                </ul>
                
                <Button className="w-full text-gray-600" href="https://wa.me/573150340084">
                  Agendar ahora
                </Button>
              </div>
            </motion.div>

            {/* Paquete Completo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-50 rounded-2xl p-8 border-2 border-primary-500 relative hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Más popular
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Completo</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$120.000</div>
                <p className="text-gray-600 mb-6">Cuidado dental integral</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Todo lo del paquete básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Aplicación de pasta profiláctica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Revisión pieza por pieza</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Seguimiento post-visita</span>
                  </li>
                </ul>
                
                <Button className="w-full text-gray-600" href="https://wa.me/573150340084">
                  Agendar ahora
                </Button>
              </div>
            </motion.div>

            {/* Paquete Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$160.000</div>
                <p className="text-gray-600 mb-6">Atención VIP para tu mascota</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Todo lo del paquete completo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Consulta veterinaria básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Plan de cuidado personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className='text-gray-600'>Próxima cita con descuento</span>
                  </li>
                </ul>
                
                <Button className="w-full text-gray-600" href="https://wa.me/573150340084">
                  Agendar ahora
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section - Transparente para mostrar fondo */}
      <AnimatedSection className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro proceso en 4 pasos
            </h2>
            <p className="text-xl text-white">
              Un procedimiento simple y efectivo diseñado para el bienestar de tu mascota
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
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
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center relative"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-black rounded-full text-xl font-bold mb-6 shadow-lg">
                  {step.step}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-24 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Other Veterinary Services Section - Fondo blanco sólido */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Otros servicios veterinarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios para el cuidado integral de tu mascota en Bogotá y alrededores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🩺',
                title: 'Consultas veterinarias',
                description: 'Exámenes generales y diagnósticos'
              },
              {
                icon: '🧪',
                title: 'Toma de exámenes',
                description: 'Laboratorio clínico completo'
              },
              {
                icon: '📡',
                title: 'Ecografías',
                description: 'Diagnóstico por imágenes'
              },
              {
                icon: '🩻',
                title: 'Radiografías',
                description: 'Estudios radiológicos'
              },
              {
                icon: '💉',
                title: 'Vacunación',
                description: 'Esquemas de vacunación completos'
              },
              {
                icon: '🧬',
                title: 'Desparasitación',
                description: 'Control de parásitos internos y externos'
              },
              {
                icon: '✂️',
                title: 'Cirugías menores',
                description: 'Procedimientos quirúrgicos ambulatorios'
              },
              {
                icon: '❤️',
                title: 'Medicina preventiva',
                description: 'Programas de salud integral'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="text-gray-600" size="lg" href="https://wa.me/573150340084">
              Consulta por otros servicios
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section - Transparente para mostrar fondo */}
      <AnimatedSection className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-white">
              Testimonios reales de dueños satisfechos con nuestro servicio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-4">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.pet}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" href="https://wa.me/573150340084" className="text-gray-600">
              ¡Únete a nuestros clientes satisfechos!
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Instagram Videos Section - Fondo blanco sólido */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {instagramVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <InstagramEmbed 
                  embedCode={video.embedCode}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section - Transparente para mostrar fondo */}
      <AnimatedSection className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro compromiso
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Somos un equipo de especialistas en salud bucal veterinaria con una misión clara: brindar bienestar sin comprometer la seguridad de tu mascota. Nos dedicamos con pasión a cada procedimiento, usando técnicas seguras, sin anestesia general, y con un enfoque amable y respetuoso hacia los animales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ATENCIÓN PERSONALIZADA</h3>
              <p className="text-gray-600">
                Evaluamos a tu mascota, creamos un plan personalizado y realizamos la limpieza con delicadeza y precisión.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEGUIMIENTO POST VISITA</h3>
              <p className="text-gray-600">
                Te acompañamos después del procedimiento con consejos y seguimiento para mantener la salud dental de tu mascota.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">EN BOGOTÁ Y ALREDEDORES</h3>
              <p className="text-gray-600">
                Llevamos nuestros servicios directamente a tu hogar en Bogotá y ciudades aledañas para mayor comodidad.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section - Fondo blanco sólido */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-900"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para mejorar la salud dental de tu mascota?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una cita gratuita y descubre por qué somos la mejor opción en cuidado dental canino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" href="https://wa.me/573150340084">
                Agenda cita con nosotros
              </Button>
              <Button size="lg" variant="outline" href="/contacto">
                Más información
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
