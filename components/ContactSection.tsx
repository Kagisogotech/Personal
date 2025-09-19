
import React, { useState } from 'react';

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

export default ContactSection;
