import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import "./Nav.css";

import { revealNav } from "../animation";

import logo from "../img/logo.webp";

const Nav = () => {
  let [navActive, setNavActive] = useState(false);
  const { pathname } = useLocation();

  const stickNav = useEffect(() => {
    const toggleNav = setInterval(() => {
      if (window.scrollY >= 300) {
        setNavActive(true);
      }
      if (window.scrollY < 300) {
        setNavActive(false);
      }
    }, 1);

    return () => {
      clearInterval(toggleNav);
    };
  }, []);

  window.addEventListener("scroll", stickNav);

  return (
    <motion.nav
      variants={revealNav}
      initial="hidden"
      animate="show"
      className={`nav ${navActive ? "nav-active" : ""}`}
    >
      <Link to="/" id="logo">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/work">My Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/work" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/contact" ? "100%" : "0" }}
          />
        </li>
      </ul>
    </motion.nav>
  );
};

const Line = styled(motion.div)`
  height: 2.5px;
  margin-top: 0.5rem;
  background-image: linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
`;

export default Nav;
