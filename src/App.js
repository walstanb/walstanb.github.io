import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { ThemeProvider } from "./ThemeContext.js";
import PageTransition from "./PageTransition";
import NavBar from "./components/common/navBar.jsx";
import AppRoutes from "./routes.jsx";

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
					<AppRoutes />
				</PageTransition>
			</div>
		</ThemeProvider>
	);
}

export default App;
