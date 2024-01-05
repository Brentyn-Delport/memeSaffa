// Footer.js

import React from 'react';
import { useEffect } from 'react'; 
import { Container, Navbar, Nav, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    // Access cart items from Redux store
    const cartItemsCount = useSelector(state => state.cart.items.length);

    // Setting the header texts in the SA flag colors
    useEffect(() => {
        // Define an array of RGB colors for each letter
        const colors = ['#007A4D', '#000000', '#FFB612', '#DE3831', '#002395'];
    
        // Get all elements with the 'colored-h2' class
        const coloredH2Elements = document.querySelectorAll('.colored-h2');
    
        // Loop through each 'h2' element
        coloredH2Elements.forEach((headerText, index) => {
            // Split the header text into an array of characters
            const letters = headerText.textContent.split('');
    
            // Create a new HTML content with each letter wrapped in a <span> with a unique color
            const coloredHeaderText = letters
                .map((letter, i) => {
                    // Get a color from the colors array
                    const color = colors[i % colors.length];
                    return `<span style="color: ${color}">${letter}</span>`;
                })
                .join('');
    
            // Replace the header text with the colored version
            headerText.innerHTML = coloredHeaderText;
        });
    }, []);

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* Social Media Links */}
                    <Col md={4}>
                        <div className="social-media-links">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faTwitter} /> 
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faInstagram} /> 
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faFacebook} /> 
                            </a>
                        </div>
                    </Col>

                    {/* Middle Section - Motto */}
                    <Col md={4} className="text-center">
                    <h2 className="colored-h2">Rich in Memes, Rich in Spirit</h2>
                    </Col>

                    {/* Right Section - Navigation Links */}
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
                            <Link to="/contactpage" className="nav-link">Contact</Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

