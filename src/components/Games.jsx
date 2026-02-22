import "../styles/Games.css";
import { useNavigate } from "react-router-dom";

/* 🔥 Move games array OUTSIDE */
export const games = [
  {
    id: 1,
    title: "Colour Catcher",
    url: "https://scratch.mit.edu/projects/1064895385/embed",
  },
  {
    id: 2,
    title: "Path Finder",
    url: "https://scratch.mit.edu/projects/1064802499/embed",
  },
  {
    id: 3,
    title: "Letter Hunt",
    url: "https://scratch.mit.edu/projects/1067829493/embed",
  },
  {
    id: 4,
    title: "Math Mania",
    url: "https://scratch.mit.edu/projects/19006609/embed",
  },
  {
    id: 5,
    title: "Managing Anxiety",
    url: "https://scratch.mit.edu/projects/1064813960/embed",
  },
  {
    id: 6,
    title: "Flip and Find",
    url: "https://scratch.mit.edu/projects/1183261/embed",
  },
];

function Games() {
  const navigate = useNavigate();

  return (
    <div className="games-page">

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