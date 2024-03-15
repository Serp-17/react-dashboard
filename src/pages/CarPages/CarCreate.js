import React from "react";
import {Col, Row} from 'react-bootstrap';
import CreateCarForm from "../../components/Form/CreateCarForm";

export default () => {
    return (
        <Row>
            <Col xs={12} xl={12}>
                <CreateCarForm/>
            </Col>
        </Row>
    );
};
