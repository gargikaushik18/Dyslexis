import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
  localStorage.removeItem("user");

  // ✅ FORCE FULL REDIRECT
  window.location.href = "/";
};
  return (
    <div className="navbar">
      <div className="logo">Dyslexis</div>

      <div className="nav-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("prediction")}>Prediction</button>
        <button onClick={() => scrollToSection("therapist")}>Therapist</button>
         <button onClick={() => scrollToSection("therapycall")}>TherapistCall</button>
        <button onClick={() => scrollToSection("products")}>Products</button>
        <button onClick={() => scrollToSection("contact")}>FAQs</button>
         {/* ✅ LOGOUT BUTTON */}
        <button onClick={handleLogout} style={{ color: "red" }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
