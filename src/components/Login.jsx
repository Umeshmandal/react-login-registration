import { useState } from "react";

function Login({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    console.log("Login Data:", {
      email,
      password,
    });

    setMessage("Login successful!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <p className="subtitle">Welcome back! Please login.</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="switch">
          Don't have an account?{" "}
          <button className="link-button" onClick={onRegister}>
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
