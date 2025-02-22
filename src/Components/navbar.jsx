import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = (props) => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setNavBackground(styles.scrolled);
      } else {
        setNavBackground(styles.notscrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-md sticky-top ${styles.navbar} ${navBackground}`}
      >
        <div className="container-fluid">
          <li className={styles.title}>
            <Link className={styles.brand} to="/">
              <img src="/navImage.png" alt="title" />
            </Link>
          </li>

          <button
            className={`navbar-toggler ${styles.navbarToggler}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className="fa fa-bars p-1"
              style={{ color: "inherit" }}
              aria-hidden="true"
            ></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className={`navbar-nav ml-auto`}>
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
                    Admin-Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
