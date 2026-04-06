import contactImg from "../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Therapist = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const therapists = [
    {
      img: "https://images.jdmagicbox.com/v2/comp/delhi/e2/011pxx11.xx11.160108115000.w5e2/catalogue/dr-owais-a-farooqui-psycare-jasola-vihar-delhi-3k1q77u.jpg",
      name: "Dr.Owais Akram Farooqui (PhD)",
      location: "New Friend Colony, Delhi",
    },
    {
      img: "https://assets.lybrate.com/img/documents/doctor/dp/a83a2fd256f01509cd219495a018f756/Psychology-RashiAnandLaskari-Mumbai-26694b.jpg",
      name: "Dr.Rashi Laskari",
      location: "Inner Light Counselling Centre, Mumbai",
    },
    {
      img: "https://www.fortishealthcare.com/drupal-data/doctors/dr-priyanka-sharma-10400.jpg",
      name: "Dr.Priyanka Sharma",
      location: "Fortis Hospital, Delhi",
    },
    {
      img: "https://assets.lybrate.com/img/documents/doctor/dp/41a8964843c26e9b7d88e546ac6b76ea/Psychology-VikasKhanna-Gurgaon-b925ef.png",
      name: "Dr.Vikas Khanna",
      location: "Rajouri Garden, Delhi",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTloEvIboHUN0oLt8aL_8WeABFUrHGAic2N0A&s",
      name: "Ms.Khyati Malik",
      location: "Ashok Vihar, Delhi",
    },
  ];

  // 🔥 Email Send Function
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_x5dqpxp",
      "template_1ogjxud",
      form.current,
      "64GL16kRrDFA-Bnxi"
    )
    .then((result) => {
      console.log("SUCCESS:", result.text);

      setShowPopup(true);     // ✅ show popup
      form.current.reset();   // ✅ clear form
    })
    .catch((error) => {
      console.log("ERROR:", error.text);
      alert("Failed to send message ❌");
    });
};

  return (
    <div className="therapist-section">
      <h1>Meet Our Therapists</h1>

      {/* Therapist Cards */}
      <div className="therapist-cards">
        {therapists.map((t, index) => (
          <div className="card" key={index}>
            <img src={t.img} alt={t.name} />
            <p>
              {t.name}
              <br />
              {t.location}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="contact-wrapper">
        <img
          src={contactImg}
          alt="Therapist Support"
          className="contact-image"
        />

        <div className="form-container">
          <h3>Contact Form</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="Contact Number"
              required
            />

            <textarea
              name="message"
              placeholder="What is your symptom?"
              rows="4"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>✅ Message Sent!</h2>
            <p>We will contact you soon.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Therapist;