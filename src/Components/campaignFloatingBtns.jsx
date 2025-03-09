import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Share from "./shareComponent";
import DonateIcon from "./assets/donateIcon.png";
import styles from "./styles/floatingBtns.module.css";
import useHover from "../utills/useHover";

const FloatBtn = ({ campaign }) => {
  const [ref, hovered] = useHover();
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      {/* Share Button */}
      <div className={`${styles.container} ${styles.ShareIcon}`}>
        {showShare && (
          <Share
            url={window.location.href}
            title={campaign.title}
            description={campaign.description}
          />
        )}
        <div
          className={`${styles.share} ${styles.btn}`}
          onClick={() => setShowShare((prev) => !prev)}
        >
          <i className={`fa ${showShare ? "fa-times" : "fa-share-alt"}`} aria-hidden="true"></i>
        </div>
      </div>

      {/* Donate Button - Scrolls to the section with id="DonateForm" */}
      <div className={`${styles.container} ${styles.DonateIcon}`}>
        <ScrollLink to="DonateForm" activeClass="active" spy smooth offset={-100} duration={500}>
          <button className={`btn ${styles.btn}`} ref={ref}>
            <div className={hovered ? styles.show : styles.hide} style={{ display: "inline-flex" }}>
              <span className={styles.text}>Donate Now {"> "}</span>
            </div>
            <img className={styles.img} src={DonateIcon} alt="Donate Icon" />
          </button>
        </ScrollLink>
      </div>
    </>
  );
};

export default FloatBtn;
