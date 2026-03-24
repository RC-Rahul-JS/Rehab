import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CTASection = ({ sticky = false }) => {
    return (
        <section className={`w-full flex justify-center transition-all duration-500 ${
            sticky ? 'fixed bottom-6 z-50 px-4' : 'py-10 bg-white'
        }`}>
            <div className={`flex flex-col md:flex-row items-center gap-4 p-2 pl-6 pr-2 rounded-[2rem] border transition-all
                ${sticky 
                    ? 'bg-white/90 backdrop-blur-xl border-gray-100 shadow-xl' 
                    : 'bg-gray-50/50 border-gray-200'
                }`}
            >
                {/* Minimalist Info */}
                <div className="flex items-center gap-3 pr-4 border-b md:border-b-0 md:border-r border-gray-200 py-2 md:py-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-serif text-gray-800 font-medium whitespace-nowrap">
                        Support is <span className="italic text-[#4A8686]">online</span>
                    </span>
                </div>

                {/* Compact Actions */}
                <div className="flex items-center gap-2">
                    {/* Call Icon-Only on Mobile, Small Text on Desktop */}
                    <a
                        href="tel:+911234567890"
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#4A8686] text-white rounded-full hover:bg-slate-800 transition-all shadow-sm"
                    >
                        <Phone size={14} fill="currentColor" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Call</span>
                    </a>

                    {/* WhatsApp Discreet Button */}
                    <a
                        href="https://wa.me/911234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 text-gray-600 rounded-full hover:border-[#4A8686] hover:text-[#4A8686] transition-all"
                    >
                        <MessageCircle size={16} />
                    </a>

                    {/* Minimalist "More" Link */}
                    {!sticky && (
                        <button className="hidden md:flex items-center gap-1 px-3 text-[10px] font-bold text-gray-400 uppercase hover:text-gray-900 transition-colors">
                            Help <ArrowRight size={12} />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CTASection;