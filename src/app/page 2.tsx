'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Star, CheckCircle, Award, Users, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
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
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-primary-600">Sonrisas saludables</span> para tu mejor amigo
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profilaxis dental profesional para perros <strong>sin anestesia, sin curetas</strong> y con <strong>atención a domicilio</strong>. 
                  Resultados visibles en solo 40 minutos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href="https://wa.me/1234567890">
                  Agendar cita gratis
                </Button>
                <Button variant="outline" size="lg" href="/servicios">
                  Conoce nuestros servicios
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Sin anestesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Sin curetas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>A domicilio</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-64 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <Heart size={64} className="mx-auto mb-4" />
                    <p className="text-lg font-semibold">Imagen del antes y después</p>
                    <p className="text-sm">de nuestros pacientes</p>
                  </div>
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

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Perros felices', icon: Heart },
              { number: '40min', label: 'Duración promedio', icon: Clock },
              { number: '100%', label: 'Sin anestesia', icon: Shield },
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir DentalVets?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos pioneros en cuidado dental canino con tecnología de vanguardia y un enfoque humano
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Sin anestesia ni curetas',
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
                description: 'Nos trasladamos a tu hogar para que tu mascota se sienta segura en su ambiente familiar.',
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

      {/* Process Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro proceso en 4 pasos
            </h2>
            <p className="text-xl text-gray-600">
              Un procedimiento simple y efectivo diseñado para el bienestar de tu mascota
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Evaluación inicial',
                description: 'Examinamos el estado dental de tu mascota y explicamos el procedimiento.'
              },
              {
                step: '2',
                title: 'Preparación',
                description: 'Preparamos el equipo de ultrasonido y aseguramos la comodidad del animal.'
              },
              {
                step: '3',
                title: 'Limpieza dental',
                description: 'Realizamos la profilaxis con ultrasonido, removiendo sarro y placa bacteriana.'
              },
              {
                step: '4',
                title: 'Cuidados post-limpieza',
                description: 'Proporcionamos recomendaciones para mantener la salud dental de tu mascota.'
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
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full text-xl font-bold mb-6 shadow-lg">
                  {step.step}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-24 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conoce a nuestro equipo
            </h2>
            <p className="text-xl text-gray-600">
              Veterinarias especializadas en salud dental canina
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'Dra. Camila García',
                specialty: 'Especialista en Odontología Veterinaria',
                experience: '8 años de experiencia',
                description: 'Pionera en técnicas de profilaxis sin anestesia. Certificada en ultrasonido dental y apasionada por el bienestar animal.',
                achievements: ['Certificación en Ultrasonido Dental', 'Especialización en Odontología Veterinaria', 'Más de 1000 procedimientos realizados']
              },
              {
                name: 'Dra. Ana Rodríguez',
                specialty: 'Medicina Veterinaria y Cuidado Preventivo',
                experience: '6 años de experiencia',
                description: 'Experta en medicina preventiva y cuidado dental canino. Comprometida con técnicas no invasivas y el confort de las mascotas.',
                achievements: ['Diplomado en Medicina Preventiva', 'Especialización en Comportamiento Animal', 'Certificación en Técnicas No Invasivas']
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Users size={48} className="text-primary-700" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white p-2 rounded-full">
                    <Award size={20} />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.specialty}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Logros destacados:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center justify-center space-x-2">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
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
              ¿Listo para mejorar la salud dental de tu mascota?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Agenda una cita gratuita y descubre por qué somos la mejor opción en cuidado dental canino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" href="https://wa.me/1234567890">
                Agendar cita gratuita
              </Button>
              <Button size="lg" variant="outline" href="/contacto">
                Más información
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

    </div>
  );
}
