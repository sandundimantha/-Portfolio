import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';

const YouTubeGallery = () => {
    return (
        <section className="py-20 px-6 bg-[#050505] overflow-hidden">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold mb-4 text-white">AI Unlocked</h2>
                <p className="text-[var(--text-secondary)] mb-12">Exploring the frontiers of Artificial Intelligence.</p>

                <div className="aspect-video w-full bg-[#141416] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12 relative group">
                    {/* Placeholder Iframe - In real app, embed YouTube iframe here */}
                    {/* YouTube Video Placeholder - Styled Icon */}
                    <div className="w-full h-full flex items-center justify-center bg-[#141416] group-hover:bg-[#1a1a1d] transition-colors relative cursor-pointer">
                        <FaYoutube className="text-8xl text-red-600 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl" />
                        <span className="absolute mt-24 text-sm text-[var(--text-secondary)]">Watch Latest Video</span>
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--accent-glow)] rounded-2xl transition-all duration-500 pointer-events-none" />
                </div>

                <motion.a
                    href="https://youtube.com/@AIUnlocked"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 rounded-full font-bold text-white relative overflow-hidden shadow-lg shadow-blue-900/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent-glow)" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: 'linear-gradient(90deg, var(--accent) 0%, #000000 100%)' }}
                >
                    Subscribe to AI Unlocked
                </motion.a>
            </motion.div>
        </section>
    );
};

export default YouTubeGallery;
