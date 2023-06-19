import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://g.foolcdn.com/editorial/images/201646/netflix_logo_digitalvideo-edited.png"
          alt="logo"
        />

        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://distribution.faceit-cdn.net/images/6f24a063-eb46-4534-8106-af0d8ae836b3.jpeg"
          alt="logo-avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
