import styles from "./CircularLogoDiv.module.scss";
import React from "react";
import { ReactComponent as Monkey} from "../../assets/logo/airbnb.svg";
import { ReactComponent as Slack } from "../../assets/logo/Slack.svg";
import { ReactComponent as Videocall } from "../../assets/logo/amazon.svg";
import { ReactComponent as Amazon } from "../../assets/logo/amazon.svg";
import { ReactComponent as Dropbox } from "../../assets/logo/lyft.svg";
import { ReactComponent as Lyft } from "../../assets/logo/lyft.svg";
import { ReactComponent as Pininterest } from "../../assets/logo/lyft.svg";
import { ReactComponent as Airbnb } from "../../assets/logo/airbnb.svg";
import { ReactComponent as Robot } from "../../assets/logo/amazon.svg";


const CircularLogoDiv = () => {
  return (
    
      
      <div className={styles.circularContainer}>
        <div className={styles.outer2}>
       
        <div className={styles.outerCircle2}>
          <div className={`${styles.logo} ${styles.logo4}`}>
            <Amazon />
          </div>
          <div className={`${styles.logo} ${styles.logo5}`}>
            <Dropbox />
          </div>
          <div className={`${styles.logo} ${styles.logo6}`}>
            <Lyft />
          </div>
          <div className={`${styles.logo} ${styles.logo7}`}>
            <Pininterest />
          </div>
          <div className={`${styles.logo} ${styles.logo8}`}>
            <Robot />
          </div>
          <div className={`${styles.logo} ${styles.logo9}`}>
            <Airbnb />
          </div>
          
        </div>
        
        <div className={styles.outer1}>
            <div className={styles.circle}>
                <div className={`${styles.logo} ${styles.logo2}`}> <Slack/> </div>
                <div className={`${styles.logo} ${styles.logo3}`}> <Videocall/> </div>
                <div className={`${styles.logo} ${styles.logo1}`}> <Monkey/> </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default CircularLogoDiv;
