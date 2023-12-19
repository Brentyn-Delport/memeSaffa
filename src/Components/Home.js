// Home.js
// Images obtained from Unsplash

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingImage1 from '../Images/landingImage1.jpg';

const Home = () => {
    return (
        <div className="home">
            {/* Background Image Section */}
            <div className="landing-background" style={{ backgroundImage: `url(${landingImage1})` }}>

                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h1>Welcome to the Aurum Guild</h1>
                            <p>Your elite club description goes here.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Image and Benefits Section */}
            <Container className="benefits-section">
                <Row>
                    <Col md={6}>
                        <img 
                            src={process.env.PUBLIC_URL + 'landingImage2.png'} 
                            alt="Landing Image 2"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Benefits of Joining</h2>
                        <ul>
                            <li>Benefit 1</li>
                            <li>Benefit 2</li>
                            <li>Benefit 3</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Call to Action */}
            <Container className="cta-section">
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <h2>Join Our Exclusive Community</h2>
                        <Button variant="primary" href="#enlist">Enlist in the Guild</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
