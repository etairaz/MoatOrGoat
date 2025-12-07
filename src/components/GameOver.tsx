import React, { useEffect, useState } from 'react';
import { supabase, type LeaderboardEntry } from '../lib/supabase';

interface GameOverProps {
    score: number;
    onRestart: () => void;
    isWin?: boolean;
    playerName: string;
}

const FUNNY_MESSAGES = [
    "Enjoy living in your parents' basement.",
    "Your LinkedIn profile now says 'Ex-Founder'.",
    "Back to consulting for you.",
    "Maybe try a lemonade stand next time.",
    "Investors are ghosting you.",
    "You are now a thought leader on X.",
    "Your equity is worth $0.00.",
    "Don't worry, failure is just 'learning' (expensive learning)."
];

export const GameOver: React.FC<GameOverProps> = ({ score, onRestart, isWin = false, playerName }) => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(false);
    const [funnyMessage, setFunnyMessage] = useState('');

    const submittedRef = React.useRef(false);

    useEffect(() => {
        if (submittedRef.current) return;   // Prevent multiple submissions
        submittedRef.current = true;

        setFunnyMessage(FUNNY_MESSAGES[Math.floor(Math.random() * FUNNY_MESSAGES.length)]);
        submitScore(); // Auto-submit on mount
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const { data, error } = await supabase
                .from('leaderboard')
                .select('*')
                .order('score', { ascending: false })
                .limit(10);

            if (error) throw error;
            if (data) setLeaderboard(data);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    const submitScore = async () => {
        if (!playerName) return; // Should technically not happen if Name is forced at start

        setLoading(true);
        try {
            const { error } = await supabase
                .from('leaderboard')
                .insert([{ player_name: playerName, score }]);

            if (error) throw error;
            fetchLeaderboard(); // Fetch leaderboard after successful submission
        } catch (error) {
            console.error('Error submitting score:', error);
            // Even if fail, try to fetch leaderboard so user sees something
            fetchLeaderboard();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 space-y-8 animate-in fade-in zoom-in duration-500">
            <h1 className={`text-4xl font-retro text-center ${isWin ? 'text-moat' : 'text-hot-pink'}`}>
                {isWin ? 'DEAL FLOW DRIED OUT' : 'GAME OVER'}
            </h1>

            <p className="text-slate-300 font-mono text-center text-lg md:text-xl px-4 italic">
                {isWin ? "You've seen it all. Truly a legendary VC." : funnyMessage}
            </p>

            <div className="text-center">
                <p className="text-slate-400 text-sm font-mono mb-2">FINAL SCORE</p>
                <p className="text-6xl text-white font-retro">{score}</p>
                <p className="text-moat font-retro mt-2 text-sm">{playerName}</p>
            </div>

            <div className="w-full bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h3 className="text-moat font-retro text-xs mb-4 text-center">TOP 10 VCs</h3>
                {loading && !leaderboard.length ? (
                    <p className="text-slate-500 text-center text-xs animate-pulse">Loading Leaderboard...</p>
                ) : (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {leaderboard.map((entry, index) => (
                            <div key={entry.id} className={`flex justify-between text-xs font-mono p-1 rounded ${entry.player_name === playerName && entry.score === score ? 'bg-moat/20 border border-moat/30' : ''}`}>
                                <span className="text-slate-400">
                                    {index + 1}. <span className={entry.player_name === playerName ? 'text-moat font-bold' : 'text-white'}>{entry.player_name}</span>
                                </span>
                                <span className="text-moat">{entry.score}</span>
                            </div>
                        ))}
                        {leaderboard.length === 0 && (
                            <p className="text-slate-500 text-center text-xs">No scores yet. Be the first!</p>
                        )}
                    </div>
                )}
            </div>

            <button
                onClick={onRestart}
                className="text-slate-400 hover:text-white font-mono text-sm underline decoration-dotted underline-offset-4"
            >
                TRY AGAIN
            </button>
        </div>
    );
};
