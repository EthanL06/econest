"use client"
import React, { useState } from "react";
import styles from "./loginpage.module.css";

const LoginForm = () => {
  const [signUp, setSignUp] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  function toggleSignUp() {
    setSignUp(!signUp);
  }

  const handleLogin = async () => {
    
  };

  const handleSignUp = async () => {
   
  };

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (signUp) {
        handleSignUp();
      } else {
        handleLogin();
      }
    }
  }

  return (
    <>
      
        <div className={styles.loginForm}   onKeyDown={handleKeyDown}>
          <h2>Login</h2>
          <form className={styles.loginInsideForm}  >
            <div className={styles.socialButtons}>
            
              <button className={styles.twitterButton} > 
                Twitter
              </button>

              <button className={styles.twitterButton} >
                Google
              </button>
            </div>
            
            <button
              className={styles.loginButton}
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      
    </>
  );
};

export default LoginForm;