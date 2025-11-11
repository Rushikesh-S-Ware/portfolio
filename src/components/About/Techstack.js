import React from "react";
import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";

function Techstack() {
  // Common style for all icons
  const iconStyle = {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    marginBottom: "10px",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { src: Python, name: "Python" },
        { src: SQL, name: "SQL" },
        { src: Docker, name: "Docker" },
        { src: Kubernates, name: "Kubernetes" },
        { src: AWS, name: "AWS" },
        { src: Git, name: "Git" },
        { src: Kafka, name: "Kafka" },
        { src: Redis, name: "Redis" },
        { src: Mongo, name: "MongoDB" },
        { src: Firebase, name: "Firebase" },
        { src: Postman, name: "Postman" },
        { src: MUI, name: "Material UI" },
        { src: ReactIcon, name: "React.js" },
        { src: Typescript, name: "Typescript" },
        { src: Java, name: "Java" },
      ].map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img src={tech.src} alt={tech.name} style={iconStyle} />
          <div className="tech-icons-text">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
