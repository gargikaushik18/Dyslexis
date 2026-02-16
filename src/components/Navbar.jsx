const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
      </div>
    </div>
  );
};

export default Navbar;
