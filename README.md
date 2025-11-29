🚀 Features
✏️ Write Notes

Users can create and edit notes in a clean and distraction-free editor.

🤖 AI Assistant (Frontend Trigger)

A floating panel that allows you to:

Summarize notes

Rewrite notes

(Uses any AI API you plug in — optional)

💾 Autosave

Notes are automatically saved to localStorage, so you never lose your work even after refreshing.

🌓 Dark / Light Mode

Toggle between themes using a simple switch.
Theme preference is also saved in localStorage.

🎨 Modern UI

Built with Tailwind CSS for a clean, responsive, minimal layout.

🧱 Frontend Only

The project contains no backend — ideal for learning frontend logic and API integration.

🛠️ Tech Stack

React (Vite or CRA)

Tailwind CSS

localStorage for saving notes + theme

Any AI API (Optional)
Example: OpenAI, Gemini, Groq, Claude, etc.

⚙️ How It Works
1. Notes Editor

User types notes inside a textarea.

Autosaves every few seconds using localStorage.setItem(...).

2. AI Assistant Panel

Opens as a floating panel on the right side.

User selects an action:

Summarize

Rewrite

Sends note text to your chosen AI API (you write the fetch request).

Updates the editor with the AI response.

3. Theme Switcher

Stored in localStorage as "theme".

Applies Tailwind’s dark mode classes.

🎯 Goals of This Project

Practice React state management

Learn Tailwind UI styling

Understand autosaving with localStorage

Learn how to integrate an AI API inside a frontend app

Build a clean, modern UI with light/dark mode
