import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaAward } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center text-white tracking-tight">
                <span className="text-gradient">About Me</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Profile Hologram Card */}
                <motion.div
                    className="w-full md:w-5/12 aspect-square relative group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#007AFF] to-[#C2FF00] rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700" />
                    <div className="w-full h-full bg-[#0A0A0B] border border-white/10 rounded-3xl overflow-hidden relative z-10 shadow-2xl flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                        {/* Animated Border Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#007AFF] to-transparent opacity-50 animate-scan" />

                        <div className="relative z-20 flex flex-col items-center">
                            <FaUserCircle className="text-[180px] text-white/10 group-hover:text-white/20 transition-colors duration-500" />
                            <div className="mt-6 px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                                <span className="text-[var(--accent)] font-mono text-sm tracking-widest">SYSTEM: ONLINE</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="w-full md:w-7/12 text-[var(--text-secondary)] space-y-8">
                    <h3 className="text-3xl font-bold text-white">
                        Building the Future with <br />
                        <span className="text-[var(--accent)]">Cloud & AI Intelligence</span>
                    </h3>

                    <p className="text-lg leading-relaxed font-light">
                        I am a 3rd-year IT student at <strong className="text-white">SLIIT</strong>, obsessed with the convergence of scalable cloud infrastructure and generative AI.
                        My workflow is driven by a <span className="text-white font-medium">high-performance mindset</span>—translating the precision of engineering marvels like the <span className="text-[var(--accent)]">BMW M5</span> into clean, efficient code.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-[var(--accent)]/50 transition-colors cursor-default"
                        >
                            <FaAward className="text-[var(--accent)] text-xl" />
                            <span className="text-white font-medium">GCP Digital Leader</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#C2FF00]/50 transition-colors cursor-default"
                        >
                            <span className="text-[#C2FF00] text-xl">⚡</span>
                            <span className="text-white font-medium">Content Creator @ AI Unlocked</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
