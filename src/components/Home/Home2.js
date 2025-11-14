// src/components/Home/Home2.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png"; // change if you use a different image

function ChatBox() {
  const presets = [
    {
      id: 1,
      question: "What projects have you built?",
      answer:
        "I’ve worked on data analytics dashboards, NLP-based chatbots, and data-driven applications. Recently, I’ve been focusing on projects that combine data engineering, analytics, and machine learning to solve real-world problems."
    },
    {
      id: 2,
      question: "What are your main skills?",
      answer:
        "My core skills include Python, R, SQL, data preprocessing, exploratory analysis, building ML models, and working with cloud platforms like AWS and GCP. I also enjoy containerizing and deploying solutions using tools like Docker."
    },
    {
      id: 3,
      question: "What roles are you looking for?",
      answer:
        "I’m mainly looking for roles in Data Engineering, Data Analytics, or Analytics Engineering where I can work with real data, build pipelines, and create insights that support decision-making."
    }
  ];

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "Hey! 👋 I’m Rushikesh, a data & ML-focused engineer. Ask me about my projects, skills, or what kind of roles I’m targeting!"
    }
  ]);

  const [input, setInput] = useState("");

  const addMessagePair = (q, a) => {
    setMessages(prev => [
      ...prev,
      { from: "user", text: q },
      { from: "bot", text: a }
    ]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { from: "user", text: input.trim() },
      {
        from: "bot",
          text:
            "Thanks for your question! 😊 For more details, feel free to reach out via LinkedIn or email on my portfolio."
      }
    ]);
    setInput("");
  };

  return (
    <div className="chat-card">
      <div className="chat-header">Chat with Rushikesh</div>

      <div className="chat-messages">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`chat-message ${
              m.from === "bot" ? "bot-message" : "user-message"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-presets">
        {presets.map(btn => (
          <button
            key={btn.id}
            type="button"
            className="chat-preset-btn"
            onClick={() => addMessagePair(btn.question, btn.answer)}
          >
            {btn.question}
          </button>
        ))}
      </div>

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-send-btn">
          Send
        </button>
      </form>
    </div>
  );
}

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
              I’m a Data &amp; ML-focused engineer currently pursuing a
              Master&apos;s in Data Analytics Engineering. I love turning
              messy, real-world data into clean pipelines and decision-ready
              insights.
              <br />
              <br />
              Comfortable with{" "}
              <b className="purple">
                Python, R, SQL, Linux, Git, Docker, and cloud platforms such as
                AWS and GCP
              </b>{" "}
              along with common data-science libraries like{" "}
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
                NLP-based query systems, analytics pipelines, and
                data-driven applications
              </b>{" "}
              and deploying them using modern tooling like GitHub Pages and
              cloud platforms.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
            {/* Chat box under the avatar */}
            <ChatBox />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
