import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Updated imports with your actual file names
import nlpSql from "../../Assets/Projects/nlp-sql.png";
import climate from "../../Assets/Projects/climategpt.png";
import kev from "../../Assets/Projects/kev-vulnerability.png";
import health from "../../Assets/Projects/public-health.png";
import fifa from "../../Assets/Projects/fifa22.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I’ve recently worked on that reflect my passion for data analytics, machine learning, and automation.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* NLP-SQL Transformer */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlpSql}
              isBlog={false}
              title="NLP-SQL Transformer"
              description="Developed a transformer-based NLP model (BART) that converts natural language questions into SQL queries. Achieved 45.6% exact match accuracy on the Spider benchmark and deployed on Hugging Face Spaces using Streamlit."
              ghLink="https://github.com/Rushikesh-S-Ware/NLP---SQL-Transformer-.git"
              demoLink="https://huggingface.co/spaces/Rushikesh-S-Ware/NLP-SQL-Transformer"
            />
          </Col>

          {/* Forest Analytics (ClimateGPT) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={climate}
              isBlog={false}
              title="Forest Analytics (ClimateGPT)"
              description="Built a data analytics pipeline over 500K+ environmental records, integrated with ClimateGPT API for automated insights. Optimized data models for forest loss, CO₂ emissions, and land cover to reduce query latency by 70%."
              ghLink="https://github.com/Rushikesh-S-Ware"
            />
          </Col>

          {/* KEV Vulnerability Prediction */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kev}
              isBlog={false}
              title="KEV Vulnerability Prediction"
              description="Developed an XGBoost model to predict which CVEs would become Known Exploited Vulnerabilities (KEVs). Implemented SMOTE, PCA, and threshold calibration to handle class imbalance, achieving AUC = 0.996."
              ghLink="https://github.com/Rushikesh-S-Ware"
            />
          </Col>

          {/* Public Health Analytics */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="Public Health Analytics"
              description="Analyzed 20 years of overdose data using AWS Glue, EC2, and Python regression models to identify demographic risk factors. Highlighted fentanyl’s disproportionate impact on ages 25–34 through visual dashboards."
              ghLink="https://github.com/Rushikesh-S-Ware/Public-Health-Analytics-Drug-overdose.git"
            />
          </Col>

          {/* FIFA Player Performance Analysis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fifa}
              isBlog={false}
              title="FIFA Player Performance Analysis"
              description="Performed statistical and ML-based analysis on FIFA 22 dataset to identify factors influencing player performance. Deployed a live interactive visualization dashboard for player ratings and stats."
              ghLink="https://github.com/Rushikesh-S-Ware/Fifa_22"
              demoLink="https://rushikesh-s-ware.github.io/Fifa_22/title.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
