import React from "react";
import {Form} from "react-bootstrap";

const Select = (props) => {
	const {
		title,
		options,
		onChange,
		defaultValue,
	} = props;


	return (
		<Form.Group>
			<Form.Label>{title}</Form.Label>
			<Form.Select defaultValue={defaultValue} onChange={onChange}>
				{
					options.map((item, index) => <option value={item} key={`${index}-${item}`}>{item}</option>)
				}
			</Form.Select>
		</Form.Group>
	);
};

export default Select;
