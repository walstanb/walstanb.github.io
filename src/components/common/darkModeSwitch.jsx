import "./styles/darkModeSwitch.css";
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const DarkModeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`dark-mode-switch ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="darkModeToggle">
        <span className="switch" />
      </label>
    </div>
  );
};

export default DarkModeSwitch;
