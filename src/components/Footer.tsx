import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

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
              Especialistas en salud dental canina. Profilaxis sin anestesia, sin curetas, 
              con atención a domicilio. Cuidamos la sonrisa de tu mejor amigo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/dentalvets"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/dentalvets"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/1234567890"
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
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@dentalvets.com"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>info@dentalvets.com</span>
              </a>
              <div className="flex items-center space-x-2 text-primary-100">
                <MapPin size={16} />
                <span>Servicio a domicilio</span>
              </div>
              <a
                href="https://wa.me/1234567890"
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
