import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nevigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            nevigate(from, { replace: true });
        }
    }, [user]);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateToSignUp = () => {
        nevigate('/register');
    }

    return (
        <div className='container w-50 mx-auto border border-danger p-5 my-5 rounded-3'>
            <h2>Please Login</h2>
            <Form className='mt-5' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} autoComplete='off' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} autoComplete='off' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-2'>Don't have any account? <span onClick={navigateToSignUp} className='text-danger' style={{ cursor: 'pointer' }}>Sign Up</span></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;