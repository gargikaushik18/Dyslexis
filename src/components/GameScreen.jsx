import { useParams, useNavigate } from "react-router-dom";
import "../styles/GameScreen.css";
import { games } from "./Games";

function GameScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = games.find((g) => g.id === parseInt(id));

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
    </div>
  );
}

export default GameScreen;