// components/Footer.jsx
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 md:mb-0"
                    >
                        <p className="text-gray-600 dark:text-gray-300">
                            Built with ❤️ by <a href='https://kriyonainfotech.com/' target='_blank' className="underline font-medium">Kriyona Infotech</a>
                        </p>
                    </motion.div>

                    <div className="flex items-center gap-6">
                        <motion.a
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            href="https://www.instagram.com/kriyonainfotech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <FaInstagram className="text-xl" />
                        </motion.a>


                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
