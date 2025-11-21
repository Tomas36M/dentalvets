'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Star, Sparkles, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';
import InstagramEmbed from '@/components/InstagramEmbed';
import { instagramVideos } from '@/data/instagramVideos';
import { landingContent } from '@/data/landing-content';
import foto1 from '../../public/fotogaleria1.jpeg';
import foto2 from '../../public/fotogatico.png';
import foto3 from '../../public/fotoperritofeliz.jpeg';
import foto4 from '../../public/fotoprodcuto1.jpeg';
import foto5 from '../../public/perritoconsnacks.jpeg';
import foto6 from '../../public/fotoproducto2.jpeg';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dge1sssip/image/upload/v1755739260/Cartel_vertical_adopcio%CC%81n_de_mascotas_moderno_azul_lsbx0a.png"
            alt="Fondo DentalVets"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  <Sparkles size={16} className="text-yellow-400" />
                  <span>{landingContent.hero.badge}</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                  <span className="text-primary-300">{landingContent.hero.title.highlight}</span> <br />
                  {landingContent.hero.title.rest}
                </h1>
                
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl max-w-xl">
                  <p className="text-xl leading-relaxed text-white font-medium">
                    {landingContent.hero.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href="https://wa.me/573150340084" className="shadow-xl shadow-primary-900/20">
                  {landingContent.hero.cta.primary}
                </Button>
                <Button variant="outline" size="lg" href="/servicios" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900 border-2">
                  {landingContent.hero.cta.secondary}
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                {landingContent.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <CheckCircle className="text-green-400" size={18} />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                <div className="absolute inset-0 bg-primary-500 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image 
                    src="https://res.cloudinary.com/dge1sssip/image/upload/v1755069850/DENTALVETS_logo.jpg_ny2gel.jpg"
                    alt="Veterinaria con perrito feliz"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Star className="text-yellow-500 fill-yellow-500" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Calificación</p>
                    <p className="text-lg font-bold text-gray-900">5.0 / 5.0</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-20 -mt-8 mx-4 md:mx-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {landingContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <stat.icon size={28} strokeWidth={2} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {landingContent.benefits.title}
            </h2>
            <p className="text-xl text-gray-600">
              {landingContent.benefits.subtitle}
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {landingContent.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bgColor} ${benefit.color} rounded-2xl mb-6 shadow-sm`}>
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background for Process Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
            alt="Perro feliz"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {landingContent.process.title}
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              {landingContent.process.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {landingContent.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 group-hover:bg-white/20 transition-colors duration-300">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-white/20 transform -translate-y-1/2 -translate-x-4"></div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {landingContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {landingContent.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {landingContent.services.items.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 cursor-pointer group h-full flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" href="https://wa.me/573150340084">
              Consulta por otros servicios
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Love & Care Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/ana.png"
                  alt="Dra. Ana con paciente feliz"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-100 p-4 rounded-full shadow-lg z-10">
                <Heart className="text-yellow-500 fill-yellow-500 w-8 h-8" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-2 shadow-sm">
                Amor y Dedicación
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Más que un servicio dental, <br/>
                <span className="text-primary-500">es amor por tu mascota</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En DentalVets, entendemos que tu mascota es un miembro más de la familia. Por eso, cada procedimiento se realiza con una dosis extra de cariño, paciencia y respeto. Nos tomamos el tiempo necesario para que tu peludo se sienta seguro, tranquilo y mimado, creando una experiencia positiva que va más allá de la salud dental. Porque verlos felices y saludables es nuestra mayor recompensa.
              </p>
              <div className="pt-4">
                <Button href="/contacto" className="shadow-lg">
                  Conoce a nuestro equipo
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pet Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-4 shadow-sm">
              Galería
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sonrisas que Inspiran
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada sonrisa es una historia de salud y amor
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                src: foto1,
                alt: 'Perrito durante cepillado dental',
                caption: 'Complementa su cepillado con nuestro enjuague dental'
              },
              {
                src: foto2,
                alt: 'Gatito con snack dental',
                caption: 'Snacks saludables que cuidan sus dientes'
              },
              {
                src: foto3,
                alt: 'Perrito feliz con pelota',
                caption: 'Felices y saludables después de su limpieza'
              },
              {
                src: foto4,
                alt: 'Perrito con productos DentalVets',
                caption: 'Emocionado por sus nuevos productos'
              },
              {
                src: foto5,
                alt: 'Snacks de patas de pollo',
                caption: 'Snacks naturales que ayudan a reducir el sarro'
              },
              {
                src: foto6,
                alt: 'Patas de pollo deshidratadas',
                caption: 'Adiós al sarro de forma natural'
              }
            ].map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold leading-relaxed drop-shadow-lg">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              href="https://instagram.com/dental.vets" 
              size="lg"
              className="shadow-lg"
            >
              📸 Ver más en Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {landingContent.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {landingContent.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingContent.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 font-medium">{testimonial.pet}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" href="https://wa.me/573150340084" className="shadow-lg shadow-primary-500/30">
              ¡Únete a nuestros clientes satisfechos!
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Instagram Videos Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Reales
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {instagramVideos.slice(0, 2).map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
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

      {/* Commitment Section */}
      <AnimatedSection className="py-20 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {landingContent.commitment.title}
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed">
              {landingContent.commitment.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {landingContent.commitment.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-colors text-center"
              >
                <div className="w-16 h-16 bg-white text-primary-900 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-primary-100 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-white rounded-3xl p-12 shadow-2xl border border-primary-100"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              {landingContent.cta.title}
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              {landingContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" href="https://wa.me/573150340084" className="shadow-xl shadow-primary-500/30 text-white px-10">
                {landingContent.cta.primary}
              </Button>
              <Button size="lg" variant="outline" href="/contacto" className="text-lg px-10">
                {landingContent.cta.secondary}
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
