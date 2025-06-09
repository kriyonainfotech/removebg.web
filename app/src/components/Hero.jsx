// components/Hero.jsx
import { FiUpload, FiImage, FiX, FiClipboard } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiArrowDown } from "react-icons/fi";
import axios from 'axios'

export default function Hero() {
    const [isDragging, setIsDragging] = useState(false);
    const [image, setImage] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [processedImage, setProcessedImage] = useState(null);
    const [error, setError] = useState(null);
    const [showPasteHint, setShowPasteHint] = useState(false);
    const mountedRef = useRef(true);
    const fileInputRef = useRef(null);

    // Full-screen drag handlers
    useEffect(() => {
        const handleDragOver = (e) => {
            e.preventDefault();
            setIsDragging(true);
        };

        const handleDragLeave = () => {
            setIsDragging(false);
        };

        const handleDrop = (e) => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files[0]) {
                handleImageUpload(e.dataTransfer.files[0]);
            }
        };

        const handlePaste = (e) => {
            // Get pasted items
            const items = e.clipboardData.items;

            // Find image in clipboard items
            for (const item of items) {
                if (item.type.indexOf('image') !== -1) {
                    e.preventDefault();
                    const blob = item.getAsFile();
                    if (blob) {
                        handleImageUpload(blob);
                    }
                    return;
                }
            }
        };

        // Attach to entire document
        document.addEventListener('dragover', handleDragOver);
        document.addEventListener('dragleave', handleDragLeave);
        document.addEventListener('drop', handleDrop);
        document.addEventListener('paste', handlePaste);

        // Show paste hint on initial render
        const timer = setTimeout(() => {
            setShowPasteHint(true);
        }, 3000);

        return () => {
            document.removeEventListener('dragover', handleDragOver);
            document.removeEventListener('dragleave', handleDragLeave);
            document.removeEventListener('drop', handleDrop);
            document.removeEventListener('paste', handlePaste);
            clearTimeout(timer);
        };
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            handleImageUpload(e.target.files[0]);
        }
    };

    useEffect(() => {
        return () => {
            mountedRef.current = false;
            // Cleanup object URLs
            if (image) URL.revokeObjectURL(image);
            if (processedImage) URL.revokeObjectURL(processedImage);
        };
    }, []);

    const handleImageUpload = async (file) => {
        // Clear previous state
        setError(null);
        if (image) URL.revokeObjectURL(image);
        if (processedImage) URL.revokeObjectURL(processedImage);
        setShowPasteHint(false);

        // Create preview URL
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        setProcessing(true);
        setProcessedImage(null);

        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await axios.post(
                'http://13.234.46.69:2000/api/remove-background',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    responseType: 'blob'
                }
            );

            if (!mountedRef.current) return;

            const blob = response.data;
            const processedImageUrl = URL.createObjectURL(blob);
            setProcessedImage(processedImageUrl);
        } catch (err) {
            if (!mountedRef.current) return;

            console.error('Error removing background:', err);
            setError('Failed to process image. Please try again.');
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            if (mountedRef.current) {
                setProcessing(false);
            }
        }
    };

    const removeImage = () => {
        if (image) URL.revokeObjectURL(image);
        if (processedImage) URL.revokeObjectURL(processedImage);
        setImage(null);
        setProcessing(false);
        setProcessedImage(null);
        setError(null);

        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        // Full-screen drag area
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            {/* Overlay for full-screen drag indication */}
            <AnimatePresence>
                {isDragging && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-purple-500/10 backdrop-blur-sm z-10 flex items-center justify-center"
                    >
                        <div className="text-center p-8 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border-2 border-dashed border-purple-500">
                            <div className="w-24 h-24 mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                                <FiUpload className="text-white text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Drop your image</h3>
                            <p className="text-lg">Release to remove background</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="text-center mb-12">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                >
                    Remove Backgrounds <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Instantly</span>
                </motion.h1>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
                >
                    Drop, paste, or upload an image to get a transparent background in seconds.
                </motion.p>
            </div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-4xl mx-auto"
            >
                <div className={`relative border-2 border-dashed rounded-2xl p-8 md:p-12 text-center transition-all duration-300 ${isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'}`}>
                    <AnimatePresence>
                        {!image && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <FiUpload className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">Drag & drop or paste your image</h3>
                                <p className="text-gray-500 mb-6">or</p>
                                <label className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                                    Select Image
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </label>
                                <p className="mt-4 text-sm text-gray-500">
                                    Supports JPG, PNG, WEBP (Max 5MB)
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {(image || processing || processedImage) && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative w-full">
                                    <button
                                        onClick={removeImage}
                                        className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <FiX className="text-gray-700" />
                                    </button>

                                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium mb-2 text-gray-500">Original</h4>
                                            <div className="bg-gray-100 rounded-xl p-4">
                                                {image && (
                                                    <img
                                                        src={image}
                                                        alt="Uploaded preview"
                                                        className="w-full h-auto max-h-96 object-contain rounded-lg"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <motion.div
                                                animate={{
                                                    rotate: processing ? 360 : 0,
                                                    scale: processing ? 1.1 : 1
                                                }}
                                                transition={{
                                                    rotate: processing ? {
                                                        repeat: Infinity,
                                                        duration: 1,
                                                        ease: "linear"
                                                    } : { duration: 0.3 },
                                                    scale: processing ? {
                                                        repeat: Infinity,
                                                        duration: 0.5,
                                                        repeatType: "reverse"
                                                    } : { duration: 0.3 }
                                                }}
                                                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center"
                                            >
                                                <FiImage className="text-white text-xl" />
                                            </motion.div>
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium mb-2 text-gray-500">Result</h4>
                                            <div className="bg-gray-100 rounded-xl p-4">
                                                {processing ? (
                                                    <div className="w-full h-64 flex items-center justify-center">
                                                        <div className="animate-pulse text-gray-500">
                                                            Processing...
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="w-full h-auto max-h-96 bg-checkerboard bg-cover bg-center flex items-center justify-center rounded-lg"
                                                        style={{
                                                            backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                                                            backgroundSize: '20px 20px'
                                                        }}
                                                    >
                                                        {processedImage && (
                                                            <img
                                                                src={processedImage}
                                                                alt="Processed result"
                                                                className="w-full h-auto max-h-96 object-contain"
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {processedImage && !processing && (
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="mt-8"
                                        >
                                            <button
                                                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                                                onClick={() => {
                                                    const link = document.createElement('a');
                                                    link.href = processedImage;
                                                    link.download = 'background-removed.png';
                                                    link.click();
                                                }}
                                            >
                                                Download PNG
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-center text-sm text-gray-500"
                >
                    <p>Drag and drop or paste anywhere on the screen</p>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="mt-2"
                    >
                        <FiArrowDown className="inline-block" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Paste hint notification */}
            <AnimatePresence>
                {showPasteHint && !image && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-2 flex items-center border border-gray-200 z-20"
                    >
                        <FiClipboard className="text-purple-600 mr-2" />
                        <span>Tip: Press Ctrl+V to paste an image</span>
                        <button
                            onClick={() => setShowPasteHint(false)}
                            className="ml-4 text-gray-500 hover:text-gray-700"
                        >
                            <FiX />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background blobs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
            >
                <div className="absolute top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute top-40 -right-20 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20"></div>
            </motion.div>
        </section>
    )
}