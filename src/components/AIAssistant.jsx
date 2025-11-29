import React, { useState } from 'react';
import { summarizeText, rewriteText } from '../utils/aiService';

/**
 * AI Assistant Component
 * Floating panel with AI features (summarize, rewrite)
 */
export function AIAssistant({ noteContent }) {
    const [isOpen, setIsOpen] = useState(false);
    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle summarize action
    const handleSummarize = async () => {
        setIsLoading(true);
        try {
            const summary = await summarizeText(noteContent);
            setAiResponse(summary);
        } catch (error) {
            setAiResponse('Error: Could not summarize text');
            console.error('Summarize error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle rewrite action
    const handleRewrite = async () => {
        setIsLoading(true);
        try {
            const rewritten = await rewriteText(noteContent);
            setAiResponse(rewritten);
        } catch (error) {
            setAiResponse('Error: Could not rewrite text');
            console.error('Rewrite error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating toggle button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
                    aria-label="Open AI Assistant"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                </button>
            )}

            {/* AI Assistant Panel */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-slide-up">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                            <h3 className="text-white font-semibold">AI Assistant</h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 rounded p-1 transition-colors"
                            aria-label="Close AI Assistant"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {/* Action buttons */}
                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={handleSummarize}
                                disabled={isLoading}
                                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 font-medium"
                            >
                                {isLoading ? 'Processing...' : 'Summarize'}
                            </button>
                            <button
                                onClick={handleRewrite}
                                disabled={isLoading}
                                className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 font-medium"
                            >
                                {isLoading ? 'Processing...' : 'Rewrite'}
                            </button>
                        </div>

                        {/* AI Response */}
                        {aiResponse && (
                            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                                    {aiResponse}
                                </p>
                            </div>
                        )}

                        {/* Helper text */}
                        {!aiResponse && !isLoading && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                                Write some notes and click a button to see AI magic! ✨
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Custom animation styles */}
            <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
        </>
    );
}
