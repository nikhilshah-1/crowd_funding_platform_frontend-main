import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          The Rotaract Club is a global organization of young professionals and students committed to service, leadership, and professional development. As part of Rotary International, we strive to make a difference in our communities through various projects focused on social impact, humanitarian efforts, and personal growth.
          <br />
          <br />
          We believe in the power of teamwork, collaboration, and shared goals. Our members are driven by a passion for positive change and are constantly working towards making the world a better place. Whether it’s through charity initiatives, educational programs, or environmental sustainability projects, we take pride in being a force for good.
          <br />
          <br />
          By joining Rotaract Club, you become part of a dynamic network of changemakers who are dedicated to building a better future. Our club fosters an inclusive, engaging, and supportive environment where everyone has the opportunity to contribute and grow.
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
