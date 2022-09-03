import React from "react";
import propTypes from "prop-types";

const Footer = props => {
	if (props.tasks.length === 0) {
		return <li className="footer-container">No tasks...</li>;
	} else {
		return (
			<li className="footer-container">{props.tasks.length} item left</li>
		);
	}
};

Footer.propTypes = {
	tasks: propTypes.array
};

export default Footer;
