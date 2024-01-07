// ProductCard.js

// This component represents a single product card in the merchandise section.
// It handles product presentation, size and quantity selection, and adding to the cart functionality.
// It also manages modals for product details, zooming images, and sign-in/register alerts.

import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form, ButtonGroup } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartActions";
import { showSignInModal, showRegisterModal } from "../redux/modalActions";

const ProductCard = ({ product }) => {
  // State variables for UI interaction
  const [isHovered, setIsHovered] = useState(false); // Manage hover effect for image zoom
  const [showZoomModal, setShowZoomModal] = useState(false); // Manage modal visibility for zoomed image
  const [selectedSize, setSelectedSize] = useState("M"); // Manage selected size, default is 'M'
  const [quantity, setQuantity] = useState(1); // Manage quantity selection, initialize with 1
  const [selectedShipping, setSelectedShipping] = useState(""); // Manage selected shipping option
  const [showModal, setShowModal] = useState(false); // Manage modal visibility for shipping info
  const [showAlert, setShowAlert] = useState(false); // State for showing alert if not logged in

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Redux state to track if user is logged in

  // Close the sign-in/register alert modal if the user logs in
  useEffect(() => {
    if (isLoggedIn) {
      setShowAlert(false);
    }
  }, [isLoggedIn]);

  const handleSignIn = () => {
    dispatch(showSignInModal());
};

const handleRegister = () => {
    dispatch(showRegisterModal());
};

  // Image click handler to show zoomed image
  const handleImageClick = () => {
    setShowZoomModal(true);
  };

  // Add item to cart handler
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowAlert(true); // Show alert if not logged in
      return;
    }
    // Dispatch action to add item to cart with selected details
    dispatch(
      addItem({
        product,
        quantity,
        size: selectedSize,
        deliveryOption: selectedShipping,
      })
    );
  };

  // Render the product card UI
  return (
    <Card className="mb-4">
      {/* Product Image with hover and click handlers */}
      <Card.Img
        variant="top"
        src={isHovered ? product.hoverImage : product.image}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
      />
      <div
        className="zoom-overlay"
        onClick={handleImageClick}
        style={{
          position: "absolute",
          top: "4px",
          right: "4px",
          fontSize: "24px",
          color: "white",
          cursor: "pointer",
        }}
      >
        🔍
      </div>

      {/* Card Body containing product details and interactive elements */}
      <Card.Body>
        {/* Displaying the product details */}
        <ProductDetails product={product} />

        {/* Size Selection - Renders buttons for each size */}
        <div className="sizes">
          <h6>Select Size:</h6>
          <ButtonGroup>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <Button
                key={size}
                className={
                  selectedSize === size
                    ? "button-selected"
                    : "button-unselected"
                }
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
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            min="1"
          />
        </div>

        {/* Shipping Method - Radios for each shipping method */}
        <div className="shipping">
          <h6>
            Shipping Method: <span onClick={() => setShowModal(true)}>ℹ️</span>
          </h6>
          <Form>
            {[
              { name: "Post Net", value: "Post Net" },
              { name: "Pargo", value: "Pargo" },
              { name: "Budget Courier", value: "Budget Courier" },
            ].map((method) => (
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

        {/* Various Modals for additional information and actions */}
        {/* Shipping Information Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Shipping Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Shipping</h5>
            <p>
              Meme SAFFA prides itself in making the buying process seamless,
              from the time you enter the site up until your new swag is draped
              over you! We have three shipping options and all three are{" "}
              <b>MAHALA!</b>
            </p>

            <h5>
              <b>Option 1: Post Net</b>
            </h5>
            <p>
              Selecting this shipping method allows you to collect your awesome
              new Meme Swag from your nearest Post Net. Once the purchase has
              been finalised, we will be in contact to confirm your preferred
              spot.
              <br />
              <u>Delivery lead time is: 3-5 Working Days</u>
            </p>

            <h5>
              <b>Option 2: Pargo</b>
            </h5>
            <p>
              Selecting this shipping method allows you to collect your awesome
              new Meme Swag from your nearest Pargo Pickup. Once the purchase
              has been finalised, we will be in contact to confirm your
              preferred spot.
              <br />
              <u>Delivery lead time is: 3-5 Working Days</u>
            </p>

            <h5>
              <b>Option 3: Budget Courier</b>
            </h5>
            <p>
              Selecting this shipping method allows you to have your awesome new
              Meme Swag delivered to your preferred spot - Home or Office. Once
              the purchase has been finalised, we will be in contact to confirm
              your desired delivery address.
              <br />
              <u>Delivery lead time is: 3-5 Working Days</u>
            </p>
          </Modal.Body>
        </Modal>
        {/* Modal for Zoomed Image */}
        <Modal
          show={showZoomModal}
          onHide={() => setShowZoomModal(false)}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>A Meme SAFFA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={product.hoverImage}
              alt="Zoomed product"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Modal.Body>
        </Modal>

        {/* Add to Cart Button */}
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        {/* Alert Modal for Sign In / Register Requirement */}
        <Modal show={showAlert} onHide={() => setShowAlert(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please sign in or register to add items to your cart.</p>
            <div className="d-flex justify-content-between mt-3">
              <Button variant="secondary" onClick={handleSignIn}>
                Sign In
              </Button>
              <Button variant="primary" onClick={handleRegister}>
                Register
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
