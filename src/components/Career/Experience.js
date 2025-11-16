import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// ⬇️ logo now comes from Assets/Projects
import CognizantLogo from "../../Assets/Projects/Cognizant_Logo.png";

function Experience() {
  return (
    <section className="career-subsection" id="experience">
      <Container>
        <h2 className="career-subtitle">Experience</h2>

        <Row className="career-grid">
          <Col md={6} lg={4} className="career-col">
            <div className="career-flip-card">
              <div className="career-flip-inner">
                {/* FRONT */}
                <div className="career-card-front">
                  <div className="career-logo-wrap">
                    <img
                      src={CognizantLogo}
                      alt="Cognizant"
                      className="career-logo"
                    />
                    <div>
                      <h3 className="career-title">Programmer Analyst</h3>
                      <p className="career-company">
                        Cognizant Technology Solutions
                      </p>
                    </div>
                  </div>

                  <p className="career-meta">
                    Feb 2022 – Nov 2023 · Pune, India
                  </p>
                  <p className="career-tagline">
                    Cloud &amp; data engineering with GCP, Python and SQL.
                  </p>
                </div>

                {/* BACK */}
                <div className="career-card-back">
                  <ul className="career-list">
                    <li>
                      Led knowledge transition for business-critical GCP
                      applications and ensured smooth handover.
                    </li>
                    <li>
                      Provided end-to-end support for{" "}
                      <b>Google Cloud Platform</b> users, debugging performance
                      and reliability issues.
                    </li>
                    <li>
                      Worked with <b>Python, Java, MySQL, BigQuery and GCP</b>{" "}
                      to maintain and enhance data pipelines.
                    </li>
                    <li>
                      Mentored new team members and took ownership of client
                      calls and production incidents.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

          {/* Add more roles as new Cols later */}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
