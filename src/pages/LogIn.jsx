import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAuthentication = () => {
    if (isSignUp) {
      alert(`Sign up successful! Username: ${username}, Password: ${password}`);
      setUsername("");
      setPassword("");
    } else {
      if (
        (username === "Braden" && password === "Skiffington") ||
        (username === "Dawson" && password === "Murray") ||
        (username === "Noman" && password === "Keyin")
      ) {
        setIsLoggedIn(true);
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAuthentication();
    }
  };

  if (isLoggedIn) {
    return <div className="welcome">Welcome, {username}!</div>;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form autoComplete="off">
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress} // Added this line
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="button" onClick={handleAuthentication}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
          <p className="toggle-mode" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
