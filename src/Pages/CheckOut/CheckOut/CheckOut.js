import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "../Checkout.css";


const CheckOut = () => {
  const [user] = useAuthState(auth);
  const { checkoutId } = useParams();
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());

  const { _id, name, price } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/services?id=${checkoutId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          setService(data);
        }
      });
  }, [checkoutId]);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center  vh-100 vw-100">
        <Loading></Loading>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const customer = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const alterPhone = form.alterPhone.value;
    const message = form.message.value;
    const fullDate = form.date.value;
    const date = moment(fullDate).format("DD MMM, YYYY | h:mm A");
    
    const order = {
      serviceId: _id,
      serviceName: name,
      price,
      customer,
      email,
      phone,
      alterPhone,
      message,
      status: "pending",
      date
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("order place successfully!");
          form.reset();
        }
      });
  };

  return (
    <div className="checkOut">
      <div className="checkOut-container mx-auto my-4">
        <h1 className="heading">Check Out</h1>
        <form onSubmit={handleSubmit} className="CheckOut-form">
          <div className="input-box">
            <label>Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              name="email"
              type="text"
              value={user?.email}
              placeholder="Enter email address"
              readOnly
            />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                name="phone"
                type="number"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="input-box">
              <label>Alternative Phone Number (optional)</label>
              <input
                name="alterPhone"
                type="number"
                placeholder="Enter alternative number"
              />
              <input name="date" type="hidden" value={date} />
            </div>
          </div>
          <div className="input-box message">
            <label>Message</label>
            <textarea
              className="pt-2"
              name="message"
              cols="30"
              rows="10"
              type="text"
              placeholder="Enter your message..."
              required
            ></textarea>
          </div>
          <button type="submit" className="rounded-2">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
