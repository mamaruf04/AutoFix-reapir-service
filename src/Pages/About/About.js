import React from 'react';
import aboutUsImg from "../../assets/about-us.png";
import instrument from '../../assets/repair-instrument.png';

const About = () => {
    return (
      <div
        style={{ height: "450px" }}
        className=" container-xxl d-flex justify-content-between align-items-start gap-5 my-5"
      >
        <div className="position-relative">
          <img className="rounded-4 shadow" src={aboutUsImg} alt="" />
          <img
            width={"160px"}
            className="position-absolute top-100 start-100 translate-middle"
            src={instrument}
            alt=""
          />
        </div>
        <div className="w-50">
          <h4>About us</h4>
          <h3 className="fs-1 fw-bold">
            We are Qualified <br /> & of experienced <br />
            in this field
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
            neque, eveniet accusantium accusamus consequuntur at nam! Suscipit
            fugiat sapiente illum, architecto deserunt ratione ad velit
            inventore consequatur quod deleniti.
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ad a eligendi? Odio dolores illo itaque facilis, sapiente ad. Quod!</p>
          <button type="button" class="btn btn-primary">
            More Info
          </button>
        </div>
      </div>
    );
};

export default About;