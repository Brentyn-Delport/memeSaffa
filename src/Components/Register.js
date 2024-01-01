// Register.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { hideModal} from '../redux/modalActions'; // adjust the import path
import { registerUser } from '../redux/authActions'; // Adjust the path as needed



const Register = () => {
    // Redux setup
    const dispatch = useDispatch();
    const showRegister = useSelector(state => state.modal.showRegister);

    // State for each input field
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle closing the modal
    const handleClose = () => {
        dispatch(hideModal());
    };


    // Basic validation check for email
    const isValidEmail = email => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // Basic validation check for password
    const isValidPassword = password => {
        return password.length >= 6; // Example: Check if password is 6 characters or more
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Implement more comprehensive validation checks as needed
        if (!isValidEmail(email) || !isValidPassword(password)) {
            alert("Please enter valid email and password!");
            // Close the modal here if you want it to close on invalid input
            // handleClose();
            return; // Return after handling the invalid case
        }
    
        // If all validations pass, you might want to update the state (Redux) or send data to a backend server
        console.log("User registered:", { firstName, surname, username, email, password });
    
        // Dispatch action to update state with user's details
        dispatch(registerUser({ firstName, surname, username, email, password }));
        handleClose(); // Close the modal on successful submission

    
        // dispatch action to redux store or API call
    
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
