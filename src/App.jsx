import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Therapist from "./components/Therapist";
import Products from "./components/Products";
import TherapistCall from "./components/TherapyCall";
import Prediction from "./components/Prediction";
import Contact from "./components/FAQ";
import Games from "./components/Games";
import GameScreen from "./components/GameScreen";

import "./styles/style.css";

/* ================= MAIN WEBSITE ================= */

function MainPage() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="prediction">
        <Prediction />
      </section>

      <section id="therapist">
        <Therapist />
      </section>

      <section id="therapycall">
        <TherapistCall />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="contact" className="contact-section">

  {/* FAQ SECTION */}
  <div className="faq-section">
    <h1 className="faq-title">FAQs</h1>

    <div className="faq-container">

      <div className="faq-item">
        <h3>1. What is Dyslexis, and how can it help my child with dyslexia?</h3>
        <p>
          Dyslexis is an interactive platform designed to support children
          with dyslexia by offering games and activities that enhance
          cognitive and literacy skills. Our tools focus on phonological
          awareness, memory, and reading fluency.
        </p>
      </div>

      <div className="faq-item">
        <h3>2. What types of games are available on Dyslexis?</h3>
        <p>
          Dyslexis offers games aimed at improving pattern recognition,
          phonics, spelling, and memory. These are educational and engaging,
          helping children practice essential skills in a fun way.
        </p>
      </div>

      <div className="faq-item">
        <h3>3. How do the games improve reading and writing skills?</h3>
        <p>
          The games are based on research in dyslexia and cognitive
          development. They focus on decoding, spelling, and reading
          comprehension to build strong literacy foundations.
        </p>
      </div>

      <div className="faq-item">
        <h3>4. Is Dyslexis suitable for all children with dyslexia?</h3>
        <p>
          Yes, Dyslexis adapts to different skill levels and provides a
          tailored learning experience depending on the child’s needs.
        </p>
      </div>

      <div className="faq-item">
        <h3>5. How can parents use Dyslexis to support learning?</h3>
        <p>
          Parents can use Dyslexis as a supplementary learning tool at home.
          It provides progress tracking and insights to monitor improvement.
        </p>
      </div>

      <div className="faq-item">
        <h3>6. Does Dyslexis offer professional support?</h3>
        <p>
          Yes, we connect families with professional therapists and specialists
          who provide personalized support both online and in-person.
        </p>
      </div>

    </div>
  </div>

  {/* CONTACT US SECTION */}
<div className="contact-info">
  <h1>Contact Us</h1>

  <div className="contact-cards">

    <div className="contact-card">
      <h3>Sarthak Sharma</h3>
      <p>Email: sartunes30@gmail.com</p>
    </div>

    <div className="contact-card">
      <h3>Gargi Kaushik</h3>
      <p>Email: gargikaushik1711@gmail.com</p>
    </div>

    <div className="contact-card">
      <h3>Kanak Aggrawal</h3>
      <p>Email: Kanakhtsnew@gmail.com</p>
    </div>

  </div>
</div>

</section>

    </>
  );
}

/* ================= ROUTES ================= */

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/:id" element={<GameScreen />} />
    </Routes>
  );
}

export default App;
