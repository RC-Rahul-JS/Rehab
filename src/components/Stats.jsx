import { useEffect, useRef, useState } from 'react';
import { Users, TrendingUp, Award, UserCheck, Plus } from 'lucide-react';

const Stats = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    const statsData = [
        { icon: Users, value: 5000, label: 'Success Stories', description: 'Lives transformed', suffix: '+' },
        { icon: TrendingUp, value: 95, label: 'Recovery Rate', description: 'Long-term success', suffix: '%' },
        { icon: Award, value: 15, label: 'Expert Years', description: 'Clinical excellence', suffix: '+' },
        { icon: UserCheck, value: 50, label: 'Specialists', description: 'Dedicated care team', suffix: '+' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => { if (statsRef.current) observer.unobserve(statsRef.current); };
    }, [hasAnimated]);

    const CountUp = ({ end, duration, suffix }) => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            if (!hasAnimated) return;
            let startTime = null;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }, [hasAnimated, end, duration]);
        return <>{count.toLocaleString()}{suffix}</>;
    };

    return (
        <section className="relative py-16 bg-[#fcfdfe] overflow-hidden">
            {/* Soft Branding Gradients */}
            <div className="absolute top-0 left-[-10%] w-[40%] h-[400px] bg-[#c2ede6]/30 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-[-10%] w-[30%] h-[300px] bg-slate-100 blur-[100px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 text-[#4A8686] mb-3">
                            <span className="h-[1px] w-8 bg-[#4A8686]"></span>
                            <span className="text-[10px] font-black uppercase tracking-widest">Impact Report</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                            Measurable Excellence <br /> 
                            <span className="text-[#4A8686] italic font-light">in Clinical Care</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm max-w-[280px] leading-relaxed border-l border-[#4A8686]/20 pl-4">
                        Our clinical approach is backed by data, verified by outcomes, and driven by compassion.
                    </p>
                </div>

                <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {statsData.map((stat, index) => (
                        <div key={index} className="group relative">
                            {/* Subtle Card */}
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-20px_rgba(74,134,134,0.2)] transition-all duration-500 hover:-translate-y-1">
                                
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 bg-[#c2ede6]/40 rounded-xl flex items-center justify-center text-[#4A8686] group-hover:scale-110 transition-transform">
                                        <stat.icon size={20} />
                                    </div>
                                    <Plus className="text-gray-200 w-4 h-4" />
                                </div>

                                <div className="text-3xl md:text-4xl font-serif text-gray-900 mb-1">
                                    {hasAnimated ? (
                                        <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                                    ) : "0"}
                                </div>

                                <h3 className="text-[11px] font-black uppercase tracking-widest text-[#4A8686] mb-2">
                                    {stat.label}
                                </h3>
                                
                                <p className="text-[12px] text-gray-400 font-light leading-snug">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;