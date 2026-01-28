import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms for depth
  const bgY = useTransform(scrollY, [0, 1000], [0, 400]);
  const gridY = useTransform(scrollY, [0, 1000], [0, 200]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Handle Badge Logic - Updated for simple text
  const badgeFullText = HERO_CONTENT.badge;

  const renderBadgeContent = (text: string) => {
    // Check if it matches the specific string to apply highlighting
    if (text === "YOU PAY NOTHING, ONLY RESULT COMMISSION") {
      return (
        <>
          YOU PAY <span className="text-brand-orange">NOTHING</span>, ONLY RESULT <span className="text-brand-orange">COMMISSION</span>
        </>
      );
    }
    // Fallback for other texts
    return text;
  };

  return (
    // Reduced top padding and increased bottom padding to visually lift the content center
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32 md:pt-24 md:pb-40 overflow-hidden bg-black selection:bg-brand-orange/30">
      {/* Dynamic Background with Parallax */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-black to-black opacity-80" 
      />
      
      {/* Moving Grid - Made subtler */}
      <motion.div 
        style={{ y: gridY, opacity }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Container */}
      <div className="container mx-auto relative z-10 max-w-[1200px]">
        <motion.div 
          style={{ y: contentY }} 
          className="max-w-[1000px] mx-auto text-center flex flex-col items-center justify-center"
        >
            {/* Badge - Premium Styling */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0a0a] border border-white/10 backdrop-blur-xl mb-6 hover:border-brand-orange/20 transition-all shadow-[0_0_30px_rgba(0,0,0,0.6)] group cursor-default"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-orange shadow-[0_0_10px_#ff6b00]"></span>
                </span>
                <span className="text-gray-200 text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                  {renderBadgeContent(badgeFullText)}
                </span>
              </div>
            </motion.div>

            {/* Headline - Split into 3 lines */}
            <div className="flex flex-col items-center justify-center mb-6 mx-auto w-full relative z-20">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-center max-w-6xl mx-auto [text-wrap:balance]"
              >
                <span className="block mb-1 text-white">{HERO_CONTENT.headlinePart1}</span>
                <span className="block mb-2 text-white">{HERO_CONTENT.headlinePart2}</span>
                <span className="bg-gradient-to-r from-[#FF5C00] via-[#FF8F40] to-white bg-clip-text text-transparent box-decoration-clone inline-block">
                   {HERO_CONTENT.headlinePart3}
                </span>
              </motion.h1>
            </div>

            {/* Subtext Container - Reduced Size & Spacing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative mb-8 max-w-2xl mx-auto"
            >
               <div className="inline-block bg-[#050505] border border-white/10 rounded-full px-5 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                   <p className="text-gray-300 text-sm md:text-base font-medium leading-tight">
                      {HERO_CONTENT.subheadline}
                   </p>
               </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center relative z-10"
            >
              <Button variant="beam" className="text-sm md:text-base px-8 py-4 shadow-[0_20px_50px_rgba(255,92,0,0.1)]">
                {HERO_CONTENT.cta}
              </Button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;