import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolioConfig';
import Scene3D from './Scene3D';
import FloatingText from './FloatingText';
import StarField from './StarField';

import HeroGeometry from './HeroGeometry';

function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background - Moved to Global App.jsx */}
            <div className="absolute inset-0 z-0">
                {/* 3D Scene is now global */}
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-4 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-light text-neon-purple mb-4">
                        {portfolioConfig.role}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        {portfolioConfig.tagline}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-12 pointer-events-auto"
                >
                    <a
                        href="#about"
                        className="inline-block px-8 py-3 bg-transparent border-2 border-neon-blue text-neon-blue rounded-full hover:bg-neon-blue hover:text-black transition-all duration-300 neon-glow"
                    >
                        Explore
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-neon-blue rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;
