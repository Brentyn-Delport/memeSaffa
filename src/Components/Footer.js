// Footer.js
// Purpose: This component provides a consistent footer for the application.
// It includes social media links, a catchy motto, and navigation links. It's designed to offer quick access to various parts of the site and to promote the site's social media presence.

import React from "react";
import { useEffect } from "react";
import { Container, Nav, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Access cart items count from Redux store for displaying in the navigation links
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  // Effect hook for applying SA flag colors to header texts. It's a visual feature for the motto.
  useEffect(() => {
    const colors = ["#007A4D", "#000000", "#FFB612", "#DE3831", "#002395"]; // Array of SA flag colors
    const coloredH2Elements = document.querySelectorAll(".colored-h2"); // Select all elements with class 'colored-h2'
    coloredH2Elements.forEach((headerText) => {
      const letters = headerText.textContent.split("");
      const coloredHeaderText = letters
        .map(
          (letter, i) =>
            `<span style="color: ${colors[i % colors.length]}">${letter}</span>`
        )
        .join("");
      headerText.innerHTML = coloredHeaderText; // Apply colored text to the motto
    });
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Social Media Links */}
          <Col md={4}>
            <div className="social-media-links">
              {/* Icons for Twitter, Instagram, and Facebook with links to respective pages */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </Col>

          {/* Middle Section - Motto with dynamic color application */}
          <Col md={4} className="text-center">
            <h2 className="colored-h2">"Saffa Memes"</h2>{" "}
            {/* Motto of the site */}
          </Col>

          {/* Right Section - Navigation Links */}
          <Col md={4} className="text-center">
            <Nav className="justify-content-start">
              {/* Navigation links to different pages with dynamic cart items badge */}
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/merchandise" className="nav-link">
                Merchandise
              </Link>
              <Link to="/cart" className="nav-link">
                Cart
                {cartItemsCount > 0 && (
                  <Badge pill bg="danger" className="ms-0">
                    {cartItemsCount} {/* Display number of items in the cart */}
                  </Badge>
                )}
              </Link>
              <Link to="/contactpage" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
