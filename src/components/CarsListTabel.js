import {Button, Card, Table} from "@themesberg/react-bootstrap";
import Status from "./Status";
import {carsData} from "../data/cars";
import React from "react";

export const CarsList = () => {
    const TableRow = (props) => {
        const {
            id,
            carDetails: {
                licensePlate,
                make,
                model,
                driver,
                status,
            },
        } = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td className="fw-bold">
                    {licensePlate}
                </td>
                <td>{make}</td>
                <td>{model}</td>
                <td>{driver ? driver : "--"}</td>
                <td>
                    <Status status={status} />
                </td>
                <td>
                    <Button>
                        Buttton
                    </Button>
                </td>
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
                        <th className="border-0">Госс. номер</th>
                        <th className="border-0">Марка</th>
                        <th className="border-0">Модель</th>
                        <th className="border-0">Водитель</th>
                        <th className="border-0">Статус</th>
                        <th className="border-0">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {carsData.map(car => <TableRow key={`car-${car.id}`} {...car} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
