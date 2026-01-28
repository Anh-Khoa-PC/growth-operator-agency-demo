import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-12 pb-16 overflow-hidden bg-black selection:bg-brand-orange/30">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-orange/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>
      
      <div className="container mx-auto relative z-20 max-w-[1400px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[900px] mx-auto text-center flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse shadow-[0_0_10px_#ff5722]" />
            <span className="text-gray-400 text-[10px] font-black tracking-[0.25em] uppercase">
              YOU PAY <span className="text-brand-orange">NOTHING</span>, ONLY RESULT <span className="text-brand-orange">COMMISSION</span>
            </span>
          </div>

          {/* Headline - Đã tăng leading và nới tracking */}
          <h1 className="text-5xl md:text-7xl lg:text-[72px] font-black tracking-tight text-white leading-[1.15] mb-8 [text-wrap:balance]">
            We create your offer from A to Z, market it, 
            <span className="bg-gradient-to-r from-brand-orange to-orange-300 bg-clip-text text-transparent"> and scale it to over €30,000/month </span>
            in under 90 days.
          </h1>

          {/* Subheadline */}
          <p className="text-white-900 text-base md:text-lg font-medium mb-12 opacity-80 tracking-wide">
            We turn audiences into revenue.
          </p>

          {/* CTA Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-brand-orange/20 blur-xl rounded-full group-hover:bg-brand-orange/40 transition duration-500"></div>
            <Button variant="beam" className="relative text-base px-12 py-4 font-black uppercase tracking-[0.1em] shadow-2xl">
              Apply Now ↗
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;