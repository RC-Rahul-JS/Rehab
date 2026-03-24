import { useState } from 'react';
import { Shield, Lock, CheckCircle, Verified, ArrowRight, PhoneCall } from 'lucide-react';

const Admission = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        addictionType: '',
        duration: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '', age: '', gender: '', addictionType: '', duration: '', phone: '', message: '',
            });
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#4A8686]/20">
            
            {/* 1. HERO SECTION: 80vh Focal Point */}
            <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
                    alt="Admission Support" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40 z-10" />
                
                <div className="relative z-20 text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                        <Verified className="w-3.5 h-3.5 text-[#c2ede6]" />
                        <span className="text-[10px] text-white font-black uppercase tracking-[0.4em]">Confidential Intake</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        Begin Your <span className="italic font-light text-[#c2ede6]">Path</span> <br /> 
                        to <span className="text-white">Freedom</span>
                    </h1>
                </div>
            </section>

            {/* 2. CONFIDENTIALITY BANNER: Slim & Modern */}
            <section className="py-6 bg-[#fcfdfe] border-y border-gray-100">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#c2ede6]/30 flex items-center justify-center">
                                <Lock size={18} className="text-[#4A8686]" />
                            </div>
                            <h3 className="font-serif text-gray-900 text-lg">100% Privacy Guarantee</h3>
                        </div>
                        <p className="text-[12px] text-gray-500 font-light max-w-xl">
                            All inquiries are handled under strict medical privacy regulations. Your data is never shared and serves only to personalize your clinical assessment.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. ADMISSION FORM: Minimalist & High Contrast */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden flex flex-col md:flex-row">
                        
                        {/* Sidebar Info */}
                        <div className="bg-slate-900 p-10 md:w-1/3 text-white relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A8686]/20 blur-[60px]" />
                            <h2 className="text-2xl font-serif mb-6 relative z-10">Intake Desk</h2>
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <p className="text-[10px] font-black text-[#c2ede6] uppercase tracking-widest mb-1">Available</p>
                                    <p className="text-sm font-light">24 Hours / 7 Days</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-[#c2ede6] uppercase tracking-widest mb-1">Direct Assessment</p>
                                    <a href="tel:+911234567890" className="text-lg font-serif hover:text-[#c2ede6] transition-colors">+91 123-456-7890</a>
                                </div>
                                <div className="pt-8 border-t border-white/10">
                                    <Shield className="text-[#c2ede6] mb-3" size={24} />
                                    <p className="text-[11px] text-white/50 leading-relaxed italic">
                                        "The first step is often the hardest, but you don't have to walk it alone."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Actual Form Section */}
                        <div className="p-10 flex-grow">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-gray-900 mb-2">Request Received</h3>
                                    <p className="text-sm text-gray-500 mb-6">Our clinical desk will reach out within the next hour.</p>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-[10px] font-black text-[#4A8686] uppercase tracking-[0.2em] border-b-2 border-[#c2ede6] hover:border-[#4A8686] transition-all"
                                    >
                                        Submit Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="md:col-span-2">
                                        <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1 mb-2 block">Full Patient Name *</label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6] transition-all" placeholder="Enter name" />
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1 mb-2 block">Age *</label>
                                        <input type="number" name="age" required value={formData.age} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6]" placeholder="Age" />
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1 mb-2 block">Gender *</label>
                                        <select name="gender" required value={formData.gender} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6]">
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1 mb-2 block">Case Background (Addiction Type) *</label>
                                        <select name="addictionType" required value={formData.addictionType} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6]">
                                            <option value="">Select primary concern</option>
                                            <option value="alcohol">Alcohol</option>
                                            <option value="drugs">Drugs</option>
                                            <option value="prescription">Prescription Meds</option>
                                            <option value="behavioral">Behavioral</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1 mb-2 block">Contact Number *</label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6]" placeholder="+91 1234567890" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1 mb-2 block">Message / Specific Needs</label>
                                        <textarea name="message" rows="3" value={formData.message} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6]" placeholder="Share any specific requirements..."></textarea>
                                    </div>

                                    <div className="md:col-span-2 pt-4">
                                        <button type="submit" className="w-full group flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-[#4A8686] transition-all">
                                            Request Clinical Intake <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY METRICS: Compressed & Minimalist */}
            <section className="py-12 bg-[#fcfdfe] border-t border-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center group">
                            <Shield className="text-[#4A8686] mb-4 transition-transform group-hover:scale-110" size={32} />
                            <h4 className="font-serif text-gray-900 text-lg mb-1">Secure Campus</h4>
                            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">24/7 Monitored</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <Verified className="text-[#4A8686] mb-4 transition-transform group-hover:scale-110" size={32} />
                            <h4 className="font-serif text-gray-900 text-lg mb-1">Licensed Staff</h4>
                            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">Certified Clinical Care</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <CheckCircle className="text-[#4A8686] mb-4 transition-transform group-hover:scale-110" size={32} />
                            <h4 className="font-serif text-gray-900 text-lg mb-1">Proven Outcome</h4>
                            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">95% Recovery Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Small Footer Disclaimer */}
            <footer className="pb-10 pt-4 text-center border-t border-gray-50">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest px-4 leading-relaxed">
                    Registered Rehabilitation Center • Admission Subject to Medical Approval <br />
                    <span className="normal-case block mt-1">Disclaimer: All inquiries are treated with 100% confidentiality under medical privacy laws.</span>
                </p>
            </footer>
        </div>
    );
};

export default Admission;