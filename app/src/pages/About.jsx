// About.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiHeart, FiShield, FiZap, FiGlobe, FiCode } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <div className="min-h-screen  py-6 px-4 bg-gray-50 text-gray-900 transition-colors duration-300">
                {/* Hero Section */}
                <Navbar />

                <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            About Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Background Remover</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built with love for creators, developers, and everyone in between.
                        </p>
                    </motion.div>
                </section>

                {/* Who We Are */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1"
                        >
                            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex justify-center">
                                <img
                                    src="/Group 1.png"
                                    alt="App preview"
                                    className="rounded-xl w-2/3 h-auto text-center p-16"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1"
                        >
                            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                            <div className="prose text-lg">
                                <p>
                                    We're a small team passionate about building free, privacy-respecting tools that save your time and energy.
                                    No ads, no login — just speed and simplicity.
                                </p>
                                <p className="mt-4">
                                    Our mission is to make professional-quality image editing accessible to everyone,
                                    without compromising on privacy or user experience.
                                </p>
                                <p className="mt-4 flex items-start gap-2">
                                    <FiHeart className="text-pink-500 mt-2" />
                                    <span>We believe powerful tools should be available to all, not just those who can pay.</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* What Makes Us Different */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're not just another background remover
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FiShield className="text-3xl" />,
                                title: "Privacy First",
                                description: "Your images never leave your browser. No server processing means complete privacy."
                            },
                            {
                                icon: <FiZap className="text-3xl" />,
                                title: "100% Free, Forever",
                                description: "No watermarks, no paywalls, no hidden costs. We're committed to keeping it free."
                            },
                            {
                                icon: <FiGlobe className="text-3xl" />,
                                title: "Made for Everyone",
                                description: "Whether you're a designer, marketer, or just need a quick edit - we've got you covered."
                            },
                            {
                                icon: <FiCode className="text-3xl" />,
                                title: "More Tools Coming",
                                description: "We're building a suite of free tools to help with all your creative needs."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-14 h-14 mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-600">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                {/* <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-2xl">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Behind the Scenes</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Built with modern technologies for the best experience
                            </p>
                        </motion.div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                            {[
                                { name: "React", logo: "/tech/react.svg" },
                                { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
                                { name: "Vite", logo: "/tech/vite.svg" },
                                { name: "Framer Motion", logo: "/tech/framer-motion.svg" },
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center p-4"
                                >
                                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                                        <img src={tech.logo} alt={tech.name} className="h-full w-full object-contain" />
                                    </div>
                                    <span className="text-sm font-medium">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-12 text-gray-600"
                        >
                            We believe in open technologies and a fast user experience.
                        </motion.p>
                    </div>
                </section> */}

                {/* Meet the Team */}
                {/* <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/team-avatar.jpg"
                                alt="Team member"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Hi, I'm Alex 👋</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                            Building tools I wish existed. Your feedback fuels this project!
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full"
                            >
                                <FiGithub /> GitHub
                            </motion.a>
                        </div>
                    </motion.div>
                </section> */}

                {/* CTA */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Try It?</h2>
                        <p className="text-xl text-purple-100 mb-8">
                            Head back to the homepage and drop your first image.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/"
                            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        >
                            Remove Background Now
                        </motion.a>
                    </motion.div>
                </section>

                {/* Background elements */}
                <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl opacity-20 "></div>
                    <div className="absolute bottom-40 -right-20 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-20"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}