import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ThemeToggle } from './components/ThemeToggle';
import { NotesEditor } from './components/NotesEditor';
import { AIAssistant } from './components/AIAssistant';

/**
 * Main App Component
 * AI-Powered Notes Application with dark/light mode and autosave
 */
function App() {
  // Theme management
  const { theme, toggleTheme } = useTheme();

  // Notes content with autosave (saves after 2 seconds of no typing)
  const [noteContent, setNoteContent, isSaving] = useLocalStorage('notes-content', '', 2000);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Theme toggle button */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Main content */}
      <div className="container mx-auto py-8 px-4">
        {/* Notes editor */}
        <NotesEditor
          content={noteContent}
          onChange={setNoteContent}
          isSaving={isSaving}
        />
      </div>

      {/* Floating AI assistant */}
      <AIAssistant noteContent={noteContent} />
    </div>
  );
}

export default App;
