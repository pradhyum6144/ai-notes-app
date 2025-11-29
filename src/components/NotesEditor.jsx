import React from 'react';

/**
 * Notes Editor Component
 * Main text area for writing notes with character/word count
 */
export function NotesEditor({ content, onChange, isSaving }) {
    // Calculate word and character count
    const wordCount = content.trim().length > 0
        ? content.trim().split(/\s+/).length
        : 0;
    const charCount = content.length;

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            {/* Header with title and save indicator */}
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    My Notes
                </h1>

                {/* Autosave indicator */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    {isSaving ? (
                        <>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            <span>Saving...</span>
                        </>
                    ) : (
                        <>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Saved</span>
                        </>
                    )}
                </div>
            </div>

            {/* Text editor */}
            <textarea
                value={content}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Start writing your notes here..."
                className="w-full h-96 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 resize-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                aria-label="Notes editor"
            />

            {/* Stats bar */}
            <div className="mt-3 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <span>{wordCount} words</span>
                <span>{charCount} characters</span>
            </div>
        </div>
    );
}
