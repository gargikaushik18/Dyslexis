import { useParams, useNavigate } from "react-router-dom";
import "../styles/GameScreen.css";
import { games } from "./Games";
import axios from "axios";
import { useState } from "react";

function GameScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [score, setScore] = useState(""); // ✅ state added

  const game = games.find((g) => g.id === parseInt(id));

  // ✅ SAVE SCORE FUNCTION
  const saveScore = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    if (!score) {
      alert("Enter score first");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/save-score", {
        userId: user._id,
        score: Number(score),
        game: game.title, // ✅ game name sent
      });

      if (res.data.success) {
        user.scores = res.data.scores;
        localStorage.setItem("user", JSON.stringify(user));
      }

      alert("Score saved ✅");
      setScore("");
    } catch (err) {
      console.log(err);
      alert("Error saving score ❌");
    }
  };

  if (!game) {
    return (
      <div className="game-screen">
        <button className="back-btn" onClick={() => navigate("/games")}>
          ← Back
        </button>
        <p>Game not found</p>
      </div>
    );
  }

  return (
    <div className="game-screen">
      <button className="back-btn" onClick={() => navigate("/games")}>
        ← Back
      </button>

      <h1>{game.title}</h1>

      <div className="game-area">
        <iframe
          src={game.url}
          width="90%"
          height="900"
          frameBorder="0"
          allowFullScreen
          title={game.title}
        ></iframe>
      </div>

      {/* ✅ SCORE INPUT + BUTTON */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter your score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />

        <button onClick={saveScore} style={{ padding: "10px" }}>
          Save Score
        </button>
      </div>
    </div>
  );
}

export default GameScreen;