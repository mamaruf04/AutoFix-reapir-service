import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
      <div>
        <h1>this is service details of: {serviceId}</h1>
        <Link className='d-flex justify-content-center' to="/checkout" >
          <button className='btn btn-primary'>please Checkout</button>
        </Link>
      </div>
    );
};

export default ServiceDetail;