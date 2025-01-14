import React from "react";
import { useState, useRef, useEffect } from "react";
import Rating from "@mui/material/Rating";
import {
  BackgroundImg,
  BackgroundText,
  Categories,
  CounterMedicine,
  CounterMedicineBottom,
  CounterMedicineBottomMini,
  CounterMedicineTop,
  CounterMedicineTopLeft,
  CounterMedicineTopRight,
  HomeDirect,
  MiniBoxBottom,
  MiniBoxTop,
  MotherAndBaby,
  MotherAndBabyTop,
  PriceSale,
} from "./shopStyle";
import shop from "../../../assets/shop-img/image.png";
import microscope from "../../../assets/home-img/microscope.png";
import mask from "../../../assets/home-img/mask.png";
import thermometer from "../../../assets/home-img/thermometer.png";
import pills from "../../../assets/home-img/pills.png";
import liquid from "../../../assets/home-img/liquid.png";
import walking from "../../../assets/home-img/walking.png";

const ShopComponent = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const value = 4;

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
      }, 0);

      // Cleanup listener on unmount
      return () => {
        window.removeEventListener("scroll", animOnScroll);
      };
    }
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <BackgroundImg>
        <img src={shop} alt="background-img" />
        <BackgroundText>
          <h1 className="float _anim-items _anim-no-hide">Shop</h1>
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
            <p>Shop</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <Categories>
        <CounterMedicine>
          <CounterMedicineTop>
            <CounterMedicineTopLeft>
              <h1 className="float _anim-items _anim-no-hide">Healthy</h1>
              <p>
                Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed
                facilisis molestie aliquam.
              </p>
            </CounterMedicineTopLeft>
            <CounterMedicineTopRight className="float _anim-items _anim-no-hide">
              <p>View all</p>
              <span>
                <i className="material-icons">keyboard_arrow_right</i>
              </span>
            </CounterMedicineTopRight>
          </CounterMedicineTop>
          <CounterMedicineBottom className="float _anim-items _anim-no-hide">
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={microscope} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={mask} alt="mask-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={thermometer} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={pills} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={liquid} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
          </CounterMedicineBottom>
          <hr />
        </CounterMedicine>

        <MotherAndBaby>
          <MotherAndBabyTop>
            <CounterMedicineTopLeft>
              <h1 className="float _anim-items _anim-no-hide">Mother & Baby</h1>
              <p>
                Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed
                facilisis molestie aliquam.
              </p>
            </CounterMedicineTopLeft>
            <CounterMedicineTopRight className="float _anim-items _anim-no-hide">
              <p>View all</p>
              <span>
                <i className="material-icons">keyboard_arrow_right</i>
              </span>
            </CounterMedicineTopRight>
          </MotherAndBabyTop>
          <CounterMedicineBottom className="float _anim-items _anim-no-hide">
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={walking} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={liquid} alt="mask-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={pills} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={thermometer} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={mask} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
          </CounterMedicineBottom>
          <hr />
        </MotherAndBaby>

        <MotherAndBaby>
          <MotherAndBabyTop>
            <CounterMedicineTopLeft>
              <h1 className="float _anim-items _anim-no-hide">Personal Care</h1>
              <p>
                Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed
                facilisis molestie aliquam.
              </p>
            </CounterMedicineTopLeft>
            <CounterMedicineTopRight className="float _anim-items _anim-no-hide">
              <p>View all</p>
              <span>
                <i className="material-icons">keyboard_arrow_right</i>
              </span>
            </CounterMedicineTopRight>
          </MotherAndBabyTop>
          <CounterMedicineBottom className="float _anim-items _anim-no-hide">
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={walking} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={mask} alt="mask-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={liquid} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={thermometer} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
            <CounterMedicineBottomMini>
              <MiniBoxTop>
                <img src={microscope} alt="microscope-img" />
              </MiniBoxTop>
              <MiniBoxBottom>
                <h1>Tincidunt accumsan facilisis</h1>
                <Rating size="small" name="read-only" value={value} readOnly />
                <PriceSale>
                  <p className="sale">$86</p> <p>$46</p>
                </PriceSale>
                <button>Add to cart</button>
              </MiniBoxBottom>
            </CounterMedicineBottomMini>
          </CounterMedicineBottom>
        </MotherAndBaby>
      </Categories>
    </>
  );
};

export default ShopComponent;
