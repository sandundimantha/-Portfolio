import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* 3D Model Layer - Z-Index 1 */}
            <div className="absolute inset-0 z-[1] w-full h-full">
                {/* Public Spline 3D Scene */}
                <iframe
                    src='https://my.spline.design/miniroom-art-copy-32a81878b30d368d4d3d524816be5395/'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    className="w-full h-full scale-100 md:scale-100 pointer-events-auto" // Ensure interaction
                    title="3D Spline Model"
                ></iframe>

                {/* Overlay Gradient - Pointer Events None */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Layer - Z-Index 2 */}
            <div className="relative z-[2] text-center px-4 pointer-events-none">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 tracking-tight pointer-events-auto" // Re-enable text selection
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Sandun <span className="text-gradient">Dimantha</span>
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-[var(--text-secondary)] font-light pointer-events-auto" // Re-enable text selection
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
