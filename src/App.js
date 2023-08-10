import React, { useEffect, useState, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { ThemeProvider } from "./ThemeContext.js";
import PageTransition from "./PageTransition";
import NavBar from "./components/common/navBar.jsx";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

// Initialize Google Analytics
if (TRACKING_ID) {
	ReactGA.initialize(TRACKING_ID);
}

function App() {
	const location = useLocation();

	const pagePaths = useMemo(
		() => ({
			"/": 1,
			"/about": 2,
			"/projects": 3,
			"/contact": 4,
		}),
		[]
	);

	const [pageIndex, setPageIndex] = useState(
		pagePaths[location.pathname] || 404
	);

	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);
	ReactGA.send({ hitType: "pageview", page: location.pathname });

	useEffect(() => {
		setPageIndex(pagePaths[String(location.pathname)] || 404);
	}, [pagePaths, location.pathname]);

	return (
		<ThemeProvider>
			<div className="App">
				<NavBar active={location.pathname} />
				<PageTransition pageIndex={pageIndex}>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</PageTransition>
			</div>
		</ThemeProvider>
	);
}

export default App;
