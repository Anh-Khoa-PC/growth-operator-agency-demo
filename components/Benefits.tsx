import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { BENEFITS, HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';
import Button from './ui/Button';

const Benefits: React.FC = () => {
  return (
    <SectionWrapper id="why-us" className="bg-black py-12 md:py-16">
      <div className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
         <div className="mb-8">
            <span className="px-6 py-2.5 rounded-full border border-white/10 text-brand-orange text-sm font-bold tracking-widest uppercase">Why Choose Us</span>
         </div>
        
        <TextReveal className="text-3xl md:text-5xl font-bold text-white mb-4 justify-center">
          Experience The Benefits Of Our Expertise
        </TextReveal>

        <p className="text-gray-400 text-lg md:text-xl mt-2">
           With a proven track record of results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-6 mb-12">
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative p-8 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-brand-orange/30 transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden hover:bg-[#0c0c0c] min-h-[320px]"
          >
            {/* Subtle Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

            <div className="relative z-10 mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange to-[#cc5500] flex items-center justify-center shadow-lg shadow-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon && <benefit.icon className="w-10 h-10 text-white" />}
              </div>
            </div>
            
            <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors">
              {benefit.title}
            </h3>
            
            <p className="relative z-10 text-gray-400 leading-relaxed text-base">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Added CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex justify-center relative z-10"
      >
        <Button variant="beam" size="lg" className="shadow-[0_20px_50px_rgba(255,92,0,0.15)]">
          {HERO_CONTENT.cta}
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default Benefits;