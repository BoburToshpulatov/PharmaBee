import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  BackgroundImg,
  BackgroundText,
  ContactMain,
  ContactUs,
  ContactUsLeft,
  ContactUsLeftEmail,
  ContactUsRight,
  HomeDirect,
  MapContainer,
  MapContainerLeft,
  MapContainerLeftBottom,
  MapContainerLeftBottomMini,
  MapContainerRight,
  MsgBtn,
} from "./contactStyle";
import scientists from "../../../assets/contactUs-img/background.png";
import polygon from "../../../assets/blog-img/bg-polygon (4).svg";
import window from "../../../assets/contactUs-img/window.svg";
import clock from "../../../assets/contactUs-img/clock.svg";
import operator from "../../../assets/contactUs-img/operator.svg";
import mail from "../../../assets/contactUs-img/mail.svg";

const ContactComponent = () => {
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
      <BackgroundImg>
        <img src={scientists} alt="background-img" />
        <BackgroundText>
          <h1 className="float _anim-items _anim-no-hide">Contact Us</h1>
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
            <p>Contact Us</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <ContactMain>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon"
        />
        <MapContainer>
          <MapContainerLeft>
            <h2>CONTACT US</h2>
            <h1 className="float _anim-items _anim-no-hide">
              Let's Get Started
            </h1>
            <p>
              Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
              pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
              id volutpat pulvinar Nunc feugiat odio.
            </p>
            <MapContainerLeftBottom>
              <MapContainerLeftBottomMini>
                <img
                  style={{ width: "21px", height: "21px", marginLeft: "-1px" }}
                  src={window}
                  alt="window-icon"
                />
                <p>4200 Hamill Avenue, San Diego, California 92109</p>
              </MapContainerLeftBottomMini>
              <MapContainerLeftBottomMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </MapContainerLeftBottomMini>
              <MapContainerLeftBottomMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </MapContainerLeftBottomMini>
              <MapContainerLeftBottomMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </MapContainerLeftBottomMini>
            </MapContainerLeftBottom>
          </MapContainerLeft>
          <MapContainerRight className="float _anim-items _anim-no-hide">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317750.5275089563!2d-0.161821!3d51.523746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2z0JvQvtC90LTQvtC90YHQutC40Lkg0JPQu9Cw0Lc!5e0!3m2!1sru!2sus!4v1734441199875!5m2!1sru!2sus"
              width="578"
              height="400"
              style={{ border: "none", borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainerRight>
        </MapContainer>

        <ContactUs>
          <ContactUsLeft>
            <ContactUsLeftEmail>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
              <input type="number" placeholder="Phone Number" />
              <textarea placeholder="Message"></textarea>
              <MsgBtn
                isHovered={activeButton === 7}
                onMouseEnter={() => setActiveButton(7)}
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
      </ContactMain>
    </>
  );
};

export default ContactComponent;
