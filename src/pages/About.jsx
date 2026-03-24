import React from 'react';
import { Users, Heart, ShieldCheck, Award, Target, Leaf, Sparkles, Verified } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#4A8686]/20">
            
            {/* 1. INCREASED HERO: High Impact & Large */}
            <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                    src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=2000" 
                    alt="Therapeutic Environment" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />
                
                <div className="relative z-20 text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 mb-4">
                        <Verified className="w-3 h-3 text-[#c2ede6]" />
                        <span className="text-[8px] text-white font-black uppercase tracking-[0.3em]">Excellence Since 2008</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
                        Restoring <span className="italic font-light text-[#c2ede6]">Hope</span>,<br /> 
                        Reclaiming <span className="text-white">Life</span>
                    </h1>
                </div>
            </section>

            {/* 2. COMPRESSED CONTENT: Reduced size by 30% */}
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Founder Section (Tightened) */}
                <section className="py-12 border-b border-gray-100"> {/* Reduced py-20 to py-12 */}
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-4">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-8 lg:pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4 leading-tight">
                                A Legacy <span className="text-[#4A8686] italic">of</span> Compassion
                            </h2>
                            <div className="space-y-4 text-gray-600 font-light text-[13px] leading-relaxed">
                                <p>
                                    Nasha Mukti Kendra was founded by <strong>Dr. Rajesh Kumar</strong> to bridge the gap between clinical excellence and human empathy. 
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                                        <p className="text-xl font-serif text-[#4A8686]">15 Yrs</p>
                                        <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Experience</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                                        <p className="text-xl font-serif text-[#4A8686]">5K+</p>
                                        <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Success Stories</p>
                                    </div>
                                </div>
                                <p>
                                    Our mission remains simple: providing every individual with the personalized care required to break the cycle of addiction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Methodology Grid (More Compact) */}
                <section className="py-12">
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { icon: ShieldCheck, title: "Detox", desc: "24/7 Medically supervised management." },
                            { icon: Users, title: "Therapy", desc: "Individual and group sessions to heal trauma." },
                            { icon: Leaf, title: "Wellness", desc: "Yoga and meditation for vital health." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#fcfdfe] p-6 rounded-[1.5rem] border border-gray-100 flex items-center gap-4 group hover:bg-[#4A8686] transition-all duration-300">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#4A8686] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-serif text-gray-900 group-hover:text-white">{item.title}</h3>
                                    <p className="text-[11px] text-gray-400 group-hover:text-white/70">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ethical Promise (Compact Banner) */}
                <section className="pb-12">
                    <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A8686]/20 blur-[50px]" />
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
                            <h2 className="text-xl font-serif text-white">Our Ethical <br/><span className="text-[#c2ede6]">Guarantee</span></h2>
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <Award size={20} className="text-[#c2ede6] mx-auto mb-2" />
                                    <p className="text-[10px] text-white uppercase tracking-widest font-bold">Proven Science</p>
                                </div>
                                <div className="text-center">
                                    <Heart size={20} className="text-[#c2ede6] mx-auto mb-2" />
                                    <p className="text-[10px] text-white uppercase tracking-widest font-bold">Patient Dignity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disclaimer (Small Footer) */}
                <footer className="pb-10 pt-4 text-center border-t border-gray-50">
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
                        Registered Healthcare Facility • Medical supervision is mandatory for all programs. <br />
                        <span className="normal-case block mt-1">Disclaimer: Information provided is for awareness, not clinical advice.</span>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default About;