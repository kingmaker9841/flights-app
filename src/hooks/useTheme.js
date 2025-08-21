import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'google-flights-theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage or default to 'system'
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme || 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState('light');

  // Function to get the actual theme based on system preference
  const getResolvedTheme = (themeValue) => {
    if (themeValue === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return themeValue;
  };

  // Apply theme to document
  const applyTheme = useCallback((themeValue) => {
    const resolved = getResolvedTheme(themeValue);
    setResolvedTheme(resolved);
    
    if (resolved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  // Set theme and save to localStorage
  const setThemeValue = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Apply initial theme
    applyTheme(theme);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeValue,
    themes: [
      { value: 'system', label: 'Use device default' },
      { value: 'light', label: 'Light theme' },
      { value: 'dark', label: 'Dark theme' }
    ]
  };
}
