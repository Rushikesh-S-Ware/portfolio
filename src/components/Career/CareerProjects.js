import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// thumbnails (put your images in src/Assets/Projects)
import climate from "../../Assets/Projects/climategpt.png";
import nlpSql from "../../Assets/Projects/nlp-sql.png";
import kev from "../../Assets/Projects/kev-vulnerability.png";
import publicHealth from "../../Assets/Projects/public-health.png";
import fifa from "../../Assets/Projects/fifa22.png";

const PROJECTS = [
  {
    title: "ClimateGPT 2.0 (MCP)",
    subtitle: "LLM + MCP • Analytics",
    meta: "RAG • Tools • Dashboards",
    img: climate,
    desc: [
      "RAG pipelines, persona prompts, and MCP tools to analyze deforestation & emissions.",
      "Vector DB + prompt safety, reproducible evals, and reporting dashboards."
    ],
    tech: ["Python", "LLM", "ChromaDB", "Streamlit", "Docker"],
           // <-- add when ready
  },
  {
    title: "Text-to-SQL over Multiple CSVs",
    subtitle: "NLP • Query Generation",
    meta: "Seq2Seq • spaCy • Beam Search",
    img: nlpSql,
    desc: [
      "Turns natural-language questions into SQL across uploaded CSVs.",
      "Entity extraction + schema reasoning; includes safety & fallback prompts.",
      "NLP-SQL Transformer is an intelligent question-answering system that allows users to upload one or more CSV files and ask data-related questions in plain English. Powered by a fine-tuned BART Transformer model, it dynamically generates SQL queries and executes them on the uploaded files, returning both the query and the result."
    ],
    tech: ["Python", "Transformers", "spaCy", "SQLite","BART"],
    demo: "https://huggingface.co/spaces/Rushikesh-S-Ware/NLP-SQL-Transformer",                                     // optional
    github: "https://github.com/Rushikesh-S-Ware/NLP---SQL-Transformer-"
  },
  {
    title: "CISA KEV Risk Explorer",
    subtitle: "Predictive Modelling • BI",
    meta: "Imbalanced data • GBDT",
    img: kev,
    desc: [
      "Built models to score CVEs likely to enter CISA KEV list; cross-validated.",
      "Exported risk tables to a lightweight dashboard for non-tech users."
    ],
    tech: ["R", "Visualization", "statistics", "Visualization", "Predictive Modelling"],
    demo: "",
    github: "https://github.com/Rushikesh-S-Ware/Cybersecurity-Risk-Modeling--KEV-"
  },
  {
    title: "Public Health Analytics- Drug overdose",
    subtitle: "Health Econ • Survival",
    meta: "Regression • Survival Models",
    img: publicHealth,
    desc: [
      "This project explores national trends in drug overdose deaths across the U.S., using statistical modeling, regression analysis, and visualization across Python, SQL, and R platforms. It reveals key demographic patterns and the rising influence of synthetic opioids like fentanyl."
    ],
    tech: ["R", "Python", "Survival", "ggplot2"],
    demo: "",
    github: "https://github.com/Rushikesh-S-Ware/Public-Health-Analytics-Drug-overdose"
  },
  {
    title: "FIFA 22 Player Analysis",
    subtitle: "EDA • Viz",
    meta: "Feature Engineering",
    img: fifa,
    desc: [
      "Built interactive EDA to compare player attributes and valuations.",
      "Cleaned dataset, engineered features, and deployed a small dashboard."
    ],
    tech: ["R", "Quarto", "ggplot2", "Statistics"],
    demo: "https://rushikesh-s-ware.github.io/Fifa_22/title.html",
    github: "https://github.com/Rushikesh-S-Ware/Fifa_22"
  }
];

function CareerProjects() {
  return (
    <section className="career-subsection" id="projects">
      <Container>
        <h2 className="career-subtitle">Highlighted Projects</h2>

        <Row className="career-grid">
          {PROJECTS.map((p, idx) => (
            <Col md={6} lg={4} className="career-col" key={idx}>
              <div className="career-flip-card">
                <div className="career-flip-inner">
                  {/* FRONT */}
                  <div className="career-card-front">
                    <div className="career-thumb">
                      <img src={p.img} alt={p.title} />
                    </div>

                    <div>
                      <h3 className="career-card-title">{p.title}</h3>
                      <div className="career-card-subtitle">{p.subtitle}</div>
                      <div className="career-card-meta">{p.meta}</div>
                    </div>

                    {/* Optional quick actions on front */}
                    {(p.demo || p.github) && (
                      <div className="career-actions">
                        {p.demo && (
                          <a
                            className="career-btn ghost"
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        )}
                        {p.github && (
                          <a
                            className="career-btn ghost"
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* BACK */}
                  <div className="career-card-back">
                    <div>
                      {p.desc.map((d, i) => (
                        <p className="career-desc" key={i}>{d}</p>
                      ))}

                      {p.tech?.length > 0 && (
                        <div className="career-badges">
                          {p.tech.map((t, i) => (
                            <span className="career-badge" key={i}>{t}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    {(p.demo || p.github) && (
                      <div className="career-actions">
                        {p.demo && (
                          <a
                            className="career-btn"
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        )}
                        {p.github && (
                          <a
                            className="career-btn"
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CareerProjects;
