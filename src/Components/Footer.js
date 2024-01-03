// Footer.js

import React from 'react';
import { Container, Navbar, Nav, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector


const Footer = () => {

          // Access cart items from Redux store
          const cartItemsCount = useSelector(state => state.cart.items.length);

          
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <p>Contact: contact@email.com</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <p>Your Motto Here</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <Nav className="justify-content-end">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/merchandise" className="nav-link">Merchandise</Link>
                        <Link to="/cart" className="nav-link">
                        Cart
                        {cartItemsCount > 0 && (
                            <Badge pill bg="danger" className="ms-0">
                                {cartItemsCount} {/* Display number of items */}
                            </Badge>
                        )}
                    </Link>
                            <Nav.Link href="#contactUs">Contact us</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

