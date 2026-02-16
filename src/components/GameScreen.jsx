import { useParams, useNavigate } from "react-router-dom";
import "../styles/GameScreen.css";

function GameScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="game-screen">
      <button className="back-btn" onClick={() => navigate("/games")}>
        ← Back
      </button>

      <h1>Game {id}</h1>

      <div className="game-area">
        <p>This is where your Game {id} will run.</p>
      </div>
    </div>
  );
}

export default GameScreen;
