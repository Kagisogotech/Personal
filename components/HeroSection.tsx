
import React from 'react';
import { SocialLinks } from './SocialLinks';

interface HeroSectionProps {
    scrollY: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
    return (
        <section 
            className="h-screen flex items-center justify-center text-center relative overflow-hidden"
            style={{ willChange: 'transform' }}
        >
             <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ 
                    backgroundImage: "url('/img3-1.jpg')",
                    transform: `translateY(${scrollY * 0.5}px) scale(1.05)`,
                    filter: 'blur(4px)',
                    willChange: 'transform, filter'
                }}
            />
            <div className="z-10 relative px-4">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-anton uppercase tracking-widest mb-4">
                    Kagiso Monene<span className="text-emerald-400">.</span>
                </h1>
                <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto">
                    A tech creator turning ideas into interactive web experiences and AI-powered tools. I make learning smarter, digital solutions simpler, and projects that leave an impact. Dive in and see what's possible.
                </p>
                <div className="mt-8">
                    <SocialLinks iconSize="w-8 h-8" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
