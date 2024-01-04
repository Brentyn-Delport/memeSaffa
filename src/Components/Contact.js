import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      {/* Contact Us Header */}
      <Row className="justify-content-md-center">
        <h1>Contact Us</h1>
      </Row>

      {/* Our Office Section */}
      <Row style={{ marginTop: '20px' }}>
        <Col>
          <h2>Our Office</h2>
          <p>1234 In The Middle,<br/>Ofanowhere, 0000<br/>South Africa</p>

          {/* Embedding a static Google Map image or iframe for location */}
          {/* https://www.googlemapsiframegenerator.com/ */}

          <iframe
            title="Our Location"
            src="https://maps.google.com/maps?q=south%20africa&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </Col>
      </Row>

      {/* Contact Details Section */}
      <Row style={{ marginTop: '20px' }}>
        <Col>
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> Hi@memesaffa.com</p>
          <p><strong>Phone:</strong> +27 123 456 7890</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;

