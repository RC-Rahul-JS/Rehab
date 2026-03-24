import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const FacilityCard = ({ image, title, description }) => {
    return (
        <div className="group relative h-[320px] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(74,134,134,0.25)] transition-all duration-700">
            
            {/* Background Image: No more white blur over the image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' }}
            />

            {/* Premium Bottom-Heavy Gradient for Text Clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-80 transition-opacity duration-500"></div>

            {/* Hover Glass Effect */}
            <div className="absolute inset-0 bg-[#4A8686]/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="relative z-10">
                    {/* Minimalist Badge */}
                    <div className="flex items-center gap-2 mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <ShieldCheck size={12} className="text-[#c2ede6]" />
                        <span className="text-[9px] font-black text-[#c2ede6] uppercase tracking-[0.2em]">Clinical Amenity</span>
                    </div>

                    {/* Serif Title */}
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2 group-hover:mb-4 transition-all duration-500">
                        {title}
                    </h3>

                    {/* Hidden-Reveal Description */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-700 ease-in-out">
                        <p className="text-[12px] text-white/70 font-light leading-relaxed mb-2 line-clamp-2">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Floating Corner Icon */}
                <div className="absolute top-6 right-6 w-9 h-9 rounded-2xl border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-[#4A8686] group-hover:border-white transition-all duration-500 rotate-0 group-hover:rotate-[360deg]">
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;