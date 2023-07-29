import "./styles/darkModeSwitch.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { trackAction } from "./analytics";

const DarkModeSwitch = () => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

	// Function to toggle dark mode
	const toggleDarkMode = () => {
		setIsDarkMode((prevDarkMode) => !prevDarkMode);
	};

	return (
		<div
			className={`dark-mode-switch ${
				isDarkMode ? "dark-mode" : "light-mode"
			}`}
		>
			<input
				type="checkbox"
				id="darkModeToggle"
				checked={isDarkMode}
				onChange={toggleDarkMode}
				onClick={() =>
					trackAction(
						"Dark Mode Switch",
						"Clicked",
						"Dark Mode Toggle"
					)
				}
			/>
			<label htmlFor="darkModeToggle">
				<span className="switch" />
			</label>
		</div>
	);
};

export default DarkModeSwitch;
