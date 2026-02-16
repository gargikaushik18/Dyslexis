import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Therapist from "./components/Therapist";
import Products from "./components/Products";
import TherapistCall from "./components/TherapyCall";
import Prediction from "./components/Prediction";
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

      <section id="contact">
        <h1 style={{ padding: "120px", textAlign: "center" }}>
          Contact Section
        </h1>
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
