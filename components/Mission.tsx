import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  return (
    <SectionWrapper id="mission" className="bg-black py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">Our Mission</span>
        </motion.div>

        {/* Headline - Scaled Down */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          We Help <span className="text-brand-orange">Creators & Coaches</span> <br className="hidden md:block" />
          Scale with our <span className="text-brand-orange">done-for-you</span> <br className="hidden md:block" />
          systems and proven <br className="hidden md:block" />
          <span className="text-brand-orange">automations</span>
        </h2>

        {/* Subheadline - Scaled Down */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            <span className="bg-brand-orange text-white px-2 py-0.5 rounded text-base font-semibold mr-2 inline-block">Skip</span>
            the tech overwhelm and backend complexity. We handle everything behind the scenes so you can focus on what you do best.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a 
          href="#contact" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 text-brand-orange text-lg font-medium hover:text-white transition-colors group cursor-pointer"
        >
          Apply to Work With Us
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </motion.a>

      </div>
    </SectionWrapper>
  );
};

export default Mission;