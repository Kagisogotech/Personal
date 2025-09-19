
import React from 'react';

interface CertificateCardProps {
    imageUrl: string;
    title: string;
    onClick: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ imageUrl, title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="group block w-full text-left overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
            aria-label={`View certificate for ${title}`}
        >
            <img
                src={imageUrl}
                alt=""
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
        </button>
    );
};

export default CertificateCard;
