import React, {useState} from "react";
import {Card, Col, Form, Row} from "react-bootstrap";
import Select from "../ui/Select";
import Field from "../ui/Field";
import Button from "../ui/Button";

import {carModel} from "../../data/cars";

const CreateCarForm = () => {
	const [make, setMake] = useState("Ford");

	const year = (new Date()).getFullYear();
	const years = Array.from(new Array(30), (val, index) => index + (year - 29));

	const changeMake = (e) => {
		const val = e.target.value;
		setMake(val);
	}

	return (
		<Card border="light" className="bg-white shadow-sm mb-4">
			<Card.Body>
				<h5 className="mb-4">Основная информация</h5>
				<Form>
					<Row>
						<Col md={4} className="mb-3">
							<Select
								title="Марка"
								defaultValue={make}
								onChange={changeMake}
								options={Object.keys(carModel)}
							/>
						</Col>
						<Col md={4} className="mb-3">
							<Select
								title="Модель"
								onChange={(e) => console.log(e)}
								options={carModel[make]}
							/>
						</Col>
						<Col md={4} className="mb-3">
							<Select
								title="Год"
								onChange={(e) => console.log(e)}
								options={years.reverse()}
							/>
						</Col>
					</Row>
					<Row className="align-items-center">
						<Col md={4} className="mb-3">
							<Field
								title="Номерной знак"
								required
								placeholder="AX5555CT"
							/>
						</Col>
						<Col md={4} className="mb-3">
							<Field
								title="Техпаспорт"
								required
								placeholder="AX5555CT"
							/>
						</Col>
						<Col md={4} className="mb-3">
							<Field
								title="Пробег (км)"
								required
								placeholder="100000"
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4} className="mb-3">
							<Field
								title="Цена покупки (грн)"
								required
								placeholder="500000"
							/>
						</Col>
					</Row>
					<Row className="mt-3 justify-content-end">
						<Button
							title="Добавить"
							onClick={e => console.log(e)}
						/>
					</Row>
				</Form>
			</Card.Body>
		</Card>
	)
};

export default CreateCarForm;
