import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Homepage from "./pages/homepage";
import Notfound from "./pages/404";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ pageIndex }) => {
	return (
		<div style={{ position: "relative", width: "100%", height: "100vh" }}>
			<AnimatePresence initial={false} mode="out-in">
				<motion.div
					key={pageIndex}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						type: "tween",
						ease: "easeInOut",
						duration: 0.8,
					}}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
					}}
				>
					{/* Pass the appropriate page component based on the pageIndex */}
					{/* For example, you can use a switch statement */}
					{getPageComponent(pageIndex)}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

const pageComponents = {
	1: <Homepage />,
	2: <About />,
	3: <Projects />,
	4: <Contact />,
	404: <Notfound />,
};

const getPageComponent = (pageIndex) => {
	return pageComponents[pageIndex];
};

export default PageTransition;
