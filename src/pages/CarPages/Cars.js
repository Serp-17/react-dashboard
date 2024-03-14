import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Col, Row, Button} from '@themesberg/react-bootstrap';
import {CarsList} from "../../components/CarsListTabel";

export default () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <Button variant="secondary" className="text-dark ms-auto">
                    <FontAwesomeIcon icon={faPlus} className="me-2"/>
                    <span>Добавить</span>
                </Button>
            </div>

            <Row>
                <Col xs={12} xl={12}>
                    <CarsList/>
                </Col>
            </Row>
        </>
    )
}
