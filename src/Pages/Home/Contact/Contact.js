import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container text-center my-5 text-white bg-dark rounded-3">
      <div className="d-flex w-100 py-5 flex-md-nowrap flex-wrap">
        <div className="d-flex justify-content-center align-items-center w-100  gap-2 py-md-5 py-2">
          <i className=" uil uil-calender icon fs-1 text-primary"></i>
          <div className="text-start">
            <p className="my-1">Lorem ipsum dolor, sit amet</p>
            <h5 className="my-1">7.30 am - 9.30 pm</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center w-100  gap-2 py-md-5 py-2">
          <i className=" uil uil-phone icon fs-1 text-primary"></i>
          <div className="text-start">
            <p className="my-1">Lorem ipsum dolor, sit amet</p>
            <h5 className="my-1">+880 18908 27586</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center w-100  gap-2 py-md-5 py-2">
          <i className="uil uil-map-marker fs-1 text-primary"></i>
          <div className="text-start">
            <p className="my-1">Lorem ipsum dolor, sit amet</p>
            <h5 className="my-1">Byzid street, Hathazari</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
