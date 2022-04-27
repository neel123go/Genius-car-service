import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'Ayoun Paul Neel',
    //     email: 'neel@gmail.com',
    //     phone: '01731832310',
    //     address: 'Dariapara meghna C/31, sylhet'
    // });

    // const handleAddressChange = (e) => {
    //     const { address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    // }

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        };
        axios.post('https://ancient-anchorage-81865.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success('Your order is confirmed');
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <PageTitle title="Checkout"></PageTitle>
            <h2 className='text-center mt-5'>Your buying item: </h2>
            <form onSubmit={handlePlaceOrder} className='w-25 mx-auto m-5'>
                <input className='w-100 my-2 p-2' readOnly disabled type="text" name='name' placeholder={user?.displayName} />
                <br />
                <input className='w-100 my-2 p-2' readOnly disabled type="email" name='email' placeholder={user?.email} />
                <br />
                <input className='w-100 my-2 p-2' autoComplete='off' type="text" name='address' placeholder='Address' required />
                <br />
                <input className='w-100 my-2 p-2' type="text" name='service' placeholder={service.name} readOnly disabled />
                <br />
                <input className='w-100 my-2 p-2' type="text" name='price' placeholder={`${service.price} TK`} readOnly disabled />
                <br />
                <input className='w-100 my-2 p-2' autoComplete='off' type="number" name='phone' placeholder='Phone Number' required />
                <br />
                <input type="submit" className='btn btn-primary w-50 mt-3' value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;