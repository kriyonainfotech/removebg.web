// components/HowItWorks.jsx
import { FiUpload, FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { FaMagic } from "react-icons/fa";

const steps = [
    {
        icon: <FiUpload className="text-2xl" />,
        title: "Upload Image",
        description: "Drag & drop your image or click to browse files"
    },
    {
        icon: <FaMagic className="text-2xl" />,
        title: "We Remove Background",
        description: "Our AI processes your image in seconds"
    },
    {
        icon: <FiDownload className="text-2xl" />,
        title: "Download PNG",
        description: "Get your image with transparent background"
    }
]

export default function HowItWorks() {
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
                    How It Works
                </motion.h2>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    Get perfect transparent backgrounds in just 3 simple steps
                </motion.p>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute top-8 left-1/2 h-[5px] w-full bg-gradient-to-r from-purple-500 to-pink-500 -translate-x-1/2 rounded-full"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white relative">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700">
                                    <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}