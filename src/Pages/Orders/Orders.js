import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import OrdersRow from './OrdersRow';

const Orders = () => {
    
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data) {
                setOrders(data)
                setLoading(false)
            }
            
        });
    },[user.email])

    if (loading) {
        return (
          <div className="d-flex align-items-center justify-content-center  vh-100 vw-100">
            <Loading></Loading>
          </div>
        );
    }

    console.log(orders);
    return (
      <div>
        <Table  hover>
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='border-none'>
            {orders.map((order) => {
              return (
                <OrdersRow key={order._id} order={order}></OrdersRow>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
};

export default Orders;