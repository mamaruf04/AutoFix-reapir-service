import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import UseServices from "../Hooks/UseServices";
import ServiceFacilities from "./ServiceFacilities";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { services } = UseServices();

  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services?id=${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  return (
    <Container className=" my-5">
      <Row className="">
        <Col className="" sm={4}>
          <div
            style={{ backgroundColor: "#F3F3F3" }}
            className="p-4 rounded-2 cursor-pointer"
          >
            <h2 className="fw-bold mb-4">Services</h2>
            {services.map((service) => (
              <NavLink
                key={service._id}
                to={`/service/${service._id}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary py-3 px-3 rounded-2 fs-5 fw-semibold d-flex align-items-center justify-content-between text-decoration-none text-light my-3"
                    : "bg-light py-3 px-3 rounded-2 fs-5 fw-semibold d-flex align-items-center justify-content-between text-decoration-none text-black my-3"
                }
              >
                <span>{service.name}</span>
                <i className="uil uil-arrow-right"></i>
              </NavLink>
            ))}
          </div>
        </Col>
        <Col sm={8}>
          {/*specific service details */}
          <div className="d-md-flex gap-3">
            <img className="rounded-2 img-fluid" src={service.image} alt="" />
            <div
              style={{ backgroundColor: "#F3F3F3" }}
              className="rounded-2 py-3 px-2"
            >
              <h2 className="text-center fs-2 fw-bold">{service.name}</h2>
              <p className="fs-6 text-muted ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle embar abashing.
              </p>
            </div>
          </div>

          {/* ------------specific service facilities---------- */}
          <div className="d-flex flex-wrap my-4 gap-4">
            {service?.facility?.map((fc) => (
              <ServiceFacilities
                key={fc.name}
                facility={fc}
              ></ServiceFacilities>
            ))}
          </div>
          <p className="fs-5 text-muted ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle embar abashing.
          </p>

          <h1 className="fw-bold mt-5 mb-4">3 Simple Steps to Process</h1>
          <p className="fs-5 text-muted ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle embar abashing.
          </p>
          <div className="d-flex gap-5 justify-content-between">
            <div
              style={{ width: "30%" }}
              className="d-flex flex-column justify-content-center align-items-center border rounded-3 py-4 px-4 gap-3"
            >
              <h2 className="fw-bold border rounded-circle p-2 bg-primary text-white">
                01
              </h2>
              <h3 className="fw-bold">STEP ONE</h3>
              <p className="text-center fs-6 text-muted">
                It uses a dictionary of over 200.
              </p>
            </div>
            <div
              style={{ width: "30%" }}
              className="d-flex flex-column justify-content-center align-items-center border rounded-3 py-4 px-4 gap-3"
            >
              <h2 className="fw-bold border rounded-circle p-2 bg-primary text-white">
                02
              </h2>
              <h3 className="fw-bold">STEP TWO</h3>
              <p className="text-center fs-6 text-muted">
                It uses a dictionary of over 200.
              </p>
            </div>
            <div
              style={{ width: "30%" }}
              className="d-flex flex-column justify-content-center align-items-center border rounded-3 py-4 px-4 gap-3"
            >
              <h2 className="fw-bold border rounded-circle p-2 bg-primary text-white">
                03
              </h2>
              <h3 className="fw-bold">STEP THREE</h3>
              <p className="text-center fs-6 text-muted">
                It uses a dictionary of over 200.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetail;
