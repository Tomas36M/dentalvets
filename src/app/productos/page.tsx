'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart, Star, Heart, Shield, Sparkles, Award, Truck, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';

export default function Productos() {
  const products = [
    {
      id: 1,
      name: 'Spry Dental',
      price: '$45.000',
      originalPrice: '$55.000',
      image: '/spry-dental.jpg',
      rating: 5.0,
      reviews: 89,
      description: 'Spray dental profesional de alta calidad para el cuidado bucal de tu mascota. Fórmula especializada que combate bacterias y refresca el aliento.',
      features: [
        'Elimina bacterias orales efectivamente',
        'Refresca el aliento al instante',
        'Fórmula veterinaria aprobada',
        'Fácil aplicación diaria'
      ],
      category: 'Higiene Dental',
      bestseller: true
    },
    {
      id: 2,
      name: 'Snacks Dentales',
      price: '$35.000',
      originalPrice: '$42.000',
      image: '/snacks-dentales.jpg',
      rating: 4.9,
      reviews: 134,
      description: 'Deliciosos snacks dentales que tu perro amará. Ayudan a limpiar los dientes de forma natural mientras disfruta de un premio saludable.',
      features: [
        'Textura especial que limpia dientes',
        'Ingredientes 100% naturales',
        'Ayuda a reducir placa y sarro',
        'Rico en vitaminas y minerales'
      ],
      category: 'Snacks Funcionales',
      bestseller: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2698&auto=format&fit=crop"
            alt="Perro con juguete"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-gray-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              Tienda Oficial
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 drop-shadow-sm">
              Productos para el <span className="text-primary-500">Cuidado Dental</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium max-w-2xl mx-auto">
              Complementa nuestros servicios con productos especializados para mantener 
              la salud dental de tu mascota en casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="#productos" className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Ver productos
              </Button>
              <Button variant="outline" size="lg" href="/servicios" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                Conocer servicios
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Banner */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <AnimatedSection className="bg-primary-600 rounded-2xl p-6 shadow-xl text-white text-center transform hover:-translate-y-1 transition-transform duration-300">
          <p className="text-lg font-bold flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-300" />
            Oferta especial: 20% de descuento en todos los productos | Envío gratis en compras superiores a $50
            <Sparkles className="text-yellow-300" />
          </p>
        </AnimatedSection>
      </div>

      {/* Products Grid */}
      <section id="productos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Línea de Productos
            </h2>
            <p className="text-xl text-gray-600">
              Productos recomendados por veterinarios para el cuidado dental diario
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-gray-100"
              >
                {/* Product Badge */}
                {product.bestseller && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md ${
                      product.bestseller ? 'bg-red-500' : 'bg-purple-500'
                    }`}>
                      {product.bestseller ? 'Más vendido' : 'Destacado'}
                    </span>
                  </div>
                )}
                
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 h-64 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs text-primary-700 font-bold bg-primary-100 px-3 py-1 rounded-full uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{product.name}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2 font-medium">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm text-gray-700">
                        <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through font-medium">{product.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded-lg">
                      Ahorro {Math.round((1 - parseInt(product.price.replace(/[$.]/g,''))/parseInt(product.originalPrice.replace(/[$.]/g,''))) * 100)}%
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all" 
                    href={`https://wa.me/573150340084?text=Hola! Me interesa el producto: ${product.name}`}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Ordenar por WhatsApp
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestros productos?
            </h2>
            <p className="text-xl text-gray-600">
              Calidad garantizada y respaldo veterinario
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Aprobado por veterinarios',
                description: 'Todos nuestros productos están recomendados y aprobados por profesionales veterinarios.'
              },
              {
                icon: Heart,
                title: 'Ingredientes naturales',
                description: 'Utilizamos solo ingredientes naturales y seguros para la salud de tu mascota.'
              },
              {
                icon: Star,
                title: 'Calidad premium',
                description: 'Productos de la más alta calidad con resultados comprobados científicamente.'
              },
              {
                icon: Truck,
                title: 'Envío rápido',
                description: 'Envío gratuito en compras superiores a $50 y entrega en 24-48 horas.'
              },
            ].map((benefit, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Consejos para el cuidado dental diario
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Complementa nuestros servicios profesionales con estos consejos para mantener 
                la salud dental de tu mascota entre visitas.
              </p>
              
              <div className="space-y-6">
                {[
                  'Cepilla los dientes de tu perro al menos 3 veces por semana',
                  'Utiliza productos específicos para mascotas, nunca pasta dental humana',
                  'Proporciona snacks dentales funcionales como premio',
                  'Revisa regularmente la boca de tu mascota en busca de signos de problemas',
                  'Programa limpiezas profesionales cada 6-12 meses'
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{tip}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                href="https://wa.me/573150340084?text=Hola! Me gustaría recibir más consejos sobre cuidado dental"
                className="shadow-lg"
              >
                Recibir más consejos
              </Button>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Heart size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Guía de Cuidado Dental</h3>
                  <p className="text-gray-600 mb-8">Descarga nuestra guía completa gratuita en PDF</p>
                  <Button variant="outline" className="w-full">Descargar PDF</Button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-yellow-400 text-white p-4 rounded-2xl shadow-lg rotate-12"
              >
                <Sparkles size={32} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-primary-500 text-white p-4 rounded-2xl shadow-lg -rotate-12"
              >
                <Award size={32} />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Necesitas ayuda para elegir?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Nuestro equipo está aquí para ayudarte a elegir los mejores productos 
                para las necesidades específicas de tu mascota.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white border-none shadow-lg" href="https://wa.me/573150340084">
                  Consulta gratuita por WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" href="/servicios">
                  Conocer nuestros servicios
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
