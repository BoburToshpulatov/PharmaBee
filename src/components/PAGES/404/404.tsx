import React from "react";
import { useState } from "react";
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
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>
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
          <NotFoundPageMainRight>
            <img src={woman} alt="woman" />
          </NotFoundPageMainRight>
        </NotFoundPageMain>
      </NotFoundPage>
    </>
  );
};

export default NotFound;
