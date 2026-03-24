import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'How long does the treatment program last?',
            answer: 'Programs typically range from 30 to 90 days based on individual medical assessments.',
        },
        {
            question: 'Is patient information kept confidential?',
            answer: 'Yes. we maintain strict confidentiality in accordance with global medical privacy laws.',
        },
        {
            question: 'What is the cost of treatment?',
            answer: 'Costs vary by program type. Contact our admissions team for transparent pricing details.',
        },
        {
            question: 'Can family members visit during treatment?',
            answer: 'Yes, family involvement is encouraged through designated hours and counseling sessions.',
        },
    ];

    return (
        <section className="py-12 bg-white relative overflow-hidden"> {/* Reduced py-20 to py-12 */}
            {/* Subtle background blur */}
            <div className="absolute top-0 right-[-5%] w-[250px] h-[250px] bg-[#c2ede6]/15 blur-[80px] rounded-full z-0" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-start"> {/* Reduced gap */}
                    
                    {/* Left Side: Header Content (More Compact) */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-2 text-[#4A8686] mb-3">
                            <HelpCircle size={14} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Support</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight mb-4">
                            Common <span className="text-[#4A8686] italic">Questions</span>
                        </h2>
                        <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs mb-6">
                            Clarity is the first step to trust. Get the answers you need to start your journey.
                        </p>
                        <div className="bg-[#c2ede6]/20 p-4 rounded-2xl border border-white inline-block">
                            <p className="text-[9px] font-bold text-[#4A8686] uppercase tracking-tighter">Help Line</p>
                            <p className="text-base font-serif text-gray-900">+1 (800) RECOVER</p>
                        </div>
                    </div>

                    {/* Right Side: Accordion (Reduced Size) */}
                    <div className="lg:col-span-7 space-y-3"> {/* Reduced gap between items */}
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-300 rounded-[1.2rem] border ${
                                    openIndex === index 
                                    ? 'bg-[#fcfdfe] border-[#c2ede6] shadow-md shadow-[#4A8686]/5' 
                                    : 'bg-white border-gray-100 hover:border-[#c2ede6]'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                                >
                                    <span className={`text-[15px] font-serif transition-colors ${
                                        openIndex === index ? 'text-[#4A8686]' : 'text-gray-900'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                                        openIndex === index ? 'bg-[#4A8686] text-white rotate-180' : 'bg-gray-100 text-gray-400'
                                    }`}>
                                        <ChevronDown size={14} />
                                    </div>
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="px-6 pb-5">
                                        <div className="h-[1px] w-8 bg-[#4A8686]/20 mb-3" />
                                        <p className="text-gray-500 text-[12.5px] leading-relaxed font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;