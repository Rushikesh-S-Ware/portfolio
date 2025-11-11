import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png"; // or avatar.png if you prefer

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Data & ML-focused engineer who loves turning ideas into
              reliable, scalable products. I enjoy building across the stack and
              shipping things that people actually use.
              <br />
              <br />
              Comfortable with{" "}
              <b className="purple">Python, SQL, JavaScript, React, Node.js</b>{" "}
              and cloud tooling.
              <br />
              <br />
              Interests:{" "}
              <b className="purple">
                NLP → SQL, analytics engineering, ML systems, dashboards
              </b>
              .
              <br />
              <br />
              Recently I’ve been building with{" "}
              <b className="purple">React</b> / modern tooling and deploying to
              GH Pages & Hugging Face Spaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
