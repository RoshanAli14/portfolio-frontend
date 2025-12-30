import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import profileImg from '../assets/profile.jpg';
import resume from '../assets/Roshan_Ali_Resume.pdf';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-32 pb-32 overflow-hidden relative">

            {/* Background Glows */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-10 md:px-24 grid md:grid-cols-2 gap-6 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    className="md:pl-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
                        className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full border border-accent/20"
                    >
                        Available for hire
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-xl md:text-3xl font-bold mb-6 leading-tight"
                    >
                        Hi, I'm <br /> <span className="text-4xl md:text-6xl text-gradient">Roshan Ali</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light mb-6"
                    >
                        Creative Frontend Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className="text-gray-600 dark:text-gray-400 text-base mb-8 max-w-lg leading-relaxed"
                    >
                        I'm a frontend developer passionate about crafting accessible, pixel-perfect user interfaces that blend form and function. I specialize in building scalable web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-accent to-purple-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-gray-600 dark:bg-gray-300 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-400 transition-colors shadow-lg shadow-purple-500/30">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="relative flex flex-col justify-center items-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-full opacity-50 blur-lg animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10 bg-secondary ring-4 ring-accent/20">
                            <img
                                src={profileImg}
                                alt="Roshan Ali"
                                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-full flex items-center gap-2 z-20 border border-white/20 shadow-lg"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                            <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Open to work</span>
                        </motion.div>
                    </div>

                    <a href={resume} download="Roshan_Ali_Resume.pdf" className="px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-white font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
                        <span>Download Resume</span>
                        <HiDownload className="text-xl" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
