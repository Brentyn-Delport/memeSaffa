// Header.js

import React from 'react';
import { Container, Navbar, Nav, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSignInModal, showRegisterModal } from '../redux/modalActions'; // Adjust the path as needed
import { useSelector } from 'react-redux'; // Import useSelector




const Header = () => {
    const dispatch = useDispatch();    
        // Retrieve isLoggedIn and username from the Redux state
        const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
        const username = useSelector(state => state.auth.username);
    
      // Access cart items from Redux store
      const cartItemsCount = useSelector(state => state.cart.items.length);
      
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
                            {/* Conditionally render links based on isLoggedIn */}
                            {!isLoggedIn && (
                                <>
                                    <Nav.Link onClick={() => dispatch(showSignInModal())}>Sign In</Nav.Link>
                                    <Nav.Link onClick={() => dispatch(showRegisterModal())}>Register</Nav.Link>
                                </>
                            )}
                        </Nav>

                    </Col>
                    <Col md={8} className="text-right">
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
                        {isLoggedIn && <p className="username-display">{username}</p>}
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
