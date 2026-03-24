import React from 'react';
import { 
  Wine, Pill, Cigarette, Syringe, Smartphone, Dice5, 
  ArrowRight, ShieldCheck, HeartPulse, CheckCircle2,
  Award, Medal, Building2, Verified, Heart
} from 'lucide-react';
import Stats from '../components/Stats';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const Home = () => {
  const addictions = [
    { icon: Wine, title: 'Alcohol', color: 'bg-amber-500', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600' },
    { icon: Pill, title: 'Drug', color: 'bg-red-500', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
    { icon: Cigarette, title: 'Smoking', color: 'bg-orange-600', img: 'https://images.unsplash.com/photo-1527113341617-c5ef59c34675?auto=format&fit=crop&q=80&w=600' },
    { icon: Syringe, title: 'Injectable', color: 'bg-purple-500', img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=600' },
    { icon: Smartphone, title: 'Digital', color: 'bg-blue-500', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600' },
    { icon: Dice5, title: 'Gambling', color: 'bg-green-700', img: 'https://images.unsplash.com/photo-1596838132731-160155fd195b?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans w-full overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <div className="relative w-full h-screen overflow-hidden z-0">
        <img src="/hero.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 z-20">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-serif text-white leading-[1.1]">
              Freedom <span className="italic font-light text-slate-100">from</span> Addiction<br />Starts Here
            </h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-[#4A8686] text-white px-5 py-2.5 rounded-full text-[11px] font-bold flex items-center gap-1.5">
                Get Immediate Help <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Path to Freedom Section */}
      <section className="relative overflow-visible bg-white z-40 w-full py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c2ede6]/50 via-white to-[#c2ede6]/50 z-0" />
        <div className="container mx-auto px-6 relative z-50">
          <div className="backdrop-blur-2xl bg-white/40 rounded-[1.2rem] border border-white shadow-lg p-5 md:p-6 -translate-y-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left lg:border-r border-[#4A8686]/20 lg:pr-6">
                <div className="flex items-center gap-1.5 text-[#4A8686] mb-0.5">
                  <Verified className="w-3 h-3 animate-pulse" />
                  <span className="text-[7px] font-black uppercase tracking-widest">Global Safety Standards</span>
                </div>
                <h2 className="text-lg font-serif text-gray-900">Trusted Excellence</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {[{ icon: Award, label: "ISO 9001:2015" }, { icon: Medal, label: "NABH Compliant" }, { icon: Building2, label: "Govt. Registered" }].map((cert, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 bg-white/80 rounded-lg flex items-center justify-center shadow-sm"><cert.icon className="w-4 h-4 text-[#4A8686]" /></div>
                    <p className="text-[9px] font-bold text-gray-900">{cert.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-24 mt-8 relative z-50">
            <h2 className="text-2xl md:text-[2.1rem] font-serif text-gray-900 leading-tight mb-12">
              Path <span className="text-[#4A8686] italic">to</span> Freedom
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <p className="text-[0.92rem] text-gray-700 font-light leading-relaxed">
                Overcoming addiction is a personal journey. We provide the <strong>bridge</strong> to your new life through specialized clinical care.
              </p>
              <div className="backdrop-blur-2xl bg-white/40 p-8 rounded-[1.8rem] border border-white/80 shadow-md">
                <p className="text-[0.82rem] text-gray-800 italic leading-relaxed">
                  "Our team provides evidence-based treatment in a safe environment, treating the whole person."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expert Care Section - The FOCUSED MARQUEE */}
      <section className="py-20 bg-[#f8fafc] z-10 relative overflow-hidden w-full">
        <div className="container mx-auto px-6 relative z-20 mb-12 text-center">
          <h2 className="text-xl md:text-3xl font-serif text-gray-900">Expert Care for Every Journey</h2>
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* THE "KILL" OVERLAY CARD */}
          <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[100]">
            <div className="w-[180px] md:w-[240px] h-[320px] md:h-[380px] bg-[#4A8686] rounded-[2rem] border-[6px] border-white shadow-2xl flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <ShieldCheck className="w-10 h-10 text-white mb-4" />
                <h3 className="text-white font-serif text-2xl mb-3">Recover Completely</h3>
                <p className="text-white/80 text-[10px] uppercase font-black tracking-widest mb-8">Kill Addiction<br/>Embrace Life</p>
                <button className="bg-white text-[#4A8686] px-6 py-2 rounded-full text-[10px] font-black uppercase shadow-lg">Start Now</button>
            </div>
          </div>

          {/* Marquee Wrapper with the "Focus Hover" Logic */}
          <div 
            className="relative flex overflow-x-hidden group/marquee" 
            style={{ 
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 85%, transparent 100%)', 
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 85%, transparent 100%)' 
            }}
          >
            <div className="py-10 animate-marquee flex whitespace-nowrap gap-6 pl-[220px] md:pl-[300px]">
              {[...addictions, ...addictions].map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative flex-shrink-0 w-[200px] h-[280px] rounded-2xl overflow-hidden border border-white shadow-lg transition-all duration-500 hover:-translate-y-2 group/card"
                > 
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-all duration-500 
                                 grayscale-0 
                                 group-hover/marquee:grayscale 
                                 group-hover/card:grayscale-0 
                                 group-hover/card:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                    <div className={`w-9 h-9 rounded-lg ${item.color} text-white flex items-center justify-center mb-2 shadow-lg group-hover/card:bg-white group-hover/card:text-black transition-all`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">{item.title} Addiction</h3>
                    <div className="flex items-center gap-1 text-[9px] text-[#4A8686] font-bold opacity-0 group-hover/card:opacity-100 transition-opacity mt-2 uppercase tracking-tighter">
                      Get Help <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 35s linear infinite; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}} />
      </section>
<Timeline />
      <Stats />
      
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;