import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : ''
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-center items-center">
                    <ul className="flex space-x-8">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className={`relative text-sm md:text-base font-medium transition-colors duration-300 ${activeSection === section.id
                                            ? 'text-neon-blue'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(section.id);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    {section.label}
                                    {activeSection === section.id && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-blue"
                                            layoutId="activeSection"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navigation;
