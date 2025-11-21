import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, MessageCircle, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold text-lg">DV</span>
              </div>
              <span className="text-2xl font-bold">DentalVets</span>
            </div>
            <p className="text-primary-100 mb-6 max-w-md">
              Especialistas en salud dental canina y felina. Profilaxis dental profesional para perros y gatos sin anestesia general, sin curetas y con atención a domicilio. Resultados visibles en solo 2 horas. Cuidamos la sonrisa de tu mejor amigo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dental.vets/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563836805202"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@dentalvets4?_r=1&_t=ZS-91XvSpThk2y"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/573150340084"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-primary-100 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-primary-100 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-primary-100 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="tel:+573150340084"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>+57 315 0340084</span>
              </a>
              <a
                href="mailto:dental.vetsco@gmail.com"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>dental.vetsco@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-primary-100">
                <MapPin size={16} />
                <span>Bogotá y alrededores</span>
              </div>
              <a
                href="https://wa.me/573150340084"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-8 pt-8 text-center">
          <p className="text-primary-200">
            © 2025 DentalVets. Todos los derechos reservados. | Diseñado con ❤️ para el cuidado dental canino.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
