import React from "react";
import aboutUsImg from "../../assets/about-us.png";

const About = () => {
  return (
    <div
      // style={{ height: "80vh" }}
      className=" container-xl d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center gap-5 my-5 h-full"
    >
      <div className="w-100">
        <img
          className="rounded-4 shadow my-md-5 flex-wrap img-fluid"
          src={aboutUsImg}
          alt=""
        />
      </div>
      <div>
        <h4 style={{ color: "#265df2" }}>About us</h4>
        <h1 className="fw-bold my-3">
          We are Qualified & of experienced in this field
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
          neque, eveniet accusantium accusamus consequuntur at nam! Suscipit
          fugiat sapiente illum, architecto deserunt ratione ad velit inventore
          consequatur quod deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ad a
          eligendi? Odio dolores illo itaque facilis, sapiente ad. Quod!
        </p>
        <button type="button" className="btn btn-primary">
          More Info
        </button>
      </div>
    </div>
  );
};

export default About;
