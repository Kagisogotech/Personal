
import React from 'react';
import { Skill } from '../types';

interface SkillsSectionProps {
    activeSkillTab: string;
    setActiveSkillTab: (tab: 'frontend' | 'backend') => void;
    frontendSkills: Skill[];
    backendSkills: Skill[];
    skillsAreVisible: boolean;
}

const SkillsSection = React.forwardRef<HTMLElement, SkillsSectionProps>((
    { activeSkillTab, setActiveSkillTab, frontendSkills, backendSkills, skillsAreVisible },
    ref
) => {
    return (
        <section id="skills" className="py-20 md:py-32" ref={ref}>
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
    );
});

export default SkillsSection;
