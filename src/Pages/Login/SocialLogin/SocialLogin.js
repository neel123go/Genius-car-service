import { React, useEffect } from 'react';
import FacebookImg from '../../../images/social/facebook.png';
import GoogleImg from '../../../images/social/google.png';
import GithubImg from '../../../images/social/github.png';
import TwitterImg from '../../../images/social/twitter.png';
import auth from '../../../Firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [token] = useToken(googleUser || facebookUser || githubUser);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let loadingSpinner;
    let errorMsg;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [googleUser, facebookUser, githubUser]);

    if (googleError || facebookError || githubError) {
        errorMsg = <div className='text-center text-danger'>
            <p>{googleError?.message} {facebookError?.message} {githubError?.message}</p>
        </div>
    }

    if (googleLoading || facebookLoading || githubLoading) {
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
                <button onClick={() => signInWithGoogle()} className='btn btn-light border border-secondary me-3'><img style={{ width: '23px', height: '24px', marginRight: '5px' }} src={GoogleImg} alt="" /> Google</button>
                <button onClick={() => signInWithFacebook()} className='btn btn-light border border-secondary me-3'><img style={{ width: '23px', height: '24px', marginRight: '5px' }} src={FacebookImg} alt="" /> Facebook</button>
                <button onClick={() => signInWithGithub()} className='btn btn-light border border-secondary me-3'><img style={{ width: '23px', height: '24px', marginRight: '5px' }} src={GithubImg} alt="" /> Github</button>
                <button className='btn btn-light border border-secondary'><img style={{ width: '25px', height: '21px', marginRight: '5px' }} src={TwitterImg} alt="" /> Twitter</button>
            </div>
        </div>
    );
};

export default SocialLogin;