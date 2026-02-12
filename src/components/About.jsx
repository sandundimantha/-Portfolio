import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white"><span className="text-gradient">About Me</span></h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="w-full md:w-1/2 aspect-square bg-[#141416] rounded-2xl overflow-hidden glass-panel relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Placeholder for Profile Photo */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        [Profile Photo Placeholder]
                    </div>
                </motion.div>
                <div className="w-full md:w-1/2 text-[var(--text-secondary)] space-y-6">
                    <p className="text-lg">
                        I am a 3rd-year IT student at SLIIT, passionate about <span className="text-white font-semibold">Cloud Computing</span> and <span className="text-white font-semibold">Artificial Intelligence</span>.
                    </p>
                    <p>
                        As a content creator behind <strong>AI Unlocked</strong>, I share my journey and knowledge with the community. My tech interests are fueled by a high-performance mindset, inspired by engineering marvels like the <span className="text-[var(--accent)]">BMW M5</span> and <span className="text-[#C2FF00]">Lamborghini SVJ</span>.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 border border-[var(--accent)] rounded-lg text-[var(--accent)]">
                            GCP Digital Leader
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
