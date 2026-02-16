// import "./Services.css";

// // import your images (paste images in src/assets/)
// import img1 from "../assets/ourservice1.png";
// import img2 from "../assets/ourservice2.png";
// import img3 from "../assets/ourservice3.png";

// function Services() {
//   return (
//     <section className="services" id="services">
//       <h1 className="title">OUR SERVICES</h1>

//       <div className="services-container">
//         {/* LEFT CONTENT */}
//         <div className="services-text">
//           <div className="service">
//             <h3>Interactive Learning Games 🎮</h3>
//             <p>
//               Dive into our collection of fun, interactive games specially
//               designed to help dyslexic individuals strengthen their reading,
//               writing, and comprehension skills.Each game is crafted to turn learning into an adventure, encouraging creativity and confidence while tackling everyday challenges!
//             </p>
//           </div>

//           <div className="service">
//             <h3>Therapist Integration Underway 🧠</h3>
//             <p>
//              We’re excited to announce that we are currently implementing a network of experienced therapists on Dyslexis! You’ll soon be able to connect with professionals who specialize in dyslexia and neurodivergent support, offering personalized strategies and emotional guidance. In the near future, we’ll also enable direct meeting scheduling through the website, making it easier to fix appointments and manage sessions online. Stay tuned!
//             </p>
//           </div>

//           <div className="service">
//             <h3>Community Connect 🤝</h3>
//             <p>
//               Join a supportive and inclusive community where you can share experiences, tips, and encouragement. We believe in the power of connection, and our Community Connect platform is the perfect place to feel heard, understood, and uplifted.
//             </p>
//           </div>

//           <div className="service">
//             <h3>Resource Hub 📚</h3>
//             <p>
//               Explore our treasure trove of resources that simplify complex topics related to dyslexia. From quick tips and guides to tools that aid learning, our Resource Hub is a one-stop shop for all things dyslexia—made for parents, teachers, and dyslexic individuals alike.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT IMAGES */}
//         <div className="services-images">
//           <img src={img1} alt="learning" />
//           <img src={img2} alt="letters" />
//           <img src={img3} alt="reading" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
import "./Services.css";

import img1 from "../assets/ourservice1.png";
import img2 from "../assets/ourservice2.png";
import img3 from "../assets/ourservice3.png";

function Services() {
  return (
    <section className="services" id="services">
      <h1 className="title">OUR SERVICES</h1>

      <div className="services-container">

        {/* TEXT SECTION */}
        <div className="services-text">

          <div className="service">
            <h3>Interactive Learning Games 🎮</h3>
            <p>
             Dive into our collection of fun, interactive games specifically designed to help dyslexic individuals strengthen their reading, writing, and comprehension skills. Each game is crafted to turn learning into an adventure, encouraging creativity and confidence while tackling everyday challenges!
            </p>
          </div>

          <div className="service">
            <h3>Therapist Integration Underway 🧠</h3>
            <p>
              We’re excited to announce that we are currently implementing a network of experienced therapists on Dyslexis! You’ll soon be able to connect with professionals who specialize in dyslexia and neurodivergent support, offering personalized strategies and emotional guidance. In the near future, we’ll also enable direct meeting scheduling through the website, making it easier to fix appointments and manage sessions online. Stay tuned!
            </p>
          </div>

          <div className="service">
            <h3>Community Connect 🤝</h3>
            <p>
              Join a supportive and inclusive community where you can share experiences, tips, and encouragement. We believe in the power of connection, and our Community Connect platform is the perfect place to feel heard, understood, and uplifted.
            </p>
          </div>

          <div className="service">
            <h3>Resource Hub 📚</h3>
            <p>
              Explore our treasure trove of resources that simplify complex topics related to dyslexia. From quick tips and guides to tools that aid learning, our Resource Hub is a one-stop shop for all things dyslexia—made for parents, teachers, and dyslexic individuals alike.
            </p>
          </div>

        </div>

        {/* IMAGES SECTION */}
        <div className="services-images">
          <img src={img1} alt="learning" />
          <img src={img2} alt="letters" />
          <img src={img3} alt="reading" />
        </div>

        {/* YOUTUBE VIDEOS SECTION */}
        <div className="services-videos">
          <h2 className="video-title">Watch And Learn About Dyslexia</h2>

          <div className="video-grid">
            <iframe
              src="https://www.youtube.com/embed/11r7CFlK2sc"
              title="Video1"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/zafiGBrFkRM"
              title="Video2"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/Jd_T6CzWpHM"
              title="Video3"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/_dPyzFFcG7A"
              title="Video4"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
