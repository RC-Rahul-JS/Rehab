import { User } from 'lucide-react';

const DoctorCard = ({ image, name, qualification, specialization }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50">
                {image ? (
                    <>
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                            <User className="w-16 h-16 text-emerald-600" />
                        </div>
                    </div>
                )}

                {/* Decorative badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                    <span className="text-xs font-bold text-emerald-600">Expert</span>
                </div>
            </div>

            {/* Info Section */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {name}
                </h3>

                <div className="space-y-2">
                    <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        {qualification}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        {specialization}
                    </p>
                </div>

                {/* Decorative bottom border */}
                <div className="mt-6 pt-4 border-t-2 border-gray-100 group-hover:border-emerald-200 transition-colors">
                    <div className="flex items-center gap-2 text-emerald-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Available for consultation</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
