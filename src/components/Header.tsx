'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Productos', href: '/productos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg p-2"
              style={{ backgroundColor: '#6395b2' }}
            >
              <Image 
                src="https://res.cloudinary.com/dge1sssip/image/upload/v1755071368/Captura_de_pantalla_2025-08-13_a_la_s_2.49.15_a.m._ridxre.png"
                alt="DentalVets Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span 
              className="text-xl"
              style={{ color: '#2a4355' }}
            >
              DentalVets
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 transition-colors"
              style={{ color: '#497b9b' }}
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:info@dentalvets.com"
              className="flex items-center space-x-2 transition-colors"
              style={{ color: '#497b9b' }}
            >
              <Mail size={16} />
              <span className="text-sm font-medium">info@dentalvets.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t mt-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-md"
                  style={{ color: '#497b9b' }}
                >
                  <Phone size={16} />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:info@dentalvets.com"
                  className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-md"
                  style={{ color: '#497b9b' }}
                >
                  <Mail size={16} />
                  <span>info@dentalvets.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
