import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    const changeColor = () => {
      setNavBackground(window.scrollY >= 80 ? styles.scrolled : styles.notscrolled);
    };

    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []); // Added empty dependency array for optimization

  return <Navbar navBackground={navBackground} />;
};

export default NavBar;
