import React from "react";
import styles from "./IconsContainer.module.scss";
import { ReactComponent as Discordlogo } from "../../assets/logo/discord.svg";
import { ReactComponent as Githublogo } from "../../assets/logo/github.svg";
import { ReactComponent as Twitterlogo } from "../../assets/logo/twitter.svg";

const IconsContainer = () => {
  return (
    <div>
      <div className={styles.icons}>
        <div>
          <Githublogo />
        </div>
        <div>
          <Twitterlogo />
        </div>
        <div>
          <Discordlogo />
        </div>
      </div>
    </div>
  );
};

export default IconsContainer;
