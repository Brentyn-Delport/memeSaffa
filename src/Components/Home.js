// Home.js
// Images obtained from Unsplash

import React from 'react';
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showRegisterModal } from '../redux/modalActions'; 
// Importing meme images from the Images folder
import meme1 from '../Images/meme1.png';
import meme2 from '../Images/meme2.png';
import meme3 from '../Images/meme3.png';
import meme4 from '../Images/meme4.png';
import meme5 from '../Images/meme5.png';
import meme6 from '../Images/meme6.png';
import meme7 from '../Images/meme7.png';
import meme8 from '../Images/meme8.png';
import meme9 from '../Images/meme9.png';
import meme10 from '../Images/meme10.png';
import meme11 from '../Images/meme11.png';
import meme12 from '../Images/meme12.png';

// Importing product images from the Images folder
import product1 from '../Images/product1.jpeg';
import product2 from '../Images/product2.jpeg';
import product3 from '../Images/product3.jpeg';

const Home = () => {
    const dispatch = useDispatch();
    // Array of all meme images for the carousel
    const memes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12];
    // Array of all product images for the top sellers
    const products = [product1, product2, product3];

    return (
        <div className="home">
            {/* Top Memes Section with Carousel */}
            <Container className="top-memes-section my-5">
                <Row>
                    <Col md={12}>
                        <h2>Top Memes</h2>
                        <Carousel interval={3000}>
                            {/* Slicing memes array into groups of 3 for the carousel */}
                            {Array.from({ length: 4 }).map((_, groupIndex) => (
                                <Carousel.Item key={groupIndex}>
                                    <Row>
                                        {memes.slice(groupIndex * 3, (groupIndex + 1) * 3).map((meme, idx) => (
                                            <Col key={idx}>
                                                <img
                                                    className="d-block w-100"
                                                    src={meme}
                                                    alt={`Meme ${groupIndex * 3 + idx + 1}`}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            {/* Our Top Sellers Section with Cards */}
            <Container className="top-sellers-section my-5">
                <h2>Our Top Sellers</h2>
                <Row>
                    {/* Displaying each product in its own card */}
                    {products.map((product, idx) => (
                        <Col md={4} key={idx}>
                            <Card>
                                <Card.Img variant="top" src={product} />
                                <Card.Body>
                                    <Card.Title>Product Name</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                                                        <Button variant="primary" href="#merchandise">View our products</Button>

                </Row>
            </Container>

            {/* Call to Action Section */}
            <Container className="cta-section text-center my-5">
    <h2>Join Our Meme Community</h2>
    <Button variant="primary" onClick={() => dispatch(showRegisterModal())}>Register</Button>
</Container>

        </div>
    );
};

export default Home;


