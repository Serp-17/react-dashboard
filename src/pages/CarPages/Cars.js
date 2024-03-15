import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';
import {Col, Row, Button, Form, InputGroup} from 'react-bootstrap';
import {CarsList} from "../../components/CarsListTabel";

export default () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-flex align-items-center">
                    <Form className="navbar-search">
                        <Form.Group id="topbarSearch">
                            <InputGroup className="input-group-merge search-bar">
                                <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                <Form.Control type="text" placeholder="Search" />
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </div>
                <Link to="/car/create">
                    <Button variant="secondary" className="text-dark ms-auto">
                        <FontAwesomeIcon icon={faPlus} className="me-2"/>
                        <span>Добавить</span>
                    </Button>
                </Link>
            </div>

            <Row>
                <Col xs={12} xl={12}>
                    <CarsList/>
                </Col>
            </Row>
        </>
    )
}
