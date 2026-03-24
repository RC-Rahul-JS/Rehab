import { Clock, Heart, Stethoscope, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ icon: Icon, title, description, duration, therapy, medical, counseling, image }) => {
    return (
        <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(74,134,134,0.15)] transition-all duration-500 border border-gray-100 hover:border-[#c2ede6] flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-52 overflow-hidden bg-slate-100">
                {image ? (
                    <>
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                        <Icon className="w-20 h-20 text-[#4A8686]/20" />
                    </div>
                )}

                {/* Floating icon - Themed to Teal */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-serif text-white leading-tight">{title}</h3>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-500 text-[13px] mb-6 font-light leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Details Grid - Optimized for Space */}
                <div className="space-y-2 mb-6">
                    {duration && (
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl border border-transparent group-hover:border-white group-hover:bg-white transition-all">
                            <Clock className="w-4 h-4 text-[#4A8686] flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] font-black text-[#4A8686] uppercase tracking-widest">Duration</p>
                                <p className="text-[12px] text-gray-700 font-bold">{duration}</p>
                            </div>
                        </div>
                    )}

                    {therapy && (
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl">
                            <Heart className="w-4 h-4 text-[#4A8686] flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] font-black text-[#4A8686] uppercase tracking-widest">Therapy</p>
                                <p className="text-[12px] text-gray-700 font-bold">{therapy}</p>
                            </div>
                        </div>
                    )}

                    {medical && (
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl">
                            <Stethoscope className="w-4 h-4 text-[#4A8686] flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] font-black text-[#4A8686] uppercase tracking-widest">Medical Support</p>
                                <p className="text-[12px] text-gray-700 font-bold">{medical}</p>
                            </div>
                        </div>
                    )}

                    {counseling && (
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl">
                            <Users className="w-4 h-4 text-[#4A8686] flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] font-black text-[#4A8686] uppercase tracking-widest">Counseling</p>
                                <p className="text-[12px] text-gray-700 font-bold">{counseling}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Button - Themed to Midnight Slate */}
                <Link
                    to="/admission"
                    className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#4A8686] transition-all duration-300 group/btn"
                >
                    Enroll Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ProgramCard;