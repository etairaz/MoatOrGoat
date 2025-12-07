import React from 'react';
import { motion, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import type { Scenario } from '../data/scenarios';

interface CardProps {
    scenario: Scenario;
    onSwipe: (direction: 'left' | 'right') => void;
}

export const Card: React.FC<CardProps> = ({ scenario, onSwipe }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-50, 50]); // Increased rotation for more "swipe" feel
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]); // Fade out faster at edges

    // Color feedback based on drag position
    const borderColor = useTransform(
        x,
        [-200, -50, 50, 200],
        ['#ff00ff', '#1e293b', '#1e293b', '#39ff14'] // goat (pink) -> slate -> moat (green)
    );

    const handleDragEnd = (_: any, info: PanInfo) => {
        if (info.offset.x > 100) {
            onSwipe('right');
        } else if (info.offset.x < -100) {
            onSwipe('left');
        }
    };

    return (
        <motion.div
            style={{ x, rotate, opacity, borderColor }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute w-full max-w-sm aspect-[3/4] max-h-[60vh] bg-slate-800 rounded-xl p-6 border-4 shadow-2xl flex flex-col items-center justify-center text-center cursor-grab active:cursor-grabbing touch-none select-none"
        >
            <div className="flex-1 flex items-center justify-center">
                <h2 className="text-lg md:text-2xl leading-relaxed text-white font-retro">
                    {scenario.text}
                </h2>
            </div>

            <div className="mt-8 flex justify-between w-full text-xs text-slate-400 font-mono opacity-50">
                <span>&larr; GOAT</span>
                <span>MOAT &rarr;</span>
            </div>
        </motion.div>
    );
};
