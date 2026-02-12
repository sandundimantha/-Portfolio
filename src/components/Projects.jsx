import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "EqualHer",
        desc: "Empowering gender equality through sustainable development goals. A cross-platform mobile solution built for impact.",
        tech: ["React Native", "Firebase", "Expo"],
        badge: "SDG 5",
        link: "#",
        github: "#"
    },
    {
        title: "LMS Platform",
        desc: "A comprehensive Learning Management System designed for scalable education. Led backend architecture and API design.",
        tech: ["MERN Stack", "Redux", "Docker"],
        badge: "Lead Dev",
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-20 text-center text-white tracking-tight">
                <span className="text-gradient">Featured Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative bg-[#0A0A0B] border border-white/10 rounded-3xl overflow-hidden hover:border-[var(--accent)]/50 transition-colors duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {/* Image Placeholder Area */}
                        <div className="h-64 bg-white/5 relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] to-transparent opacity-80" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="flex gap-2 mb-3">
                                            <span className="px-3 py-1 bg-[var(--accent)]/20 border border-[var(--accent)]/30 text-[var(--accent)] text-xs rounded-full font-mono uppercase tracking-wider backdrop-blur-md">
                                                {project.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">{project.title}</h3>
                                    </div>

                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-white transition-colors">
                                            <FaGithub size={20} />
                                        </a>
                                        <a href={project.link} className="p-3 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent)]/80 transition-colors shadow-lg shadow-[var(--accent)]/20">
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 pt-6">
                            <p className="text-[var(--text-secondary)] mb-6 text-lg font-light leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, tIdx) => (
                                    <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
