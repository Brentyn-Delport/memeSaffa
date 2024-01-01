// Header.js

import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSignInModal, showRegisterModal } from '../redux/modalActions'; // Adjust the path as needed
import { useSelector } from 'react-redux'; // Import useSelector




const Header = () => {
    const dispatch = useDispatch();    
        // Retrieve isLoggedIn and username from the Redux state
        const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
        const username = useSelector(state => state.auth.username);
    
    
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
                        <Nav.Link onClick={() => dispatch(showSignInModal())}>Sign In</Nav.Link>
                <Nav.Link onClick={() => dispatch(showRegisterModal())}>Register</Nav.Link>
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
