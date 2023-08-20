import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { ReactComponent as Brandlogo } from "../../assets/logo/Brandlogo.svg";
import { ReactComponent as ColoredBrandlogo } from "../../assets/logo/ColoredLogo.svg";
import GoButton from "../button/Button";
import { useHoverContext } from "../../context/HoverContext";

const Navbar = () => {
  const { handleNavItemHover, handleNavItemLeave } = useHoverContext();
  const [navColor, setNavColor] = useState(false);
  const [isAppHovered, setIsAppHovered] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) setNavColor(true);
    else setNavColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const containerStyle = {
    backgroundColor: navColor ? "#FFFFFF" : "rgba(19, 19, 27, 1)",
    // backgroundColor: navColor ? "#FFFFFF" : "rgba(52,52,54, 1)",
    color: navColor ? "#1E1E1E" : "#FFFFFF",
    transition: "background-color 1.5s ease, color 1.5s ease",
  };

  const btnColor = {
    color: navColor ? "#1E1E1E" : "#FFFFFF",
  };

  const hoveredColor = {
    color: isAppHovered ? "#FFFFFF" : "#1E1E1E",
    background: isAppHovered ? "#1E1E1E" : "#FFFFFF",
  };

  return (
    <div
      // style={{
      //   backgroundColor: navColor ? "#FFFFFF" : "rgba(19, 19, 27, 1)",
      //   color: navColor ? "#1E1E1E" : "#FFFFFF",
      //   transition: "background-color 0.5s ease, color 0.5s ease",
      // }}
      style={containerStyle}
      className={styles.container}
    >
      <div className={styles.maincontainer}>
        <div className={styles.leftContainer}>
          <div>
            {navColor ? <ColoredBrandlogo /> : <Brandlogo />}
            {/* <Brandlogo /> */}
          </div>
          <div>
            <span>Colledger</span>
            <span className={styles.smallContent}>Protocol</span>
          </div>
        </div>
        <div className={styles.midContainer}>
          <div>Product</div>
          <div>
            <div
              className={styles.servicesHover}
              onMouseEnter={handleNavItemHover}
              onMouseLeave={handleNavItemLeave}
            >
              Services
            </div>
          </div>
          <div>Github</div>
          <div>Docs</div>
          <div>FAQ</div>
          <div>Careers</div>
        </div>
        <div className={styles.rightContainer}>
          <div>
            <GoButton
              title="Transcript"
              customContainerStyle={{ ...btnColor }}
            />
          </div>
          <div
            onMouseEnter={() => setIsAppHovered(true)}
            onMouseLeave={() => setIsAppHovered(false)}
          >
            <GoButton
              title="Launch App"
              customContainerStyle={{
                ...hoveredColor,
                // background: "#FFF",
                // color: "#1E1E1E",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
