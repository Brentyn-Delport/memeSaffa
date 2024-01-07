// SignIn.js
// This component displays a sign-in modal and handles user sign-in.

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { hideModal } from '../redux/modalActions'; 
import { loginUser } from '../redux/authActions'; 


const SignIn = () => {
// Redux setup
const dispatch = useDispatch();
const showSignIn = useSelector(state => state.modal.showSignIn);



    // State for the username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

        // State to handle error message
        const [errorMessage, setErrorMessage] = useState("");

    // Handle closing the modal
    const handleClose = () => {
        dispatch(hideModal());
    };

    
 // Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Resetting error message

    // Implement sign-in logic here. 
    // If an error occurs (e.g., wrong credentials), update the error message
    // setErrorMessage("Incorrect username or password.");

    // Assuming sign-in success
    console.log("User signed in:", { username, password });
    dispatch(loginUser(username));
    handleClose(); // Close the modal on successful submission
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

                {/* Submit Button */}
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
            </Modal.Body>
            </Modal>
        </>

    );
};

export default SignIn;
