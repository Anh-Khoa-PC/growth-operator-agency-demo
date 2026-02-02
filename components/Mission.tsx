import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  // Link Typeform của bạn
  const APPLY_LINK = "https://form.typeform.com/to/RgaxvJsR";

  return (
    <SectionWrapper id="mission" className="bg-black py-20 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-10"
        >
          <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Our Mission</span>
        </motion.div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.15] tracking-tight">
          We Help <span className="text-brand-orange">Creators & Coaches</span> <br className="hidden md:block" />
          Scale with our <span className="text-brand-orange">done-for-you</span> <br className="hidden md:block" />
          systems and proven <span className="text-brand-orange">automations</span>
        </h2>

        {/* Subheadline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-gray-400 text-base md:text-xl leading-relaxed opacity-90 font-medium">
            <span className="text-brand-orange font-bold mr-1.5">Skip</span>
            the tech overwhelm and backend complexity. We handle everything behind the scenes so you can focus on what you do best.
          </p>
        </motion.div>

        {/* CTA - Cập nhật link Typeform tại đây */}
        <motion.a 
          href={APPLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-flex items-center gap-2.5 text-brand-orange text-lg font-black hover:text-white transition-all group cursor-pointer border-b-2 border-brand-orange/20 pb-1.5"
        >
          Apply to Work With Us
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </motion.a>

      </div>
    </SectionWrapper>
  );
};

export default Mission;