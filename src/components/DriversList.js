import React from "react";
import {Card, Table} from "react-bootstrap";
import {driversData} from "../data/drivers";

export const DriversList = () => {
    const TableRow = (props) => {
        const {
            id,
            firstName,
            lastName,
            phone,
            autoId,
        } = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td className="fw-bold">
                    {firstName}
                </td>
                <td>{lastName}</td>
                <td>{phone}</td>
                <td>{autoId ? autoId : "--"}</td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-4">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">#</th>
                        <th className="border-0">Имя</th>
                        <th className="border-0">Фамилия</th>
                        <th className="border-0">Номер телефона</th>
                        <th className="border-0">Машина</th>
                    </tr>
                    </thead>
                    <tbody>
                        {driversData.map(driver => <TableRow key={`car-${driver.id}`} {...driver} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
