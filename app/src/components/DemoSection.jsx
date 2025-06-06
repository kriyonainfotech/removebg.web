// // components/DemoSection.jsx
// import { FiPlay } from 'react-icons/fi'
// import { motion } from 'framer-motion'
// import { useState } from 'react'

// export default function DemoSection() {
//     const [showDemo, setShowDemo] = useState(false)

//     return (
//         <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//                 <motion.h2
//                     initial={{ y: -20, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-3xl sm:text-4xl font-bold mb-4"
//                 >
//                     Try it out without uploading
//                 </motion.h2>
//                 <motion.p
//                     initial={{ y: -20, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                     className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
//                 >
//                     See how it works with our demo image
//                 </motion.p>
//             </div>

//             <motion.div
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="flex justify-center"
//             >
//                 <button
//                     onClick={() => setShowDemo(!showDemo)}
//                     className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
//                 >
//                     <FiPlay />
//                     {showDemo ? 'Hide Demo' : 'Try Demo'}
//                 </button>
//             </motion.div>

//             {showDemo && (
//                 <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="mt-12 overflow-hidden"
//                 >
//                     <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
//                         <div className="flex-1">
//                             <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Before</h4>
//                             <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
//                                 <img
//                                     src="/tryitout/tea-bg.png"
//                                     alt="Demo before"
//                                     className="w-full h-auto max-h-64 object-contain rounded-lg"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex-1">
//                             <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">After</h4>
//                             <div
//                                 className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4"
//                                 style={{
//                                     backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
//                                     backgroundSize: '20px 20px'
//                                 }}
//                             >
//                                 <img
//                                     src="/tryitout/tea.png"
//                                     alt="Demo after"
//                                     className="w-full h-auto max-h-64 object-contain"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-8 text-center">
//                         <button
//                             disabled
//                             className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-8 py-3 rounded-full font-medium cursor-not-allowed"
//                         >
//                             Download result
//                         </button>
//                     </div>
//                 </motion.div>
//             )}
//         </section>
//     )
// }

// components/DemoSection.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiDownload, FiRefreshCw } from 'react-icons/fi';

const images = [
    { id: 1, before: '/tryitout/img1.png', after: '/tryitout/processed-giraffe.png' },
    { id: 2, before: '/tryitout/img2.png', after: '/tryitout/processed-boy.png' },
    { id: 3, before: '/tryitout/img3.png', after: '/tryitout/processed-bottle.png' },
    { id: 4, before: '/tryitout/img4.png', after: '/tryitout/processed-pancake.png' },
];

export default function DemoSection() {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [processing, setProcessing] = useState(false);
    const [activeId, setActiveId] = useState(1);

    const handleImageClick = (image) => {
        if (processing || activeId === image.id) return;

        setProcessing(true);
        setActiveId(image.id);

        // Simulate processing delay
        setTimeout(() => {
            setSelectedImage(image);
            setProcessing(false);
        }, 1200);
    };

    const resetDemo = () => {
        setProcessing(false);
        setSelectedImage(images[0]);
        setActiveId(1);
    };

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
                    Experience Instant Background Removal
                </motion.h2>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    Click any image to see our AI-powered background removal in action
                </motion.p>
            </div>

            <div className="flex flex-col items-center">
                {/* Image Queue */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative cursor-pointer"
                            onClick={() => handleImageClick(img)}
                        >
                            <img
                                src={img.before}
                                alt={`Demo ${img.id}`}
                                className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg transition-all ${activeId === img.id
                                    ? 'ring-4 ring-purple-500 scale-105'
                                    : 'opacity-70 hover:opacity-100'
                                    } ${processing ? 'cursor-not-allowed' : ''}`}
                            />
                            {activeId === img.id && (
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-lg flex items-end justify-center">
                                    <span className="text-xs font-medium text-white mb-1">Selected</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Demo Controls */}
                <div className="flex gap-4 mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetDemo}
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full font-medium transition-colors"
                    >
                        <FiRefreshCw /> Reset Demo
                    </motion.button>

                    {selectedImage && !processing && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={selectedImage.after}
                            download={`background-removed-${selectedImage.id}.png`}
                            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all"
                        >
                            <FiDownload /> Download Result
                        </motion.a>
                    )}
                </div>

                {/* Display Section */}
                <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Before */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-0.5 w-8 bg-gray-300"></div>
                                <h4 className="text-sm font-medium text-gray-500">Original</h4>
                                <div className="h-0.5 w-8 bg-gray-300"></div>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4 h-72 w-auto flex items-center justify-center relative overflow-hidden">
                                {selectedImage && (
                                    <motion.img
                                        key={`before-${selectedImage.id}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        src={selectedImage.before}
                                        alt="Before"
                                        className="max-h-64 w-full object-contain rounded-lg"
                                    />
                                )}
                                {processing && (
                                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-10 h-10 border-t-2 border-purple-500 rounded-full"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* After */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-0.5 w-8 bg-gray-300"></div>
                                <h4 className="text-sm font-medium text-gray-500">Processed</h4>
                                <div className="h-0.5 w-8 bg-gray-300"></div>
                            </div>
                            <div
                                className="bg-gray-100 rounded-xl p-4 h-72 flex items-center justify-center relative overflow-hidden"
                                style={{
                                    backgroundImage: 'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, transparent 75%, #eee 75%)',
                                    backgroundSize: '20px 20px',
                                }}
                            >
                                {selectedImage && !processing && (
                                    <motion.img
                                        key={`after-${selectedImage.id}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        src={selectedImage.after}
                                        alt="After"
                                        className="max-h-64 object-contain"
                                    />
                                )}

                                {processing && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/80">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-10 h-10 border-t-2 border-purple-500 rounded-full"
                                        />
                                        <p className="text-sm text-gray-600 mt-2">Processing...</p>
                                    </div>
                                )}

                                {!selectedImage && !processing && (
                                    <p className="text-gray-400">Output will appear here</p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
                >
                    {[
                        { value: "0.5s", label: "Avg. Processing Time" },
                        { value: "99%", label: "Accuracy" },
                        { value: "4K", label: "Max Resolution" },
                        { value: "Free", label: "No Cost" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="text-xl font-bold text-purple-600">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div> */}
            </div>
        </section>
    );
}