import React from "react";
import styles from "./ProfileCard.module.scss";
import IconsContainer from "../iconsContainer/IconsContainer";
import malelogo from "../../assets/images/Male.png";

const ProfileCard = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={malelogo} alt={"male-image"} />
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.cardName}>Joy Kapur</div>
          <div className={styles.cardDesignation}>Chief Sales Executive</div>
        </div>
        <div className={styles.cardIcons}>
          <IconsContainer />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
