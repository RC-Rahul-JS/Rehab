import React from 'react';
import FacilityCard from '../components/FacilityCard';
import { Verified, ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

const Facilities = () => {
    const facilities = [
        { title: 'Private Patient Rooms', description: 'Comfortable, well-appointed private rooms with modern amenities for your recovery journey.', image: '/src/assets/images/patient_room_1770628431619.png' },
        { title: 'Shared Accommodation', description: 'Clean, spacious shared rooms fostering peer support and community healing.', image: '/src/assets/images/patient_room_1770628431619.png' },
        { title: 'Medical Ward', description: 'State-of-the-art medical facility with round-the-clock nursing care and monitoring.', image: '/src/assets/images/patient_room_1770628431619.png' },
        { title: 'Counseling Rooms', description: 'Private, comfortable spaces for one-on-one therapy and counseling sessions.', image: '/src/assets/images/meditation_room_1770628411323.png' },
        { title: 'Meditation Hall', description: 'Peaceful sanctuary for yoga, meditation, and mindfulness practices.', image: '/src/assets/images/meditation_room_1770628411323.png' },
        { title: 'Gym & Fitness Area', description: 'Fully equipped therapeutic exercise space promoting physical wellness.', image: '/src/assets/images/gym_fitness_1770628503062.png' },
        { title: 'Healing Garden', description: 'Beautiful outdoor walking paths, benches, and green spaces for reflection.', image: '/src/assets/images/garden_walkway_1770628455897.png' },
        { title: 'CCTV Security', description: 'Complete campus surveillance ensuring safety and security 24/7.', image: '/src/assets/images/hero_background_1770628394906.png' },
        { title: 'Nutritious Kitchen', description: 'Professional kitchen serving healthy, balanced meals tailored to recovery needs.', image: '/src/assets/images/meditation_room_1770628411323.png' },
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#4A8686]/20">
            
            {/* 1. INCREASED HERO: Large Focal Point (80vh) */}
            <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
                    alt="Facility Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
                />
                {/* No more white blur at the top - clean contrast only */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 z-10" />
                
                <div className="relative z-20 text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 mb-6">
                        <Verified className="w-3.5 h-3.5 text-[#c2ede6]" />
                        <span className="text-[9px] text-white font-black uppercase tracking-[0.4em]">5-Star Elite Infrastructure</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        Designed <span className="italic font-light text-[#c2ede6]">for</span> <br /> 
                        Deep <span className="text-white">Healing</span>
                    </h1>
                </div>
            </section>

            {/* 2. COMPRESSED GRID: Reduced padding for modern scannability */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facilities.map((facility, index) => (
                            <FacilityCard key={index} {...facility} />
                        ))}
                    </div>

                    {/* 3. COMPACT HIGHLIGHTS BANNER */}
                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A8686]/20 blur-[100px]" />
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <ShieldCheck className="text-[#c2ede6] w-8 h-8 mb-3" />
                                <p className="text-2xl font-serif text-white">100% Secure</p>
                                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Safe Environment</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Clock className="text-[#c2ede6] w-8 h-8 mb-3" />
                                <p className="text-2xl font-serif text-white">24/7 Care</p>
                                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Medical Staff</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Star className="text-[#c2ede6] w-8 h-8 mb-3" />
                                <p className="text-2xl font-serif text-white">5-Star</p>
                                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Modern Amenities</p>
                            </div>
                        </div>
                    </div>

                    {/* MINI CTA */}
                    <div className="mt-12 text-center">
                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-[#4A8686] transition-all shadow-xl"
                        >
                            Schedule a Tour <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;