import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Data &amp; ML-focused engineer currently pursuing a
              Master&apos;s in Data Analytics Engineering. I love turning messy,
              real-world data into clean pipelines and decision-ready insights.
              <br />
              <br />
              Comfortable with{" "}
              <b className="purple">
                Python, R, SQL, Linux, Git, Docker, and cloud platforms such as
                AWS and GCP
              </b>{" "}
              along with data-science libraries like{" "}
              <b className="purple">pandas, NumPy, and scikit-learn</b>.
              <br />
              <br />
              Interests:{" "}
              <b className="purple">
                NLP-to-SQL, analytics engineering, predictive modelling, ML
                systems, and interactive dashboards
              </b>
              .
              <br />
              <br />
              Recently I&apos;ve been building{" "}
              <b className="purple">
                NLP-based query systems, analytics pipelines, resume screening
                tools, infrastructure risk models and flight delay predictors
              </b>{" "}
              and deploying them using modern tooling like GitHub Pages and
              cloud platforms.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
