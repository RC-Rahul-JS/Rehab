import React from 'react';
import { Quote, Video, Verified, ArrowRight, PlayCircle } from 'lucide-react';

const SuccessStories = () => {
    const stories = [
        {
            title: 'From Darkness to Light',
            story: "I struggled with alcohol addiction for 10 years. Every relationship, every job, every opportunity—I lost it all. But Nasha Mukti Kendra gave me a second chance. The medical team helped me through the toughest detox, the counselors taught me why I was drinking, and the aftercare program keeps me accountable. Today, I'm 2 years sober, reunited with my family, and working again.",
            name: 'Anonymous',
            age: 35,
            addiction: 'Alcohol',
            soberSince: '2 years',
        },
        {
            title: "A Mother's Second Chance",
            story: "Prescription drug addiction started innocently after surgery but spiraled out of control. I was losing my kids. This center saved my life. The compassionate staff never judged me. They treated my pain, addressed my trauma, and gave me tools to cope. I got my children back, and now I advocate for recovery.",
            name: 'Anonymous',
            age: 42,
            addiction: 'Prescription Drugs',
            soberSince: '18 months',
        },
        {
            title: 'Breaking the Chain',
            story: "Drug addiction ran in my family—I thought it was my destiny. The rehabilitation program here broke that chain. Individual therapy helped me understand generational trauma. Group sessions showed me I wasn't alone. Today I'm pursuing my degree and mentoring others.",
            name: 'Anonymous',
            age: 28,
            addiction: 'Drugs',
            soberSince: '3 years',
        },
    ];

    const familyFeedback = [
        {
            quote: 'We got our son back. The family counseling sessions taught us how to support his recovery. Forever grateful.',
            relation: 'Father of a Patient',
        },
        {
            quote: 'The transparency and regular updates gave us peace of mind. Professional, caring, effective.',
            relation: 'Spouse of a Patient',
        },
        {
            quote: "They didn't just treat my sister—they helped our whole family heal from years of pain.",
            relation: 'Sibling of a Patient',
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#4A8686]/20">
            
            {/* 1. HERO SECTION: High Impact 80vh Focal Point */}
            <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                    src="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=2000" 
                    alt="Success Stories Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
                />
                {/* DARK GRADIENT: Fixes the 'blank background' issue */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 z-10" />
                
                <div className="relative z-20 text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                        <Verified className="w-3.5 h-3.5 text-[#c2ede6]" />
                        <span className="text-[10px] text-white font-black uppercase tracking-[0.4em]">Life Transformed</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        Real Stories <br /> 
                        <span className="italic font-light text-[#c2ede6]">of</span> Recovery
                    </h1>
                </div>
            </section>

            {/* 2. JOURNEYS: Compressed & Minimalist */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-6">
                        {stories.map((story, index) => (
                            <div key={index} className="group bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-center transition-all hover:bg-white hover:shadow-xl">
                                <div className="w-12 h-12 bg-[#4A8686] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                                    <Quote className="text-white w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-3">{story.title}</h3>
                                    <p className="text-[13px] text-gray-600 font-light leading-relaxed italic mb-6">"{story.story}"</p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="text-[9px] font-black uppercase tracking-widest bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">Age: {story.age}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">Addiction: {story.addiction}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#4A8686] bg-[#c2ede6]/20 px-3 py-1.5 rounded-full">Sober Since: {story.soberSince}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. VIDEO TESTIMONIALS: Modern Grid */}
            <section className="py-14 bg-[#fcfdfe] border-y border-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-10 text-center">Video Witnesses</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-900 group cursor-pointer shadow-lg">
                                <img 
                                    src={`https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&sig=${num}`} 
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                                    alt="Testimonial thumbnail"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <PlayCircle className="text-white w-10 h-10 drop-shadow-2xl group-hover:scale-125 transition-transform duration-500" />
                                </div>
                                <div className="absolute bottom-3 left-4 z-30">
                                    <p className="text-white text-[9px] font-black uppercase tracking-widest">Story 0{num}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FAMILY FEEDBACK: Glass Cards */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-10 text-center">Family Testimonials</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {familyFeedback.map((feedback, index) => (
                            <div key={index} className="p-7 rounded-[2rem] bg-[#c2ede6]/10 border border-[#c2ede6]/30 shadow-sm transition-transform hover:-translate-y-1">
                                <p className="text-xs text-gray-700 italic mb-4 leading-relaxed">"{feedback.quote}"</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-[1px] bg-[#4A8686]/30" />
                                    <p className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest">{feedback.relation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA: Deep Slate Banner */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-slate-900 rounded-[3.5rem] p-12 relative overflow-hidden text-center group shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A8686]/20 blur-[100px]" />
                        <h2 className="text-4xl font-serif text-white mb-4 relative z-10">Your Story <span className="text-[#c2ede6] italic font-light">can be</span> Next</h2>
                        <p className="text-white/40 text-[11px] uppercase tracking-widest mb-10 relative z-10 font-bold">Begin your restoration today</p>
                        <a 
                            href="/admission" 
                            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c2ede6] text-slate-900 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl relative z-10"
                        >
                            Begin Recovery <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Small Minimalist Footer */}
            <footer className="pb-10 pt-4 text-center border-t border-gray-50">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest max-w-xl mx-auto leading-relaxed px-4">
                    All testimonials shared with patient consent. <br />
                    <span className="normal-case block mt-1">Nasha Mukti Kendra is committed to ethical transparency and patient privacy.</span>
                </p>
            </footer>
        </div>
    );
};

export default SuccessStories;