
import React, { useState } from "react";
import "./SignInSignUp.css";
import { useNavigate } from 'react-router-dom';

const SignInSignUp = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  // State for handling form data
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle sign-up form submission
  const handleSignUp = (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword } = signUpData;
    if (password !== confirmPassword) {
      alert("Password does not match.");
      return;
    }
    const user = { username, email, password };
    localStorage.setItem(username, JSON.stringify(user));
    alert("Registration successful! Please login.");
    setIsSignUp(false); // Switch to login form after successful sign-up
  };

  // Handle sign-in form submission
  const handleSignIn = (event) => {
    event.preventDefault();
    const { username, password } = signInData;
    const storedUser  = localStorage.getItem(username);
    if (storedUser ) {
      const parsedUser  = JSON.parse(storedUser );
      if (parsedUser .password === password) {
        localStorage.setItem("user", JSON.stringify(parsedUser ));
        navigate("/Front"); // Redirect to the Front component after login
      } else {
        alert("Incorrect password.");
      }
    } else {
      alert("User  not found.");
    }
  };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign-in Form */}
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                required
                value={signInData.username}
                onChange={(e) => setSignInData({ ...signInData, username: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={signInData.password}
                onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          {/* Sign-up Form */}
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                required
                value={signUpData.username}
                onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                required
                value={signUpData.email}
                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={signUpData .password}
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={signUpData.confirmPassword}
                onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Haven't signed up yet? Click here to proceed</p>
            <button className="btn transparent" onClick={() => setIsSignUp(true)}>
              Sign up
            </button>
          </div>
          <img src="./images/log.svg" className="image" alt="" />
        </div>

        {/* Right Panel */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Already a member? Click here to login</p>
            <button className="btn transparent" onClick={() => setIsSignUp(false)}>
              Sign in
            </button>
          </div>
          <img src="./images/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;