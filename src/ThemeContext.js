import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const cachedTheme = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(cachedTheme === 'true');

  // Apply dark mode whenever isDarkMode changes
  useEffect(() => {
    const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(themeClass);
    localStorage.setItem('isDarkMode', isDarkMode.toString()); // Store the dark mode preference in local storage
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
