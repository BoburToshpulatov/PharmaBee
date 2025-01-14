import React from "react";
import { useState, useEffect, useRef } from "react";
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

  const animItemsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    animItemsRef.current = document.querySelectorAll("._anim-items");

    if (animItemsRef.current?.length) {
      const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: "0px", // Trigger exactly when it enters viewport
        threshold: 0, // Trigger as soon as any part is visible
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const animItem = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            animItem.classList.add("_active");
            console.log("Element visible:", animItem); // Debug
          } else if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      animItemsRef.current.forEach((item) => observer.observe(item));

      return () => {
        animItemsRef.current?.forEach((item) => observer.unobserve(item));
      };
    }
  }, []);
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
            <h1 className="float _anim-items _anim-no-hide">
              Our new site is coming
            </h1>
            <p>Please check again in the near future.</p>
          </ComingSoonMainContentText>
          <CLock className="float _anim-items _anim-no-hide">
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
