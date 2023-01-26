import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";

const OrdersRow = ({ order }) => {
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services?id=${order.service}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          setService(data);
        }
      });
  }, [order.service]);

  if (loading) {
    return (
      <Loading className="d-flex align-items-center justify-content-center  vh-100 vw-100"></Loading>
    );
  }

  return (
    <tr key={order._id}>
      <td className="d-flex justify-content-center align-items-center ">
        <i className="uil uil-trash-alt fs-2 py-3"></i>
      </td>
      <td>
        <img
          className="rounded-3 img-fluid"
          src={service.image}
          alt={service.name}
          width="80"
          height="80"
        />
      </td>
      <td>{order.serviceName}</td>
      <td>${order.price}</td>
      <td>order.date</td>
      <td>Pending</td>
    </tr>
  );
};

export default OrdersRow;
