import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 max-w-xl mx-auto text-center overflow-hidden">
            <motion.h2
                className="text-4xl font-bold mb-8 text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Get in Touch
            </motion.h2>

            <motion.form
                className="space-y-4 mb-12 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-2">Name</label>
                    <input type="text" className="w-full bg-[#141416] border border-white/10 rounded-lg p-3 text-white focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent-glow)] outline-none transition-all" />
                </div>
                <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-2">Email</label>
                    <input type="email" className="w-full bg-[#141416] border border-white/10 rounded-lg p-3 text-white focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent-glow)] outline-none transition-all" />
                </div>
                <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-2">Message</label>
                    <textarea rows="4" className="w-full bg-[#141416] border border-white/10 rounded-lg p-3 text-white focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent-glow)] outline-none transition-all"></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px var(--accent-glow)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[var(--accent)] text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-all shadow-[0_4px_14px_0_rgba(0,118,255,0.39)]"
                >
                    Send Message
                </motion.button>
            </motion.form>

            <footer className="pt-12 border-t border-white/10 text-[var(--text-secondary)] text-sm">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">Email</a>
                </div>
                <p>&copy; 2024 Sandun Dimantha. Built with React & Spline.</p>
            </footer>
        </section>
    );
};

export default Contact;
