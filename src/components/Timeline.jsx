import React, { useState, useEffect } from 'react';
import { Check, Play, ArrowRight, Sparkles, HeartPulse, ShieldCheck } from 'lucide-react';

const Timeline = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const patientImages = [
        "https://images.unsplash.com/photo-1590033821368-7f7f469b1581?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
    ];

    const steps = [
        { title: 'Clinical Intake', description: 'Discreet medical assessment for your personalized roadmap.', icon: ShieldCheck, color: 'bg-[#4A8686]' },
        { title: 'Safe Detox', description: '24/7 supervised stabilization focusing on comfort.', icon: HeartPulse, color: 'bg-teal-600' },
        { title: 'Inner Therapy', description: 'Evidence-based sessions to heal root causes.', icon: Sparkles, color: 'bg-slate-700' },
        { title: 'Holistic Growth', description: 'Yoga and meditation to rebuild natural vitality.', icon: Check, color: 'bg-[#4A8686]' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % patientImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [patientImages.length]);

    return (
        <section className="bg-white py-12 relative overflow-hidden"> {/* Reduced py-24 to py-12 */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c2ede6]/15 skew-x-12 translate-x-20 z-0" />
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header: Compressed Spacing */}
                <div className="max-w-2xl mb-10"> {/* Reduced mb-20 to mb-10 */}
                    <div className="flex items-center gap-2 text-[#4A8686] mb-2">
                        <span className="h-[1px] w-8 bg-[#4A8686]"></span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Process</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                        A Guided Path <span className="text-[#4A8686] italic">to</span> Restoration
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center"> {/* Reduced gap-12 to gap-8 */}
                    
                    {/* LEFT SIDE: THE STEPS (Compressed) */}
                    <div className="space-y-3"> {/* Reduced space-y-6 to space-y-3 */}
                        {steps.map((step, index) => (
                            <div key={index} className="group relative flex items-center gap-4 p-4 rounded-[1.5rem] transition-all duration-500 hover:bg-[#c2ede6]/20 border border-transparent hover:border-white">
                                <div className={`flex-shrink-0 w-11 h-11 ${step.color} rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:rotate-3`}>
                                    <step.icon className="w-5 h-5" />
                                </div>
                                
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[8px] font-bold text-[#4A8686] bg-[#4A8686]/10 px-1.5 py-0.5 rounded-full uppercase">0{index + 1}</span>
                                        <h3 className="text-lg font-serif text-gray-900">{step.title}</h3>
                                    </div>
                                    <p className="text-[12px] text-gray-600 font-light leading-snug max-w-sm">
                                        {step.description}
                                    </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#4A8686] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE: COMPACT IMAGE BOX */}
                    <div className="relative flex justify-center">
                        <div className="relative w-full max-w-sm aspect-[5/4] rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white"> {/* Changed aspect from 4/5 to 5/4 */}
                            {patientImages.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt="Recovery"
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                                        idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4A8686]/60 via-transparent to-transparent opacity-50" />
                            
                            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/20 border border-white/30 p-4 rounded-[1.2rem]">
                                <p className="text-white text-[11px] font-light italic text-center">
                                    "Your recovery starts with a single step."
                                </p>
                            </div>
                        </div>

                        {/* Smaller Achievement Badge */}
                        <div className="absolute -bottom-4 -right-2 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2 border border-gray-50">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-[12px] font-serif text-gray-900 leading-none">98% Success</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA: Scaled Down */}
                <div className="mt-12 flex flex-col items-center">
                    <button className="group flex items-center gap-3 px-6 py-3 bg-[#4A8686] text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span className="text-[10px] uppercase tracking-widest">Facility Tour</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Timeline;