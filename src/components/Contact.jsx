import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all fields');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        try {
            // Call backend API
            const response = await fetch('http://localhost:5000/api/contact/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success('Message sent successfully! 🎉 I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.message || 'Failed to send');
            }
        } catch (error) {
            console.error('Form Error:', error);
            toast.error('Failed to send message. Please email me directly at roshanalee5110@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

            <div className="container mx-auto px-10 md:px-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
                            className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white"
                        >
                            Let's work <span className="text-gradient">together</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
                            className="text-gray-600 dark:text-gray-400 mb-8 max-w-md"
                        >
                            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                        </motion.p>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-gray-200 dark:bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-base text-gray-500 dark:text-gray-400">Email me at</p>
                                    <a href="mailto:roshanalee5110@gmail.com" className="text-sm text-black dark:text-white hover:text-accent font-medium">roshanalee5110@gmail.com</a>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-gray-200 dark:bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <FaWhatsapp size={20} />
                                </div>
                                <div>
                                    <p className="text-base text-gray-500 dark:text-gray-400">WhatsApp</p>
                                    <a href="https://wa.me/923257562688" target="_blank" rel="noopener noreferrer" className="text-sm text-black dark:text-white hover:text-accent font-medium">+92 325 7562688</a>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-gray-200 dark:bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-base text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="text-sm text-black dark:text-white font-medium">Lahore, Punjab, Pakistan</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 120, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                        className="glass-card p-8 rounded-2xl space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white dark:bg-primary/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                placeholder="John Doe"
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white dark:bg-primary/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                placeholder="john@example.com"
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Message *</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white dark:bg-primary/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                                placeholder="Tell me about your project..."
                                disabled={isSubmitting}
                                required
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{formData.message.length} characters</p>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-accent to-purple-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <FaPaperPlane />
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                            🔒 Secure & Confidential Communication
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
