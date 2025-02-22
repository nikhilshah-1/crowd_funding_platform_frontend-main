import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <div className={`row col-12 ${styles.whyUsSection}`}>
      <div className={`col-12 ${styles.whyUs}`}>
        <h2 className={styles.header}>Why Us?</h2>
        <ul className={styles.benefitsList}>
          <li>
            <strong>Leadership Development</strong> - Gain hands-on experience in leadership roles, event planning, and decision-making.
          </li>
          <li>
            <strong>Community Service</strong> - Be a part of meaningful projects that address social issues such as education, healthcare, environmental sustainability, and more.
          </li>
          <li>
            <strong>Networking Opportunities</strong> - Connect with professionals, entrepreneurs, and industry leaders who can guide and inspire you.
          </li>
          <li>
            <strong>Personal Growth</strong> - Enhance your communication, problem-solving, and teamwork skills through various club activities.
          </li>
          <li>
            <strong>International Exposure</strong> - As part of Rotary International, you’ll have opportunities to engage in global initiatives, conferences, and exchange programs.
          </li>
          <li>
            <strong>Friendship & Fun</strong> - Meet incredible people, make lifelong friendships, and participate in fun activities, outings, and events.
          </li>
        </ul>
      </div>
      <div className={`col-12 ${styles.imageContainer}`}>
        <img className={styles.image} src={ChildImage} alt="Group of happy children" />
      </div>
    </div>
  );
};

export default WhyUs;