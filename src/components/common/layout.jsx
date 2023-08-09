import { motion } from "framer-motion";

const Layout = ({ children }) => (
	<motion.div
		// initial={{ opacity: 0.5 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
		style={{
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
		}}
	>
		{children}
	</motion.div>
);
export default Layout;
