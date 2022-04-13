import { React, useEffect } from 'react';
import FacebookImg from '../../../images/social/facebook.png';
import GoogleImg from '../../../images/social/google.png';
import GithubImg from '../../../images/social/github.png';
import auth from '../../../Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const nevigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let loadingSpinner;
    let errorMsg;

    useEffect(() => {
        if (user) {
            nevigate(from, { replace: true });
        }
    }, [user]);

    if (error) {
        errorMsg = <div className='text-center text-danger'>
            <p>{error.message}</p>
        </div>
    }

    if (loading) {
        loadingSpinner = <div className='text-center'><Spinner animation="border" variant="primary" /></div>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorMsg}
            {loadingSpinner}
            <div className='text-center mt-3'>
                <button onClick={() => signInWithGoogle()} className='btn btn-light border border-secondary me-2'><img style={{ width: '23px', height: '24px', marginRight: '5px' }} src={GoogleImg} alt="" /> Continue With Google</button>
                <button className='btn btn-light border border-secondary me-2'><img style={{ width: '23px', height: '24px', marginRight: '5px' }} src={FacebookImg} alt="" /> Continue With Facebook</button>
                <button className='btn btn-light border border-secondary'><img style={{ width: '23px', height: '24px', marginRight: '5px' }} src={GithubImg} alt="" /> Continue With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;