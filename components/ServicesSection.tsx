
import React from 'react';

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: 'Front-End Development',
            description: 'Crafting responsive, and visually appealing user interfaces with modern technologies like React and Tailwind CSS to create seamless web experiences.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: 'AI-Powered Solutions',
            description: 'Building intelligent applications and tools that leverage AI and Large Language Models to solve complex problems and automate tasks.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Web Application Design',
            description: 'Designing and developing complete, user-friendly web applications from concept to deployment, focusing on functionality and great user experience.',
        },
    ];

    return (
        <section id="services" className="py-20 md:py-32 bg-neutral-900/50">
            <div className="max-w-screen-xl mx-auto px-8">
                <h2 className="text-4xl md:text-6xl font-anton uppercase text-center mb-16">What I Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-emerald-400 mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                            <p className="text-neutral-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
