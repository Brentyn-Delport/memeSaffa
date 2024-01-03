// Merchandise.js
import React from 'react';
import ProductCard from './ProductCard';  // Make sure the path is correct
import { Container, Row, Col } from 'react-bootstrap';
import products from './productData';  // Make sure the path is correct
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartActions';  // Adjust path as needed


const Merchandise = () => {
    const dispatch = useDispatch();

    // Example function to handle adding items to cart with user selections
    const handleAddToCart = (product, quantity, size, deliveryOption) => {
        dispatch(addItem({
            ...product,
            quantity,
            size,
            deliveryOption,
        }));
    };
    
    return (
        <Container>
            {/* "This month's top hits" section */}
            <h2>This month's top hits</h2>
            <Row>
                {products.slice(0, 3).map(product => (
                    <Col key={product.id} sm={12} md={4}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>

            {/* "Meme merch" section with all products */}
            <h2>Meme merch</h2>
            {Array.from({ length: Math.ceil(products.length / 3) }, (_, rowIndex) => (
                <Row key={rowIndex}>
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
