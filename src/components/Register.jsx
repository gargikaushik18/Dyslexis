import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        alert("Registered Successfully ✅");

        navigate("/"); // ✅ FIXED (NOT /login)
      } else {
        alert(res.data.message || "User already exists ❌");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Register</h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>

        <button onClick={() => navigate("/")}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Register;