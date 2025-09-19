
import React, { useState, useEffect, useRef } from 'react';

// --- INTERFACES ---
interface Certificate {
    title: string;
    issuer: string;
    imageUrl: string;
    pdfUrl: string;
    verificationUrl: string;
}

interface Skill {
    name: string;
    level: number;
}


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [aboutParallaxY, setAboutParallaxY] = useState(0);
    const [activeSkillTab, setActiveSkillTab] = useState('frontend');
    const skillsSectionRef = useRef<HTMLElement>(null);
    const aboutSectionRef = useRef<HTMLElement>(null);
    const [skillsAreVisible, setSkillsAreVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // Parallax for About section
            if (aboutSectionRef.current) {
                const elementTop = aboutSectionRef.current.offsetTop;
                const relativeScroll = window.scrollY - elementTop;
                setAboutParallaxY(relativeScroll * 0.3);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const element = skillsSectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSkillsAreVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, 3);

    return (
        <div className="bg-black text-white">
            <Header />

            <main>
                {/* --- HERO SECTION --- */}
                <section 
                    className="h-screen flex items-center justify-center text-center relative overflow-hidden"
                    style={{ willChange: 'transform' }}
                >
                     <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                        style={{ 
                            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop')",
                            transform: `translateY(${scrollY * 0.5}px)`,
                            willChange: 'transform'
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

                {/* --- ABOUT SECTION --- */}
                <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={aboutSectionRef}>
                    <div 
                        className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center opacity-10"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop')",
                            transform: `translateY(${aboutParallaxY}px)`,
                             willChange: 'transform'
                        }}
                    />
                    <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-anton uppercase mb-6">Who is Kagiso?</h2>
                            <p className="text-neutral-400 mb-4">
                                I'm Kagiso 😁, a tech enthusiast with a passion for creating practical digital solutions. I specialize in front-end development and educational content generation using AI. My projects focus on turning complex problems into user-friendly experiences, from interactive web applications to smart tools that make learning easier.
                            </p>
                            <p className="text-neutral-400">
                                I'm constantly exploring new technologies and innovative approaches to help people learn, create, and engage with digital content in meaningful ways.
                            </p>
                        </div>
                        <div className="relative h-96">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="Team collaborating" className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded-lg shadow-2xl" />
                            <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800&auto=format&fit=crop" alt="Creative workspace" className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-lg border-8 border-black" />
                        </div>
                    </div>
                </section>

                {/* --- SKILLS SECTION --- */}
                <section id="skills" className="py-20 md:py-32" ref={skillsSectionRef}>
                    <div className="max-w-screen-xl mx-auto px-8">
                        <h2 className="text-4xl md:text-6xl font-anton uppercase mb-12 text-center">Technical Skills</h2>
                        <div className="flex justify-center space-x-4 mb-10">
                            <button
                                onClick={() => setActiveSkillTab('frontend')}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeSkillTab === 'frontend'
                                        ? 'bg-emerald-500 text-black'
                                        : 'border border-neutral-600 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                                }`}
                            >
                                Front-End
                            </button>
                            <button
                                onClick={() => setActiveSkillTab('backend')}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeSkillTab === 'backend'
                                        ? 'bg-emerald-500 text-black'
                                        : 'border border-neutral-600 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                                }`}
                            >
                                Back-End
                            </button>
                        </div>

                        <div className="mt-8">
                            {activeSkillTab === 'frontend' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-fade-in">
                                    {frontendSkills.map(skill => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-base font-medium text-neutral-300">{skill.name}</span>
                                                <span className="text-sm font-medium text-neutral-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-neutral-700 rounded-full h-2.5">
                                                <div 
                                                    className="bg-emerald-500 h-2.5 rounded-full"
                                                    style={{ 
                                                        width: skillsAreVisible ? `${skill.level}%` : '0%',
                                                        transition: 'width 1s ease-out'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeSkillTab === 'backend' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-fade-in">
                                    {backendSkills.map(skill => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-base font-medium text-neutral-300">{skill.name}</span>
                                                <span className="text-sm font-medium text-neutral-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-neutral-700 rounded-full h-2.5">
                                                 <div 
                                                    className="bg-emerald-500 h-2.5 rounded-full"
                                                    style={{ 
                                                        width: skillsAreVisible ? `${skill.level}%` : '0%',
                                                        transition: 'width 1s ease-out'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                
                {/* --- RESUME SECTION --- */}
                <section id="resume" className="py-20 md:py-32 bg-neutral-900/50">
                    <div className="max-w-screen-md mx-auto px-8 text-center">
                        <h2 className="text-4xl md:text-6xl font-anton uppercase mb-16">My Resume</h2>
                        <div className="mb-10">
                             <img 
                                src="https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-resume/resume-preview.png"
                                alt="A preview of Kagiso Monene's resume"
                                className="rounded-lg shadow-2xl border-4 border-neutral-800 mx-auto w-full max-w-lg"
                            />
                        </div>
                        <a 
                            href="https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-resume/Kagiso_Monene_Resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center group mx-auto w-fit"
                        >
                            Download Resume
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </section>


                {/* --- PORTFOLIO SECTION --- */}
                <section id="portfolio" className="py-20 md:py-32">
                    <div className="max-w-screen-xl mx-auto px-8">
                        <h2 className="text-4xl md:text-6xl font-anton uppercase text-center mb-16">Featured projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects.map((project) => (
                                <ProjectCard key={project.title} {...project} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CERTIFICATES SECTION --- */}
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

                <ContactSection />

            </main>

            <Footer />

            {selectedCertificate && (
                <CertificateModal
                    certificate={selectedCertificate}
                    onClose={() => setSelectedCertificate(null)}
                />
            )}
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};


// --- COMPONENTS ---

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

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

    const navItems = [
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Resume", href: "/#resume" },
        { name: "Certificates", href: "/#certificates" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
            <nav className="flex justify-between items-center p-8 md:p-12 max-w-screen-2xl mx-auto">
                <a href="#/" className="text-2xl font-bold text-white tracking-wide">Portfolio</a>
                <div className="flex items-center space-x-8">
                    <ul className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="text-neutral-300 hover:text-white transition-colors duration-300">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <a href="mailto:kagiso.monene@example.com" className="border border-neutral-400 text-neutral-200 hover:border-white hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center group">
                        Let's Talk
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </nav>
        </header>
    );
};

const SocialLinks: React.FC<{ iconSize?: string }> = ({ iconSize = 'w-8 h-8' }) => (
    <div className="flex justify-center space-x-6">
        <a href="https://github.com/kagisogotech" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
            <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/kagiso-monene/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
            <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        </a>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900/50 py-12">
            <div className="max-w-screen-xl mx-auto px-8 text-center text-neutral-400">
                 <div className="mb-6">
                    <SocialLinks iconSize="w-6 h-6" />
                </div>
                <p>&copy; {new Date().getFullYear()} Kagiso. All Rights Reserved.</p>
                <p className="text-sm mt-2">Designed with passion by a creative soul.</p>
            </div>
        </footer>
    );
};

const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string; href: string; }> = ({ title, description, imageUrl, href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="overflow-hidden rounded-lg mb-4">
                <img src={imageUrl} alt={title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-neutral-400 text-sm">{description}</p>
        </a>
    );
};

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
        const body = encodeURIComponent(
`You've received a new message from your portfolio contact form.

Here are the details:
Name: ${name}
Email: ${email}
Message:
${message}
`
        );

        // This creates a mailto link and opens the user's default email client
        window.location.href = `mailto:kagiso.thierry31@gmail.com?subject=${subject}&body=${body}`;
        
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="max-w-screen-md mx-auto px-8">
                <h2 className="text-4xl md:text-6xl font-anton uppercase text-center mb-16">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full bg-neutral-800 border border-neutral-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            placeholder="Your Name"
                        />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full bg-neutral-800 border border-neutral-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full bg-neutral-800 border border-neutral-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            placeholder="How can I help you?"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-10 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center group mx-auto"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                {status === 'success' && (
                    <div className="mt-6 text-center text-emerald-400 bg-emerald-900/50 p-4 rounded-lg animate-fade-in">
                        Thank you for your message! I'll get back to you soon.
                    </div>
                )}
            </div>
        </section>
    );
};

const CertificateModal: React.FC<{ certificate: Certificate; onClose: () => void; }> = ({ certificate, onClose }) => {
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


const CertificateCard: React.FC<{ imageUrl: string; title: string; onClick: () => void; }> = ({ imageUrl, title, onClick }) => {
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

// --- DATA ---

const frontendSkills: Skill[] = [
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React & Next.js', level: 92 },
    { name: 'Tailwind CSS', level: 98 },
    { name: 'Framer Motion', level: 80 },
];

const backendSkills: Skill[] = [
    { name: 'Node.js & Express', level: 88 },
    { name: 'Python & Flask', level: 82 },
    { name: 'REST & GraphQL APIs', level: 90 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'MongoDB', level: 75 },
    { name: 'Firebase', level: 85 },
];

const projects = [
  {
    title: 'AI Resume Builder',
    description: 'An intelligent tool to help users craft the perfect resume, with AI-powered suggestions and professional templates.',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop',
    href: 'https://kagisogotech.github.io/Resumebuilder/welcome.html',
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'A web application that analyzes text to determine its emotional tone, providing insights for businesses and researchers.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    href: 'https://kagisogotech.github.io/SentimentAnalysis/',
  },
  {
    title: 'AI Study Buddy',
    description: 'An interactive learning companion that simplifies complex topics and makes studying more engaging and effective.',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=800&auto=format&fit=crop',
    href: 'https://ai-study-buddy-bmwm.vercel.app/',
  },
];

const certificates: Certificate[] = [
  {
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/deeplearning-ai.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/deeplearning-ai.pdf',
    verificationUrl: 'https://coursera.org/verify/SU6A371G886I',
  },
  {
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI & AWS',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/aws-deeplearning-gen-ai.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/aws-deeplearning-gen-ai.pdf',
    verificationUrl: 'https://coursera.org/verify/FPMK22ICO8M6',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/google-cloud-intro-gen-ai.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/google-cloud-intro-gen-ai.pdf',
    verificationUrl: 'https://coursera.org/verify/DU788WB3L8E9',
  },
  {
    title: 'Introduction to Responsible AI',
    issuer: 'Google Cloud',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/google-cloud-responsible-ai.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/google-cloud-responsible-ai.pdf',
    verificationUrl: 'https://coursera.org/verify/GE7AG5VWJAOV',
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/ibm-intro-to-ai.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/ibm-intro-to-ai.pdf',
    verificationUrl: 'https://coursera.org/verify/NC51584RM0V9',
  },
   {
    title: 'Building AI Powered Chatbots Without Programming',
    issuer: 'IBM',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/ibm-chatbots.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/ibm-chatbots.pdf',
    verificationUrl: 'https://coursera.org/verify/4SBEV5277R1F',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/ibm-python-data-science-ai-dev.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/ibm-python-data-science-ai-dev.pdf',
    verificationUrl: 'https://coursera.org/verify/0V8W67U7MRGT',
  },
  {
    title: 'Trustworthy AI: Managing Bias, Ethics, and Accountability',
    issuer: 'Johns Hopkins University',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/jhu-trustworthy-ai.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/jhu-trustworthy-ai.pdf',
    verificationUrl: 'https://coursera.org/verify/5VHKGBAH1VA5',
  },
  {
    title: 'AI Foundations: Prompt Engineering with ChatGPT',
    issuer: 'Arizona State University',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/asu-prompt-engineering.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/asu-prompt-engineering.pdf',
    verificationUrl: 'https://coursera.org/verify/OWN22PYVQKJO',
  },
  {
    title: 'Artificial Intelligence on Microsoft Azure',
    issuer: 'Microsoft',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/microsoft-azure.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/microsoft-azure.pdf',
    verificationUrl: 'https://coursera.org/verify/3R2OFRXMFR50',
  },
  {
    title: 'AI Essentials',
    issuer: 'Intel',
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/intel-ai-essentials.png',
    pdfUrl: 'https://storage.googleapis.com/aistudio-hosting/project-assets/portfolio-certs/intel-ai-essentials.pdf',
    verificationUrl: 'https://coursera.org/verify/ZT9JD2I616X3',
  },
];


export default App;
