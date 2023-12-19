// Footer.js

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <p>Contact: contact@email.com</p>
                        <p>Legal</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <p>Your Motto Here</p>
                    </Col>
                    <Col md={4} className="text-right">
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#membershipDetails">Membership Details</Nav.Link>
                            <Nav.Link href="#listings">Listings</Nav.Link>
                            <Nav.Link href="#gildedCollection">Gilded Collection</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

