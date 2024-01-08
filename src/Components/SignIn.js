// SignIn.js
// This component displays a sign-in modal and handles user sign-in.

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { hideModal } from "../redux/modalActions";
import { loginUser } from "../redux/authActions";
import { showRegisterModal } from "../redux/modalActions";

// SignIn functional component, accepting registeredUsers as props
const SignIn = ({ registeredUsers }) => {
  // Redux setup for dispatching actions and selecting state
  const dispatch = useDispatch();
  const showSignIn = useSelector((state) => state.modal.showSignIn);

  // State for the username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State to handle error message
  const [errorMessage, setErrorMessage] = useState("");

  // Handle closing the modal
  const handleClose = () => {
    dispatch(hideModal());
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    setErrorMessage(""); // Resetting error message

    // Find the user in the registeredUsers array
    if (registeredUsers && registeredUsers.length > 0) {
      const user = registeredUsers.find(
        (u) => u.username === username && u.password === password
      );

      // Dispatch login action if user is found and correct credentials
      if (user) {
        dispatch(loginUser(username));
        handleClose();
      } else {
        // Set error message if credentials are incorrect
        setErrorMessage("Incorrect username or password.");
      }
    } else {
      // Set error message if there are no registered users
      setErrorMessage("No User Exists, please register to sign in");
    }
  };

  return (
    <>
      <Modal show={showSignIn} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Username Field */}
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password Field */}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            {/* Display general error message if any */}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}

            {/* Sign In Button */}
            <Button variant="primary" type="submit">
              Sign In
            </Button>

            {/* Register Button */}
            <Button
              variant="primary"
              type="button" // Changed to 'button' since this isn't submitting a form
              onClick={() => dispatch(showRegisterModal())} // onClick event added
            >
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignIn;
