import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Model Layer */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[#050505] flex items-center justify-center text-gray-500">
                    {/* Placeholder for Spline */}
                    <div className="w-full h-full bg-[#050505] flex items-center justify-center">
                        {/* Public Spline 3D Scene - Cyberpunk Car/Room (Placeholder) */}
                        <iframe
                            src='https://my.spline.design/miniroom-art-copy-32a81878b30d368d4d3d524816be5395/'
                            frameBorder='0'
                            width='100%'
                            height='100%'
                            className="w-full h-full scale-100 md:scale-100" // Adjustable scale
                            title="3D Spline Model"
                        ></iframe>
                    </div>
                </div>
                {/* Overlay Gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Sandun <span className="text-gradient">Dimantha</span>
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-[var(--text-secondary)] font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Cloud & AI Enthusiast | SLIIT 3rd Year
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
