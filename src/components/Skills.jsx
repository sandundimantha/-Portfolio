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
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white"><span className="text-gradient">Skills & Arsenal</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillGroups.map((group, idx) => (
                    <div key={idx} className="glass-panel p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">{group.category}</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {group.skills.map((skill, sIdx) => (
                                <div key={sIdx} className="flex flex-col items-center gap-2">
                                    <motion.div
                                        className="text-4xl text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: sIdx * 0.2
                                        }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <span className="text-xs text-gray-500">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
