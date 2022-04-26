import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, img, description } = service;
    let navigate = useNavigate();

    const navigateToServiceDetails = id => {
        navigate(`/services/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetails(_id)}>Book Now</button>
        </div>
    );
};

export default Service;