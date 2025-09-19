
import React from 'react';
import { Certificate } from '../types';
import CertificateCard from './CertificateCard';

interface CertificatesSectionProps {
    certificates: Certificate[];
    visibleCertificates: Certificate[];
    showAllCertificates: boolean;
    setShowAllCertificates: (show: boolean) => void;
    setSelectedCertificate: (certificate: Certificate) => void;
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ 
    certificates,
    visibleCertificates, 
    showAllCertificates, 
    setShowAllCertificates, 
    setSelectedCertificate 
}) => {
    return (
        <section id="certificates" className="py-20 md:py-32 bg-neutral-900/50">
            <div className="max-w-screen-xl mx-auto px-8">
                <h2 className="text-4xl md:text-6xl font-anton uppercase text-center mb-16">Certificates & Achievements</h2>
                <div className={`grid gap-8 ${showAllCertificates ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}>
                     {visibleCertificates.map((cert) => (
                        <CertificateCard
                            key={cert.title}
                            imageUrl={cert.imageUrl}
                            title={cert.title}
                            onClick={() => setSelectedCertificate(cert)}
                        />
                    ))}
                </div>
                {certificates.length > 3 && (
                     <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllCertificates(!showAllCertificates)}
                            className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center group mx-auto"
                        >
                            {showAllCertificates ? 'See Less' : 'See More'}
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-2 transform transition-transform ${showAllCertificates ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CertificatesSection;
