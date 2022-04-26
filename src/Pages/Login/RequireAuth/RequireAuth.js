import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    //     return <div className='text-center mt-5 pt-5' style={{ height: '76vh' }}>
    //         <h1>Your email in not verified</h1>
    //         <p className='text-danger fs-3 mt-3'>Please, verify your email.</p>
    //         <button className='btn btn-primary' onClick={async () => {
    //             await sendEmailVerification();
    //             toast('Sent email');
    //         }}>Send Again?</button>
    //     </div >
    // }
    return children;
};

export default RequireAuth;