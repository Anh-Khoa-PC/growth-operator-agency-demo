import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, Zap, Workflow } from 'lucide-react';
import { NAV_LINKS, HERO_CONTENT } from '../constants';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'why us': return <Home size={20} />;
      case 'solutions': return <LayoutGrid size={20} />;
      case 'features': return <Zap size={20} />;
      case 'process': return <Workflow size={20} />;
      default: return <Home size={20} />;
    }
  };

  return (
    <>
      {/* --- HEADER (Desktop & Logo) --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'h-16 bg-black/80 backdrop-blur-md border-b border-white/10' : 'h-24 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px] h-full flex items-center justify-between relative">
          
          {/* LOGO AREA */}
          <div className="flex items-center h-full w-32 md:w-48 relative">
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

          {/* DESKTOP NAV PILL (Ẩn trên mobile) */}
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

          {/* CTA BUTTON (Chỉ hiển thị trên PC) */}
          <div className="hidden lg:block">
            <Button variant="beam" className="px-8 py-2.5 text-sm font-bold uppercase">
              {HERO_CONTENT.cta}
            </Button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION DOCK (Chỉ điều hướng, không CTA) --- */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-[380px]">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/15 rounded-full px-8 py-4 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="flex flex-col items-center gap-1.5 text-gray-400 active:text-white active:scale-95 transition-all"
            >
              <span className="p-1">{getIcon(link.name)}</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">{link.name.split(' ')[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;