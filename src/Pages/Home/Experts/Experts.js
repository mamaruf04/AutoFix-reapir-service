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
        <h4
          className="text-center"
          style={{ color: "#265df2", marginTop: "60px" }}
        >
          Experts
        </h4>
        <h1 className="text-center fw-bold ">Our Experts</h1>
        <p className="text-center px-2 mx-auto text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          reprehenderit quasi facilis.
        </p>
        <div className="expert-list">
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert}></Expert>
          ))}
        </div>
      </>
    );
};

export default Experts;