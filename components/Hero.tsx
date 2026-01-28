import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    // Tăng pt từ 16 lên 32 để đẩy toàn bộ nội dung xuống thấp hơn một chút
    <section className="relative min-h-screen flex items-start justify-center px-4 pt-40 pb-20 overflow-hidden bg-black selection:bg-brand-orange/30">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        {/* Đẩy Glow xuống theo nội dung */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-orange/5 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </div>
      
      <div className="container mx-auto relative z-30 max-w-[1450px]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} // Tăng y khởi đầu để hiệu ứng trượt lên mượt hơn
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1250px] mx-auto text-center flex flex-col items-center translate-y-12 md:translate-y-16" // Thêm translate-y để xích xuống cố định
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#ff5722]" />
            <span className="text-gray-400 text-[13px] md:text-[15px] font-bold tracking-[0.25em] uppercase">
              YOU PAY <span className="text-brand-orange">NOTHING</span>, ONLY RESULT <span className="text-brand-orange">COMMISSION</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tight text-white leading-[1.2] mb-10 [text-wrap:balance]">
            We create your offer from A to Z, market it, 
            <span className="bg-gradient-to-r from-brand-orange to-orange-300 bg-clip-text text-transparent"> and scale it to over €30,000/month </span>
            in under 90 days.
          </h1>

          {/* Subheadline */}
          <p className="text-gray-500 text-base md:text-xl font-medium mb-14 leading-relaxed tracking-wide max-w-2xl opacity-80">
            We turn audiences into revenue.
          </p>

          {/* CTA Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-brand-orange/20 blur-xl rounded-full group-hover:bg-brand-orange/35 transition duration-500"></div>
            <Button variant="beam" className="relative text-base px-14 py-4.5 font-black uppercase tracking-[0.1em] shadow-xl transition-all hover:scale-[1.02]">
              Apply Now ↗
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;