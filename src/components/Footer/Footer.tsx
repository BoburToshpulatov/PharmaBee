import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  AddressBox,
  AddressBoxInf,
  AddressBoxInfMini,
  EmailSubscription,
  FloatingButton,
  FooterBottom,
  FooterMain,
  FooterTop,
  LogoBox,
  MainWrapper,
  MediaIcons,
  MenuColumn,
  MenuColumnText,
  PolicyIcons,
  PolicyIconsMini,
} from "./styled";
import divider from "../../assets/footer/divider.svg";
import polygon from "../../assets/footer/bg-polygon.svg";
import logo from "../../assets/footer/pharmabee-logo (1).svg";
import box from "../../assets/footer/box.svg";
import clock from "../../assets/footer/clock.svg";
import operator from "../../assets/footer/operator.svg";
import mail from "../../assets/footer/mail.svg";
import facebook from "../../assets/footer/facebook.svg";
import twitter from "../../assets/footer/twitter.svg";
import instagram from "../../assets/footer/instagram.svg";
import youtube from "../../assets/footer/youtube.svg";

const Footer = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const animItemsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    animItemsRef.current = document.querySelectorAll("._anim-items");

    if (animItemsRef.current?.length) {
      const animOnScroll = () => {
        animItemsRef.current?.forEach((item) => {
          const animItem = item as HTMLElement; // Type assertion
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if (
            window.pageYOffset > animItemOffset - animItemPoint &&
            window.pageYOffset < animItemOffset + animItemHeight
          ) {
            animItem.classList.add("_active");
          } else {
            if (!animItem.classList.contains("_anim-no-hide")) {
              animItem.classList.remove("_active");
            }
          }
        });
      };

      const offset = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };

      // Add scroll event listener
      window.addEventListener("scroll", animOnScroll);

      // Initial check

      setTimeout(() => {
        animOnScroll();
      }, 300);

      // Cleanup listener on unmount
      return () => {
        window.removeEventListener("scroll", animOnScroll);
      };
    }
  }, []); // Empty dependency array ensures it runs only once

  return (
    <FooterMain>
      <FooterTop className="footer_top _anim-items _anim-no-hide">
        <h1>Join Our Newsletter</h1>
        <img src={divider} alt="divider-icon" />
        <p>
          Augue enim libero in gravida. Diam quisque convallis quis tellus
          feugiat. Morbi scelerisque volutpat sed viverra Interdum.
        </p>
        <EmailSubscription className="email _anim-items _anim-no-hide">
          <input type="email" placeholder="Please enter your email address" />
          <FloatingButton
            isHovered={activeButton === 1}
            onMouseEnter={() => setActiveButton(1)}
            onMouseLeave={() => setActiveButton(null)}
          >
            Subscribe Now
          </FloatingButton>
        </EmailSubscription>
      </FooterTop>
      <FooterBottom>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="Pharmacy-icon"
        />
        <MainWrapper>
          <LogoBox>
            <img src={logo} alt="logo-icon" />
            <p>
              A lectus ac pulvinar tincidunt accumsan ulla corper dolor at
              lectus ac sed facilis isaclect Molestieuam ublandit nibh
              vulputatctus in sit egestas in dolor purus tincidunt.{" "}
            </p>
          </LogoBox>
          <AddressBox>
            <h1>Our Main Office</h1>
            <AddressBoxInf>
              <AddressBoxInfMini>
                <img src={box} alt="box-icon" />
                <p>4200 Hamill Avenue, San Diego, California 92109</p>
              </AddressBoxInfMini>
              <AddressBoxInfMini>
                <img src={clock} alt="clock-icon" />
                <p>Monday 07.00 am - 12.00 pm Sunday</p>
              </AddressBoxInfMini>
              <AddressBoxInfMini>
                <img src={operator} alt="operator-icon" />
                <p>021 0002 345</p>
              </AddressBoxInfMini>
              <AddressBoxInfMini>
                <img src={mail} alt="mail-icon" />
                <p>customer@pharmabee.com</p>
              </AddressBoxInfMini>
            </AddressBoxInf>
          </AddressBox>
          <MenuColumn>
            <h1>Menu</h1>
            <MenuColumnText>
              <p>Home</p>
              <p>Shop</p>
              <p>Services</p>
              <p>Blog</p>
              <p>About us</p>
              <p>Contact us</p>
            </MenuColumnText>
          </MenuColumn>
          <MenuColumn>
            <h1>Category</h1>
            <MenuColumnText>
              <p>Healthy</p>
              <p>Makeup</p>
              <p>Personal care</p>
              <p>Mother & Baby</p>
              <p>Skin & Bodycare</p>
              <p>Vitamins & Weight</p>
            </MenuColumnText>
          </MenuColumn>
        </MainWrapper>
        <PolicyIcons>
          <PolicyIconsMini>
            <h1>© Copyright 2021 PharmaBee</h1>
            <MediaIcons>
              <button>
                <img src={facebook} alt="media-icon" />
              </button>
              <button>
                <img src={twitter} alt="media-icon" />
              </button>
              <button>
                <img src={instagram} alt="media-icon" />
              </button>
              <button>
                <img src={youtube} alt="media-icon" />
              </button>
            </MediaIcons>
          </PolicyIconsMini>
        </PolicyIcons>
      </FooterBottom>
    </FooterMain>
  );
};

export default Footer;
