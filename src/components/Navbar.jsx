import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Admission', href: '/admission' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">

          {/* Brand Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <span className="text-white text-2xl font-bold tracking-wider uppercase">
              Heal<span className="text-[#4A8686]">Free</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white text-sm font-semibold tracking-wide hover:text-[#4A8686] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Call Action */}
            <a
              href="tel:+123456789"
              className="flex items-center gap-2 bg-[#4A8686] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#3d6e6e] transition-all shadow-lg"
            >
              <Phone size={16} strokeWidth={3} />
              CALL 24/7
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 text-lg font-bold border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-[#4A8686] text-white py-4 rounded-xl font-bold text-center">
            GET HELP NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;