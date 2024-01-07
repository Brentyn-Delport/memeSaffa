// Checkout.js
// This component represents the checkout page.
// It allows users to review their shopping cart, enter shipping and payment information, and place an order.

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Form,
  Button,
  ListGroup,
  Row,
  Col,
  Modal,
  Image,
} from "react-bootstrap";
import { submitCheckout } from "../redux/checkoutActions";

const Checkout = () => {
  // Retrieve the total price from the Redux store
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // Accessing the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch(); // to dispatch the checkout action

  // State for managing shipping and payment information
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State to control the confirmation modal

  // Handlers for form changes
  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  // Handling order submission
  const handleOrderSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setShowConfirmationModal(true);

    // Construct order details
    const orderDetails = {
      items: cartItems,
      shippingInfo,
      paymentInfo,
    };

    // Dispatch action to submit the checkout
    dispatch(submitCheckout(orderDetails));
  };

  return (
    <Container>
      <h1>Checkout</h1>

      {/* Display Total Price */}
      <h1>Shopping Cart - Total Price: R{totalPrice.toFixed(2)}</h1>

      {/* Cart Summary */}
      <h5>Cart Summary</h5>
      <ListGroup>
        {cartItems.map((item, idx) => (
          <ListGroup.Item key={idx}>
            <Row>
              {/* Product Image */}
              <Col xs={4} md={2}>
                <Image src={item.product.hoverImage} fluid thumbnail />{" "}
                {/* Display product image */}
              </Col>
              <Col>
                {/* Product Description */}
                <p>{item.product.description}</p>

                {/* Quantity */}
                <p>Quantity: {item.quantity}</p>

                {/* Total Price for This Item */}
                <p>Price: R{item.product.price * item.quantity}</p>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Checkout Form */}
      <Form onSubmit={handleOrderSubmit}>
        {/* Shipping Information */}
        <h5>Shipping Information</h5>

        {/* Address Input */}
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            required
            value={shippingInfo.address}
            onChange={handleShippingChange}
          />
        </Form.Group>

        {/* City Input */}
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            required
            value={shippingInfo.city}
            onChange={handleShippingChange}
          />
        </Form.Group>

        {/* Postal Code Input */}
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            name="postalCode"
            required
            value={shippingInfo.postalCode}
            onChange={handleShippingChange}
          />
        </Form.Group>

        {/* Country Input */}
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            required
            value={shippingInfo.country}
            onChange={handleShippingChange}
          />
        </Form.Group>

        {/* Payment Information */}
        <h5>Payment Information</h5>

        {/* Card Number Input */}
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            name="cardNumber"
            required
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
          />
        </Form.Group>

        {/* Expiry Date Input */}
        <Form.Group controlId="expiryDate">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            required
            value={paymentInfo.expiryDate}
            onChange={handlePaymentChange}
          />
        </Form.Group>

        {/* CVV Input */}
        <Form.Group controlId="cvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="text"
            name="cvv"
            required
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="mt-3">
          Place Order
        </Button>
      </Form>

      {/* Confirmation Modal */}
      <Modal
        show={showConfirmationModal}
        onHide={() => setShowConfirmationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Order has been placed! Congrats on your new Saffa Swag!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmationModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Checkout;
