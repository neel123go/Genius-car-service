import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const nevigate = useNavigate();

    const navigateToLogin = () => {
        nevigate('/login');
    }

    useEffect(() => {
        if (user) {
            nevigate('/home');
        }
    }, [user]);

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }


    return (
        <div className='container w-50 mx-auto border border-danger p-5 my-5 rounded-3'>
            <h2>Create an account</h2>
            <Form className='mt-5' onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control autoComplete='off' name="name" type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control autoComplete='off' name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete='off' name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <div className='my-3'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                    <label className={`ms-2 ${agree ? '' : 'text-secondary'}`} htmlFor="terms">By clicking, you agree to our <a href="#">terms and condition</a> and <a href="#">Privacy Statement</a></label>
                </div>
                <Button disabled={!agree} variant="primary" type="submit">
                    Create an account
                </Button>
                <p className='mt-2'>Already have an account? <span onClick={navigateToLogin} className='text-danger' style={{ cursor: 'pointer' }}>Login</span></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;