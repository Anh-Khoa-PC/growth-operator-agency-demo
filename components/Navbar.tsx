import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, Zap, Workflow, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';

// Khai báo link Typeform của bạn
const APPLY_LINK = "https://form.typeform.com/to/RgaxvJsR";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* --- HEADER --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || isOpen ? 'h-16 bg-black/80 backdrop-blur-md border-b border-white/10' : 'h-24 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px] h-full flex items-center justify-between">
          
          {/* LOGO AREA */}
          <div className="flex items-center h-full w-32 md:w-48 relative z-[110]">
            <a href="#" onClick={(e) => handleSmoothScroll(e, '#')} className="block w-full h-full relative">
              <img
                src="/logo.png"
                alt="Logo"
                className={`absolute top-1/2 left-0 -translate-y-[51%] w-auto max-w-none object-contain transition-all duration-500 ${
                  isScrolled ? 'h-[140%] md:h-[250%]' : 'h-[180%] md:h-[380%]'
                }`}
              />
            </a>
          </div>

          {/* DESKTOP NAV PILL */}
          <div className="hidden lg:flex items-center gap-10 bg-black/10 px-10 py-3 rounded-full border border-white/10 backdrop-blur-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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

          {/* RIGHT SIDE: CTA (Desktop) + Hamburger (Mobile) */}
          <div className="flex items-center gap-4 relative z-[110]">
            <div className="hidden lg:block">
              {/* Nút Apply trên PC */}
              <a href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="beam" className="px-8 py-2.5 text-sm font-bold uppercase">
                  Apply Now
                </Button>
              </a>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div className={`fixed inset-0 z-[90] bg-black transition-all duration-500 ease-in-out lg:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`text-3xl font-bold uppercase tracking-widest text-white transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`mt-4 transition-all duration-700 delay-300 ${
                isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}>
            {/* Nút Apply trên Mobile Menu */}
            <a href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="beam" className="px-10 py-4 text-base font-bold uppercase">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full" />
      </div>
    </>
  );
};

export default Navbar;