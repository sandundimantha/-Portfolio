import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "EqualHer",
        desc: "SDG 5 based mobile app focusing on gender equality.",
        tech: "React Native, Firebase",
        badge: "SDG 5",
        link: "#"
    },
    {
        title: "LMS Website",
        desc: "University group project (Lead Role/Backend).",
        tech: "MERN Stack",
        badge: "Lead Dev",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white"><span className="text-gradient">Projects</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-8 rounded-2xl bg-[#141416] border border-white/10 relative overflow-hidden group cursor-pointer"
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                            boxShadow: "0 0 30px var(--accent-glow)",
                            borderColor: "var(--accent)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* SDG Badge */}
                        <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                            {project.badge}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                        <p className="text-[var(--text-secondary)] mb-6">{project.desc}</p>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">{project.tech}</span>
                            <a href={project.link} className="text-[var(--accent)] hover:underline">View Project →</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
