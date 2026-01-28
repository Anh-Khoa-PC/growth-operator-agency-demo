import React from 'react';
import { FOOTER_CTA } from '../constants';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="min-h-[80vh] relative overflow-hidden bg-black flex items-center justify-center py-24">
      
      {/* Background Grid with Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Các đường kẻ ngang và dọc - rõ rõ mờ mờ */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_30%,transparent_100%)]"></div>
          
          {/* Lưới phụ nhỏ hơn để tạo texture ở trung tâm */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]"></div>

          {/* Hiệu ứng Glow nhẹ nhàng để làm nổi bật nội dung */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-orange/15 blur-[150px] rounded-full mix-blend-screen" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Logo Element - Đã được thu hẹp khoảng cách mb (margin-bottom) */}
          <div className="flex justify-center -mb-8 md:-mb-16"> 
              <div className="relative group">
                {/* Hiệu ứng bóng đổ rực rỡ phía sau logo */}
                <div className="absolute inset-0 bg-brand-orange/30 blur-[60px] rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Container để thực hiện việc "crop" ảnh thừa và giữ logo ở giữa */}
                <div className="relative h-40 md:h-80 w-[300px] md:w-[600px] overflow-hidden flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Creatyx Logo" 
                    /* Phóng to phần lõi logo để loại bỏ khoảng trắng dư thừa */
                    className="h-full w-full object-contain scale-[1.8] relative z-10 transition-transform duration-700 group-hover:scale-[1.9]"
                  />
                </div>
              </div>
          </div>

          <h2 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter relative leading-[1.05]">
             <span className="relative z-10">We turn audiences</span> <br />
             <span className="relative z-10 text-brand-orange drop-shadow-[0_0_30px_rgba(255,87,34,0.3)]">into revenue.</span>
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl mb-14 max-w-3xl mx-auto relative z-10 leading-relaxed">
            {FOOTER_CTA.subheadline}
          </p>
          
          <div className="flex justify-center items-center w-full">
            <Button variant="beam" className="text-2xl px-16 py-6 font-black shadow-[0_0_50px_rgba(255,87,34,0.3)] hover:shadow-brand-orange/50 transition-all duration-300">
              {FOOTER_CTA.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;