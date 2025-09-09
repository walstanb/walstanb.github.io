import "./styles/darkModeSwitch.css";
import React, { useContext, useEffect, useRef, useMemo, useCallback } from "react";
import { ThemeContext } from "../../ThemeContext";
import { trackAction } from "./analytics";

const DarkModeSwitch = () => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
	const darkModeSwitchRef = useRef(null);
	const lastSoundTimeRef = useRef(0);
	const queuedSoundRef = useRef(null);
	
	const audioUp = useMemo(() => new Audio("/sfx/up.wav"), []);
	const audioDown = useMemo(() => new Audio("/sfx/down.wav"), []);
	
	const playSound = useCallback((audio) => {
		const now = Date.now();
		
		if (now - lastSoundTimeRef.current > 200) {
			audio.currentTime = 0;
			audio.play().catch(console.error);
			lastSoundTimeRef.current = now;
			
			if (queuedSoundRef.current) {
				clearTimeout(queuedSoundRef.current);
				queuedSoundRef.current = null;
			}
		} else {
			const timeUntilNext = 150 - (now - lastSoundTimeRef.current);
			
			if (queuedSoundRef.current) {
				clearTimeout(queuedSoundRef.current);
			}
			
			queuedSoundRef.current = setTimeout(() => {
				audio.currentTime = 0;
				audio.play().catch(console.error);
				lastSoundTimeRef.current = Date.now();
				queuedSoundRef.current = null;
			}, timeUntilNext);
		}
	}, []);
	
	const toggleDarkMode = () => setIsDarkMode(prev => !prev);

	useEffect(() => {
		audioUp.load();
		audioDown.load();
		
		return () => {
			if (queuedSoundRef.current) {
				clearTimeout(queuedSoundRef.current);
			}
		};
	}, [audioDown, audioUp]);

	useEffect(() => {
		const handleMouseDown = (event) => {
			if (darkModeSwitchRef.current?.contains(event.target)) {
				playSound(isDarkMode ? audioUp : audioDown);
			}
		};

		document.addEventListener("mousedown", handleMouseDown);
		return () => document.removeEventListener("mousedown", handleMouseDown);
	}, [isDarkMode, audioDown, audioUp, playSound]);

	useEffect(() => {
		const handleMouseUp = (event) => {
			if (darkModeSwitchRef.current?.contains(event.target)) {
				playSound(isDarkMode ? audioDown : audioUp);
			}
		};

		document.addEventListener("mouseup", handleMouseUp);
		return () => document.removeEventListener("mouseup", handleMouseUp);
	}, [isDarkMode, audioDown, audioUp, playSound]);

	return (
		<div
			className={`dark-mode-switch ${isDarkMode ? "dark-mode" : "light-mode"}`}
			ref={darkModeSwitchRef}
		>
			<input
				type="checkbox"
				id="darkModeToggle"
				checked={isDarkMode}
				onChange={toggleDarkMode}
				onClick={() => trackAction("Dark Mode Switch", "Clicked", "Dark Mode Toggle")}
			/>
			<label htmlFor="darkModeToggle">
				<span className="switch" />
			</label>
		</div>
	);
};

export default DarkModeSwitch;
