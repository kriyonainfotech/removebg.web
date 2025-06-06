// components/CTA.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Removing Backgrounds Now</h2>
                <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">It's 100% free and works instantly in your browser</p>
                <a href='#bgremove' className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                    Remove Background for Free
                </a>

                <div className="mt-8">
                    <p className="text-purple-200 text-sm">Looking for more power?</p>
                    <Link to='/tools' className="text-white font-medium hover:underline">Check out our Pro tools →</Link>
                </div>
            </motion.div>
        </section>
    )
}