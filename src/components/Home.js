import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";  // ✅ Correct path
import collegeImage from "../images/tbakc.jpeg";

const Home = () => {
  return (
    <div className="home-container d-flex">
      {/* Left Side - Image and College Info */}
      <div className="left-section d-flex flex-column align-items-center justify-content-center">
        <h1 className="college-name text">TBAKC</h1>
        <p className="dept-text">DEPARTMENT OF ENGLISH</p>
        <img src={collegeImage} alt="College Building" className="college-image" />


      </div>

      {/* Right Side - Buttons */}
      <div className="right-section d-flex flex-column justify-content-center">
        <Link to="/student-tutorials" className="menu-button">Tutorials</Link>
        <Link to="/student-login" className="menu-button">Student Login</Link>
        <Link to="/staff-login" className="menu-button">Staff Login</Link>
      </div>
    </div>
  );
};

export default Home;
