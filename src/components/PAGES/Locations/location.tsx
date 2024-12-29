import React from "react";
import { useState } from "react";
import {
  BackgroundImg,
  BackgroundText,
  ContactUs,
  ContactUsLeft,
  ContactUsLeftEmail,
  ContactUsRight,
  FloatingButton,
  HomeDirect,
  LocationBox,
  LocationBoxMini,
  LocationDetails,
  LocationDetailsMini,
  LocationDivider,
  LocationImgText,
  LocationImgTextLeft,
  LocationImgTextRight,
  LocationMain,
  MsgBtn,
  ReadMore,
} from "./locationStyle";
import background from "../../../assets/location-img/background.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import woman from "../../../assets/home-img/woman.png";
import divider from "../../../assets/home-img/divider (1).svg";
import clock from "../../../assets/location-img/clock.svg";
import operator from "../../../assets/location-img/operator.svg";
import mail from "../../../assets/location-img/mail.svg";

const LocationComponent = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  return (
    <>
      <BackgroundImg>
        <img src={background} alt="background-img" />
        <BackgroundText>
          <h1>Our Locations</h1>
          <HomeDirect>
            <span>
              <i className="fas fa-home"></i>
            </span>
            <p style={{ marginLeft: "-5px" }}>Home</p>
            <span>
              <i
                style={{ marginTop: "9px", fontSize: "26px" }}
                className="material-icons"
              >
                keyboard_arrow_right
              </i>
            </span>
            <p>Our Locations</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <LocationMain>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />

        <LocationImgText>
          <LocationImgTextLeft>
            <h2>LOCATION</h2>
            <h1>See our locations and find the one closest one to you</h1>
            <p>
              A lectus ac pulvinar tincidunt accumsan ullamcorper dolor acsed
              facilisis hac molestie aliquam blandit accumsan ullamcorper.
            </p>
            <FloatingButton
              isHovered={activeButton === 1}
              onMouseEnter={() => setActiveButton(1)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <i className="fas fa-map-marker-alt"></i>
              <span>View Our Locations</span>
            </FloatingButton>
          </LocationImgTextLeft>
          <LocationImgTextRight>
            <img src={woman} alt="woman-img" />
          </LocationImgTextRight>
        </LocationImgText>

        <LocationDivider>
          <h1>Our Locations</h1>
          <img src={divider} alt="divider-icon" />
        </LocationDivider>

        <LocationBox>
          <LocationBoxMini>
            <h1>4200 Hamill Avenue, San Diego, California 92109</h1>
            <LocationDetails>
              <LocationDetailsMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </LocationDetailsMini>
            </LocationDetails>
            <ReadMore
              isHovered={activeButton === 2}
              onMouseEnter={() => setActiveButton(2)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>View location</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </LocationBoxMini>
          <LocationBoxMini>
            <h1>4200 Hamill Avenue, San Diego, California 92109</h1>
            <LocationDetails>
              <LocationDetailsMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </LocationDetailsMini>
            </LocationDetails>
            <ReadMore
              isHovered={activeButton === 3}
              onMouseEnter={() => setActiveButton(3)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>View location</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </LocationBoxMini>
          <LocationBoxMini>
            <h1>4200 Hamill Avenue, San Diego, California 92109</h1>
            <LocationDetails>
              <LocationDetailsMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </LocationDetailsMini>
            </LocationDetails>
            <ReadMore
              isHovered={activeButton === 4}
              onMouseEnter={() => setActiveButton(4)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>View location</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </LocationBoxMini>
        </LocationBox>

        <LocationBox>
          <LocationBoxMini>
            <h1>4200 Hamill Avenue, San Diego, California 92109</h1>
            <LocationDetails>
              <LocationDetailsMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </LocationDetailsMini>
            </LocationDetails>
            <ReadMore
              isHovered={activeButton === 5}
              onMouseEnter={() => setActiveButton(5)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>View location</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </LocationBoxMini>
          <LocationBoxMini>
            <h1>4200 Hamill Avenue, San Diego, California 92109</h1>
            <LocationDetails>
              <LocationDetailsMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </LocationDetailsMini>
            </LocationDetails>
            <ReadMore
              isHovered={activeButton === 6}
              onMouseEnter={() => setActiveButton(6)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>View location</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </LocationBoxMini>
          <LocationBoxMini>
            <h1>4200 Hamill Avenue, San Diego, California 92109</h1>
            <LocationDetails>
              <LocationDetailsMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </LocationDetailsMini>
              <LocationDetailsMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </LocationDetailsMini>
            </LocationDetails>
            <ReadMore
              isHovered={activeButton === 7}
              onMouseEnter={() => setActiveButton(7)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>View location</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </LocationBoxMini>
        </LocationBox>

        <ContactUs>
          <ContactUsLeft>
            <ContactUsLeftEmail>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
              <input type="number" placeholder="Phone Number" />
              <textarea placeholder="Message"></textarea>
              <MsgBtn
                isHovered={activeButton === 8}
                onMouseEnter={() => setActiveButton(8)}
                onMouseLeave={() => setActiveButton(null)}
              >
                Send Message
              </MsgBtn>
            </ContactUsLeftEmail>
          </ContactUsLeft>
          <ContactUsRight>
            <h2>CONTACT US</h2>
            <h1>Free consultation with us now</h1>
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien usop
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget tincidunt accumsan ullamcorper.
            </p>
          </ContactUsRight>
        </ContactUs>
      </LocationMain>
    </>
  );
};

export default LocationComponent;
