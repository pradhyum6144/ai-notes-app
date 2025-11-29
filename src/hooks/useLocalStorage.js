import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for localStorage with autosave
 * Automatically saves data to localStorage with debouncing
 * @param {string} key - localStorage key
 * @param {*} initialValue - initial value if nothing in localStorage
 * @param {number} delay - debounce delay in milliseconds (default: 2000)
 */
export function useLocalStorage(key, initialValue, delay = 2000) {
    // Get initial value from localStorage or use provided initial value
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });

    // Track if we're currently saving
    const [isSaving, setIsSaving] = useState(false);

    // Use ref to store timeout ID
    const timeoutRef = useRef(null);

    // Save to localStorage with debouncing
    useEffect(() => {
        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set saving indicator
        setIsSaving(true);

        // Set new timeout
        timeoutRef.current = setTimeout(() => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                setIsSaving(false);
            } catch (error) {
                console.error('Error saving to localStorage:', error);
                setIsSaving(false);
            }
        }, delay);

        // Cleanup function
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [key, value, delay]);

    return [value, setValue, isSaving];
}
