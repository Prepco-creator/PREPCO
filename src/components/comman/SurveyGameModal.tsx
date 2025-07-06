'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleDashed, Sparkles } from 'lucide-react';
import { outcomeMap, questions } from '@/data/surveyData';



export const SurveyGameModal = () => {
    const [visible, setVisible] = useState(true); // Set to true for demo
    const [step, setStep] = useState<'intro' | 'questions' | 'loading' | 'result'>('intro');
    const [answers, setAnswers] = useState<string>('');
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<string>('');

    useEffect(() => {
        const dismissed = sessionStorage.getItem('gameSurveyDismissed');
        if (!dismissed) setVisible(true);
    }, []);

    const dismiss = () => {
        sessionStorage.setItem('gameSurveyDismissed', 'true');
        setVisible(false);
    };

    const handleAnswer = (ans: 'y' | 'n') => {
        const next = answers + ans;
        setAnswers(next);
        if (index < questions.length - 1) {
            setIndex(index + 1);
        } else {
            setStep('loading');
            simulateProgress(next);
        }
    };

    const simulateProgress = (pattern: string) => {
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setResult(outcomeMap[pattern]);
                setStep('result');
            }
        }, 100);
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-teal-900/50 via-cyan-900/50 to-emerald-900/50 backdrop-blur-sm">
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border border-white/20"
            >
                <AnimatePresence mode="wait">
                    {step === 'intro' && (
                        <motion.div 
                            key="intro" 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="mb-4"
                            >
                                <Sparkles className="mx-auto h-12 w-12 text-teal-600" />
                            </motion.div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                                Wanna play a quick game?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Answer 4 fun questions and discover your personality type!
                            </p>
                            <div className="flex justify-center gap-4">
                                <motion.button 
                                    onClick={() => setStep('questions')}
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform"
                                >
                                    Let's Go! 🎮
                                </motion.button>
                                <motion.button 
                                    onClick={dismiss}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 transform shadow-md"
                                >
                                    Maybe Later
                                </motion.button>
                            </div>
                        </motion.div>
                    )}

                    {step === 'questions' && (
                        <motion.div 
                            key="questions" 
                            initial={{ opacity: 0, x: 50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center"
                        >
                            <div className="mb-6">
                                <div className="flex justify-center mb-4">
                                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                                        Question {index + 1} of {questions.length}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((index + 1) / questions.length) * 100}%` }}
                                        className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                                    />
                                </div>
                            </div>
                            
                            <motion.p 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xl font-medium text-gray-800 mb-8 leading-relaxed"
                            >
                                {questions[index]}
                            </motion.p>
                            
                            <div className="flex justify-center gap-6">
                                <motion.button 
                                    onClick={() => handleAnswer('y')}
                                    whileHover={{ 
                                        scale: 1.1, 
                                        boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4)",
                                        rotate: 2
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform"
                                >
                                    Yes! 👍
                                </motion.button>
                                <motion.button 
                                    onClick={() => handleAnswer('n')}
                                    whileHover={{ 
                                        scale: 1.1, 
                                        boxShadow: "0 15px 30px rgba(239, 68, 68, 0.4)",
                                        rotate: -2
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="px-8 py-4 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:from-red-500 hover:to-pink-600 transition-all duration-300 transform"
                                >
                                    Nope! 👎
                                </motion.button>
                            </div>
                        </motion.div>
                    )}

                    {step === 'loading' && (
                        <motion.div 
                            key="loading" 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="mb-6"
                            >
                                <CircleDashed className="mx-auto text-teal-600 h-16 w-16" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                🔮 Analyzing Your Personality...
                            </h3>
                            <p className="text-gray-600 mb-6">This is so exciting!</p>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-4">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 h-4 transition-all duration-300"
                                />
                            </div>
                            <motion.p 
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-lg font-semibold text-teal-600"
                            >
                                {progress}%
                            </motion.p>
                        </motion.div>
                    )}

                    {step === 'result' && (
                        <motion.div 
                            key="result" 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -30 }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 1, repeat: 2 }}
                                className="mb-6"
                            >
                                <div className="text-6xl mb-2">🎉</div>
                            </motion.div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Your Result:
                            </h2>
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl p-6 mb-6 border border-teal-200"
                            >
                                <p className="text-xl font-bold text-gray-800 leading-relaxed">
                                    {result}
                                </p>
                            </motion.div>
                            <motion.button 
                                onClick={dismiss}
                                whileHover={{ 
                                    scale: 1.05, 
                                    boxShadow: "0 15px 30px rgba(20, 184, 166, 0.3)" 
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform"
                            >
                                Amazing! ✨
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default SurveyGameModal;