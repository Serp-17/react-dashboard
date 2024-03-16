import React from "react";
import {Form} from "react-bootstrap";


const Field = (props) => {
	const {
		title,
		type,
		required,
		placeholder,
	} = props;


	return (
		<Form.Group>
			<Form.Label>{title}</Form.Label>
			<Form.Control
				required={required}
				type={type ? type : "text"}
				placeholder={placeholder}
			/>
		</Form.Group>
	);
}

export default Field;
