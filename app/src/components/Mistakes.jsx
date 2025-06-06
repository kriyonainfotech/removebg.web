// components/Mistakes.jsx
import { FiAlertTriangle } from 'react-icons/fi'
import { motion } from 'framer-motion'

const mistakes = [
    {
        title: "Blurry Photos",
        description: "Low resolution images may result in jagged edges",
        example: "/mistake-blurry.jpg"
    },
    {
        title: "Cluttered Backgrounds",
        description: "Complex backgrounds can confuse the AI",
        example: "/mistake-cluttered.jpg"
    },
    {
        title: "Low Contrast",
        description: "When subject and background colors are similar",
        example: "/mistake-low-contrast.jpg"
    }
]

export default function Mistakes() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2"
                >
                    <FiAlertTriangle className="text-yellow-500" />
                    Common Mistakes
                </motion.h2>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    Avoid these for best results
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mistakes.map((mistake, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="h-48 bg-gray-100 dark:bg-gray-700">
                            <img
                                src={mistake.example}
                                alt={mistake.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{mistake.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{mistake.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}