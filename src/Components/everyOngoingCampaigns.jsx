import React from "react";
import styles from "./styles/campaigns.module.css";

const Campaigns = ({ id, isActivated, image, title, description, requiredAmount, handleClick }) => {
  return (
    <div className={isActivated ? "" : styles.disabled}>
      <div
        className={`m-4 p-0 ${styles.campaignContainer}`}
        onClick={() => handleClick(id)}
      >
        <div className={`row ${styles.allContent}`}>
          <div className={`col-5 ${styles.imageContainer}`}>
            <div className={styles.imgCentre}>
              <img className={styles.image} src={image} alt={title} />
            </div>
          </div>

          <div className={`col-7 ${styles.campaignContent}`}>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styles.bottomSection}>
            <div className={`col-7 ${styles.contentBottomSection}`}>
              <div className="row">
                <div className={`col-7 ${styles.requiredAmount}`}>
                  <b>Required Amount:</b>
                  <p>
                    <i className="fa fa-inr" aria-hidden="true"></i> {requiredAmount}
                  </p>
                </div>
                <div className={`col-5 ${styles.DonateNow}`}>
                  <p className={styles.DonateNow_p}>
                    Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
