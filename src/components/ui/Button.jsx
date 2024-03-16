import React from "react";
import {Button} from "react-bootstrap";

const CustomButton = (props) => {
	const {
		title,
		type,
		onClick,
	} = props;

	return (
		<Button
			variant="success"
			onClick={onClick}
			type={type ? type : "button"}
		>
			{title}
		</Button>
	);
};

export default CustomButton;
