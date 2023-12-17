import "./styles/darkModeSwitch.css";
import React, { useContext, useEffect, useRef, useMemo } from "react";
import { ThemeContext } from "../../ThemeContext";
import { trackAction } from "./analytics";

const DarkModeSwitch = () => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
	const darkModeSwitchRef = useRef(null);
	const audioUp = useMemo(() => {
		return new Audio("/sfx/up.wav");
	}, []);
	const audioDown = useMemo(() => {
		return new Audio("/sfx/down.wav");
	}, []);
	// Function to toggle dark mode
	const toggleDarkMode = () => {
		setIsDarkMode((prevDarkMode) => !prevDarkMode);
	};

	useEffect(() => {
		const preloadAudio = () => {
			audioUp.load();
			audioDown.load();
		};
		preloadAudio();
	}, [audioDown, audioUp]);

	useEffect(() => {
		const handleMouseUp = (event) => {
			if (
				darkModeSwitchRef.current &&
				!darkModeSwitchRef.current.contains(event.target)
			)
				return;
			(isDarkMode ? audioDown : audioUp).play();
		};

		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isDarkMode, audioDown, audioUp]);

	useEffect(() => {
		const handleMouseDown = (event) => {
			if (
				darkModeSwitchRef.current &&
				!darkModeSwitchRef.current.contains(event.target)
			)
				return;

			(isDarkMode ? audioUp : audioDown).play();
		};

		document.addEventListener("mousedown", handleMouseDown);

		return () => {
			document.removeEventListener("mousedown", handleMouseDown);
		};
	}, [isDarkMode, audioDown, audioUp]);

	return (
		<div
			className={`dark-mode-switch ${
				isDarkMode ? "dark-mode" : "light-mode"
			}`}
			ref={darkModeSwitchRef}
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
