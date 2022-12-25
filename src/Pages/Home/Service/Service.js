import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description.slice(0, 35)}..</p>
        <p className="card-price">Price: ${price}</p>
        <button className="book-button">Book Now</button>
      </div>


    {/*bellow the same card by react bootstrap */}
      {/* <Card style={{ width: "300px" }} className="mb-3 shadow-sm">
        <Card.Img variant="top" src={image} alt={service.name} />
        <Card.Body>
          <Card.Title className="text-center mb-2">{name}</Card.Title>
          <Card.Text className="text-center mb-2">
            {description.slice(0, 30)}...
          </Card.Text>
          <Card.Text className="text-center mb-2 text-primary font-weight-bold">
            Price: ${price}
          </Card.Text>
          <Button variant="primary" className="btn-block w-100">
            Book Now
          </Button>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default Service;
