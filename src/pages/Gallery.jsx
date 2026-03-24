import { useState } from 'react';
import { Camera, Verified, Clock, ArrowRight, Expand } from 'lucide-react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('all');

    const images = [
        { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', category: 'facilities', title: 'Private Sanctuary' },
        { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800', category: 'facilities', title: 'Meditation Hall' },
        { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800', category: 'facilities', title: 'Therapeutic Suite' },
        { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800', category: 'facilities', title: 'Healing Garden' },
        { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', category: 'facilities', title: 'Fitness Studio' },
        { src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800', category: 'activities', title: 'Morning Yoga' },
        { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', category: 'activities', title: 'Group Discovery' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', category: 'events', title: 'Recovery Seminar' },
    ];

    const filteredImages = activeTab === 'all'
        ? images
        : images.filter(img => img.category === activeTab);

    const schedule = [
        { time: '06:00 AM', task: 'Morning Meditation' },
        { time: '09:00 AM', task: 'Clinical Group Therapy' },
        { time: '12:00 PM', task: 'Nutritious Lunch' },
        { time: '04:00 PM', task: 'Holistic Yoga & Fitness' },
        { time: '08:00 PM', task: 'Reflective Peer Support' },
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#4A8686]/20">
            
            {/* 1. CLEAN HERO (80vh): No White Blur, Direct Image Impact */}
            <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                    src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&q=80&w=2000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
                    alt="Gallery Background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40 z-10" />
                
                <div className="relative z-20 text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                        <Camera className="w-3.5 h-3.5 text-[#c2ede6]" />
                        <span className="text-[10px] text-white font-black uppercase tracking-[0.4em]">Visual Journey</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        A Space <span className="italic font-light text-[#c2ede6]">for</span> <br /> 
                        Quiet <span className="text-white">Reflection</span>
                    </h1>
                </div>
            </section>

            {/* 2. FIXED FLOATING FILTER BAR: Small, Minimalist, Fixed at Top */}
            <div className="sticky top-0 z-[100] w-full flex justify-center py-4 bg-white/60 backdrop-blur-xl border-b border-gray-100">
                <div className="flex bg-gray-100/50 p-1.5 rounded-full border border-gray-200 shadow-sm">
                    {['all', 'facilities', 'activities', 'events'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                                activeTab === tab
                                ? 'bg-[#4A8686] text-white shadow-lg'
                                : 'text-gray-400 hover:text-gray-900'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. MASONRY GRID: Compressed for Modern Scannability */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative break-inside-avoid rounded-[2.5rem] overflow-hidden group shadow-md hover:shadow-[0_40px_80px_-15px_rgba(74,134,134,0.3)] transition-all duration-700"
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                />
                                {/* Modern Overlay with Icon */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div>
                                            <p className="text-[#c2ede6] text-[9px] font-black uppercase tracking-widest mb-1">{image.category}</p>
                                            <h3 className="text-white font-serif text-xl">{image.title}</h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                            <Expand size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. COMPACT MINIMALIST SCHEDULE */}
            <section className="py-16 bg-[#fcfdfe] border-t border-gray-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-serif text-gray-900">The Daily Path</h2>
                            <p className="text-gray-500 text-sm italic font-light">A structured rhythm for lasting recovery.</p>
                        </div>
                        <div className="h-[1px] flex-1 bg-gray-200 mx-8 hidden md:block" />
                    </div>

                    <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm">
                        <div className="space-y-6">
                            {schedule.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-8 group">
                                    <div className="w-20 text-[10px] font-black text-[#4A8686] uppercase tracking-widest shrink-0">
                                        {item.time}
                                    </div>
                                    <div className="h-[1px] flex-1 bg-gray-100 group-hover:bg-[#4A8686]/30 transition-colors" />
                                    <div className="text-[13px] font-light text-gray-500 group-hover:text-gray-900 transition-colors">
                                        {item.task}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#4A8686] transition-all shadow-xl">
                            Schedule Your Visit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;