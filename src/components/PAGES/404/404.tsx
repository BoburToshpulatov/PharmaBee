import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  NotFoundPage,
  NotFoundPageMain,
  NotFoundPageMainLeft,
  NotFoundPageMainRight,
  ReadMore,
} from "./404Style";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import woman from "../../../assets/404-img/woman.png";

const NotFound = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

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
      <NotFoundPage>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />
        <NotFoundPageMain>
          <NotFoundPageMainLeft>
            <h1 className="float _anim-items _anim-no-hide">404</h1>
            <h2 className="float1 _anim-items _anim-no-hide">Page not found</h2>
            <p className="float1 _anim-items _anim-no-hide">
              The page you are looking for is not available. <br /> The page may
              have been deleted or unpublished.
            </p>
            <ReadMore
              isHovered={activeButton === 1}
              onMouseEnter={() => setActiveButton(1)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>Back to home</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </NotFoundPageMainLeft>
          <NotFoundPageMainRight className="float _anim-items _anim-no-hide">
            <img src={woman} alt="woman" />
          </NotFoundPageMainRight>
        </NotFoundPageMain>
      </NotFoundPage>
    </>
  );
};

export default NotFound;
