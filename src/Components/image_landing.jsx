import React from "react";
import styles from "./styles/image_landing.module.css";

const scrollToDonate = () => {
  const element = document.getElementById("DonateSection");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.warn("DonateSection not found!"); // Changed to a warning for better readability
  }
};

const ImageLanding = () => {
  return (
    <div className={styles.backgroundImage}> {/* Removed unnecessary extra div */}
      <div className={styles.title}>
        <p className={styles.text}>ROTARACT IIITM</p>
        <p className={styles.header}>You Bestow, We Deliver</p>
      </div>

      {/* ✅ Improved accessibility and code structure */}
      <button
        className={`btn btn-success p-3 ${styles.donateBtn}`}
        onClick={scrollToDonate}
        aria-label="Donate Now"
      >
        DONATE NOW
      </button>
    </div>
  );
};

export default ImageLanding;
