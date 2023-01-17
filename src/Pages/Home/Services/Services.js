import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";
const Services = () => {

    const[services, setServices] = useState([]);

    useEffect(() =>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
      <div className="">
        <h4 className="text-center" style={{ color: "#265df2", marginTop: "60px" }}>
          Services
        </h4>
        <h1 className="text-center fw-bold">Our Service Area</h1>
        <p className='text-center px-2 mx-auto text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit quasi facilis.</p>
        <div className="card-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;