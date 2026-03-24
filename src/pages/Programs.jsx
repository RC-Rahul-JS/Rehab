import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { Heart, Stethoscope, Users, Activity, Brain, Leaf, UsersRound, Shield, Verified, ArrowRight } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            icon: Heart,
            title: 'Alcohol De-Addiction',
            description: 'Comprehensive treatment program for alcohol dependency with medical detox, therapy, and aftercare support.',
            image: '/src/assets/images/meditation_room_1770628411323.png',
            duration: '30-90 days',
            therapy: 'CBT, Group Therapy, 12-Step',
            medical: '24/7 medical supervision',
            counseling: 'Individual & family counseling',
        },
        {
            icon: Stethoscope,
            title: 'Drug Rehabilitation',
            description: 'Specialized treatment for all types of drug addiction including opioids, stimulants, and prescription drugs.',
            image: '/src/assets/images/patient_room_1770628431619.png',
            duration: '60-120 days',
            therapy: 'Behavioral therapy, MAT',
            medical: 'Certified addiction specialists',
            counseling: 'Trauma-informed therapy',
        },
        {
            icon: Activity,
            title: 'Smoking Cessation',
            description: 'Evidence-based program to quit smoking with nicotine replacement therapy and behavioral support.',
            image: '/src/assets/images/garden_walkway_1770628455897.png',
            duration: '14-30 days',
            therapy: 'NRT, behavioral modification',
            medical: 'Medical monitoring',
            counseling: 'Relapse prevention',
        },
        {
            icon: Shield,
            title: 'Detox Program',
            description: 'Safe, medically supervised detoxification to manage withdrawal symptoms in a comfortable environment.',
            image: '/src/assets/images/patient_room_1770628431619.png',
            duration: '7-14 days',
            therapy: 'Medical detox',
            medical: '24/7 nursing care',
            counseling: 'Crisis intervention',
        },
        {
            icon: Brain,
            title: 'Mental Health Therapy',
            description: 'Integrated treatment for co-occurring mental health disorders like depression, anxiety, and PTSD.',
            image: '/src/assets/images/meditation_room_1770628411323.png',
            duration: '30-90 days',
            therapy: 'Psychiatric care, psychotherapy',
            medical: 'Psychiatrist on staff',
            counseling: 'Dual diagnosis treatment',
        },
        {
            icon: Leaf,
            title: 'Yoga & Meditation',
            description: 'Holistic healing through ancient practices promoting mindfulness, stress relief, and inner peace.',
            image: '/src/assets/images/meditation_room_1770628411323.png',
            duration: 'Ongoing',
            therapy: 'Mindfulness-based therapy',
            medical: 'Certified yoga instructors',
            counseling: 'Meditation guidance',
        },
        {
            icon: UsersRound,
            title: 'Family Counseling',
            description: 'Healing for the whole family with education, communication skills, and relationship rebuilding.',
            image: '/src/assets/images/garden_walkway_1770628455897.png',
            duration: 'Customized',
            therapy: 'Family systems therapy',
            medical: 'Family therapist',
            counseling: 'Group family sessions',
        },
        {
            icon: Shield,
            title: 'Relapse Prevention',
            description: 'Long-term support and strategies to maintain sobriety and prevent relapse after primary treatment.',
            image: '/src/assets/images/garden_walkway_1770628455897.png',
            duration: '6-12 months',
            therapy: 'Cognitive behavioral therapy',
            medical: 'Ongoing medical checkups',
            counseling: 'Peer support groups',
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#4A8686]/20">
            
            {/* 1. HERO SECTION: 80vh Height for Impact */}
            <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                    src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&q=80&w=2000" 
                    alt="Recovery Path" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 z-10" />
                
                <div className="relative z-20 text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                        <Verified className="w-3.5 h-3.5 text-[#c2ede6]" />
                        <span className="text-[10px] text-white font-black uppercase tracking-[0.4em]">8 Specialized Protocols</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        Our Treatment <span className="italic font-light text-[#c2ede6]">Programs</span>
                    </h1>
                </div>
            </section>

            {/* 2. PROGRAMS GRID: Reduced Padding by 30% */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programs.map((program, index) => (
                            <ProgramCard
                                key={index}
                                {...program}
                            />
                        ))}
                    </div>

                    {/* 3. CTA SECTION: Compact "Floating" Style */}
                    <div className="mt-16 max-w-5xl mx-auto">
                        <div className="bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A8686]/20 blur-[100px]" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                <div>
                                    <h3 className="text-2xl font-serif text-white mb-2">Finding the right path?</h3>
                                    <p className="text-white/50 text-[13px] font-light max-w-xs leading-relaxed">
                                        Our clinical team will help you choose the best treatment path during a free assessment.
                                    </p>
                                </div>
                                <a
                                    href="/admission"
                                    className="group flex items-center gap-3 px-8 py-4 bg-[#c2ede6] text-slate-900 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl"
                                >
                                    Get Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimalist Disclaimer Footer */}
            <footer className="pb-10 pt-4 text-center border-t border-gray-50">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
                    Nasha Mukti Kendra • Accredited Facility • Licensed Professionals <br />
                    <span className="normal-case block mt-1 text-gray-300">Disclaimer: Information provided is for awareness, not clinical advice.</span>
                </p>
            </footer>
        </div>
    );
};

export default Programs;