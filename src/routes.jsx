import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
};

export default AppRoutes;
