import React, { useState } from "react";
import "../styles/Prediction.css";

const Prediction = () => {
  const questions = [
    "1. Does your child frequently mix up letters like 'b' and 'd'?",
    "2. Does your child skip words while reading?",
    "3. Does your child reread lines frequently?",
    "4. Does your child struggle remembering letter sequences?",
    "5. Does your child confuse similar-looking words?"
  ];

  const options = [
    { label: "Never", value: 0 },
    { label: "Seldom", value: 1 },
    { label: "Sometimes", value: 2 },
    { label: "Often", value: 3 },
    { label: "Always", value: 4 }
  ];

  const [answers, setAnswers] = useState({});
  const [percentage, setPercentage] = useState(null);

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const max = questions.length * 4;
    const percent = Math.round((total / max) * 100);
    setPercentage(percent);
  };

  const getRisk = () => {
    if (percentage < 30) return "Low Risk";
    if (percentage < 60) return "Moderate Risk";
    return "High Risk";
  };

  return (
    <div className="page-wrapper">
      <h1 className="main-title">Prediction for Dyslexia</h1>

      <div className="two-column-layout">

        {/* LEFT COLUMN - QUIZ (UNCHANGED) */}
        <div className="quiz-column">
          <h2>Dyslexia Prediction Quiz</h2>

          {questions.map((q, i) => (
            <div key={i} className="question-card">
              <p>{q}</p>

              <div className="options">
                {options.map((opt, index) => (
                  <button
                    key={index}
                    className={`option-btn ${answers[i] === opt.value ? "active" : ""
                      }`}
                    onClick={() => handleChange(i, opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button className="submit-btn" onClick={handleSubmit}>
            Calculate Prediction
          </button>

          {percentage !== null && (
            <div className="result-box">
              <h3>{percentage}%</h3>
              <p>{getRisk()}</p>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - UPDATED UI */}
        <div className="image-column">

          <h2 className="image-heading">
            Dyslexia Prediction by Image
          </h2>

          <div className="upload-box">
            <input type="file" id="fileUpload" hidden />

            {/* <label htmlFor="fileUpload" className="choose-btn">
              Choose File
            </label> */}

            {/* <button className="predict-btn">
              Predict
            </button> */}

            <button
              className="predict-btn"
              onClick={() =>
                window.open(
                  "https://app.roboflow.com/workflows/mobile/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3JrZmxvd0lkIjoiTlMxcHBncXFRQm9jZUR5YlN3TjAiLCJ3b3Jrc3BhY2VJZCI6IjcyZlpDZFNGeWVRSXB2OGYxanNvVk0xUkM1MDIiLCJ1c2VySWQiOiI3MmZaQ2RTRnllUUlwdjhmMWpzb1ZNMVJDNTAyIiwiaWF0IjoxNzU3Njk1OTEyfQ.wdWFSQMSH0es6h8bW04543mz8lDlXrYZXsLkoz2iyto",
                  "_blank"
                )
              }
            >
              Predict
            </button>

          </div>
          {/* <div className="result-container">
            Result will appear here
          </div> */}

        </div>

      </div>
    </div>
  );
};

export default Prediction;