
import React from 'react';
import { SocialLinks } from './SocialLinks';

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

export default Footer;
