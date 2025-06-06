// Tools.jsx
import { motion } from 'framer-motion';
import { FiArrowRight, FiTool, FiZap, FiLock, FiDollarSign, FiUser } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Tools() {
    const tools = [
        {
            name: "Remove Background",
            description: "Instantly remove backgrounds from any image with AI precision",
            icon: "🖼️",
            status: "live",
            link: "/"
        },
        {
            name: "Convert to PNG",
            description: "Convert any image format to PNG with transparency support",
            icon: "🔁",
            status: "soon",
        },
        {
            name: "Compress Image",
            description: "Reduce image file size without noticeable quality loss",
            icon: "📁",
            status: "soon",
        },
        {
            name: "PDF to JPG",
            description: "Extract images from PDFs or convert entire pages to JPG",
            icon: "📝",
            status: "soon",
        },
        {
            name: "Bulk Upload",
            description: "Process multiple images at once for maximum efficiency",
            icon: "📤",
            status: "soon",
        },
        {
            name: "Image Resizer",
            description: "Resize images to exact dimensions while maintaining quality",
            icon: "📏",
            status: "soon",
        }
    ];

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
                <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-4xl">
                            <FiTool className="text-purple-600" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Your <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Toolkit</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're building a suite of image and file tools. Try them all — no login needed.
                        </p>
                    </motion.div>
                </section>

                {/* Tools Grid */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl font-bold"
                        >
                            All Tools
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex gap-2"
                        >
                            <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">All</button>
                            <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">Live</button>
                            <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">Coming Soon</button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-3xl">{tool.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-semibold">{tool.name}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${tool.status === 'live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {tool.status === 'live' ? '✅ Live' : '🛠️ Coming Soon'}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 flex-1">{tool.description}</p>
                                {tool.status === 'live' ? (
                                    <a
                                        href={tool.link}
                                        className="flex items-center justify-between group"
                                    >
                                        <span className="font-medium text-purple-600 group-hover:text-purple-800 transition-colors">Use Now</span>
                                        <FiArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                ) : (
                                    <div className="text-gray-400">Coming Soon</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Value Proposition */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-2xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-6">Why Use Our Tools?</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FiZap className="text-2xl" />,
                                title: "Fast and Lightweight",
                                description: "Optimized for speed with minimal processing time"
                            },
                            {
                                icon: <FiLock className="text-2xl" />,
                                title: "Privacy-Friendly",
                                description: "Your files never leave your browser"
                            },
                            {
                                icon: <FiDollarSign className="text-2xl" />,
                                title: "100% Free",
                                description: "No hidden costs or watermarks"
                            },
                            {
                                icon: <FiUser className="text-2xl" />,
                                title: "No Account Needed",
                                description: "Start using immediately with no signup"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl"
                            >
                                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-600 mx-auto">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                                <p className="text-gray-600 text-center">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Feedback Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Want a New Tool?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We're always expanding our toolkit. Let us know what you'd like to see next!
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        >
                            Suggest a Tool
                        </motion.a>
                    </motion.div>
                </section>

                {/* Footer CTA */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/"
                            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        >
                            Remove Background Now <FiArrowRight />
                        </motion.a>
                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    )
}