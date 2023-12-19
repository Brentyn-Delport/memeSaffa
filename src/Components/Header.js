// Header.js

import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

const Header = ({ isLoggedIn, username }) => {
    return (
<Navbar bg="white" expand="lg">
            <Container>
                <Row className="w-100 align-items-center">
                    <Col md={4}>
                        <Navbar.Brand href="#home">
                            <img
                                src={process.env.PUBLIC_URL + '/aurom-guild-logo.png'} 
                                width="100" 
                                height="auto"
                                className="d-inline-block align-top"
                                alt="Aurom Guild Logo"
                            />
                        </Navbar.Brand>
                        <Nav className="flex-column">
                            <Nav.Link href="#signIn">Private Access</Nav.Link>
                            <Nav.Link href="#register">Enlist in the Guild</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={8} className="text-right">
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#membershipDetails">Membership Details</Nav.Link>
                            <Nav.Link href="#listings">Listings</Nav.Link>
                            <Nav.Link href="#gildedCollection">Gilded Collection</Nav.Link>
                        </Nav>
                        {isLoggedIn && <p className="username-display">{username}</p>}
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
