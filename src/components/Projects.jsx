import { motion } from 'framer-motion';
import gymImg from '../assets/images/gym.webp';
import saasImg from '../assets/images/saas.jpg';
import portfolioImg from '../assets/images/porfolio.jpg';

const projects = [
    {
        title: "Fitness Gym Website",
        desc: "A modern gym website with membership plans, class schedules, and trainer profiles featuring smooth animations.",
        tags: ["React", "Tailwind", "Framer Motion"],
        link: "#",
        image: gymImg
    },
    {
        title: "SaaS Landing Page",
        desc: "High-converting landing page with modern animations, pricing tables, and responsive layout.",
        tags: ["Next.js", "Framer Motion", "Stripe"],
        link: "#",
        image: saasImg
    },
    {
        title: "Portfolio Website",
        desc: "A minimal and clean personal portfolio website to showcase design and development skills.",
        tags: ["React", "Tailwind", "GSAP"],
        link: "#",
        image: portfolioImg
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-secondary/30">
            <div className="container mx-auto px-10 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A collection of projects that demonstrate my ability to solve problems and create value.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100, rotateX: -20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                delay: 0.15 + index * 0.15,
                                duration: 0.9,
                                ease: "easeOut"
                            }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card rounded-2xl overflow-hidden group"
                        >
                            {/* Project Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/50 text-accent text-xs rounded-full border border-accent/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    {project.desc}
                                </p>
                                <a href={project.link} className="inline-flex items-center text-sm font-medium text-accent hover:text-black dark:hover:text-white transition-colors">
                                    View Project &rarr;
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
