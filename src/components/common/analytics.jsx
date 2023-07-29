import ReactGA from "react-ga";

export const trackAction = ({ category, action, label }) => {
	ReactGA.send({
		hitType: "event",
		eventCategory: category,
		eventAction: action,
		eventLabel: label,
	});
};
