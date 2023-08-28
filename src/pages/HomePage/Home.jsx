import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.scss";
import GoButton from "../../components/button/Button";
import { ReactComponent as RectangleBox } from "../../assets/images/Rectangle 595.svg";
import { ReactComponent as LockLogo } from "../../assets/logo/Lock.svg";
import { ReactComponent as ProfileLogo } from "../../assets/logo/Profile Accepted.svg";
import { ReactComponent as VerifiedLogo } from "../../assets/logo/Verified.svg";
import { ReactComponent as WalletLogo } from "../../assets/logo/Wallet.svg";
import { ReactComponent as ColoredLogo } from "../../assets/logo/ColoredLogo.svg";
import { useHoverContext } from "../../context/HoverContext";
import CircularLogoDiv from "../../components/CircularLogoDiv/CircularLogoDiv";
import IconsContainer from "../../components/iconsContainer/IconsContainer";
import ProfileCard from "../../components/profileCard/ProfileCard";

const TOTAL_USERS = "12,857,082";
const TOTAL_VERIFICATIONS = "10,857,082";

const UsersContainer = ({ title, description, number }) => (
  <div className={styles.usersContainer}>
    <div className={styles.usersColumn}>
      <span className={styles.spanLargetext}>{title}</span>
      <span className={styles.spanSmalltext}>{description}</span>
    </div>
    <div className={styles.numbers}>{number}</div>
  </div>
);
const ServiceList = () => {
  return (
    <div className={styles.ServiceListContainer}>
      <div className={styles.ListContainer}>
        <div className={styles.ListLeftContainer}>
          <div>Smart contract audit</div>
          <div>Smart contract development</div>
          <div>Defi Protocols</div>
        </div>
        <div className={styles.ListRightContainer}>
          <div>NFTs/NFT Marketplace</div>
          <div>Asset Tokenization</div>
          <div>White paper development</div>
        </div>
      </div>
    </div>
  );
};

export const GetStartedBtn = () => {
  return (
    <div className={styles.btn}>
      <GoButton
        title="Get Started"
        customContainerStyle={{
          width: "130px",
          borderRadius: "40px",
        }}
      />
    </div>
  );
};

const MidContainer = () => {
  return (
    <div className={styles.midContainer}>
      <div className={styles.achieve}>Achieve.</div>
      <div className={styles.authenticate}>Authenticate.</div>
      <div className={styles.ascend}>Ascend.</div>
      <div className={styles.midText}>
        Unleashing your achievements with decentralized
        credential management system.
      </div>
      <GetStartedBtn />
    </div>
  );
};

const Home = () => {
  const { isHovered } = useHoverContext();
  return (
    <>
      <div className={styles.firstContainer}>
        {isHovered ? <ServiceList /> : null}
        <MidContainer />

        <IconsContainer />
        <div className={styles.endContainer}>
          <UsersContainer
            title="Total Users"
            description="Registered through our portal"
            number={TOTAL_USERS}
          />
          <UsersContainer
            title="Verifications"
            description="Done by students through us"
            number={TOTAL_VERIFICATIONS}
          />
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.secondMainContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.leftLargeText}>How It Works ?</div>
            <div className={styles.leftSmallText}>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper commodo in
              aliquam cras habitasse orci leo mi laoreet. Nulla in magna velit
              pretium netus Learn More...
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.rightTopContainer}>
              <div className={styles.box}>
                
                <RectangleBox style={{
                  position: "absolute"
                }} />
                <VerifiedLogo /> <span>Institute registration</span>{" "}
              </div>
              <div className={styles.box}>
                
                <RectangleBox style={{
                  position: "absolute",
                }} />
                <LockLogo /> <span>Credential issuance</span>{" "}
              </div>
            </div>
            <span></span>
            <div className={styles.rightBottomContainer}>
              <div className={styles.box}>
              <RectangleBox style={{
                  position: "absolute",
                }} />
                <WalletLogo /> <span>Transcript wallet creation</span>{" "}
              </div>
              <div className={styles.box}>
              <RectangleBox style={{
                  position: "absolute",
                }} />
                <ProfileLogo /> <span>On-chain verifiaction</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.thirdMainContainer}>
          <div className={styles.thirdLeftContainer}>
            <CircularLogoDiv />
          </div>
          <div className={styles.thirdRightContainer}>
            <div className={styles.leftLargeText}>Clients We Work With</div>
            <div className={styles.leftSmallText}>
              We partner with leading universities to revolutionize their
              credential management, providing a secure and efficient platform
              for managing educational qualifications.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fourthContainer}>
        <div className={styles.fourthMainContainer}>
          <div className={styles.fourthLeftContainer}>
            <div className={styles.leftLargeText}>Meet Our Team</div>

            <div
              className={styles.leftSmallText}
              style={{
                paddingTop: "3%",
              }}
            >
              Meet our blockchain wizards at Colledger, turning educational
              credentials into secure digital gems!
            </div>
          </div>
          <div className={styles.fourthRightContainer}>
            <div className={styles.cards}>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />

            </div>
            {/* <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard /> */}
          </div>
        </div>
      </div>
      <div className={styles.fifthContainer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerText}>One Portal For All Academies</div>
          <div className={styles.footerbtn}>
            <GetStartedBtn />
          </div>
        </div>
        <div className={styles.lastContainer}>
          <div className={styles.lastMainContainer}>
            <div className={styles.lastTopContainer}>
              <div>
                <ColoredLogo />
              </div>
              <div>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "35px",
                  }}
                >
                  Colledger
                </span>
                <span className={styles.smallContent}>Protocol</span>
              </div>
            </div>
            <div className={styles.lastMidContainer}>
              <div>About</div>
              <div>White Paper</div>
              <div>Features</div>
              <div>Pricing</div>
              <div>Careers</div>
              <div>Help</div>
              <div>Privacy Policy</div>
            </div>
            <div
              style={{
                borderBottom: "1px solid grey",
                paddingTop: "10%",
              }}
            ></div>
            <div className={styles.lastEndContainer}>
              <div>© 2023 ColledgerProtocol. All rights reserved</div>
              <div  >
                {" "}
                <IconsContainer />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
