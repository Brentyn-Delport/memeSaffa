// ProductDetails.js
// This component is responsible for displaying detailed information about a single product.

import React from 'react';

// Functional Component for Product Details
// It takes a single product object as a prop and displays various attributes of the product.
const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            {/* Display the description of the product */}
            <h5>{product.description}</h5>
            
            {/* Display the color of the product */}
            <p>Color: {product.color}</p>

            {/* Display the price of the product, prefixed with the South African Rand symbol */}
            <p>Price: R{product.price}</p>
        </div>
    );
};

export default ProductDetails;
