import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);

    return (
        <div>
            <PageTitle title='Service Details'></PageTitle>
            <h2 className='text-center my-5'>This is a service of {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;