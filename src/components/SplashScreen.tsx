import React from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
    onStart: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center"
        >
            <h1 className="text-4xl md:text-6xl font-retro text-transparent bg-clip-text bg-gradient-to-r from-moat to-goat mb-8 animate-pulse">
                MOAT OR GOAT
            </h1>

            <div className="space-y-6 max-w-md font-mono text-sm md:text-base text-slate-300 mb-12">
                <p>You are a VC with <span className="text-white">18 months</span> of runway.</p>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl">👉</span>
                        <span>Swipe <span className="text-moat font-bold">RIGHT</span> for <span className="text-moat">MOAT</span></span>
                        <span className="opacity-50 text-xs">(Defensible Business)</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl">👈</span>
                        <span>Swipe <span className="text-goat font-bold">LEFT</span> for <span className="text-goat">GOAT</span></span>
                        <span className="opacity-50 text-xs">(Hype / Trash)</span>
                    </div>
                </div>

                <p>Wrong investment? <span className="text-red-500">-6 months</span> runway.</p>
                <p>Pivot? <span className="text-yellow-400">-2 months</span> runway.</p>
                <p>Run out of money? <span className="text-goat">GAME OVER</span>.</p>
            </div>

            <button
                onClick={onStart}
                className="px-8 py-4 bg-white text-slate-900 font-retro text-xl rounded hover:scale-105 active:scale-95 transition-transform shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(57,255,20,1)]"
            >
                START INVESTING
            </button>

            <p className="absolute bottom-6 text-[10px] text-slate-600 font-mono">
                v2.0 // BUILD 001
            </p>
        </motion.div>
    );
};
