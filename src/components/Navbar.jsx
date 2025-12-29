import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false); // Close mobile menu
        }
    };

    const navLinks = [
        { name: 'About', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-purple-500/20 py-2' : 'py-4 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500"
                >
                    Roshan.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-sm font-medium tracking-wide transition-all duration-300 ease-in-out hover:scale-110 relative ${activeSection === link.href.substring(1)
                                    ? 'text-accent font-bold'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-accent'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 ml-2">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass mt-4 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-base font-medium transition-colors ${activeSection === link.href.substring(1)
                                            ? 'text-accent font-bold'
                                            : 'text-gray-600 dark:text-gray-300 hover:text-accent'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Mobile Social Links */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
