
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);
    
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navItems = [
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Skills", href: "/#skills" },
        { name: "Qualification", href: "/#qualification" },
        { name: "Resume", href: "/#resume" },
        { name: "Certificates", href: "/#certificates" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
                <nav className="flex justify-between items-center p-6 md:p-8 max-w-screen-2xl mx-auto">
                    <a href="#/" className="text-2xl font-bold text-white tracking-wide">Portfolio</a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-neutral-300 hover:text-white transition-colors duration-300">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                        <a href="mailto:kagiso.thierry31@gmail.com" className="border border-neutral-400 text-neutral-200 hover:border-white hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center group">
                            Let's Talk
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                            className="text-white focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                 <div 
                    className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center animate-fade-in md:hidden"
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-6 right-6 text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    <ul className="flex flex-col items-center space-y-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.href} 
                                    className="text-2xl text-neutral-300 hover:text-emerald-400 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                     <a 
                        href="mailto:kagiso.thierry31@gmail.com" 
                        className="mt-12 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center group"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Let's Talk
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            )}
        </>
    );
};

export default Header;
