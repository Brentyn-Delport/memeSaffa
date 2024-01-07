// Header.js
// This component serves as the navigation header for the application. 
// It includes the logo, navigation links, and a dynamic display of user login state and cart items. It is designed to provide easy navigation and a personalized user experience.

import React from 'react';
import { Container, Navbar, Nav, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSignInModal, showRegisterModal } from '../redux/modalActions'; 

const Header = () => {
    const dispatch = useDispatch();    
    // Retrieve isLoggedIn and username from the Redux state for conditional rendering
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const username = useSelector(state => state.auth.username);
    
    // Access cart items count from Redux store to display in the cart badge
    const cartItemsCount = useSelector(state => state.cart.items.length);
      
    return (
        <Navbar bg="white" expand="lg">
            <Container className="header">
                <Row className="w-100 align-items-center">
                    <Col md={4}>
                        {/* Brand logo and conditional rendering for SignIn and Register based on login state */}
                        <Navbar.Brand href="#home">
                            <img
                                src={process.env.PUBLIC_URL + '/meme-saffa-logo.png'} 
                                width="250" 
                                height="auto"
                                className="logo"
                                alt="Meme Saffa Logo"
                            />
                        </Navbar.Brand>
                        <Nav className="flex-row">
                            {!isLoggedIn && (
                                <>
                                    <Nav.Link onClick={() => dispatch(showSignInModal())}>Sign In</Nav.Link>
                                    <Nav.Link onClick={() => dispatch(showRegisterModal())}>Register</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Col>
                    <Col md={8} className="text-right">
                        {/* Main navigation links and dynamic cart badge indicator */}
                        <Nav className="justify-content-end">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/merchandise" className="nav-link">Merchandise</Link>
                            <Link to="/cart" className="nav-link">
                                Cart
                                {cartItemsCount > 0 && (
                                    <Badge pill bg="danger" className="ms-0">
                                        {cartItemsCount} {/* Display number of items in the cart */}
                                    </Badge>
                                )}
                            </Link>
                            <Link to="/contactpage" className="nav-link">Contact</Link>
                        </Nav>
                        {/* Display username when logged in */}
                        {isLoggedIn && <p className="username-display">{username}</p>}
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
