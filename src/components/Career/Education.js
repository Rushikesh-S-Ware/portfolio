import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// ⬇️ university logos from Assets/Projects
import GMULogo from "../../Assets/Projects/gmu.png";
import SPPULogo from "../../Assets/Projects/sppu.png";

function Education() {
  return (
    <section className="career-subsection" id="education">
      <Container>
        <h2 className="career-subtitle">Education</h2>

        <Row className="career-grid">
          {/* GMU */}
          <Col md={6} lg={4} className="career-col">
            <div className="career-flip-card">
              <div className="career-flip-inner">
                {/* FRONT */}
                <div className="career-card-front">
                  <div className="career-logo-wrap">
                    <img
                      src={GMULogo}
                      alt="George Mason University"
                      className="career-logo"
                    />
                  </div>

                  <h3 className="career-card-title">
                    M.S. Data Analytics Engineering
                  </h3>
                  <p className="career-card-subtitle">
                    George Mason University
                  </p>
                  <p className="career-card-meta">
                    Fairfax, VA · Expected Dec 2025
                  </p>
                  <p className="career-card-description">
                    Focus on data engineering, machine learning and analytics
                    systems.
                  </p>
                </div>

                {/* BACK */}
                <div className="career-card-back">
                  <p className="career-card-description">
                    Coursework and projects in{" "}
                    <b>
                      NLP-to-SQL, predictive modelling, big data, cloud
                      platforms
                    </b>{" "}
                    and interactive dashboards using Python, SQL, R and modern
                    data tooling.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* SPPU */}
          <Col md={6} lg={4} className="career-col">
            <div className="career-flip-card">
              <div className="career-flip-inner">
                {/* FRONT */}
                <div className="career-card-front">
                  <div className="career-logo-wrap">
                    <img
                      src={SPPULogo}
                      alt="Savitribai Phule Pune University"
                      className="career-logo"
                    />
                  </div>

                  <h3 className="career-card-title">
                    B.E. Mechanical Engineering
                  </h3>
                  <p className="career-card-subtitle">
                    Savitribai Phule Pune University
                  </p>
                  <p className="career-card-meta">
                    Pune, India · CGPA 8.66 / 10
                  </p>
                  <p className="career-card-description">
                    Strong quantitative and problem-solving foundation.
                  </p>
                </div>

                {/* BACK */}
                <div className="career-card-back">
                  <p className="career-card-description">
                    Built a rigorous background in maths, physics and
                    engineering design that supports my work in data analytics,
                    optimisation and modelling.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
