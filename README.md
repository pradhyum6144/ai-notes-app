# 📝 AI-Powered Notes Web App

A modern, feature-rich notes application built with React and Tailwind CSS. Write, save, and enhance your notes with AI-powered summarization and rewriting capabilities.

![AI Notes App](https://img.shields.io/badge/React-19.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8) ![Vite](https://img.shields.io/badge/Vite-5.4.21-646cff)

## ✨ Features

### 🎨 Dark/Light Mode
- Seamless theme switching with smooth transitions
- Automatic system preference detection
- Theme preference persists across sessions

### 💾 Autosave
- Automatic saving to localStorage
- 2-second debounce to prevent excessive saves
- Visual save indicator (Saving... → Saved)
- Notes persist across browser sessions

### 🤖 AI Assistant
- Floating AI panel with beautiful gradient design
- **Summarize**: Extract key points from your notes
- **Rewrite**: Enhance your text with better word choices
- Easy to integrate with real AI APIs (OpenAI, Claude, Gemini, etc.)

### 📊 Writing Stats
- Real-time word count
- Real-time character count

### 🎯 User Experience
- Clean, intuitive interface
- Responsive design for all screen sizes
- Smooth animations and transitions
- Accessible with ARIA labels

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd ai-notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
ai-notes-app/
├── src/
│   ├── components/
│   │   ├── NotesEditor.jsx      # Main text editor with stats
│   │   ├── ThemeToggle.jsx      # Dark/light mode switcher
│   │   └── AIAssistant.jsx      # Floating AI assistant panel
│   ├── hooks/
│   │   ├── useTheme.js          # Theme management hook
│   │   └── useLocalStorage.js   # Autosave with localStorage
│   ├── utils/
│   │   └── aiService.js         # AI functions (mock/real API)
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Tailwind + custom styles
│   └── main.jsx                 # React entry point
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🔧 Configuration

### Tailwind CSS
The app uses Tailwind CSS with custom configuration in `tailwind.config.js`:
- Dark mode: `class` strategy
- Custom color scheme with CSS variables
- Responsive breakpoints

### Theme Colors
Defined in `src/index.css` using CSS variables:
- Light mode: Clean whites and grays
- Dark mode: Deep blues and slate colors
- Accent color: Blue with purple gradient

## 🤖 Integrating Real AI APIs

The app currently uses mock AI functions. To connect a real AI API:

1. **Open `src/utils/aiService.js`**

2. **Replace mock functions with API calls**

Example for OpenAI:

```javascript
export async function summarizeText(text) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that summarizes text.' },
        { role: 'user', content: `Summarize this: ${text}` }
      ]
    })
  });
  
  const data = await response.json();
  return data.choices[0].message.content;
}
```

3. **Add your API key to `.env`**
   ```
   VITE_OPENAI_API_KEY=your_api_key_here
   ```

### Supported AI APIs
- **OpenAI** (GPT-3.5, GPT-4)
- **Anthropic Claude**
- **Google Gemini**
- **Hugging Face**
- Any REST API that accepts text input

## 🎨 Customization

### Changing Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

### Adjusting Autosave Delay
In `src/App.jsx`, change the delay parameter:

```javascript
const [noteContent, setNoteContent, isSaving] = useLocalStorage(
  'notes-content', 
  '', 
  3000  // Change from 2000ms to 3000ms (3 seconds)
);
```

## 🧪 Testing

The app has been tested for:
- ✅ Autosave functionality
- ✅ Theme switching (light/dark)
- ✅ AI assistant interactions
- ✅ localStorage persistence
- ✅ Responsive design
- ✅ Cross-browser compatibility

## 🛠️ Tech Stack

- **React 19.2.0** - UI framework
- **Vite 5.4.21** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **localStorage API** - Client-side data persistence

## 📝 Code Quality

- ✅ Clean, human-readable code
- ✅ Descriptive variable and function names
- ✅ Comprehensive comments
- ✅ Consistent formatting
- ✅ Proper error handling
- ✅ Accessible UI components

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for a seamless user experience.

---

**Happy Note-Taking! 📝✨**
