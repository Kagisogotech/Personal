
import React, { useState, useEffect, useRef } from 'react';

// Import Types
import { Certificate, Skill, Project } from './types';

// Import Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import Qualification from './components/Qualification';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';

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
const projects: Project[] = [
  {
    title: 'AI Resume Builder',
    description: 'An intelligent tool to help users craft the perfect resume, with AI-powered suggestions and professional templates.',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop',
    href: 'https://kagisogotech.github.io/Resumebuilder/welcome.html',
    docUrl: '#',
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'A web application that analyzes text to determine its emotional tone, providing insights for businesses and researchers.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    href: 'https://kagisogotech.github.io/SentimentAnalysis/',
    docUrl: '#',
  },
  {
    title: 'AI Study Buddy',
    description: 'An interactive learning companion that simplifies complex topics and makes studying more engaging and effective.',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=800&auto=format&fit=crop',
    href: 'https://ai-study-buddy-bmwm.vercel.app/',
    docUrl: '#',
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

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [aboutParallaxY, setAboutParallaxY] = useState(0);
    const [activeSkillTab, setActiveSkillTab] = useState<'frontend' | 'backend'>('frontend');
    const [skillsAreVisible, setSkillsAreVisible] = useState(false);
    
    const skillsSectionRef = useRef<HTMLElement>(null);
    const aboutSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

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
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
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
                <HeroSection scrollY={scrollY} />
                <AboutSection ref={aboutSectionRef} aboutParallaxY={aboutParallaxY} />
                <ServicesSection />
                <SkillsSection 
                    ref={skillsSectionRef}
                    activeSkillTab={activeSkillTab}
                    setActiveSkillTab={setActiveSkillTab}
                    frontendSkills={frontendSkills}
                    backendSkills={backendSkills}
                    skillsAreVisible={skillsAreVisible}
                />
                <Qualification />
                <ResumeSection />
                <PortfolioSection projects={projects} />
                <CertificatesSection 
                    certificates={certificates}
                    visibleCertificates={visibleCertificates}
                    showAllCertificates={showAllCertificates}
                    setShowAllCertificates={setShowAllCertificates}
                    setSelectedCertificate={setSelectedCertificate}
                />
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

export default App;
