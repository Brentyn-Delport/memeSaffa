// ProductDetails.js

import React from 'react';

// This component receives the product as a prop and displays its details
const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            {/* Display the description of the product */}
            <h5>{product.description}</h5>
            
            {/* Display the color of the product */}
            <p>Color: {product.color}</p>

            {/* Display the price of the product */}
            <p>Price: R{product.price}</p>
            {/* You can expand with more details such as size, material, etc. */}
        </div>
    );
};

export default ProductDetails;
