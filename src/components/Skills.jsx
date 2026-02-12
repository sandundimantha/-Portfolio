import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaNodeJs, FaAws, FaGoogle } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const skillGroups = [
    {
        category: "Cloud & AI",
        skills: [
            { name: "GCP", icon: <SiGooglecloud /> },
            { name: "AWS", icon: <FaAws /> },
            /* AI placeholder if specific icon needed */
        ]
    },
    {
        category: "Languages",
        skills: [
            { name: "Java", icon: <FaJava /> },
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript", icon: <FaJs /> },
        ]
    },
    {
        category: "Tools & Frameworks",
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "React", icon: <FaJs /> }, // Using JS icon as placeholder or add React icon
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-20 text-center text-white tracking-tight">
                <span className="text-gradient">Tech Arsenal</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillGroups.map((group, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-[#0A0A0B] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[var(--accent)]/30 transition-colors duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[var(--accent)] rounded-full" />
                            {group.category}
                        </h3>

                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            {group.skills.map((skill, sIdx) => (
                                <div key={sIdx} className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group/item">
                                    <div className="text-4xl text-[var(--text-secondary)] group-hover/item:text-[var(--accent)] transition-colors mb-3">
                                        {skill.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
