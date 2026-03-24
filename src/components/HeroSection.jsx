import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Mock images representing the struggle and recovery journey
    const patientImages = [
        "https://images.unsplash.com/photo-1590033821368-7f7f469b1581?auto=format&fit=crop&q=80", // Struggle
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80", // Transition
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"  // Recovery
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % patientImages.length);
        }, 4000); // Changes image every 4 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-black via-red-950 to-blue-900">
            {/* Decorative Overlay for Modern Feel */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text Content */}
                <div className="text-left space-y-6">
                    <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 px-3 py-1 rounded-full text-red-400 text-sm font-medium">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        24/7 Crisis Support Available
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Break the <span className="text-red-500">Cycle</span>. <br />
                        Reclaim Your <span className="text-blue-400">Future</span>.
                    </h1>

                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        Personalized rehabilitation for drug and alcohol dependency.
                        We provide the clinical expertise and compassionate care needed to overcome addiction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-900/20 group">
                            Start Your Recovery <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold backdrop-blur-md transition-all">
                            <Phone className="mr-2 w-5 h-5" /> Call Toll-Free
                        </button>
                    </div>
                </div>

                {/* Right Side: Dynamic Image Box */}
                <div className="relative flex justify-center items-center">
                    <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/20">
                        {/* Image Transition Effect */}
                        {patientImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="Patient Condition"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}

                        {/* Vignette/Overlay for the Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        {/* Floating Info Tag */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
                            <p className="text-white text-sm font-medium italic">
                                "There is hope beyond the pain. Every journey starts with a single step."
                            </p>
                        </div>
                    </div>

                    {/* Abstract Glow Effects Behind Image */}
                    <div className="absolute -z-10 w-64 h-64 bg-red-600/30 blur-[100px] -top-10 -left-10"></div>
                    <div className="absolute -z-10 w-64 h-64 bg-blue-600/30 blur-[100px] -bottom-10 -right-10"></div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
