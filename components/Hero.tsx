import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  // Link Typeform đồng bộ cho toàn bộ hệ thống
  const APPLY_LINK = "https://form.typeform.com/to/RgaxvJsR";

  return (
    <section className="relative min-h-screen flex items-start justify-center px-4 pt-40 pb-20 overflow-hidden bg-black selection:bg-brand-orange/30">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Lớp lưới chính */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{ 
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)' 
          }}
        />

        {/* 2. Lớp texture điểm */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:25px_25px]"
          style={{ 
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)' 
          }}
        />

        {/* 3. Glow cam mờ ảo */}
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-orange/5 blur-[140px] rounded-full mix-blend-screen opacity-50" />
      </div>
      
      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto relative z-30 max-w-[1450px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1100px] mx-auto text-center flex flex-col items-center translate-y-10 md:translate-y-14"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#ff5722]" />
            <span className="text-gray-400 text-[12px] md:text-[14px] font-bold tracking-[0.25em] uppercase">
              YOU PAY <span className="text-brand-orange">NOTHING</span>, ONLY RESULT <span className="text-brand-orange">COMMISSION</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[68px] font-black tracking-tight text-white leading-[1.25] mb-10 [text-wrap:balance]">
            We create your offer from A to Z, market it, 
            <span className="bg-gradient-to-r from-brand-orange to-orange-300 bg-clip-text text-transparent"> and scale it to over €30,000/month </span>
            in under 90 days.
          </h1>

          {/* Subheadline */}
          <p className="text-white-500 text-base md:text-lg font-medium mb-16 leading-relaxed tracking-wide max-w-xl opacity-80">
            We turn audiences into revenue.
          </p>

          {/* CTA Button - Bọc link Typeform */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-brand-orange/20 blur-xl rounded-full group-hover:bg-brand-orange/35 transition duration-500"></div>
            <a 
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <Button variant="beam" className="text-base px-14 py-4.5 font-black uppercase tracking-[0.1em] shadow-xl transition-all hover:scale-[1.02] active:scale-95">
                Apply Now ↗
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;