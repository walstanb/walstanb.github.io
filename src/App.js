import React, { useEffect, useState, useRef } from "react";
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

function App() {
	const location = useLocation();

	const pagePaths = {
		"/": 1,
		"/about": 2,
		"/projects": 3,
		"/contact": 4,
	};

	const [pageIndex, setPageIndex] = useState(
		pagePaths[location.pathname] || 404
	);

	const queueRef = useRef([]);
	const [isTransitioning, setTransitioning] = useState(false);

	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	useEffect(() => {
		enqueuePageTransition(pagePaths[String(location.pathname)] || 404);
	});

	const hideOtherPagesIfLoaded = (pageIndex) => {
		Array.from(document.getElementsByClassName("content-wrapper")).forEach(
			(element) => {
				element.style.display = "none";
				if (element.classList.contains(`page-${pageIndex}`)) {
					element.style.display = "block";
				}
			}
		);
	};

	const enqueuePageTransition = (nextPageIndex) => {
		queueRef.current.push(nextPageIndex);

		if (!isTransitioning) {
			processQueue();
		}
		hideOtherPagesIfLoaded(pageIndex);
	};

	const processQueue = async () => {
		if (queueRef.current.length === 0) {
			setTransitioning(false);
			return;
		}
		const nextPageIndex = queueRef.current.shift();
		setPageIndex(nextPageIndex);
		setTransitioning(true);
		await processQueue();
	};

	return (
		<ThemeProvider>
			<div className="App">
				<div className="page-content">
					<NavBar
						onPageChange={enqueuePageTransition}
						active={location.pathname}
					/>
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
			</div>
		</ThemeProvider>
	);
}

export default App;
