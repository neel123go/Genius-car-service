import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import axiosPrivate from '../../api/axiosPrivate';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const url = `https://ancient-anchorage-81865.herokuapp.com/order?email=${user.email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/login');
                    signOut(auth);
                }
            }
        }
        getOrders();
    }, []);

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center py-5'>Your Orders</h2>
            {
                orders.map(order => <h2 key={order._id} className="text-center py-2">{order.service}</h2>)
            }
        </div>
    );
};

export default Orders;