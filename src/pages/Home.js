import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homebanner.png";
import "../styles/Home.css";
import Logo from "../assets/umamibiteslogo.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>UMAMI BITES</h1>
        <p>
          where every bite
          <br />
          is a journey to umami paradise
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Home;
