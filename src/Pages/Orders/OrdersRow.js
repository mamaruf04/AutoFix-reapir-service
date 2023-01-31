import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";

const OrdersRow = ({ order, handleDelete, handleUpdateStatus }) => {
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services?id=${order.serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          setService(data);
        }
      });
  }, [order.serviceId]);

  // loader...
  if (loading) {
    return (
      <Loading className="d-flex align-items-center justify-content-center  vh-100 vw-100"></Loading>
    );
  }

  return (
    <tr style={{ borderStyle: "hidden" }}>
      <td className="align-middle">
        <img
          width={"80px"}
          className="img-fluid rounded-3"
          src={service.image}
          alt={service.name}
        />
      </td>
      <td className="align-middle fw-semibold ">{order.serviceName}</td>
      <td className="align-middle fw-semibold">${order.price}</td>
      <td className="align-middle">
        <small>{order.date}</small>
      </td>
      <td className="align-middle">
        <button
          onClick={() => handleUpdateStatus(order)}
          className={
            order.status === "pending"
              ? "badge border-0 text-bg-warning"
              : "badge border-0 text-bg-success"
          }
        >
          {order.status}
        </button>
      </td>
      <td className="align-middle">
        <button className="border-0 rounded-circle px-2 py-0">
          <i
            onClick={() => handleDelete(order)}
            className="uil uil-trash-alt fs-2 text-danger"
          ></i>
        </button>
      </td>
    </tr>
  );
};

export default OrdersRow;
