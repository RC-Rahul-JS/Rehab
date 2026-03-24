import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-emerald rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">NM</span>
                            </div>
                            <h3 className="text-white font-bold text-lg">Nasha Mukti Kendra</h3>
                        </div>
                        <p className="text-sm mb-4">
                            A trusted rehabilitation center dedicated to helping individuals overcome addiction
                            and rebuild their lives with dignity, compassion, and professional care.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="hover:text-primary-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-primary-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-primary-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-primary-400 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-primary-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-primary-400 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/admission" className="hover:text-primary-400 transition-colors text-sm">
                                    Admission Process
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-primary-400 transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Our Programs</h3>
                        <ul className="space-y-2">
                            <li className="text-sm">Alcohol De-Addiction</li>
                            <li className="text-sm">Drug Rehabilitation</li>
                            <li className="text-sm">Smoking Cessation</li>
                            <li className="text-sm">Mental Health Therapy</li>
                            <li className="text-sm">Yoga & Meditation</li>
                            <li className="text-sm">Family Counseling</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                <p className="text-sm">
                                    123 Recovery Road, Green Valley, New Delhi, India - 110001
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-white">24×7 Helpline</p>
                                    <a href="tel:+911234567890" className="text-sm hover:text-primary-400">
                                        +91 123-456-7890
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                                <a href="mailto:help@nashamuktikendra.org" className="text-sm hover:text-primary-400">
                                    help@nashamuktikendra.org
                                </a>
                            </div>
                            <div className="mt-4 p-3 bg-primary-900 bg-opacity-30 rounded-lg">
                                <p className="text-xs text-primary-300 font-semibold">Working Hours</p>
                                <p className="text-sm">Mon - Sun: 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="text-center space-y-2">
                        <p className="text-sm">
                            © {currentYear} Nasha Mukti Kendra. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-500">
                            <strong className="text-gray-400">Disclaimer:</strong> All patient information is
                            kept strictly confidential. This website is for informational purposes only and does
                            not constitute medical advice. Please consult with our medical professionals for
                            proper diagnosis and treatment.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
