import React from "react";
import nobleCause from "./assets/nobleCause.jpg";
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={`col-12 m-auto ${styles.container}`}>
        <h1 className={styles.header}>Become a part of a noble cause</h1>
        <p className={styles.para}>
          Join Rotaract Club and contribute to a better world by being part of
          a noble cause. Your efforts can bring positive change, uplift communities, 
          and create a lasting impact on those in need. Small actions lead to big transformations,
          and together, we can make a difference.
        </p>
        <img className={styles.image} src={nobleCause} alt="noble cause" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
