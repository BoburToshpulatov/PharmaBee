import React from "react";
import { useState, useRef, useEffect } from "react";
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
import emailjs from "@emailjs/browser";
// IMG
import background from "../../../assets/location-img/background.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import woman from "../../../assets/home-img/woman.png";
import divider from "../../../assets/home-img/divider (1).svg";
import clock from "../../../assets/location-img/clock.svg";
import operator from "../../../assets/location-img/operator.svg";
import mail from "../../../assets/location-img/mail.svg";

const LocationComponent = () => {
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

  // Email JS
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ov5mo1m",
        "template_sgdiop5",
        form.current,
        "zPaYteMHCq7iZFFy1"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message was successfully sent!");
        },
        (error: { text: string }) => {
          console.log("FAILED...", error.text);
          alert(
            `Your message failed to send.Please try again. ${
              error.text || "Unknown error."
            }`
          );
        }
      );
  };

  return (
    <>
      <BackgroundImg>
        <img src={background} alt="background-img" />
        <BackgroundText>
          <h1 className="float _anim-items _anim-no-hide">Our Locations</h1>
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
            <h1 className="float _anim-items _anim-no-hide">
              See our locations and find the one closest one to you
            </h1>
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
          <h1 className="float _anim-items _anim-no-hide">Our Locations</h1>
          <img src={divider} alt="divider-icon" />
        </LocationDivider>

        <LocationBox>
          <LocationBoxMini className="float _anim-items _anim-no-hide">
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
          <LocationBoxMini className="float1 _anim-items _anim-no-hide">
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
          <LocationBoxMini className="float2 _anim-items _anim-no-hide">
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
          <LocationBoxMini className="float _anim-items _anim-no-hide">
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
          <LocationBoxMini className="float1 _anim-items _anim-no-hide">
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
          <LocationBoxMini className="float2 _anim-items _anim-no-hide">
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
            <ContactUsLeftEmail ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email address"
                required
              />
              <input type="number" placeholder="Your phone number" required />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <MsgBtn
                type="submit"
                value="Send"
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
            <h1 className="float _anim-items _anim-no-hide">
              Free consultation with us now
            </h1>
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
