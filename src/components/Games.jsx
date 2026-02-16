import "../styles/Games.css";
import { useNavigate } from "react-router-dom";

function Games() {
  const navigate = useNavigate();

  const games = [
    { id: 1, title: "Word Builder" },
    { id: 2, title: "Memory Match" },
    { id: 3, title: "Letter Hunt" },
    { id: 4, title: "Phonics Fun" },
    { id: 5, title: "Speed Reading" },
    { id: 6, title: "Pattern Puzzle" },
  ];

  return (
    <div className="games-page">

      {/* 🔙 Back to Website Button */}
      <button
        className="home-btn"
        onClick={() => navigate("/")}
      >
        ⬅ Back to Website
      </button>

      <h1 className="games-title">Brain Training Games</h1>

      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => navigate(`/games/${game.id}`)}
          >
            {game.title}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Games;
