// components/Gallery.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryItems = [
    {
        before: '/seeit/download (1).png',
        after: '/seeit/processed-girl.png',
        category: 'Product'
    },
    {
        before: '/seeit/download (2).png',
        after: '/seeit/processed-watch.png',
        category: 'Portrait'
    },
    {
        before: '/seeit/download (3).jpg',
        after: '/seeit/processed-md.png',
        category: 'Animal'
    },
    {
        before: '/seeit/download (5).png',
        after: '/seeit/processed-horse.png',
        category: 'E-commerce'
    }
]

export default function Gallery() {
    const [hoveredIndex, setHoveredIndex] = useState(null)

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
                    See It in Action
                </motion.h2>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    Check out these before & after examples
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                            <img
                                src={hoveredIndex === index ? item.after : item.before}
                                alt={`Gallery item ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <span className="text-white text-sm font-medium">{item.category}</span>
                        </div>
                        <div className="absolute top-0 left-0 right-0 p-2 flex justify-center">
                            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {hoveredIndex === index ? 'After' : 'Before'}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 text-center"
            >
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Hover over images to see the magic ✨
                </p>
            </motion.div>
        </section>
    )
}