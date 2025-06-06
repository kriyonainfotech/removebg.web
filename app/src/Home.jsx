import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RemoveBG from './components/RemoveBG'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import DemoSection from './components/DemoSection'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Mistakes from './components/Mistakes'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import axios from 'axios'

const Home = () => {

    return (
        <div className={`min-h-screen bg-gray-100 py-6 px-4`}>
            <div id='bgremove' className="transition-colors duration-300">
                <Navbar />

                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Hero />

                        <DemoSection />
                        {/* <Mistakes /> */}
                        <HowItWorks />
                        <Features />
                        <Gallery />
                        <CTA />
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Home
