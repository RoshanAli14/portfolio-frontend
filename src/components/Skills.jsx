import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiNextdotjs, SiTypescript } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Framer', icon: <SiFramer />, color: '#0055FF' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 relative">
            <div className="container mx-auto px-10 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Tech Stack</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I work with a modern ecosystem of tools to build robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                delay: 0.15 + index * 0.06,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            whileHover={{ y: -10, scale: 1.05, borderColor: skill.color }}
                            className="glass-card p-6 rounded-xl flex flex-col items-center gap-4 group cursor-pointer border border-transparent"
                        >
                            <div className="text-4xl transition-colors duration-300" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <span className="font-medium text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
