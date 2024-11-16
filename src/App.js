import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./Navigo_logo_Light-removebg.png";

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [tagline, setTagline] = useState("Your Journey, Our Passion");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComingSoon(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const taglines = [
      "Your Journey, Our Passion",
      "Innovating Every Step",
      "Navigating Your Future",
    ];
    let index = 0;
    const taglineInterval = setInterval(() => {
      setTagline(taglines[index]);
      index = (index + 1) % taglines.length;
    }, 3000);
    return () => clearInterval(taglineInterval);
  }, []);

  return (
    <div className="App">
      <div className="background-overlay"></div>
      <div className="particles"></div>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <h2 className="tagline">{tagline}</h2>

      {!showComingSoon && (
        <>
          <div className="loading-bar-container">
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
          <p className="work-in-progress">Work Under Progress</p>
        </>
      )}

      {showComingSoon && (
        <p className="coming-soon-text">Coming Soon</p>
      )}
    </div>
  );
}

export default App;
