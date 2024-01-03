// ProductCard.js
import React, { useState } from 'react';
import { Card, Button, Modal, Form, ButtonGroup} from 'react-bootstrap';
import ProductDetails from './ProductDetails'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartActions';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);  // State to manage hover effect
    const [showZoomModal, setShowZoomModal] = useState(false);  // For zoomed image modal
    const [selectedSize, setSelectedSize] = useState('M'); // Default size, adjust as necessary
    const [quantity, setQuantity] = useState(1); // Initialize with 1
    const [selectedShipping, setSelectedShipping] = useState(''); // Initialize with an empty string
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const dispatch = useDispatch();

    // Function to handle image click for zooming
    const handleImageClick = () => {
        setShowZoomModal(true);
    };

 // Function to handle adding item to cart
 const handleAddToCart = () => {
    dispatch(addItem({
        product,
        quantity,
        size: selectedSize,
        deliveryOption: selectedShipping,
    }));
};

    return (
        <Card className="mb-4">
        <Card.Img 
            variant="top" 
            src={isHovered ? product.hoverImage : product.image} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleImageClick}  // Set up click handler here
        />
        <div className="zoom-overlay" onClick={handleImageClick} style={{position: 'absolute', top: '4px', right: '4px', fontSize: '24px', color: 'white', cursor: 'pointer'}}>
    🔍
</div>

            <Card.Body>
                {/* Product details */}
                <ProductDetails product={product} />

                 {/* Size Selection */}
                 <div className="sizes">
                    <h6>Select Size:</h6>
                    <ButtonGroup>
                        {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                            <Button 
                                key={size} 
                                variant={selectedSize === size ? 'primary' : 'secondary'} 
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>

                 {/* Quantity Selection */}
                 <div className="quantity">
                    <h6>Quantity:</h6>
                    <Form.Control 
                        type="number" 
                        value={quantity} 
                        onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1" 
                    />
                </div>

                {/* Shipping Method */}
                <div className="shipping">
                    <h6>Shipping Method: <span onClick={() => setShowModal(true)}>ℹ️</span></h6>
                    <Form>
                        {[
                            { name: 'Post Net', value: 'Post Net' },
                            { name: 'Pargo', value: 'Pargo' },
                            { name: 'Budget Courier', value: 'Budget Courier' },

                            // ...other shipping methods...
                        ].map(method => (
                            <Form.Check 
                                type="radio" 
                                label={method.name} 
                                name="shippingMethod" 
                                value={method.value} 
                                checked={selectedShipping === method.value} 
                                onChange={() => setSelectedShipping(method.value)} 
                                key={method.value}
                            />
                        ))}
                    </Form>
                </div>

                {/* Modal for Shipping Info */}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Shipping Information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h4>Shipping</h4>
        <p>
            Meme SAFFA prides itself in making the buying process seamless, from the time you enter the site up until your new swag is draped over you!
            We have three shipping options and all three are <b>MAHALA!</b>
        </p>
        
        <h5><b>Option 1: Post Net</b></h5>
        <p>
            Selecting this shipping method allows you to collect your awesome new Meme Swag from your nearest Post Net. Once the purchase has been finalised, we will be in contact to confirm your preferred spot.
            <br/><u>Delivery lead time is: 3-5 Working Days</u>
        </p>
        
        <h5><b>Option 2: Pargo</b></h5>
        <p>
            Selecting this shipping method allows you to collect your awesome new Meme Swag from your nearest Pargo Pickup. Once the purchase has been finalised, we will be in contact to confirm your preferred spot.
            <br/><u>Delivery lead time is: 3-5 Working Days</u>
        </p>
        
        <h5><b>Option 3: Budget Courier</b></h5>
        <p>
            Selecting this shipping method allows you to have your awesome new Meme Swag delivered to your preferred spot - Home or Office. Once the purchase has been finalised, we will be in contact to confirm your desired delivery address.
            <br/><u>Delivery lead time is: 3-5 Working Days</u>
        </p>
    </Modal.Body>
</Modal>
{/* Modal for Zoomed Image */}
<Modal 
    show={showZoomModal} 
    onHide={() => setShowZoomModal(false)} 
    centered
    size="lg">
    <Modal.Header closeButton>
        <Modal.Title>A Meme SAFFA</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <img 
            src={product.image} 
            alt="Zoomed product" 
            className="img-fluid" 
            style={{maxWidth: '100%', height: 'auto'}} 
        />
    </Modal.Body>
</Modal>



<Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>

            </Card.Body>
        </Card>
    );
};

export default ProductCard;
