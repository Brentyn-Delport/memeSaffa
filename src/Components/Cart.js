// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartActions'; // Adjust path as necessary
import { Container, ListGroup, Button, Image, Alert } from 'react-bootstrap';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const dispatch = useDispatch();

    return (
        <Container>
            <h1>Shopping Cart - Total Price: R{totalPrice.toFixed(2)}</h1>
            {cartItems.length > 0 ? (
                <ListGroup>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product.id}>
                            <Image
                                src={item.product.image}
                                alt={item.product.description}
                                fluid
                                thumbnail
                                style={{ width: '200px', height: 'auto' }}  // Adjust the width as needed
                            />

                            <h5>{item.product.description}</h5>
                            <p>Size: {item.size}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Delivery Option: {item.deliveryOption}</p>
                            <p>Price: R{item.product.price * item.quantity}</p>
                            <Button variant="danger" onClick={() => dispatch(removeItem(item.product.id))}>Remove</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                // Display a message if the cart is empty
                <Alert variant="info">
                    Your shopping cart is empty, add some of our awesome SAFFA swag!
                </Alert>
            )}
        </Container>

    );
};

export default Cart;
