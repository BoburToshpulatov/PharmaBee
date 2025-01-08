import React from "react";
import { useState, useEffect } from "react";
import {
  CLock,
  ClockMini,
  ComingSoonMain,
  ComingSoonMainContent,
  ComingSoonMainContentText,
} from "./comingsoonStyle";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import logo from "../../../assets/coming-img/pharmabee-logo (2).svg";

const ComingsoonComponent = () => {
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
  return (
    <>
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
      </ComingSoonMain>
    </>
  );
};

export default ComingsoonComponent;
