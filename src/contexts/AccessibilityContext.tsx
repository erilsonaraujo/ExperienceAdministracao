import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextProps {
  highContrast: boolean;
  largeFont: boolean;
  readingMode: boolean;
  largeCursor: boolean;
  toggleHighContrast: () => void;
  toggleLargeFont: () => void;
  toggleReadingMode: () => void;
  toggleLargeCursor: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);
  const [readingMode, setReadingMode] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedLargeFont = localStorage.getItem('accessibility-large-font') === 'true';
    const savedReadingMode = localStorage.getItem('accessibility-reading-mode') === 'true';
    const savedLargeCursor = localStorage.getItem('accessibility-large-cursor') === 'true';

    setHighContrast(savedHighContrast);
    setLargeFont(savedLargeFont);
    setReadingMode(savedReadingMode);
    setLargeCursor(savedLargeCursor);
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (largeFont) {
      root.classList.add('large-font');
    } else {
      root.classList.remove('large-font');
    }

    if (readingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }

    if (largeCursor) {
      root.classList.add('large-cursor');
    } else {
      root.classList.remove('large-cursor');
    }
  }, [highContrast, largeFont, readingMode, largeCursor]);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('accessibility-high-contrast', newValue.toString());
  };

  const toggleLargeFont = () => {
    const newValue = !largeFont;
    setLargeFont(newValue);
    localStorage.setItem('accessibility-large-font', newValue.toString());
  };

  const toggleReadingMode = () => {
    const newValue = !readingMode;
    setReadingMode(newValue);
    localStorage.setItem('accessibility-reading-mode', newValue.toString());
  };

  const toggleLargeCursor = () => {
    const newValue = !largeCursor;
    setLargeCursor(newValue);
    localStorage.setItem('accessibility-large-cursor', newValue.toString());
  };

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        largeFont,
        readingMode,
        largeCursor,
        toggleHighContrast,
        toggleLargeFont,
        toggleReadingMode,
        toggleLargeCursor,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}