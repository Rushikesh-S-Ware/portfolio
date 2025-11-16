// src/components/Career/Career.js
import React from "react";
import { Container } from "react-bootstrap";
import Experience from "./Experience";
import CareerProjects from "./CareerProjects";
import Education from "./Education";

function Career() {
  return (
    <Container fluid className="career-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Career</strong>
        </h1>
        <p style={{ color: "white" }}>
          A combined view of my professional experience, key projects, and education.
        </p>
      </Container>

      <Experience />
      <CareerProjects />
      <Education />
    </Container>
  );
}

export default Career;
