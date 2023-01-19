import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, image, price, description } = service;
  const navigate = useNavigate();

const navigateServiceDetail = (id) => {
      navigate(`/service/${id}`);
    }

  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description.slice(0, 30)}..</p>
        <p className="card-price">Price: ${price}</p>
        <button onClick={() => navigateServiceDetail(id)} className="book-button">
          Book Now
        </button>
      </div>
    </>
  );
};

export default Service;
