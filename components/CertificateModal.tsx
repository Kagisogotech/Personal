
import React, { useEffect } from 'react';
import { Certificate } from '../types';

interface CertificateModalProps {
    certificate: Certificate;
    onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
        >
            <div 
                className="bg-neutral-900 rounded-lg shadow-2xl shadow-emerald-500/10 max-w-4xl w-full relative border border-neutral-800 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale flex flex-col"
                onClick={(e) => e.stopPropagation()}
                style={{ height: 'calc(100vh - 4rem)' }}
            >
                <div className="flex-grow p-2 sm:p-3">
                     <iframe 
                        src={certificate.pdfUrl}
                        title={`Certificate for ${certificate.title}`}
                        className="w-full h-full rounded-md"
                        frameBorder="0"
                    />
                </div>
                <div className="text-center p-4 border-t border-neutral-800 flex-shrink-0">
                    <h3 id="certificate-title" className="text-xl font-bold text-white">{certificate.title}</h3>
                    <p className="text-neutral-400">Issued by {certificate.issuer}</p>
                    <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 hover:underline mt-3 inline-flex items-center transition-colors text-sm">
                        Verify Certificate
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
                <button 
                    onClick={onClose} 
                    className="absolute -top-4 -right-4 h-10 w-10 bg-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Close certificate viewer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <style>{`
                @keyframes fade-in-scale {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation: fade-in-scale 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CertificateModal;
