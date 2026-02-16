import { useEffect, useRef } from "react";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        aboutRef.current.classList.add("show-about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section" ref={aboutRef} id="about">
      <h1 className="about-heading">ABOUT US</h1>

      <div className="about-content">
        {/* Images */}
        <div className="about-image-area">
          <img
            src={aboutImg1}
            alt="Dyslexia concept"
            className="about-img-main"
          />
          <img
            src={aboutImg2}
            alt="Dyslexia brain"
            className="about-img-overlay"
          />
        </div>

        {/* Text */}
        <div className="about-text">
          <p>
            Welcome to Dyslexis! 🎉 We believe dyslexia is not a limitation but a
            different way of thinking.
          </p>

          <p>
            Our platform makes learning interactive through games, creativity,
            and tools designed for neurodivergent minds.
          </p>

          <p>
            We are more than a platform — we are a community that helps you grow
            with confidence and joy.
          </p>

          <p>
            🌟 Join us and unlock your unique potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
