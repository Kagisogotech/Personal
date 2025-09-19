
import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface PortfolioSectionProps {
    projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
    return (
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
    );
};

export default PortfolioSection;
