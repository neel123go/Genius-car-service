import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://ancient-anchorage-81865.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center my-5'>Please add a new service</h2>
            <form className='d-flex flex-column w-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4' placeholder='Name'  {...register("name")} />
                <textarea className='mb-4' placeholder='Description' {...register("description")} />
                <input className='mb-4' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-4' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddService;