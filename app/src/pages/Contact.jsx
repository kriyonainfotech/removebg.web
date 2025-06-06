// Contact.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageSquare, FiUser, FiSend, FiMapPin, FiTwitter, FiGithub, FiArrowLeft } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCopy } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import axios from 'axios';
const apiurl = 'http://localhost:5000'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'
    const [copied, setCopied] = useState(false);
    const emailRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post(`${apiurl}/api/send-email`, {
                to: formData.email,
                subject: `New Message from BGremover - ${formData.name}`,
                message: formData.message
            });

            if (response.data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("❌ Error sending email:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };
    const copyToClipboard = () => {
        if (emailRef.current) {
            navigator.clipboard.writeText('kriyonainfotech@gmail.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isFormValid = formData.name && formData.message && isValidEmail(formData.email);

    return (
        <>
            <div className="min-h-screen py-6 px-4 bg-gray-50 text-gray-900 transition-colors duration-300">
                {/* Background elements */}
                <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-40 -right-20 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <Navbar />

                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-4xl">
                            <FiMessageSquare className="text-purple-600" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Get in <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We'd love to hear your feedback, ideas, or just say hi!
                        </p>
                    </motion.div>
                </section>

                {/* Main Content */}
                <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Info - Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/3"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                                <div className="space-y-6">
                                    {/* Email */}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                                <FiMail />
                                            </div>
                                            <h3 className="font-medium">Email</h3>
                                        </div>
                                        <div className="flex items-center justify-between pl-12">
                                            <p className="text-gray-600" ref={emailRef}>kriyonainfotech@gmail.com</p>
                                            <button
                                                onClick={copyToClipboard}
                                                className="text-sm ms-3 px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                            >
                                                {copied ? <FaCopy /> : <FaRegCopy />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Socials */}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                                <SlSocialDribbble />
                                            </div>
                                            <h3 className="font-medium">Social Media</h3>
                                        </div>
                                        <div className="flex gap-4 pl-12">
                                            <a
                                                href="https://www.instagram.com/kriyonainfotech/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-16 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors"
                                            >
                                                <FaInstagram className="text-blue-400" />
                                            </a>
                                            {/* <a
                                                href="https://github.com/bgremover"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-16 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors"
                                            >
                                                <FiGithub className="text-gray-800" />
                                            </a> */}
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                                <FiMapPin />
                                            </div>
                                            <h3 className="font-medium">Location</h3>
                                        </div>
                                        <p className="text-gray-600 pl-12">Based in Surat, IN</p>
                                    </div>
                                </div>

                                {/* Avatar */}
                                <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                                        <img src="/kriyona.png" className='w-full h-full object-contain ' alt="" />                                    </div>
                                    <div>
                                        <h3 className="font-bold">Kriyona Infotech</h3>
                                        <p className="text-gray-600">AI-Driven Solutions for Modern Businesses</p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* Contact Form - Right Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-2/3"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
                                    >
                                        Thanks for reaching out! I'll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg"
                                    >
                                        Oops! Something went wrong. Please try again.
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <label htmlFor="name" className="block text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                <FiUser />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <label htmlFor="email" className="block text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                <FiMail />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${formData.email && !isValidEmail(formData.email)
                                                    ? 'border-red-300 focus:ring-red-500'
                                                    : 'border-gray-300 focus:ring-purple-500'
                                                    }`}
                                                placeholder="you@example.com"
                                                required
                                            />
                                        </div>
                                        {formData.email && !isValidEmail(formData.email) && (
                                            <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
                                        )}
                                    </motion.div>

                                    {/* Message Field */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <label htmlFor="message" className="block text-gray-700 mb-2">
                                            Your Message
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 text-gray-400">
                                                <FiMessageSquare />
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="What would you like to say?"
                                                required
                                            ></textarea>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="pt-2"
                                    >
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !isFormValid}
                                            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${isSubmitting || !isFormValid
                                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FiSend /> Send Message
                                                </>
                                            )}
                                        </button>
                                    </motion.div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold mb-6">Want to remove a background instead?</h2>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        >
                            <FiArrowLeft /> Back to Home
                        </motion.a>
                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    );
}