/**
 * AI Service - Mock implementation
 * Replace these functions with real API calls when ready
 */

/**
 * Simulates AI summarization
 * @param {string} text - Text to summarize
 * @returns {Promise<string>} - Summarized text
 */
export async function summarizeText(text) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!text || text.trim().length === 0) {
        return 'Please write some text first!';
    }

    // Mock summarization - takes first few sentences
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const summary = sentences.slice(0, Math.min(2, sentences.length)).join('. ') + '.';

    return `📝 Summary: ${summary}`;

    /* 
     * TO USE A REAL API (e.g., OpenAI):
     * 
     * const response = await fetch('https://api.openai.com/v1/chat/completions', {
     *   method: 'POST',
     *   headers: {
     *     'Content-Type': 'application/json',
     *     'Authorization': `Bearer YOUR_API_KEY`
     *   },
     *   body: JSON.stringify({
     *     model: 'gpt-3.5-turbo',
     *     messages: [
     *       { role: 'system', content: 'You are a helpful assistant that summarizes text.' },
     *       { role: 'user', content: `Summarize this: ${text}` }
     *     ]
     *   })
     * });
     * 
     * const data = await response.json();
     * return data.choices[0].message.content;
     */
}

/**
 * Simulates AI rewriting
 * @param {string} text - Text to rewrite
 * @returns {Promise<string>} - Rewritten text
 */
export async function rewriteText(text) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!text || text.trim().length === 0) {
        return 'Please write some text first!';
    }

    // Mock rewriting - simple word replacement
    const rewritten = text
        .replace(/\bgood\b/gi, 'excellent')
        .replace(/\bbad\b/gi, 'poor')
        .replace(/\bnice\b/gi, 'wonderful')
        .replace(/\bvery\b/gi, 'extremely');

    return `✨ Rewritten: ${rewritten}`;

    /* 
     * TO USE A REAL API (e.g., OpenAI):
     * 
     * const response = await fetch('https://api.openai.com/v1/chat/completions', {
     *   method: 'POST',
     *   headers: {
     *     'Content-Type': 'application/json',
     *     'Authorization': `Bearer YOUR_API_KEY`
     *   },
     *   body: JSON.stringify({
     *     model: 'gpt-3.5-turbo',
     *     messages: [
     *       { role: 'system', content: 'You are a helpful assistant that rewrites text to be more professional.' },
     *       { role: 'user', content: `Rewrite this: ${text}` }
     *     ]
     *   })
     * });
     * 
     * const data = await response.json();
     * return data.choices[0].message.content;
     */
}
