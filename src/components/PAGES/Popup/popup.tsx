import React from "react";
import { useState, useEffect } from "react";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import logo from "../../../assets/coming-img/pharmabee-logo (2).svg";
import {
  CLock,
  ClockMini,
  CloseBtn,
  ComingSoonMain,
  ComingSoonMainContent,
  ComingSoonMainContentText,
  EmailBox,
  MsgBtn,
  Overlay,
  PopupContainer,
} from "./popupStyle";
import drugstore from "../../../assets/coming-img/image.png";
import closebtn from "../../../assets/coming-img/ic_close.svg";

const PopupComponent = () => {
  const initialTime = 2678389; // 30 days, 23 hours, 59 minutes, 59 seconds
  const [time, setTime] = useState<number>(initialTime);

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const [visible, setVisible] = useState(false);

  // Show popup after page loads
  useEffect(() => {
    setVisible(true);
  }, []);

  // Function to hide the popup when the close button is clicked
  const closePopup = () => {
    setVisible(false);
  };

  return (
    <>
      <Overlay visible={visible} />
      <ComingSoonMain>
        <img
          style={{
            position: "absolute",
            alignSelf: "flex-start",
            height: "100vh",
          }}
          src={polygon}
          alt="polygon-img"
        />
        <ComingSoonMainContent>
          <img src={logo} alt="logo" />
          <ComingSoonMainContentText>
            <h1>Our new site is coming</h1>
            <p>Please check again in the near future.</p>
          </ComingSoonMainContentText>
          <CLock>
            <ClockMini>
              <h1>{String(days).padStart(2, "0")}</h1>
              <h2>DAYS</h2>
            </ClockMini>
            <ClockMini>
              <h1>{String(hours).padStart(2, "0")}</h1>
              <h2>HOURS</h2>
            </ClockMini>
            <ClockMini>
              <h1>{String(minutes).padStart(2, "0")}</h1>
              <h2>MINUTES</h2>
            </ClockMini>
            <ClockMini>
              <h1>{String(seconds).padStart(2, "0")}</h1>
              <h2>SECONDS</h2>
            </ClockMini>
          </CLock>
        </ComingSoonMainContent>
        <PopupContainer className={visible ? "open-popup" : ""}>
          <CloseBtn onClick={closePopup}>
            <i className="material-icons">&#xe5cd;</i>
          </CloseBtn>
          <img src={drugstore} alt="drugstore" />
          <h2>Don’t Miss Out!</h2>
          <h1>30% OFF</h1>
          <p>
            Morbi ipsum proin nunc proin magna elemen purus viverra <br />
            pellen magna elemerra.
          </p>
          <EmailBox>
            <input type="email" placeholder="Enter your email address" />
            <MsgBtn
              isHovered={activeButton === 1}
              onMouseEnter={() => setActiveButton(1)}
              onMouseLeave={() => setActiveButton(null)}
            >
              Activate Discount
            </MsgBtn>
          </EmailBox>
        </PopupContainer>
      </ComingSoonMain>
    </>
  );
};

export default PopupComponent;
