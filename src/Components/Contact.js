// ContactPage.js

// This component is designed to provide information on how to contact the business.
// It includes the business address, an embedded map to locate the business, and contact details such as email and phone.

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      {/* Contact Us Header */}
      {/* This Row centers the "Contact Us" header on the page */}
      <Row className="justify-content-md-center">
        <h1>Contact Us</h1>
      </Row>

      {/* Our Office Section */}
      {/* This section provides the physical address of the business */}
      <Row style={{ marginTop: '20px' }}>
        <Col>
          <h2>Our Office</h2>
          <p>1234 In The Middle,<br/>Ofanowhere, 0000<br/>South Africa</p>

          {/* Embedding a Google Map */}
          {/* This iframe embeds a Google Map pointing to a generic location of South Africa */}
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
      {/* This section lists the email and phone number for contact */}
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


