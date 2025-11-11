import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Rushikesh S. Ware</span>{" "}
            from <span className="purple">Fairfax, Virginia, USA</span>.
            <br />
            I’m a <span className="purple">Data Analyst & Engineer</span> with a
            passion for turning raw data into actionable insights and building
            intelligent, cloud-based solutions.
            <br />
            <br />
            I’ve worked on projects involving{" "}
            <span className="purple">
              NLP, Machine Learning, Data Pipelines, and Predictive Analytics
            </span>{" "}
            — blending analytical thinking with scalable engineering.
            <br />
            <br />
            My key interests include{" "}
            <span className="purple">
              data modeling, cloud architecture, and automation
            </span>
            , and I enjoy experimenting with tools like{" "}
            <span className="purple">
              Python, SQL, Docker, Airflow, GCP, AWS, and Power BI.
            </span>
            <br />
            <br />
            Outside of analytics and coding, I love staying active and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football (Soccer) ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech and AI tools 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & experiencing different cultures 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Turning data into stories that inspire better decisions.”{" "}
          </p>
          <footer className="blockquote-footer">Rushikesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
