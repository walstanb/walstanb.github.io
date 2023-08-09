import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { trackAction } from "../common/analytics";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link, link_text } = props;

	return (
		<React.Fragment>
			<div to={link} className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
						<Link
							to={link}
							onClick={() =>
								trackAction("Article", "Clicked", title)
							}
						>
							{link_text}{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
