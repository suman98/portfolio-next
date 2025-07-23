'use client';
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  isDarkMode: false,
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Safe initial state with fallback
  const [theme, setTheme] = useState<ThemeType>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Safe theme retrieval
  const getSavedTheme = useCallback(() => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as ThemeType) || 'light';
    }
    return 'light';
  }, []);

  // Initialize theme after component mount
  useEffect(() => {
    // Ensure this only runs on client-side
    if (typeof window !== 'undefined') {
      const savedTheme = getSavedTheme();
      setTheme(savedTheme);
      setIsInitialized(true);
    }
  }, [getSavedTheme]);

  // Compute isDarkMode based on current theme
  const isDarkMode = theme === 'dark';

  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    // Ensure this only runs on client-side
    if (typeof window !== 'undefined') {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.body.setAttribute('data-theme', newTheme);
    }
  }, [theme]);

  // Update localStorage and apply theme class to body when theme changes
  useEffect(() => {
    // Ensure this only runs on client-side
    if (typeof window !== 'undefined' && isInitialized) {
      localStorage.setItem('theme', theme);
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme, isInitialized]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Optional: Wrapper component to ensure client-side rendering
export const ThemeWrapper: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};
