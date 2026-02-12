import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[var(--accent)]/5 blur-[100px] -z-10 rounded-full" />

            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
                    <span className="text-gradient">Initialize Connection</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                    Ready to collaborate on the next generation of AI and Cloud solutions?
                    Open a channel and let's build something extraordinary.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <motion.form
                    className="space-y-6 bg-[#0A0A0B]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-[var(--accent)] ml-1">IDENTITY</label>
                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:border-[var(--accent)] focus:bg-white/10 outline-none transition-all duration-300" />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-[var(--accent)] ml-1">COMM_CHANNEL</label>
                        <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:border-[var(--accent)] focus:bg-white/10 outline-none transition-all duration-300" />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-[var(--accent)] ml-1">DATA_PACKET</label>
                        <textarea rows="4" placeholder="Your Message..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:border-[var(--accent)] focus:bg-white/10 outline-none transition-all duration-300 resize-none"></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[var(--accent)] hover:bg-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,122,255,0.4)] transition-all flex items-center justify-center gap-2 group"
                    >
                        <span>TRANSMIT MESSAGE</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </motion.button>
                </motion.form>

                {/* Social Links & Info */}
                <motion.div
                    className="space-y-8 md:pt-10"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[var(--accent)] border border-white/10">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Direct Mail</h4>
                                <a href="mailto:contact@sandun.dev" className="text-gray-400 hover:text-[var(--accent)] transition-colors">contact@sandun.dev</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <h4 className="text-white font-bold mb-6">Connect on Frequency</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaLinkedin />, link: "#" },
                                { icon: <FaGithub />, link: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    className="w-14 h-14 bg-[#141416] border border-white/10 rounded-2xl flex items-center justify-center text-white text-xl hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 group"
                                >
                                    <span className="transform group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-24 pt-8 border-t border-white/5 text-center">
                <p className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Sandun Dimantha. <br />
                    <span className="text-[var(--accent)]/50">System Status: Optimal</span>
                </p>
            </footer>
        </section>
    );
};

export default Contact;
