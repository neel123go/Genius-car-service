import React from 'react';
import useService from '../../hooks/useService';

const ManageServices = () => {
    const [services, setServices] = useService([]);

    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure to delete this service?');
        if (proceed) {
            const url = `https://ancient-anchorage-81865.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='w-50 mx-auto text-center'>
            <h2 className='my-5'>This is Manage Service</h2>
            {
                services.map(service => <div key={service._id} className="py-2 bg-light my-4 w-75 mx-auto">
                    <h5 className='my-3'>{service.name} <button className='btn btn-danger' onClick={() => handleDeleteService(service._id)}>Delete</button> <button className='btn btn-primary'>Update</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;