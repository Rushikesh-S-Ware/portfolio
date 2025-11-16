// src/components/Chat/PersonalChatbot.js
import React, { useState } from "react";

function ChatBox({ onClose }) {
  // dropdown options
  const presetOptions = [
    {
      value: "projects",
      label: "Tell me about your projects",
      topic: "projects",
    },
    {
      value: "skills",
      label: "What are your main skills?",
      topic: "skills",
    },
    {
      value: "roles",
      label: "What roles are you looking for?",
      topic: "roles",
    },
  ];

  const profileData = {
    summary:
      "I’m a Data & ML-focused engineer currently pursuing a Master's in Data Analytics Engineering at George Mason University.",
    skills:
      "My main skills are Python, R, SQL, data preprocessing, exploratory analysis, ML with scikit-learn, and working with cloud platforms like AWS and GCP. I’m also comfortable with Linux, Git and Docker.",
    projectsGeneral:
      "I’ve built analytics dashboards, NLP-based query systems, resume-screening tools, bridge/infrastructure risk models and flight delay prediction pipelines. Most of my work focuses on turning raw data into clear, actionable insights.",
    roles:
      "I’m mainly targeting Data Engineer, Analytics Engineer and Data Analyst roles where I can own data pipelines, models and dashboards that support decision-making.",
    background:
      "I started in Mechanical Engineering, then moved into data and ML through industry experience and my current Master’s in Data Analytics Engineering.",
    contact:
      "You can reach me via the contact section on this portfolio, or by email / LinkedIn. I’m happy to talk about roles, collaborations or projects.",
  };

  const projectList = [
    {
      id: "nlp_sql",
      name: "NLP-to-SQL Query System",
      keywords: ["nlp", "sql", "text-to-sql", "text2sql", "query system"],
      description:
        "This project takes natural-language questions and converts them into SQL queries so non-technical users can explore data. I used Python, NLP techniques and a Transformer-based model to map questions to SQL, plus evaluation on benchmark-style datasets.",
    },
    {
      id: "bridge",
      name: "Bridge Condition & Maintenance Analysis",
      keywords: ["bridge", "infrastructure", "condition", "maintenance"],
      description:
        "In this project I analysed bridge condition data to understand which factors drive deterioration and when maintenance is needed. I worked with large tabular datasets, handled missing values, engineered features and built predictive models to support planning.",
    },
    {
      id: "resume",
      name: "NLP-based Resume Screening Tool",
      keywords: ["resume", "cv", "screen", "ats", "hiring"],
      description:
        "This project focuses on automating resume screening using NLP. It extracts skills, experience and roles from resumes and compares them to job requirements, helping recruiters quickly shortlist candidates based on structured information rather than manual scanning.",
    },
    {
      id: "flight",
      name: "Flight Delay Prediction",
      keywords: ["flight", "delay", "airport", "airline"],
      description:
        "Here I built a model to predict flight delays using historical flight data, weather and airport features. The goal was to give users an idea of delay risk before travelling, using data pipelines, feature engineering and classification/regression models.",
    },
  ];

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "Hey! 👋 I’m Rushikesh. Ask me about my projects, skills, background, or the kind of roles I’m looking for.",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedPreset, setSelectedPreset] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastTopic, setLastTopic] = useState(null);
  const [lastProjectId, setLastProjectId] = useState(null);

  const detectProject = (text) => {
    const lower = text.toLowerCase();
    for (const proj of projectList) {
      if (proj.keywords.some((k) => lower.includes(k))) {
        return proj;
      }
    }
    return null;
  };

  const getProjectById = (id) =>
    projectList.find((p) => p.id === id) || null;

  const detectTopic = (rawText, currentTopic, currentProjectId) => {
    const text = rawText.toLowerCase();

    // follow-up like "tell me more about that"
    if (
      (text.includes("more") ||
        text.includes("that") ||
        text.includes("continue") ||
        text.includes("else")) &&
      (currentProjectId || currentTopic)
    ) {
      return {
        topic: currentTopic || "projects",
        project: currentProjectId ? getProjectById(currentProjectId) : null,
      };
    }

    const proj = detectProject(text);
    if (proj) {
      return { topic: "project-specific", project: proj };
    }

    if (text.includes("project") || text.includes("portfolio")) {
      return { topic: "projects", project: null };
    }
    if (text.includes("skill") || text.includes("tech") || text.includes("stack")) {
      return { topic: "skills", project: null };
    }
    if (text.includes("role") || text.includes("job") || text.includes("position")) {
      return { topic: "roles", project: null };
    }
    if (
      text.includes("background") ||
      text.includes("experience") ||
      text.includes("study") ||
      text.includes("degree")
    ) {
      return { topic: "background", project: null };
    }
    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("linkedin")
    ) {
      return { topic: "contact", project: null };
    }

    return { topic: "summary", project: null };
  };

  const getBotReply = ({ topic, project }) => {
    if (topic === "project-specific" && project) {
      return `Let me tell you about ${project.name}.\n\n${project.description}`;
    }

    if (topic === "projects") return profileData.projectsGeneral;
    if (topic === "skills") return profileData.skills;
    if (topic === "roles") return profileData.roles;
    if (topic === "background") return profileData.background;
    if (topic === "contact") return profileData.contact;
    if (topic === "summary") return profileData.summary;

    return (
      "Nice question! 😊 I’d love to chat more about that. For detailed discussions, " +
      "feel free to reach out via email or LinkedIn from the contact section."
    );
  };

  const pushConversation = (questionText, forcedTopic = null) => {
    if (!questionText.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: questionText }]);
    setIsTyping(true);

    const topicInfo =
      forcedTopic ?? detectTopic(questionText, lastTopic, lastProjectId);

    const replyText = getBotReply(topicInfo);

    if (topicInfo.project) {
      setLastProjectId(topicInfo.project.id);
      setLastTopic("projects");
    } else {
      setLastTopic(topicInfo.topic);
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: replyText }]);
      setIsTyping(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    pushConversation(input.trim());
    setInput("");
  };

  const handlePresetChange = (e) => {
    const value = e.target.value;
    setSelectedPreset(value);
    if (!value) return;

    const opt = presetOptions.find((o) => o.value === value);
    if (!opt) return;

    pushConversation(opt.label, { topic: opt.topic, project: null });
    setSelectedPreset(""); // reset back to placeholder
  };

  return (
    <div className="chat-card">
      <div className="chat-header-row">
        <div className="chat-header">Chat with Rushikesh</div>
        {onClose && (
          <button type="button" className="chat-close-btn" onClick={onClose}>
            ✕
          </button>
        )}
      </div>

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

        {isTyping && (
          <div className="chat-message bot-message chat-typing">
            Typing<span className="chat-dots">...</span>
          </div>
        )}
      </div>

      <div className="chat-presets">
        <select
          className="chat-select"
          value={selectedPreset}
          onChange={handlePresetChange}
        >
          <option value="">Suggested questions…</option>
          {presetOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask about my projects, skills, roles..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-send-btn">
          Send
        </button>
      </form>
    </div>
  );
}

function ChatFloatingWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-floating">
      {open && <ChatBox onClose={() => setOpen(false)} />}

      <button
        type="button"
        className="chat-toggle-btn"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "−" : "💬"}
      </button>
    </div>
  );
}

export default ChatFloatingWidget;
