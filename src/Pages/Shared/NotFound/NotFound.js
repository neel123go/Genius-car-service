import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div>
            <PageTitle title="Not Found"></PageTitle>
            <h1 style={{ fontSize: '80px' }} className='text-danger text-center mt-5 mb-3'>404</h1>
            <h3 className='text-center'>The page you are looking for is not found</h3>
        </div>
    );
};

export default NotFound;