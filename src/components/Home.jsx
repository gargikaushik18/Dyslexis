import image1 from "../assets/image1.png";
import chatbot from "../assets/chatbot.png";
import background from "../assets/background.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const openChat = () => {
    if (window.botpress) {
      window.botpress.open();
    }
  };

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-left">
        <div className="hero-box">
          <p className="p">Boost Your Brain!</p>
          <h1 className="h1">Dyslexia Game On!</h1>
          <p className="p">Explore Our New Quests Online!</p>

          <button onClick={() => navigate("/games")}>
            Explore
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src={image1} className="quote-img" alt="Quote" />
      </div>

      
    </div>
  );
};

export default Home;