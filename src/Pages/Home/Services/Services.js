import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import useService from '../../../hooks/useService';

const Services = () => {
    const [services] = useService([]);

    return (
        <div id='services'>
            <h2 className='service-title mt-5'>Our Services</h2>
            <div className="services-container">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;