import React, { useEffect, useState } from 'react';
import { supabase, type LeaderboardEntry } from '../lib/supabase';

interface GameOverProps {
    score: number;
    onRestart: () => void;
    isWin?: boolean;
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

export const GameOver: React.FC<GameOverProps> = ({ score, onRestart, isWin = false }) => {
    const [playerName, setPlayerName] = useState('');
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [funnyMessage, setFunnyMessage] = useState('');

    useEffect(() => {
        fetchLeaderboard();
        setFunnyMessage(FUNNY_MESSAGES[Math.floor(Math.random() * FUNNY_MESSAGES.length)]);
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!playerName.trim()) return;

        setLoading(true);
        try {
            const { error } = await supabase
                .from('leaderboard')
                .insert([{ player_name: playerName, score }]);

            if (error) throw error;
            setSubmitted(true);
            fetchLeaderboard(); // Refresh leaderboard
        } catch (error) {
            console.error('Error submitting score:', error);
            alert('Failed to submit score. Check console for details.');
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
            </div>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="ENTER NAME"
                        maxLength={10}
                        className="w-full bg-slate-800 border-2 border-slate-600 focus:border-moat rounded p-3 text-center text-white font-retro uppercase placeholder:text-slate-600 outline-none"
                        autoFocus
                    />
                    <button
                        type="submit"
                        disabled={loading || !playerName.trim()}
                        className="w-full bg-moat hover:bg-green-400 text-slate-900 font-retro py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'SAVING...' : 'SAVE SCORE'}
                    </button>
                </form>
            ) : (
                <div className="w-full bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h3 className="text-moat font-retro text-xs mb-4 text-center">TOP 10 VCs</h3>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {leaderboard.map((entry, index) => (
                            <div key={entry.id} className="flex justify-between text-xs font-mono">
                                <span className="text-slate-400">
                                    {index + 1}. <span className="text-white">{entry.player_name}</span>
                                </span>
                                <span className="text-moat">{entry.score}</span>
                            </div>
                        ))}
                        {leaderboard.length === 0 && (
                            <p className="text-slate-500 text-center text-xs">No scores yet. Be the first!</p>
                        )}
                    </div>
                </div>
            )}

            <button
                onClick={onRestart}
                className="text-slate-400 hover:text-white font-mono text-sm underline decoration-dotted underline-offset-4"
            >
                TRY AGAIN
            </button>
        </div>
    );
};
