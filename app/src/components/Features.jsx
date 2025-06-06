// components/Features.jsx
import { FiZap, FiClock, FiSmartphone, FiLock, FiSettings } from 'react-icons/fi'
import { motion } from 'framer-motion'

const features = [
    {
        icon: <FiZap className="text-2xl" />,
        title: "AI-Powered Accuracy",
        description: "Our advanced AI detects edges with precision for perfect cuts every time."
    },
    {
        icon: <FiClock className="text-2xl" />,
        title: "Fast & Free",
        description: "Get results in seconds without paying a dime. No watermarks, no limits."
    },
    {
        icon: <FiSmartphone className="text-2xl" />,
        title: "Works on All Devices",
        description: "Use it on your phone, tablet, or computer. No downloads needed."
    },
    {
        icon: <FiLock className="text-2xl" />,
        title: "Privacy First",
        description: "Your images are processed in your browser and never stored on our servers."
    },
    {
        icon: <FiSettings className="text-2xl" />,
        title: "Convert & Compress",
        description: "Coming soon: Additional tools to convert formats and reduce file sizes."
    }
]

export default function Features() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold mb-4"
                >
                    Why Choose Us?
                </motion.h2>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    The best free background remover with premium quality results
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}