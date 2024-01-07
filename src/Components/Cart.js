// Cart.js
// This component represents the shopping cart page.
// It displays the items in the cart, allows users to remove items, and shows the total price.
// If the cart is empty, it prompts users to add items to the cart.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartActions";
import {
  Container,
  ListGroup,
  Button,
  Image,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  // Retrieve cart items and total price from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <Container>
      {/* Display the shopping cart title and total price */}
      <h1>Shopping Cart - Total Price: R{totalPrice.toFixed(2)}</h1>

      {/* Render the "Proceed to Checkout" button if there are items in the cart */}
      {cartItems.length > 0 && (
        <Link to="/checkout">
          <Button variant="success" className="mb-3">
            Proceed to Checkout
          </Button>
        </Link>
      )}

      {cartItems.length > 0 ? (
        <ListGroup>
          {/* Map through each item in the cart */}
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product.id}>
              <Row>
                <Col xs={4} md={3} lg={2}>
                  {/* Display the product image */}
                  <Image
                    src={item.product.hoverImage}
                    alt={item.product.description}
                    fluid
                    thumbnail
                    className="cart-image"
                  />
                </Col>
                <Col xs={8} md={9} lg={10}>
                  {/* Display product information */}
                  <h5>{item.product.description}</h5>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Delivery Option: {item.deliveryOption}</p>
                  <p>Price: R{item.product.price * item.quantity}</p>
                  {/* Add a "Remove" button with an onClick event to remove the item */}
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeItem(item.product.id))}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        // Display a message if the cart is empty
        <Alert variant="info">
          Your shopping cart is empty, add some of our awesome SAFFA swag!
        </Alert>
      )}

      {/* Render the "Proceed to Checkout" button again if there are items in the cart */}
      {cartItems.length > 0 && (
        <Link to="/checkout">
          <Button variant="success" className="mb-3">
            Proceed to Checkout
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default Cart;
