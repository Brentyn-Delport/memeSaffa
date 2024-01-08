// Register.js
// This component displays a registration modal and handles user registration.

// Import necessary dependencies
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { hideModal } from "../redux/modalActions";
import { registerUser } from "../redux/authActions";

const Register = ({ setRegisteredUsers }) => {
  // Redux setup for dispatching actions and accessing state
  const dispatch = useDispatch();
  const showRegister = useSelector((state) => state.modal.showRegister);

  // State for each input field
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Additional state for error messages
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    general: "", // General error message for any other errors
  });

  // Function to close the modal
  const handleClose = () => {
    dispatch(hideModal());
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Validation check for password
  const isValidPassword = (password) => {
    // Check for minimum length, one uppercase letter, one number, and one special character
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return minLength && hasUpperCase && hasNumber && hasSpecialChar;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error messages
    setErrorMessages({ email: "", password: "", general: "" });

    // Validate email
    if (!isValidEmail(email)) {
      setErrorMessages((prev) => ({
        ...prev,
        email: "Please enter a valid email address!",
      }));
      return;
    }

    // Validate password
    if (!isValidPassword(password)) {
      setErrorMessages((prev) => ({
        ...prev,
        password:
          "Password must be at least 8 characters, include an uppercase letter, a number, and a special character!",
      }));
      return;
    }

    // Add user to registered users state in App.js
    setRegisteredUsers((prevUsers) => [...prevUsers, { username, password }]);
    handleClose();

    // Dispatch action to update state with user's details
    dispatch(registerUser({ firstName, surname, username, email, password }));
    handleClose(); // Close the modal on successful submission
  };

  return (
    <Modal show={showRegister} onHide={handleClose} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* First Name Field */}
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>

          {/* Surname Field */}
          <Form.Group>
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </Form.Group>

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

          {/* Email Address Field */}
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* Display email error message if any */}
            {errorMessages.email && (
              <p className="text-danger">{errorMessages.email}</p>
            )}
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
            {errorMessages.password && (
              <p className="text-danger">{errorMessages.password}</p>
            )}
          </Form.Group>
          {errorMessages.general && (
            <p className="text-danger text-center">{errorMessages.general}</p>
          )}
          {/* Submit Button */}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
