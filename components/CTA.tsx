import React from 'react';
import { FOOTER_CTA } from '../constants';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    // Giảm min-h từ 80vh xuống 60vh để cân đối hơn
    <section className="min-h-[60vh] relative overflow-hidden bg-black flex items-center justify-center py-20">
      
      {/* Background Grid - Giữ nguyên texture sang trọng */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_30%,transparent_100%)]"></div>
          
          {/* Glow nhẹ hơn để không bị rực quá */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-orange/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo Element - Thu nhỏ lại để làm điểm nhấn nhẹ */}
          <div className="flex justify-center -mb-4 md:-mb-10"> 
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-orange/20 blur-[40px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Giảm kích thước khung logo */}
                <div className="relative h-24 md:h-44 w-[200px] md:w-[400px] overflow-hidden flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Creatyx Logo" 
                    className="h-full w-full object-contain scale-[1.5] relative z-10 transition-transform duration-700 group-hover:scale-[1.6]"
                  />
                </div>
              </div>
          </div>

          {/* Heading - Giảm size từ 8xl xuống 6xl để tinh tế hơn */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter relative leading-[1.1]">
             <span className="relative z-10">We turn audiences</span> <br />
             <span className="relative z-10 text-brand-orange">into revenue.</span>
          </h2>
          
          {/* Paragraph - Giảm size và max-width */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            {FOOTER_CTA.subheadline}
          </p>
          
          {/* Button - Thu gọn padding và text size */}
          <div className="flex justify-center items-center w-full">
            <Button variant="beam" className="text-xl px-12 py-4 font-bold shadow-[0_0_30px_rgba(255,87,34,0.2)] hover:shadow-brand-orange/40 transition-all duration-300">
              {FOOTER_CTA.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;