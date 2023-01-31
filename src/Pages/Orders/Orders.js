import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(true);
  const [rerender, setRerender] = useState(false);

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("AutoFIx-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          alert('your authorization token has been expired. Please login again!')
          handleSignOut();
          localStorage.removeItem("AutoFIx-token");
        }
       return res.json()
      })
      .then((data) => {
        if (data) {
          setOrders(data);
          setLoading(false);
        }
      });
  }, [user.email, rerender]);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center  vh-100 vw-100">
        <Loading></Loading>
      </div>
    );
  }
  if (!orders.length) {
    return (
      <div className="m-4 d-flex flex-column align-items-center">
        <img
          src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=740&t=st=1674817514~exp=1674818114~hmac=790f965180009e22e233f754aef9ec525dfcb5e1098d9de396d2f5df48931289"
          alt=""
        />
        <h3>There is no order you have place yet.</h3>
      </div>
    );
  }

  // status update function
  const handleUpdateStatus = (Order) => {
    fetch(`http://localhost:5000/orders/${Order._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Order),
    }).then((res) => res.json()
    .then((data) => {
      if (data.modifiedCount > 0) {
        setRerender(!rerender);
      }
      
    }));
  };

  // delete order function
  const handleDelete = (Order) => {
    const agree = window.confirm(`Are you want to delete ${Order.serviceName}`);

    if (agree) {
      fetch(`http://localhost:5000/orders/${Order._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("order deleted successfully!");
            setRerender(!rerender);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="my-5" style={{ minHeight: "400px" }}>
      <Table
        responsive
        striped
        hover
        className="text-center w-75 mx-auto rounded-3"
        style={{ border: "none" }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th style={{ padding: "8px 45px" }}>Name</th>
            <th>Price</th>
            <th style={{ padding: "8px 45px" }}>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <OrdersRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleUpdateStatus={handleUpdateStatus}
              ></OrdersRow>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
