import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png"; // replace with your actual image
import Tilt from "react-parallax-tilt";

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
              I’m a passionate <b className="purple">Data Analyst & Engineer</b>{" "}
              who enjoys turning raw data into meaningful insights and building
              intelligent, scalable solutions.
              <br />
              <br />
              Skilled in{" "}
              <i>
                <b className="purple">
                  Python, SQL, Airflow, Docker, GCP, AWS, and Power BI
                </b>
              </i>
              — I specialize in designing end-to-end data pipelines, automating
              workflows, and visualizing patterns that drive decisions.
              <br />
              <br />
              My recent projects include an{" "}
              <b className="purple">NLP-based SQL Transformer</b>,{" "}
              <b className="purple">Forest Analytics pipeline</b> for ClimateGPT,
              and <b className="purple">KEV risk model</b> for cybersecurity.
              <br />
              <br />
              I’m always eager to explore how{" "}
              <b className="purple">
                data, AI, and cloud systems
              </b>{" "}
              can simplify complex problems and create lasting impact.
              <br />
              <br />
              Off the screen, I’m a huge{" "}
              <b className="purple">football (soccer)</b> enthusiast ⚽ — I love
              teamwork, strategy, and the thrill of the game, both on the field
              and in data challenges!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
