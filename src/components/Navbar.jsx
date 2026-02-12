import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass-panel px-6 py-4 flex justify-between items-center text-white">
            <div className="text-2xl font-bold tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                SD
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#hero" className="hover:text-[var(--accent)] transition-colors">Home</a>
                <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
                <a href="#projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
                <a href="#skills" className="hover:text-[var(--accent)] transition-colors">Skills</a>
                <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
                {/* Mobile menu icon placeholder */}
                <button>☰</button>
            </div>
        </nav>
    );
};

export default Navbar;
