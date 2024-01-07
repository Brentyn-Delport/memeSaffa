// Home.js
// Images obtained from https://app.supermeme.ai/
// This is the main landing page of the application, showcasing top memes in a carousel, top-selling products, and a call-to-action section.
// The page is designed to engage users with visually appealing memes and invite them to explore the merchandise and join the community.

import React from "react";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showRegisterModal } from "../redux/modalActions";
import { useEffect } from "react";

// Importing meme images from the Images folder for the carousel display
import meme1 from "../Images/meme1.png";
import meme2 from "../Images/meme2.png";
import meme3 from "../Images/meme3.png";
import meme4 from "../Images/meme4.png";
import meme5 from "../Images/meme5.png";
import meme6 from "../Images/meme6.png";
import meme7 from "../Images/meme7.png";
import meme8 from "../Images/meme8.png";
import meme9 from "../Images/meme9.png";
import meme10 from "../Images/meme10.png";
import meme11 from "../Images/meme11.png";
import meme12 from "../Images/meme12.png";

// Importing product images from the Images folder for the top sellers display
import product1 from "../Images/product1.jpeg";
import product2 from "../Images/product2.jpeg";
import product3 from "../Images/product3.jpeg";

const Home = () => {
  const dispatch = useDispatch();
  // Array of all meme images for the carousel
  const memes = [
    meme1,
    meme2,
    meme3,
    meme4,
    meme5,
    meme6,
    meme7,
    meme8,
    meme9,
    meme10,
    meme11,
    meme12,
  ];
  // Array of all product images for the top sellers
  const products = [product1, product2, product3];

  // Setting the header texts in the SA flag colors
  useEffect(() => {
    // Define an array of RGB colors for each letter
    const colors = ["#007A4D", "#000000", "#FFB612", "#DE3831", "#002395"];

    // Get all elements with the 'colored-h2' class
    const coloredH2Elements = document.querySelectorAll(".colored-h2");

    // Loop through each 'h2' element
    coloredH2Elements.forEach((headerText, index) => {
      // Split the header text into an array of characters
      const letters = headerText.textContent.split("");

      // Create a new HTML content with each letter wrapped in a <span> with a unique color
      const coloredHeaderText = letters
        .map((letter, i) => {
          // Get a color from the colors array
          const color = colors[i % colors.length];
          return `<span style="color: ${color}">${letter}</span>`;
        })
        .join("");

      // Replace the header text with the colored version
      headerText.innerHTML = coloredHeaderText;
    });
  }, []);
  return (
    <div className="home">
      {/* Carousel section for displaying top memes */}
      <Container className="top-memes-section my-5">
        <Row>
          <Col md={12}>
            <h2 className="colored-h2">Top Memes</h2>
            <Carousel interval={4000}>
              {" "}
              {/* Memes are rotated every 4 seconds */}
              {memes.map((meme, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="carousel-image"
                    src={meme}
                    alt={`Meme ${idx + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Section for displaying top-selling products */}
      <Container className="top-sellers-section my-5">
        <h2 className="colored-h2">Our Top Sellers</h2>
        <Row>
          {products.map((product, idx) => (
            <Col md={4} key={idx}>
              <Card>
                <Card.Img variant="top" src={product} />
                <Card.Body>
                  {/* Future development: dynamic product rating */}
                  <div className="product-rating">
                    {/* Add 5 gold stars */}
                    <i className="fas fa-star gold-star"></i>
                    <i className="fas fa-star gold-star"></i>
                    <i className="fas fa-star gold-star"></i>
                    <i className="fas fa-star gold-star"></i>
                    <i className="fas fa-star gold-star"></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Link to="/merchandise">
            <Button variant="primary">View our products</Button>
          </Link>
        </Row>
      </Container>

      {/* Call to Action section for community engagement */}
      <Container className="cta-section text-center my-5">
        <h2 className="colored-h2">Join Our Meme Community</h2>
        <Button variant="primary" onClick={() => dispatch(showRegisterModal())}>
          Register
        </Button>
      </Container>
    </div>
  );
};

export default Home;
