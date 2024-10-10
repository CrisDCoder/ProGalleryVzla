import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getasset } from '../../helpers/globals';
import { APP_NAME } from '../../config/globals';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function Header({
    onSearch
}) {
    return (
        <header>
            <div className="content-header">
                <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <div className="app-brand-name">
                            <img src={getasset('/img/camera.svg')} alt="" />
                            <span className='ms-2 fw-bold'>
                                {APP_NAME}
                            </span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="menutop" />
                    <Navbar.Collapse id="menutop">
                        <div className='ms-auto'>
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                const search = document.querySelector('#textsearch');
                                onSearch(search.value);
                            }}>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Arte, sitios, lugares.."
                                            className="border-0"
                                            id='textsearch'
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button className='border-0' type="submit">
                                            Buscar
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        </header>
    )
};
