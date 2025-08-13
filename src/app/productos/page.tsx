'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Shield, Sparkles, Award, Package, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';

export default function Productos() {
  const products = [
    {
      id: 1,
      name: 'Kit de Cepillado Dental Canino Premium',
      price: '$29.99',
      originalPrice: '$39.99',
      image: Package,
      rating: 4.9,
      reviews: 156,
      description: 'Kit completo con cepillo de dientes especial para perros, pasta dental enzimática y dedales de masaje.',
      features: [
        'Cepillo con cerdas ultra suaves',
        'Pasta dental con enzimas naturales',
        'Dedales de silicona para masaje',
        'Guía de cepillado paso a paso'
      ],
      category: 'Higiene Dental',
      bestseller: true
    },
    {
      id: 2,
      name: 'Pasta Dental Enzimática Natural',
      price: '$15.99',
      originalPrice: '$19.99',
      image: Sparkles,
      rating: 4.8,
      reviews: 89,
      description: 'Pasta dental especial con enzimas naturales que ayudan a prevenir la acumulación de placa y sarro.',
      features: [
        'Enzimas naturales activas',
        'Sabor a pollo que les encanta',
        'Sin fluoruro ni xilitol',
        'Fórmula veterinaria aprobada'
      ],
      category: 'Cuidado Preventivo'
    },
    {
      id: 3,
      name: 'Enjuague Bucal Antibacterial',
      price: '$18.99',
      originalPrice: '$24.99',
      image: Shield,
      rating: 4.7,
      reviews: 134,
      description: 'Enjuague bucal especial que elimina bacterias y refresca el aliento de tu mascota.',
      features: [
        'Fórmula antibacterial avanzada',
        'Elimina el mal aliento',
        'Fácil aplicación',
        'Sin alcohol ni químicos agresivos'
      ],
      category: 'Higiene Oral'
    },
    {
      id: 4,
      name: 'Snacks Dentales Funcionales',
      price: '$22.99',
      originalPrice: '$27.99',
      image: Heart,
      rating: 4.9,
      reviews: 201,
      description: 'Deliciosos snacks que ayudan a limpiar los dientes mientras tu perro los disfruta.',
      features: [
        'Textura abrasiva natural',
        'Ingredientes 100% naturales',
        'Ayuda a reducir el sarro',
        'Rico en vitaminas y minerales'
      ],
      category: 'Snacks Dentales',
      bestseller: true
    },
    {
      id: 5,
      name: 'Spray Dental Instantáneo',
      price: '$16.99',
      originalPrice: '$21.99',
      image: Truck,
      rating: 4.6,
      reviews: 78,
      description: 'Spray de acción rápida para mantener la higiene dental entre cepillados.',
      features: [
        'Acción instantánea',
        'Reduce bacterias orales',
        'Fácil aplicación',
        'Sabor neutro'
      ],
      category: 'Cuidado Diario'
    },
    {
      id: 6,
      name: 'Kit Completo de Cuidado Dental',
      price: '$79.99',
      originalPrice: '$99.99',
      image: Award,
      rating: 5.0,
      reviews: 45,
      description: 'Kit completo con todos nuestros productos para un cuidado dental integral.',
      features: [
        'Incluye todos los productos',
        'Ahorro del 20%',
        'Guía completa de cuidado',
        'Consulta telefónica gratuita'
      ],
      category: 'Kit Completo',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Productos para el <span className="text-primary-600">Cuidado Dental</span>
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Complementa nuestros servicios con productos especializados para mantener 
              la salud dental de tu mascota en casa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="#productos">
                Ver productos
              </Button>
              <Button variant="outline" size="lg" href="/servicios">
                Conocer servicios
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Banner */}
      <AnimatedSection className="py-8 bg-accent-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p className="text-lg font-semibold">
              🎉 Oferta especial: 20% de descuento en todos los productos | Envío gratis en compras superiores a $50
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Products Grid */}
      <section id="productos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Línea de Productos
            </h2>
            <p className="text-xl text-gray-900">
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Product Badge */}
                {(product.bestseller || product.featured) && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      product.bestseller ? 'bg-red-500' : 'bg-purple-500'
                    }`}>
                      {product.bestseller ? 'Más vendido' : 'Destacado'}
                    </span>
                  </div>
                )}
                
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <product.image size={64} className="text-primary-600" />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-3">
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
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Ahorras {parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}%
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    href={`https://wa.me/1234567890?text=Hola! Me interesa el producto: ${product.name}`}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Ordenar por WhatsApp
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestros productos?
            </h2>
            <p className="text-xl text-gray-600">
              Calidad garantizada y respaldo veterinario
            </p>
          </div>
          
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-black rounded-full mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Care Tips Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Consejos para el cuidado dental diario
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Complementa nuestros servicios profesionales con estos consejos para mantener 
                la salud dental de tu mascota entre visitas.
              </p>
              
              <div className="space-y-4">
                {[
                  'Cepilla los dientes de tu perro al menos 3 veces por semana',
                  'Utiliza productos específicos para mascotas, nunca pasta dental humana',
                  'Proporciona snacks dentales funcionales como premio',
                  'Revisa regularmente la boca de tu mascota en busca de signos de problemas',
                  'Programa limpiezas profesionales cada 6-12 meses'
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                href="https://wa.me/1234567890?text=Hola! Me gustaría recibir más consejos sobre cuidado dental"
                className="!text-black hover:!text-white"
              >
                Recibir más consejos
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-accent-700">
                  <Heart size={64} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">Guía de cuidado dental</p>
                  <p className="text-sm">Descarga gratuita</p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-full shadow-lg"
              >
                <Sparkles size={24} />
              </motion.div>
            </div>
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
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Nuestro equipo está aquí para ayudarte a elegir los mejores productos 
              para las necesidades específicas de tu mascota
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" href="https://wa.me/1234567890">
                Consulta gratuita por WhatsApp
              </Button>
              <Button size="lg" variant="outline" href="/servicios">
                Conocer nuestros servicios
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
