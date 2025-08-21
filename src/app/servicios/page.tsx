'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Shield, Heart, Star, CheckCircle, Zap, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';

export default function Servicios() {
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
              Nuestros <span className="text-primary-600">Servicios</span>
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Tecnología avanzada para el cuidado dental de tu mascota, sin anestesia y con resultados inmediatos
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Service */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                <Zap size={16} />
                <span>Servicio principal</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Profilaxis Dental con Ultrasonido
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro servicio estrella utiliza tecnología de ultrasonido de última generación para realizar 
                una limpieza dental profunda y efectiva, completamente sin anestesia general y sin el uso de curetas 
                tradicionales.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: 'Duración: 40 minutos' },
                  { icon: Shield, text: '100% sin anestesia general' },
                  { icon: Heart, text: 'Sin estrés para tu mascota' },
                  { icon: Star, text: 'Resultados inmediatos' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <feature.icon size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                href="https://wa.me/573150340084"
                className="!text-black hover:!text-white"
              >
                Agendar cita ahora
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image 
                  src="https://res.cloudinary.com/dge1sssip/image/upload/v1755074999/WhatsApp_Image_2025-08-12_at_21.19.09_lhlijl.jpg" 
                  alt="Proceso de ultrasonido dental para perros - DentalVets" 
                  width={500}
                  height={375}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Before/After Cases */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Éxito: Antes y Después
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reales de nuestros pacientes peludos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Caso 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Max - Golden Retriever</h3>
                <p className="text-gray-600">Edad: 5 años | Procedimiento: Enero 2025</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-red-100 rounded-lg overflow-hidden h-48 flex items-center justify-center mb-3">
                    <Image 
                      src="https://res.cloudinary.com/dge1sssip/image/upload/v1755074991/WhatsApp_Image_2025-08-12_at_21.31.59_pj1lib.jpg" 
                      alt="Dientes con sarro - Antes del tratamiento" 
                      width={200}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Acumulación severa de sarro</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-lg overflow-hidden h-48 flex items-center justify-center mb-3">
                    <Image 
                      src="https://res.cloudinary.com/dge1sssip/image/upload/v1755074980/WhatsApp_Image_2025-08-12_at_21.31.59_1_wfduj4.jpg" 
                      alt="Dientes limpios - Después del tratamiento" 
                      width={200}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Dentadura completamente limpia</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-700">Eliminación completa del sarro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-700">Mejora en el aliento</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-700">Reducción de la inflamación gingival</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent-50 rounded-lg">
                <p className="text-sm italic text-gray-700">
                  &quot;Max se mostró muy tranquilo durante todo el procedimiento. Los resultados fueron 
                  increíbles y su aliento mejoró notablemente.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">- María, dueña de Max</p>
              </div>
            </motion.div>

            {/* Caso 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Luna - Pastor Alemán</h3>
                <p className="text-gray-600">Edad: 7 años | Procedimiento: Febrero 2025</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-red-100 rounded-lg overflow-hidden h-48 flex items-center justify-center mb-3">
                    <Image 
                      src="https://res.cloudinary.com/dge1sssip/image/upload/v1755074991/WhatsApp_Image_2025-08-12_at_21.31.59_pj1lib.jpg" 
                      alt="Dientes con placa bacteriana - Antes del tratamiento" 
                      width={200}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Placa bacteriana extensa</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-lg overflow-hidden h-48 flex items-center justify-center mb-3">
                    <Image 
                      src="https://res.cloudinary.com/dge1sssip/image/upload/v1755074980/WhatsApp_Image_2025-08-12_at_21.31.59_1_wfduj4.jpg" 
                      alt="Dientes saludables - Después del tratamiento" 
                      width={200}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Encías rosadas y saludables</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-700">Eliminación de placa bacteriana</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-700">Encías más saludables</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-700">Prevención de enfermedades dentales</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent-50 rounded-lg">
                <p className="text-sm italic text-gray-700">
                  &quot;Luna es una perra mayor y me preocupaba mucho la anestesia. Este procedimiento 
                  fue perfecto para ella. Se veía muy cómoda y relajada.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">- Carlos, dueño de Luna</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Benefits */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de Nuestro Servicio
            </h2>
            <p className="text-xl text-gray-600">
              ¿Por qué elegir ultrasonido sobre métodos tradicionales?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Seguridad Total',
                description: 'Sin riesgos de anestesia general. Ideal para perros mayores o con problemas de salud.',
                benefits: ['Sin efectos secundarios', 'Apto para todas las edades', 'Sin tiempo de recuperación']
              },
              {
                icon: Clock,
                title: 'Rapidez y Eficiencia',
                description: 'Procedimiento completo en 40 minutos con resultados inmediatos y duraderos.',
                benefits: ['Resultados inmediatos', 'Ahorro de tiempo', 'Mayor comodidad']
              },
              {
                icon: Heart,
                title: 'Bienestar Animal',
                description: 'Tu mascota permanece consciente y cómoda. Ambiente familiar y sin estrés.',
                benefits: ['Sin separación del dueño', 'Ambiente conocido', 'Menos ansiedad']
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-black rounded-full mb-4">
                    <benefit.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Timeline */}
      <AnimatedSection className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proceso de 40 Minutos
            </h2>
            <p className="text-xl">
              Paso a paso del procedimiento dental
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  time: '0-5 min',
                  title: 'Recepción y evaluación',
                  description: 'Llegamos a tu hogar, conocemos a tu mascota y realizamos una evaluación inicial del estado dental.',
                  icon: Heart
                },
                {
                  time: '5-10 min',
                  title: 'Preparación del equipo',
                  description: 'Configuramos el equipo de ultrasonido y preparamos el área de trabajo, asegurando la comodidad del animal.',
                  icon: Zap
                },
                {
                  time: '10-35 min',
                  title: 'Profilaxis dental',
                  description: 'Realizamos la limpieza dental con ultrasonido, removiendo sarro y placa bacteriana de forma suave y efectiva.',
                  icon: Star
                },
                {
                  time: '35-40 min',
                  title: 'Revisión final y recomendaciones',
                  description: 'Evaluamos los resultados, proporcionamos consejos de cuidado dental y programamos el siguiente mantenimiento.',
                  icon: Award
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-8"
                >
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mb-2">
                      <step.icon size={24} />
                    </div>
                    <div className="text-sm font-bold text-primary-600">{step.time}</div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Instagram Videos Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Videos de nuestros procedimientos
            </h2>
            <p className="text-xl text-gray-600">
              Observa de primera mano cómo realizamos nuestros tratamientos dentales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Video en vivo</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Proceso completo</h3>
                <p className="text-xs text-gray-600">40 minutos de tratamiento</p>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Antes y después</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Resultados increíbles</h3>
                <p className="text-xs text-gray-600">Comparación visual</p>
              </div>
            </motion.div>

            {/* Video 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Testimonio</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Cliente satisfecho</h3>
                <p className="text-xs text-gray-600">Experiencia real</p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              *Contenido actualizado desde nuestro Instagram
            </p>
            <Button variant="outline" href="https://instagram.com/dentalvets">
              Síguenos en Instagram
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar la sonrisa de tu mascota?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Agenda tu cita ahora y únete a los cientos de dueños satisfechos con nuestro servicio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" href="https://wa.me/573150340084">
                Agendar cita por WhatsApp
              </Button>
              <Button size="lg" variant="outline" href="/contacto">
                Solicitar más información
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
