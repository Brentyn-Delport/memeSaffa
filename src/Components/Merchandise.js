// Merchandise.js
import React from 'react';
import ProductCard from './ProductCard';  // Make sure the path is correct
import { Container, Row, Col } from 'react-bootstrap';
import products from './productData';  // Make sure the path is correct

const Merchandise = () => {
    return (
        <Container>
            <h2>Meme merch</h2>
            {/* Organize products into rows and columns */}
            {Array.from({ length: Math.ceil(products.length / 3) }, (_, rowIndex) => (
                <Row key={rowIndex}>
                    {products.slice(rowIndex * 3, (rowIndex + 1) * 3).map(product => (
                        <Col key={product.id} sm={12} md={4}>
                            {/* Pass the product to the ProductCard component */}
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
};

export default Merchandise;
