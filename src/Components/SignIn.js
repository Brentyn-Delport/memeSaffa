// SignIn.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { hideModal } from '../redux/modalActions'; 
import { loginUser } from '../redux/authActions'; // Adjust the path as needed


const SignIn = () => {
// Redux setup
const dispatch = useDispatch();
const showSignIn = useSelector(state => state.modal.showSignIn);



    // State for the username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle closing the modal
    const handleClose = () => {
        dispatch(hideModal());
    };

    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement sign-in logic here. For now, we'll just log the credentials
        console.log("User signed in:", { username, password });
        dispatch(loginUser(username));
        // Typically, you'd dispatch an action or make an API call here
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
