import React from 'react';
import "./Expert.css";

const Expert = ({ expert }) => {
  const {name, image, experience, bio} = expert;
  return (
    <div className="expert-card">
      <img src={image} alt={name} className="expert-image" />
      <h2 className="expert-name">{name}</h2>
      <p className="expert-experience">Experience: {experience}</p>
      <p className="expert-bio">{bio.slice(0,60)}...</p>
    </div>

    // same cart by bootstrap
    // <Col xs={12} md={6} lg={4}>
    //   <Card className="mb-4 shadow-sm">
    //     <Image
    //       src={image}
    //       alt={name}
    //       roundedCircle
    //       className="mx-auto mt-3"
    //       style={{ width: "150px", height: "150px" }}
    //     />
    //     <CardBody>
    //       <CardTitle className="text-center mb-2">{name}</CardTitle>
    //       <CardText className="text-center mb-2 text-secondary">
    //         Experience: {experience}
    //       </CardText>
    //       <CardText className="mb-2">{bio}</CardText>
    //     </CardBody>
    //   </Card>
    // </Col>
  );
};

export default Expert;