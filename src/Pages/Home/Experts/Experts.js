import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import "./Exprets.css";

const Experts = () => {

    const[experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('experts.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    },[])
    return (
      <>
      <h1 className='text-center'>Our Experts</h1>
        <div className="expert-list">
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert}></Expert>
          ))}
        </div>
      </>
    );
};

export default Experts;