'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Facebook, 
  Instagram, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nombreMascota: '',
    edadMascota: '',
    razaMascota: '',
    mensaje: '',
    tipoServicio: 'profilaxis'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        nombreMascota: '',
        edadMascota: '',
        razaMascota: '',
        mensaje: '',
        tipoServicio: 'profilaxis'
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dge1sssip/image/upload/v1755739260/Cartel_vertical_adopcio%CC%81n_de_mascotas_moderno_azul_lsbx0a.png"
            alt="Fondo Contacto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              ¿Listo para <span className="text-primary-300">transformar</span> la sonrisa de tu mascota?
            </h1>
            <p className="text-xl leading-relaxed mb-8 font-medium drop-shadow-md text-primary-50">
              Estamos aquí para responder todas tus preguntas y agendar tu cita. 
              ¡El bienestar dental de tu mascota es nuestra prioridad!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <AnimatedSection className="py-16 bg-white -mt-10 relative z-20 rounded-t-3xl shadow-xl mx-4 md:mx-8 border border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Múltiples formas de contactarnos
            </h2>
            <p className="text-xl text-gray-600">
              Elige la opción que más te convenga
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                description: 'Respuesta inmediata',
                contact: '+57 315 0340084',
                action: 'Enviar mensaje',
                href: 'https://wa.me/573150340084?text=Hola! Me gustaría agendar una cita para mi mascota',
                color: 'bg-green-500',
                hoverColor: 'group-hover:bg-green-600'
              },
              {
                icon: Phone,
                title: 'Teléfono',
                description: 'Lun-Vie 8AM-6PM',
                contact: '+57 315 0340084',
                action: 'Llamar ahora',
                href: 'tel:+573150340084',
                color: 'bg-blue-500',
                hoverColor: 'group-hover:bg-blue-600'
              },
              {
                icon: Mail,
                title: 'Email',
                description: 'Respuesta en 24hrs',
                contact: 'dental.vetsco@gmail.com',
                action: 'Enviar email',
                href: 'mailto:dental.vetsco@gmail.com',
                color: 'bg-purple-500',
                hoverColor: 'group-hover:bg-purple-600'
              },
              {
                icon: Instagram,
                title: 'Instagram',
                description: 'Síguenos para tips',
                contact: '@dentalvets',
                action: 'Seguir cuenta',
                href: 'https://www.instagram.com/dental.vets/',
                color: 'bg-pink-500',
                hoverColor: 'group-hover:bg-pink-600'
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
              >
                <div className="text-center flex flex-col h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                    <method.icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                  <p className="text-gray-700 font-medium mb-6 break-words">{method.contact}</p>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center w-full px-4 py-3 ${method.color} text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  >
                    {method.action}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <AnimatedSection className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Agenda tu cita
              </h2>
              <p className="text-gray-600 mb-8">Déjanos tus datos y te contactaremos a la brevedad.</p>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <p className="text-green-800 font-medium">¡Mensaje enviado exitosamente! Te contactaremos pronto.</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
                >
                  <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                  <p className="text-red-800 font-medium">Hubo un error al enviar el mensaje. Por favor intenta nuevamente.</p>
                </motion.div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tu nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none placeholder-gray-400"
                      placeholder="Ej: María García"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none placeholder-gray-400"
                    placeholder="+57 315 0340084"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="nombreMascota" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mascota
                    </label>
                    <input
                      type="text"
                      id="nombreMascota"
                      name="nombreMascota"
                      value={formData.nombreMascota}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none placeholder-gray-400"
                      placeholder="Ej: Max"
                    />
                  </div>
                  <div>
                    <label htmlFor="edadMascota" className="block text-sm font-semibold text-gray-700 mb-2">
                      Edad
                    </label>
                    <input
                      type="number"
                      id="edadMascota"
                      name="edadMascota"
                      min="0"
                      max="20"
                      value={formData.edadMascota}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none placeholder-gray-400"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label htmlFor="razaMascota" className="block text-sm font-semibold text-gray-700 mb-2">
                      Raza
                    </label>
                    <input
                      type="text"
                      id="razaMascota"
                      name="razaMascota"
                      value={formData.razaMascota}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none placeholder-gray-400"
                      placeholder="Golden"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="tipoServicio" className="block text-sm font-semibold text-gray-700 mb-2">
                    Servicio de interés
                  </label>
                  <div className="relative">
                    <select
                      id="tipoServicio"
                      name="tipoServicio"
                      value={formData.tipoServicio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none appearance-none"
                    >
                      <option value="profilaxis">Profilaxis dental con ultrasonido</option>
                      <option value="consulta">Consulta dental</option>
                      <option value="productos">Productos de cuidado</option>
                      <option value="informacion">Solo información</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje adicional
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none outline-none placeholder-gray-400"
                    placeholder="Cuéntanos más sobre las necesidades de tu mascota..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
            
            {/* Contact Info */}
            <div className="space-y-8">
              
              {/* Business Hours */}
              <AnimatedSection direction="right" className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Horarios de atención</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { day: 'Lunes - Viernes', hours: '8:00 AM - 6:00 PM' },
                    { day: 'Sábados', hours: '9:00 AM - 4:00 PM' },
                    { day: 'Domingos', hours: 'Solo emergencias' },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-500 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <p className="text-sm text-primary-800">
                    <strong>Servicio a domicilio:</strong> Nos adaptamos a tu horario. 
                    Disponible 7 días a la semana con cita previa.
                  </p>
                </div>
              </AnimatedSection>
              
              {/* Service Area */}
              <AnimatedSection direction="right" delay={0.2} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Área de servicio</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Ofrecemos nuestro servicio a domicilio en toda el área metropolitana:
                </p>
                
                <ul className="space-y-3 text-sm text-gray-700 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Centro de la ciudad y alrededores</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Zona norte hasta 25km</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Zona sur hasta 20km</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Consulta por otras áreas</span>
                  </li>
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  href="https://wa.me/573150340084?text=Hola! ¿Ofrecen servicio en mi área?"
                >
                  Consultar disponibilidad en mi zona
                </Button>
              </AnimatedSection>
              
              {/* Social Media */}
              <AnimatedSection direction="right" delay={0.4} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Síguenos en redes sociales</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/dental.vets/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100"
                  >
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Instagram</p>
                      <p className="text-sm text-gray-500">Tips diarios y casos de éxito</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/profile.php?id=61563836805202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100"
                  >
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Facebook</p>
                      <p className="text-sm text-gray-500">Comunidad y educación dental</p>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre nuestro servicio
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: '¿Es seguro el procedimiento sin anestesia?',
                answer: 'Completamente seguro. Nuestro método con ultrasonido es no invasivo y elimina los riesgos asociados con la anestesia. Es especialmente recomendado para perros mayores o con problemas cardíacos.'
              },
              {
                question: '¿Cuánto tiempo dura el procedimiento?',
                answer: 'El procedimiento completo toma aproximadamente 40 minutos, incluyendo la evaluación inicial, preparación, limpieza y recomendaciones finales.'
              },
              {
                question: '¿Con qué frecuencia debo agendar el servicio?',
                answer: 'Recomendamos una limpieza profesional cada 6-12 meses, dependiendo de la edad, raza y estado dental de tu mascota. Te proporcionaremos un plan personalizado.'
              },
              {
                question: '¿Qué incluye el servicio a domicilio?',
                answer: 'Incluye el traslado de nuestro equipo especializado, la evaluación completa, el procedimiento de limpieza, y las recomendaciones post-cuidado. No hay costos adicionales por el servicio a domicilio.'
              },
              {
                question: '¿Cómo preparo a mi mascota para el procedimiento?',
                answer: 'No se requiere preparación especial. Solo asegúrate de que tu mascota esté en un ambiente tranquilo. Nosotros nos encargamos de que se sienta cómoda durante todo el proceso.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
