import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY >= 80 ? styles.scrolled : styles.notscrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-md sticky-top ${styles.navbar} ${navBackground}`}>
      <div className="container-fluid">
        <li className={styles.title} style={{ marginLeft: "20px" }}> {/* Shifted right */}
          <Link className={styles.brand} to="/">
            <img src="/navImage.png" alt="title" />
          </Link>
        </li>

        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ 
            border: "2px solid white", 
            borderRadius: "5px", 
            transition: "0.3s", 
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" 
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.target.style.transform = "scale(1)";
          }}
        >
          <i className="fa fa-bars p-1" aria-hidden="true" style={{ color: "#fff" }}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                CONTACT US
              </Link>
            </li>
            {localStorage.getItem("token") && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                  Admin Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
