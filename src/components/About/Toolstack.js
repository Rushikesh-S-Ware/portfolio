import React from "react";
import { Col, Row } from "react-bootstrap";
import PowerBI from "../../Assets/TechIcons/PowerBI.svg";
import Tableau from "../../Assets/TechIcons/Tableau.svg";
import Airflow from "../../Assets/TechIcons/Kubernates.svg"; // using same icon as Airflow
import vscode from "../../Assets/TechIcons/vscode.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Chrome from "../../Assets/TechIcons/Google Chrome.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PowerBI} alt="Power BI" className="tech-icon-images" />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tableau} alt="Tableau" className="tech-icon-images" />
        <div className="tech-icons-text">Tableau</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Airflow} alt="Airflow" className="tech-icon-images" />
        <div className="tech-icons-text">Apache Airflow</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vscode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
