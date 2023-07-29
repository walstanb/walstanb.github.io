import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { ThemeProvider } from "./ThemeContext.js";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import NavBar from "./components/common/navBar.jsx";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

// Initialize Google Analytics
ReactGA.initialize(TRACKING_ID);

function App() {
	const location = useLocation();
	useEffect(() => {
		// Track page view on route change
		ReactGA.send({ hitType: "pageview", page: location.pathname });
	}, [location.pathname]);

	return (
		<ThemeProvider>
			<div className="App">
				<div className="page-content">
					<NavBar active={location.pathname} />
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
