
import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl, href, docUrl }) => {
    return (
        <div className="group">
            <a href={href} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg mb-4">
                <img src={imageUrl} alt={title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            </a>
            <div className="flex justify-between items-start">
                <div className="flex-grow">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <h3 className="text-xl font-semibold text-white mb-1 hover:text-emerald-400 transition-colors duration-300">{title}</h3>
                    </a>
                    <p className="text-neutral-400 text-sm">{description}</p>
                </div>
                {docUrl && (
                    <a href={docUrl} target="_blank" rel="noopener noreferrer" aria-label={`Technical documentation for ${title}`} className="text-neutral-500 hover:text-emerald-400 transition-colors duration-300 ml-4 mt-1 flex-shrink-0" title="Technical Documentation">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
