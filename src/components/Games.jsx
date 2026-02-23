import "../styles/Games.css";
import { useNavigate } from "react-router-dom";

import colourImg from "../assets/colourImg.png";
import pathImg from "../assets/pathImg.png";
import letterImg from "../assets/letterImg.png";
import mathImg from "../assets/mathImg.png";
import anxietyImg from "../assets/anxietyImg.png";
import flipImg from "../assets/flipImg.png";

export const games = [
  {
    id: 1, title: "Colour Catcher",
    url: "https://scratch.mit.edu/projects/1064895385/embed",image: colourImg
  },
  { id: 2, title: "Path Finder",  url: "https://scratch.mit.edu/projects/1064802499/embed",image: pathImg},
  { id: 3, title: "Letter Hunt",   url: "https://scratch.mit.edu/projects/1067829493/embed",image: letterImg },
  { id: 4, title: "Math Mania", url: "https://scratch.mit.edu/projects/19006609/embed", image: mathImg },
  { id: 5, title: "Managing Anxiety",  url: "https://scratch.mit.edu/projects/1064813960/embed",image: anxietyImg },
  { id: 6, title: "Flip and Find",   url: "https://scratch.mit.edu/projects/1183261/embed",image: flipImg },
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
            {/* 🔥 TITLE ABOVE IMAGE */}
            <h3 className="game-name">{game.title}</h3>

            {/* 🔥 IMAGE INSTEAD OF BLACK BOX */}
            <img
              src={game.image}
              alt={game.title}
              className="game-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;