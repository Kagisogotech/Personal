
import React, { useState } from 'react';

type QualificationItem = {
    title: string;
    source: string;
    years: string;
};

const education: QualificationItem[] = [
    { title: 'NQF Level 5 in Software Development', source: 'Jeppe College', years: '2023 - 2025' },
    { title: 'National Senior Certificate (IT & Science)', source: 'Lyttelton Manor High School', years: '2018 - 2022' },
];

const work: QualificationItem[] = [
    { title: 'Data Analyst', source: 'Capaciti', years: '2024 - Present' },
];

const Timeline: React.FC<{ items: QualificationItem[] }> = ({ items }) => (
    <div className="max-w-2xl mx-auto">
        {items.map((item, index) => (
            <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-x-8 items-start">
                {/* Left side content */}
                {index % 2 === 0 ? (
                    <div className="text-right pb-10">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-neutral-400">{item.source}</p>
                        <p className="text-xs text-neutral-500 mt-2 flex items-center justify-end space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>{item.years}</span>
                        </p>
                    </div>
                ) : <div />}

                {/* Center timeline element */}
                <div className="flex flex-col items-center self-stretch">
                    <span className="inline-block w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black ring-2 ring-emerald-500"></span>
                    {index < items.length - 1 && <span className="block w-px grow bg-neutral-700"></span>}
                </div>

                {/* Right side content */}
                {index % 2 !== 0 ? (
                    <div className="text-left pb-10">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-neutral-400">{item.source}</p>
                         <p className="text-xs text-neutral-500 mt-2 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>{item.years}</span>
                        </p>
                    </div>
                ) : <div />}
            </div>
        ))}
    </div>
);

const Qualification: React.FC = () => {
    const [activeTab, setActiveTab] = useState('education');

    return (
        <section id="qualification" className="py-20 md:py-32">
             <div className="max-w-screen-xl mx-auto px-8">
                <h2 className="text-4xl md:text-6xl font-anton uppercase text-center mb-4">Qualification</h2>
                <p className="text-center text-neutral-400 mb-12">My personal journey</p>

                <div className="flex justify-center space-x-8 mb-12">
                    <button onClick={() => setActiveTab('education')} className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-300 ${activeTab === 'education' ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        <span>Education</span>
                    </button>
                    <button onClick={() => setActiveTab('work')} className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-300 ${activeTab === 'work' ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        <span>Work</span>
                    </button>
                </div>

                <div className="mt-8">
                    {activeTab === 'education' && <Timeline items={education} />}
                    {activeTab === 'work' && <Timeline items={work} />}
                </div>
            </div>
        </section>
    );
};

export default Qualification;
