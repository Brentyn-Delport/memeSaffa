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
                                src={process.env.PUBLIC_URL + '/meme-saffa-logo.png'} 
                                width="200" 
                                height="auto"
                                className="d-inline-block align-top"
                                alt="Meme Saffa Logo"
                            />
                        </Navbar.Brand>
                        <Nav className="flex-row">
                            <Nav.Link href="#signIn">Sign In</Nav.Link>
                            <Nav.Link href="#register">Register</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={8} className="text-right">
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#merchandise">Merchandise</Nav.Link>
                            <Nav.Link href="#cart">Cart</Nav.Link>
                            <Nav.Link href="#contactUs">Contact us</Nav.Link>
                        </Nav>
                        {isLoggedIn && <p className="username-display">{username}</p>}
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
