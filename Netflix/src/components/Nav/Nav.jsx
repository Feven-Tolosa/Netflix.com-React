import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Nav.css";
import logo from "../../assets/rit.png";
import avater from "../../assets/download.png";
function Nav() {
  // const [show, handleShow] = useState();
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     // window.removeEventListener("scroll");
  //     window.removeEventListener("show");
  //   };
  // }, []);
  //

  // const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    // <div className="nav">
    <nav className={`nav ${scrolling && "navbar-scroll"}`}>
      {/* <nav className={scrolling ? "navbar-scroll" : ""}> */}
      <img className="nav_logo" src={logo} alt="Netflix Logo" />
      <img className="nav_avater" src={avater} alt="Avater logo" />
    </nav>
    // </div>
  );
}

export default Nav;
