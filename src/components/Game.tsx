
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from './Card';
import { GameOver } from './GameOver';
import { SplashScreen } from './SplashScreen';
import { scenarios, type Scenario } from '../data/scenarios';

export const Game: React.FC = () => {
    // Deck Logic
    const [seenIds, setSeenIds] = useState<Set<number>>(new Set());
    const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
    const [deckEmpty, setDeckEmpty] = useState(false);

    // Game State
    const [runway, setRunway] = useState(18);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState<'splash' | 'playing' | 'gameover'>('splash');
    const [pivotsLeft, setPivotsLeft] = useState(3);
    const [lastResult, setLastResult] = useState<{ isCorrect: boolean; feedback: string } | null>(null);

    // Initialize/Draw Card
    useEffect(() => {
        if (gameState === 'playing' && !currentScenario && !deckEmpty && seenIds.size < scenarios.length) {
            drawNewCard();
        }
    }, [gameState, currentScenario, deckEmpty, seenIds]);

    // Check for Win Condition (ran out of cards)
    useEffect(() => {
        if (seenIds.size === scenarios.length && !currentScenario && lastResult === null) {
            setDeckEmpty(true);
            setGameState('gameover');
        }
    }, [seenIds, currentScenario, lastResult]);

    const drawNewCard = () => {
        const available = scenarios.filter(s => !seenIds.has(s.id));
        if (available.length === 0) {
            setDeckEmpty(true);
            setGameState('gameover');
            return;
        }
        const randomIndex = Math.floor(Math.random() * available.length);
        setCurrentScenario(available[randomIndex]);
    };

    const handleSwipe = (direction: 'left' | 'right') => {
        if (!currentScenario) return;

        const isMoat = direction === 'right';
        const isGoat = direction === 'left';

        let isCorrect = false;
        if (isMoat && currentScenario.type === 'MOAT') isCorrect = true;
        if (isGoat && currentScenario.type === 'GOAT') isCorrect = true;

        let nextRunway = runway;
        if (isCorrect) {
            setScore(s => s + 1);
        } else {
            nextRunway = Math.max(0, runway - 6);
            setRunway(nextRunway);
        }

        setLastResult({ isCorrect, feedback: currentScenario.feedback });
        setSeenIds(prev => new Set(prev).add(currentScenario.id));
    };

    const handleNextCard = () => {
        // Game Over Transition Logic:
        // We only transition to Game Over AFTER the user dismisses the feedback.
        // If runway is 0, we end it now.
        if (runway <= 0) {
            setGameState('gameover');
        } else {
            setLastResult(null);
            setCurrentScenario(null); // Triggers useEffect to draw new card
        }
    };

    // Pivot Logic
    const handlePivot = () => {
        if (pivotsLeft > 0 && currentScenario) {
            setPivotsLeft(p => p - 1);
            setRunway(r => Math.max(0, r - 2)); // Pivot costs 2 months
            setLastResult(null);
            setSeenIds(prev => new Set(prev).add(currentScenario.id));
            setCurrentScenario(null);
        }
    };

    const restartGame = () => {
        setRunway(18);
        setScore(0);
        setSeenIds(new Set()); // In V3 req: "Start over... user will see questions they already saw". So we clear seenIds.
        setCurrentScenario(null);
        setDeckEmpty(false);
        setPivotsLeft(3);
        setGameState('playing');
        setLastResult(null);
    };

    const [playerName, setPlayerName] = useState('');

    // ... (rest of code)

    const startGame = (name: string) => {
        setPlayerName(name);
        setGameState('playing');
    };

    if (gameState === 'splash') {
        return <SplashScreen onStart={startGame} />;
    }

    if (gameState === 'gameover') {
        const win = deckEmpty && runway > 0;
        return <GameOver score={score} onRestart={restartGame} isWin={win} playerName={playerName} />;
    }

    return (
        <div className="relative w-full max-w-md h-full pb-12 flex flex-col items-center justify-center">
            {/* HUD */}
            <div className="w-full flex justify-between items-end mb-4 px-4 font-retro text-sm">
                <div className="flex flex-col">
                    <span className="text-slate-400 text-[10px] mb-1">RUNWAY</span>
                    <span className={`${runway <= 6 ? 'text-red-500 animate-pulse' : 'text-moat'} `}>
                        {runway} MO
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-slate-400 text-[10px] mb-1">PIVOTS</span>
                    <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className={`w - 2 h - 2 rounded - full ${i < pivotsLeft ? 'bg-cyan-400' : 'bg-slate-700'} `} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-slate-400 text-[10px] mb-1">VALUATION</span>
                    <span className="text-white">${score}M</span>
                </div>
            </div>

            {/* Card Stack */}
            <div className="relative w-full flex-1 flex items-center justify-center">
                <AnimatePresence>
                    {!lastResult && currentScenario && (
                        <Card
                            key={currentScenario.id}
                            scenario={currentScenario}
                            onSwipe={handleSwipe}
                        />
                    )}
                </AnimatePresence>

                {/* Manual Feedback Overlay */}
                {lastResult && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center p-4 text-center z-10"
                    >
                        <div className={`w-full max-w-[320px] bg-slate-900 border-4 p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4 ${lastResult.isCorrect ? 'border-moat shadow-moat/20' : 'border-goat shadow-goat/20'}`}>
                            <h2 className={`font-retro text-2xl ${lastResult.isCorrect ? 'text-moat' : 'text-goat'}`}>
                                {lastResult.isCorrect ? 'CORRECT!' : 'WRONG!'}
                            </h2>

                            <p className="text-white font-mono text-xs md:text-sm leading-relaxed">
                                {lastResult.feedback}
                            </p>

                            {runway <= 0 && !lastResult.isCorrect ? (
                                <div className="relative mt-2 w-full">
                                    <button
                                        onClick={handleNextCard}
                                        className="relative w-full px-6 py-3 bg-white text-slate-900 font-retro text-xs rounded overflow-hidden hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none z-10"
                                    >
                                        OK ALREADY
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 3, ease: "linear" }}
                                            onAnimationComplete={handleNextCard}
                                            className="absolute bottom-0 left-0 h-1 bg-red-500"
                                        />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleNextCard}
                                    className="mt-2 px-6 py-3 bg-white text-slate-900 font-retro text-xs rounded hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                                >
                                    NEXT STARTUP
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Controls */}
            <div className="mt-8 w-full px-8 flex justify-between items-center">
                <button
                    onClick={() => handleSwipe('left')}
                    className="w-16 h-16 rounded-full border-2 border-slate-700 bg-slate-800 text-hot-pink hover:border-hot-pink hover:bg-hot-pink/20 transition-all font-mono text-4xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={!!lastResult}
                    title="Swipe Left (Goat)"
                >
                    🐐
                </button>

                <button
                    onClick={handlePivot}
                    disabled={pivotsLeft === 0 || !!lastResult}
                    className="px-6 py-2 bg-slate-800 border border-slate-600 rounded-full font-retro text-xs text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                    Pivot
                </button>

                <button
                    onClick={() => handleSwipe('right')}
                    className="w-16 h-16 rounded-full border-2 border-slate-700 bg-slate-800 text-moat hover:border-moat hover:bg-moat/20 transition-all font-mono text-4xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={!!lastResult}
                    title="Swipe Right (Moat)"
                >
                    🏰
                </button>
            </div>
        </div>
    );
};

