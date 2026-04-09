import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ redirect if already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log(res.data); // 🔍 debug

      if (res.data.success === true) {
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Login Successful ✅");

        // ✅ FORCE redirect
        window.location.href = "/home";
      } else {
        alert("Invalid Credentials ❌");
      }
    } catch (err) {
      console.log("Login Error:", err);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <button onClick={() => navigate("/register")}>
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
};

export default Login;