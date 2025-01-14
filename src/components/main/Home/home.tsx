import React from "react";
import { useState, useRef, useEffect } from "react";
import Rating from "@mui/material/Rating";
import {
  BrandLogosLeft,
  BrandLogosRight,
  BrandLogosRightMini,
  Brands,
  BrandsLogos,
  Categories,
  CounterMedicine,
  CounterMedicineBottom,
  CounterMedicineBottomMini,
  CounterMedicineTop,
  CounterMedicineTopLeft,
  CounterMedicineTopRight,
  Covid,
  CovidBtn,
  CovidMini1,
  CovidMini2,
  CovidMini2Inf,
  CovidMini3,
  CovidMini3Instructions,
  FloatingButton,
  Hexogon,
  MiddleWrapper,
  Mini3Instructions,
  MiniBoxBottom,
  MiniBoxTop,
  MotherAndBaby,
  MotherAndBabyTop,
  PharmaBeeBottom,
  PharmaBeeBottomMini,
  PharmaBeeTop,
  PharmaBeeTopLeft,
  PharmaBeeTopRight,
  PharmaBeeWrapper,
  PriceSale,
  ProductsLocation,
  PromotionInf,
  PromotionInfMini,
  PromotionInfMiniBottom,
  ReadMore,
  Testimonials,
  TestimonialsPeople,
  TestimonialsPeopleLeft,
  TestimonialsPeopleRight,
  WhiteBtn,
} from "./homeStyle";
import polygon from "../../../assets/home-img/bg-polygon (1).svg";
import woman from "../../../assets/home-img/woman.png";
import miniPolygon from "../../../assets/home-img/icon-polygon.svg";
import lorry from "../../../assets/home-img/shipped.svg";
import support from "../../../assets/home-img/support.svg";
import approved from "../../../assets/home-img/approved.svg";
import microscope from "../../../assets/home-img/microscope.png";
import mask from "../../../assets/home-img/mask.png";
import thermometer from "../../../assets/home-img/thermometer.png";
import pills from "../../../assets/home-img/pills.png";
import liquid from "../../../assets/home-img/liquid.png";
import walking from "../../../assets/home-img/walking.png";
import polygon2 from "../../../assets/home-img/bg-polygon (2).svg";
import medicine from "../../../assets/home-img/medicine.png";
import masks from "../../../assets/home-img/masks.png";
import vitamins from "../../../assets/home-img/vitamins.png";
import testsw from "../../../assets/home-img/test.png";
import divider from "../../../assets/home-img/divider (1).svg";
import logo1 from "../../../assets/home-img/logo1.svg";
import logo2 from "../../../assets/home-img/logo2.svg";
import logo3 from "../../../assets/home-img/logo3.svg";
import logo4 from "../../../assets/home-img/logo4.svg";
import logo5 from "../../../assets/home-img/logo5.svg";
import logo6 from "../../../assets/home-img/logo6.svg";
import logo7 from "../../../assets/home-img/logo7.svg";
import logo8 from "../../../assets/home-img/logo8.svg";
import logo9 from "../../../assets/home-img/logo9.svg";
import jody from "../../../assets/home-img/jody.png";
import gene from "../../../assets/home-img/gene.png";
import hindi from "../../../assets/home-img/hindiwoman.png";
import pills2 from "../../../assets/home-img/pills2.png";
import cream from "../../../assets/home-img/cream.png";

const HomeComponent = () => {
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
      <PharmaBeeWrapper>
        <img className="polygon" src={polygon} alt="polygon-icon" />
        <PharmaBeeTop>
          <PharmaBeeTopLeft>
            <h2>BEST PHARMACY</h2>
            <h1 className="float _anim-items _anim-no-hide">
              PharmaBee help you find solutions for your health
            </h1>
            <p>
              A lectus ac pulvinar tincidunt accumsan ullamcorper dolor acsed
              facilisis hac molestie aliquam blandit.
            </p>
            <ProductsLocation>
              <FloatingButton
                isHovered={activeButton === 1}
                onMouseEnter={() => setActiveButton(1)}
                onMouseLeave={() => setActiveButton(null)}
              >
                <span>See All Products</span>
                <i className="material-icons">keyboard_arrow_right</i>
              </FloatingButton>
              <WhiteBtn
                isHovered={activeButton === 2}
                onMouseEnter={() => setActiveButton(2)}
                onMouseLeave={() => setActiveButton(null)}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span> Our Locations</span>
              </WhiteBtn>
            </ProductsLocation>
          </PharmaBeeTopLeft>
          <PharmaBeeTopRight className="float _anim-items _anim-no-hide">
            <img src={woman} alt="woman-img" />
          </PharmaBeeTopRight>
        </PharmaBeeTop>
        <PharmaBeeBottom>
          <PharmaBeeBottomMini className="float _anim-items _anim-no-hide">
            <Hexogon>
              <img
                style={{ position: "absolute" }}
                src={miniPolygon}
                alt="polygon"
              />
              <img
                style={{ position: "relative", zIndex: "1" }}
                src={lorry}
                alt="lorry-icon"
              />
            </Hexogon>
            <h1>Same-Day Delivery</h1>
            <p>
              Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed
              facilisis molestie aliquam.
            </p>
          </PharmaBeeBottomMini>
          <PharmaBeeBottomMini className="float1 _anim-items _anim-no-hide">
            <Hexogon>
              <img
                style={{ position: "absolute" }}
                src={miniPolygon}
                alt="polygon"
              />
              <img
                style={{ position: "relative", zIndex: "1" }}
                src={support}
                alt="lorry-icon"
              />
            </Hexogon>
            <h1>Same-Day Delivery</h1>
            <p>
              Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed
              facilisis molestie aliquam.
            </p>
          </PharmaBeeBottomMini>
          <PharmaBeeBottomMini className="float2 _anim-items _anim-no-hide">
            <Hexogon>
              <img
                style={{ position: "absolute" }}
                src={miniPolygon}
                alt="polygon"
              />
              <img
                style={{ position: "relative", zIndex: "1" }}
                src={approved}
                alt="lorry-icon"
              />
            </Hexogon>
            <h1>Same-Day Delivery</h1>
            <p>
              Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed
              facilisis molestie aliquam.
            </p>
          </PharmaBeeBottomMini>
        </PharmaBeeBottom>
      </PharmaBeeWrapper>

      <Categories>
        <CounterMedicine>
          <CounterMedicineTop>
            <CounterMedicineTopLeft>
              <h1 className="float _anim-items _anim-no-hide">
                Over the Counter Medicine
              </h1>
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

      <Covid>
        <img src={polygon2} alt="polygon2" />
        <CovidMini1></CovidMini1>
        <CovidMini2>
          <CovidMini2Inf>
            <h2>INFORMATION</h2>
            <h1 className="float _anim-items _anim-no-hide">COVID-19</h1>
            <p>
              Eget lacinia libero, metus maecenas commodo vel auctor. Augue enim
              libero in gravida. Diam quisque convallis quis tellus feugiat.{" "}
              <br />
              <br />
              Morbi scelerisque volutpat sed viverra nulla Interdum mia bibendum
              velit sapien scelerisque. Dictum quam tincidunt nec feugiat augue
              vel tincidunt. Etiam pretium nec diam rhoncus. gravida in turpis
              cursus. Nunc, sed fringilla tortor, iaculis eget eget felis
              dictum.
            </p>
            <ReadMore
              isHovered={activeButton === 6}
              onMouseEnter={() => setActiveButton(6)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p> Read More</p>
              <span>
                <i className="material-icons">keyboard_arrow_right</i>
              </span>
              <hr />
            </ReadMore>
          </CovidMini2Inf>
        </CovidMini2>
        <CovidMini3>
          <CovidMini3Instructions className="float _anim-items _anim-no-hide">
            <Mini3Instructions>
              <img src={medicine} alt="medicine-img" />
              <h1>COVID-19 Vaccinations</h1>
            </Mini3Instructions>
            <CovidBtn
              isHovered={activeButton === 7}
              onMouseEnter={() => setActiveButton(7)}
              onMouseLeave={() => setActiveButton(null)}
            >
              View Detail
            </CovidBtn>
          </CovidMini3Instructions>
          <CovidMini3Instructions className="float1 _anim-items _anim-no-hide">
            <Mini3Instructions>
              <img src={masks} alt="medicine-img" />
              <h1>COVID-19 Vaccinations</h1>
            </Mini3Instructions>
            <CovidBtn
              isHovered={activeButton === 8}
              onMouseEnter={() => setActiveButton(8)}
              onMouseLeave={() => setActiveButton(null)}
            >
              View Detail
            </CovidBtn>
          </CovidMini3Instructions>
          <CovidMini3Instructions className="float2 _anim-items _anim-no-hide">
            <Mini3Instructions>
              <img src={vitamins} alt="medicine-img" />
              <h1>COVID-19 Vaccinations</h1>
            </Mini3Instructions>
            <CovidBtn
              isHovered={activeButton === 9}
              onMouseEnter={() => setActiveButton(9)}
              onMouseLeave={() => setActiveButton(null)}
            >
              View Detail
            </CovidBtn>
          </CovidMini3Instructions>
          <CovidMini3Instructions className="float3 _anim-items _anim-no-hide">
            <Mini3Instructions>
              <img src={testsw} alt="medicine-img" />
              <h1>COVID-19 Vaccinations</h1>
            </Mini3Instructions>
            <CovidBtn
              isHovered={activeButton === 10}
              onMouseEnter={() => setActiveButton(10)}
              onMouseLeave={() => setActiveButton(null)}
            >
              View Detail
            </CovidBtn>
          </CovidMini3Instructions>
        </CovidMini3>
      </Covid>

      <MiddleWrapper>
        <Brands>
          <h1 className="float _anim-items _anim-no-hide">Featured Brands</h1>
          <img src={divider} alt="divider" />
          <BrandsLogos>
            <BrandLogosLeft>
              <h1 className="float _anim-items _anim-no-hide">
                Eget lacinia libero metus maecenas commodo
              </h1>
              <p>
                Augue enim libero in gravida. Diam quisque convallis quis tellus
                feugiat. Morbi scelerisque volutpat <br />
                <br />
                Sed viverra nulla Interdum mia bibendum velit sapien scelerisque
                ictum quam tincidunt nec feugiat augue vel tincidunt. Etiam
                pretium diam rhoncus. gida in turpis cursus. Nunc, sed fringilla
                tortor iaculis eget
              </p>
            </BrandLogosLeft>
            <BrandLogosRight>
              <BrandLogosRightMini>
                <img src={logo1} alt="logo-icon" />
                <img src={logo2} alt="logo-icon" />
                <img src={logo3} alt="logo-icon" />
              </BrandLogosRightMini>
              <BrandLogosRightMini>
                <img src={logo4} alt="logo-icon" />
                <img src={logo5} alt="logo-icon" />
                <img src={logo6} alt="logo-icon" />
              </BrandLogosRightMini>
              <BrandLogosRightMini>
                <img src={logo7} alt="logo-icon" />
                <img src={logo8} alt="logo-icon" />
                <img src={logo9} alt="logo-icon" />
              </BrandLogosRightMini>
            </BrandLogosRight>
          </BrandsLogos>
        </Brands>

        <Testimonials>
          <h1 className="float _anim-items _anim-no-hide">Testimonials</h1>
          <img src={divider} alt="divider-icon" />
        </Testimonials>

        <TestimonialsPeople>
          <TestimonialsPeopleLeft className="float1 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Jody Andrews</h1>
            <p className="job">Project Manager</p>
            <img src={jody} alt="woman-img" />
          </TestimonialsPeopleLeft>
          <TestimonialsPeopleRight className="float2 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Gene Green</h1>
            <p className="job">Business Analysist</p>
            <img src={gene} alt="woman-img" />
          </TestimonialsPeopleRight>
        </TestimonialsPeople>

        <Testimonials>
          <h1 className="float _anim-items _anim-no-hide">News & Promotion</h1>
          <img src={divider} alt="divider-icon" />
        </Testimonials>

        <PromotionInf>
          <PromotionInfMini className="float _anim-items _anim-no-hide">
            <img src={hindi} alt="woman-img" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini className="float _anim-items _anim-no-hide">
            <img src={pills2} alt="pills" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
          <PromotionInfMini className="float _anim-items _anim-no-hide">
            <img src={cream} alt="cream" />
            <PromotionInfMiniBottom>
              <h1>
                Scelerisque tincidunt felis Eget qum met arcu posuere vitae
                tempor.
              </h1>
              <p>June 2, 2021 - No Comments</p>
            </PromotionInfMiniBottom>
          </PromotionInfMini>
        </PromotionInf>
      </MiddleWrapper>
    </>
  );
};

export default HomeComponent;
