import React from 'react';

const ServiceFacilities = ({facility}) => {
    return (
      <div
        style={{ backgroundColor: "#F3F3F3", width: "48%" }}
        className="rounded-2 py-3 px-3 border-top border-primary border-3"
      >
        <h4>{facility.name}</h4>
        <p className='text-muted fs-5'>{facility.details}</p>
      </div>
    );
};

export default ServiceFacilities;