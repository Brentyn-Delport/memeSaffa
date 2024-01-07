// Merchandise.js

// This component is responsible for rendering the merchandise page,
// which displays all the products in a grid format. It utilizes the ProductCard component
// to display each product and arranges them into a responsive grid using Bootstrap's Row and Col components.

import React from 'react';
import { useEffect } from 'react'; 
import ProductCard from './ProductCard';  // Ensure this path is correct for your project structure
import { Container, Row, Col } from 'react-bootstrap';
import products from './productData';  // Ensure this path is correct for your project structure

const Merchandise = () => {

 // Using useEffect to set the header texts in the SA flag colors when the component mounts
 useEffect(() => {
    // Define an array of RGB colors representing the SA flag
    const colors = ['#007A4D', '#000000', '#FFB612', '#DE3831', '#002395'];

    // Targeting all elements with the 'colored-h2' class
    const coloredH2Elements = document.querySelectorAll('.colored-h2');

    // Loop through each 'h2' element to apply color styling to each letter
    coloredH2Elements.forEach((headerText) => {
        // Split the header text into an array of characters
        const letters = headerText.textContent.split('');

        // Wrap each letter in a <span> with a style color from the colors array
        const coloredHeaderText = letters
            .map((letter, i) => `<span style="color: ${colors[i % colors.length]}">${letter}</span>`)
            .join('');

        // Replace the header text with the newly styled text
        headerText.innerHTML = coloredHeaderText;
    });
}, []);

    return (
        <Container>
            {/* Merchandise Section Header */}
            <h2 className="colored-h2">Meme merch</h2>
            {/* Product Grid */}
            {/* This section organizes products into rows and columns for a grid layout */}
            {Array.from({ length: Math.ceil(products.length / 3) }, (_, rowIndex) => (
                <Row key={rowIndex}>
                    {/* Create a column for each product and pass the product to the ProductCard component */}
                    {products.slice(rowIndex * 3, (rowIndex + 1) * 3).map(product => (
                        <Col key={product.id} sm={12} md={4}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
};

export default Merchandise;

