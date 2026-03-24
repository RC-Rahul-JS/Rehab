import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Verified, ArrowRight, PhoneCall } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
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
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#4A8686]/20">
            
            {/* 1. HERO SECTION: High Impact 80vh Focal Point */}
            <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                    src="https://images.unsplash.com/photo-1516387792267-4095219f1d9d?auto=format&fit=crop&q=80&w=2000" 
                    alt="Contact Support" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 z-10" />
                
                <div className="relative z-20 text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                        <Verified className="w-3.5 h-3.5 text-[#c2ede6]" />
                        <span className="text-[10px] text-white font-black uppercase tracking-[0.4em]">24/7 Global Support</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        Reach <span className="italic font-light text-[#c2ede6]">Out</span> <br /> 
                        to <span className="text-white">Freedom</span>
                    </h1>
                </div>
            </section>

            {/* 2. CONTACT HUB: Compact Sidebar & Form */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Sidebar: Information Cards */}
                        <div className="lg:col-span-4 space-y-4">
                            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A8686]/20 blur-[50px]" />
                                <h2 className="text-2xl font-serif mb-6 relative z-10 text-[#c2ede6]">Contact Details</h2>
                                
                                <div className="space-y-6 relative z-10">
                                    <div className="flex gap-4">
                                        <MapPin className="text-[#c2ede6] shrink-0" size={20} />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Location</p>
                                            <p className="text-sm font-light leading-relaxed">123 Recovery Road, Green Valley, New Delhi - 110001</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Phone className="text-[#c2ede6] shrink-0" size={20} />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Helpline</p>
                                            <a href="tel:+911234567890" className="text-lg font-serif hover:text-[#c2ede6] transition-colors">+91 123-456-7890</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Mail className="text-[#c2ede6] shrink-0" size={20} />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email</p>
                                            <a href="mailto:help@nashamuktikendra.org" className="text-sm font-light hover:text-[#c2ede6] transition-colors">help@nashamuktikendra.org</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" 
                               className="flex items-center justify-between p-6 bg-[#c2ede6]/20 border border-[#c2ede6]/30 rounded-[2rem] group hover:bg-[#c2ede6]/40 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#4A8686] shadow-sm">
                                        <MessageCircle size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest">WhatsApp</p>
                                        <p className="text-sm font-bold text-slate-900">Instant Support</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-[#4A8686] group-hover:translate-x-1 transition-transform" size={18} />
                            </a>
                        </div>

                        {/* Main Contact Form */}
                        <div className="lg:col-span-8 bg-white rounded-[3rem] border border-gray-100 shadow-2xl p-8 md:p-12">
                            {submitted ? (
                                <div className="text-center py-16">
                                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-3xl font-serif text-gray-900 mb-2">Message Sent</h3>
                                    <p className="text-gray-500 mb-8">We will connect with you within 24 hours.</p>
                                    <button onClick={() => setSubmitted(false)} className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest border-b-2 border-[#c2ede6] hover:border-[#4A8686] transition-all">Send Another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h2 className="text-3xl font-serif text-gray-900 mb-8">Send us a Message</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1">Full Name *</label>
                                            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6] transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1">Email Address *</label>
                                            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6] transition-all" placeholder="john@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1">Phone Number *</label>
                                            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6] transition-all" placeholder="+91" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1">Subject *</label>
                                            <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6] transition-all">
                                                <option value="">Choose Inquiry Type</option>
                                                <option value="admission">Admission</option>
                                                <option value="visit">Schedule Visit</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-[#4A8686] uppercase tracking-widest ml-1">Your Message *</label>
                                        <textarea name="message" rows="4" required value={formData.message} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#c2ede6] transition-all" placeholder="How can we support you?"></textarea>
                                    </div>
                                    <button type="submit" className="w-full group flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-[#4A8686] transition-all">
                                        Submit Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. INTERACTIVE MAP: Full Bleed Compact */}
            <section className="px-6 mb-14">
                <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden border border-gray-100 shadow-lg aspect-[21/9]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.211111111111!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b3476ff93%3A0x190a97df7f70315d!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625060000000!5m2!1sen!2sin"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map"
                    ></iframe>
                </div>
            </section>

            {/* 4. EMERGENCY ALERT: High Impact Red Banner */}
            <section className="py-12 bg-red-50 border-y border-red-100">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-serif text-red-900 mb-4">Immediate Assistance Required?</h3>
                    <p className="text-sm text-red-700/80 mb-8 max-w-xl mx-auto">If you or a loved one is in an active crisis, please do not wait for a form response. Call our emergency helpline now.</p>
                    <a href="tel:+911234567890" className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest shadow-xl shadow-red-200 hover:bg-red-700 transition-all">
                        <PhoneCall size={18} /> Emergency: +91 123-456-7890
                    </a>
                </div>
            </section>

            {/* Minimalist Footer Disclaimer */}
            <footer className="pb-10 pt-4 text-center border-t border-gray-50">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest px-4 leading-relaxed">
                    Licensed Clinical Facility • Nasha Mukti Kendra 2026 • 100% Privacy Protected
                </p>
            </footer>
        </div>
    );
};

export default Contact;