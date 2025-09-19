
import React from 'react';

interface AboutSectionProps {
    aboutParallaxY: number;
}

const AboutSection = React.forwardRef<HTMLElement, AboutSectionProps>(({ aboutParallaxY }, ref) => {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
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
    );
});

export default AboutSection;
