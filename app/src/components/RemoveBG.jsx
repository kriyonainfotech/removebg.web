import React, { useState, useRef } from "react";
import { UploadCloud } from "lucide-react";

const RemoveBG = () => {
    const [image, setImage] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const inputRef = useRef();

    const handleUpload = (file) => {
        const url = URL.createObjectURL(file);
        setImage({ file, url });
    };

    const onFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) handleUpload(file);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer?.files?.[0];
        if (file) handleUpload(file);
    };

    return (
        <div
            className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden"
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Floating bubbles background */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-indigo-200 dark:bg-indigo-800 opacity-20"
                        style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `floating ${Math.random() * 10 + 5}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
            {/* Left Panel */}
            <div className="w-1/2 p-8 flex flex-col items-center justify-center relative z-10">
                <img
                    src="https://a.storyblok.com/f/160496/1472x981/9bf40ad4ff/bg-removal-slider-v2artboard-1-copy.png"
                    alt="Decorative"
                    className="w-72 h-72 object-cover rounded-xl shadow-lg"
                />
                <div className="text-center mt-6">
                    <div className="text-5xl font-black text-indigo-600 dark:text-indigo-300 leading-none">
                        <span className="inline-block transform -rotate-3">R</span>
                        <span className="inline-block transform rotate-2">E</span>
                        <span className="inline-block transform -rotate-1">M</span>
                        <span className="inline-block transform rotate-3">O</span>
                        <span className="inline-block transform -rotate-2">V</span>
                        <span className="inline-block transform rotate-1">E</span>
                    </div>
                    <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-200 mt-2">
                        Background Image
                    </div>
                    <div className="text-lg text-indigo-500 dark:text-indigo-300 mt-3">
                        100% Free • Fast • No Watermarks
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-1/2 p-8 z-10">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className={`relative border-2 ${dragActive ? "border-indigo-600 bg-indigo-50 dark:bg-gray-700" : "border-dashed"} 
                      border-indigo-400 dark:border-indigo-300 rounded-xl p-6 text-center cursor-pointer transition-all
                      ${dragActive ? 'scale-105' : 'scale-100'} shadow-lg hover:shadow-xl`}
                    onDragLeave={handleDrag}
                >
                    <input
                        ref={inputRef}
                        id="fileUpload"
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        className="hidden"
                    />

                    <label htmlFor="fileUpload" className="cursor-pointer block">
                        {image ? (
                            <img
                                src={image.url}
                                alt="Uploaded"
                                className="mx-auto max-h-64 rounded-lg object-contain"
                            />
                        ) : (
                            <div className="flex flex-col items-center text-indigo-600 dark:text-indigo-300">
                                <UploadCloud size={40} />
                                <p className="mt-2 font-medium">Click or Drag an image anywhere</p>
                            </div>
                        )}
                    </label>
                </form>
                {isProcessing && (
                    <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                            className="bg-indigo-600 h-2.5 rounded-full animate-pulse"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                )}
                {image && (
                    <button
                        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
                        onClick={() => alert("Remove BG clicked (UI only)")}
                    >
                        Remove Background
                    </button>
                )}
            </div>

            {/* Floating Animation Keyframes */}
            <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floating {
          animation: floating 5s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default RemoveBG;