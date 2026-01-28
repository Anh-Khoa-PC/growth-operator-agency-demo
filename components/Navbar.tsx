import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, HERO_CONTENT } from '../constants';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
        isScrolled ? 'h-16' : 'h-24'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] h-full flex items-center justify-between relative">
        
        {/* LOGO AREA - FIX LỆCH BẰNG ABSOLUTE */}
        <div className="flex items-center h-full w-32 md:w-48 relative z-50">
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, '#')}
            className="block w-full h-full relative"
          >
            <img
              src="/logo.png"
              alt="Creatyx Logo"
              /* - absolute + top-1/2 + -translate-y-1/2: Công thức vàng để căn giữa tuyệt đối theo chiều dọc.
                 - h-[250%] -> h-[350%]: Tăng độ bự tùy ý mà không lo lệch layout.
                 - left-0: Giữ sát lề trái.
              */
              className="absolute top-1/2 left-0 -translate-y-[51%] h-[180%] md:h-[380%] w-auto max-w-none object-contain transition-transform duration-500 group-hover:scale-105"
              style={{ 
                filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.15))'
              }}
            />
          </a>
        </div>

        {/* Desktop Nav - Pill căn giữa */}
        <div className="hidden lg:flex items-center gap-10 bg-black/10 px-10 py-3 rounded-full border border-white/10 backdrop-blur-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-bold text-gray-200 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block z-20">
          <Button variant="beam" className="px-8 py-2.5 text-sm font-bold uppercase">
            {HERO_CONTENT.cta}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white z-20 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/98 flex flex-col items-center justify-center gap-10 lg:hidden z-[60]">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-4xl font-black text-white uppercase"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;