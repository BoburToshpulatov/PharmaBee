import { useState } from "react";
import {
  BackgroundImg,
  BackgroundText,
  Hexogon,
  HomeDirect,
  OrderId,
  OrderIdMiddle,
  OrderIdMiddleBoxes,
  PharmaBeeBottom,
  PharmaBeeBottomMini,
  ReadMore,
  ReadWithHr,
  ServicesDemo,
  ServicesDemoMini,
  ServicesDemoMiniBottom,
  ServicesDemoMiniTop,
  TextDivider,
  TrackBtn,
  TrackMain,
  TrackText,
} from "./trackStyle";
import client from "../../../assets/track-order/client.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import miniPolygon from "../../../assets/home-img/icon-polygon.svg";
import lorry from "../../../assets/home-img/shipped.svg";
import support from "../../../assets/home-img/support.svg";
import approved from "../../../assets/home-img/approved.svg";
import divider from "../../../assets/home-img/divider (1).svg";
import Doctor1 from "../../../assets/services-img/woman-doctor.png";
import Doctor2 from "../../../assets/services-img/man-doctor.png";
import Doctor3 from "../../../assets/services-img/doctor3.png";

const TrackComponent = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  return (
    <>
      <BackgroundImg>
        <img src={client} alt="background-img" />
        <BackgroundText>
          <h1>Track Order</h1>
          <HomeDirect>
            <span>
              <i className="fas fa-home"></i>
            </span>
            <p style={{ marginLeft: "-5px" }}>Home</p>
            <span>
              <i
                style={{ marginTop: "9px", fontSize: "30px" }}
                className="material-icons"
              >
                keyboard_arrow_right
              </i>
            </span>
            <p>Track Order</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <TrackMain>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />
        <TrackText>
          <h2>TRACK ORDER</h2>
          <h1>Track Your Order Now</h1>
          <p>
            Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
            pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
            id volutpat.
          </p>
        </TrackText>
        <OrderId>
          <p>
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
          <OrderIdMiddle>
            <OrderIdMiddleBoxes>
              <h1>Order ID</h1>
              <input
                type="text"
                placeholder="Found in your order confirmation email"
              />
            </OrderIdMiddleBoxes>
            <OrderIdMiddleBoxes>
              <h1>Billing email</h1>
              <input
                type="email"
                placeholder="Email you used during checkout"
              />
            </OrderIdMiddleBoxes>
          </OrderIdMiddle>
          <button>Track</button>
        </OrderId>

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
        <TextDivider>
          <h1>Our Services</h1>
          <img src={divider} alt="divider-img" />
        </TextDivider>

        <ServicesDemo>
          <ServicesDemoMini>
            <ServicesDemoMiniTop>
              <img src={Doctor1} alt="woman-img" />
            </ServicesDemoMiniTop>
            <ServicesDemoMiniBottom>
              <h1>Reviewing Medicines</h1>
              <p>
                Risus turpis blandit tellus orcivel quam sup lobortis nibh
                pretium euleo us blandit nibh pharetra is velit celerisque sit
                id volutpat.
              </p>
              <ReadWithHr
                isHovered={activeButton === 1}
                onMouseEnter={() => setActiveButton(1)}
                onMouseLeave={() => setActiveButton(null)}
              >
                <ReadMore>
                  <p>Readmore</p>
                  <span>
                    <i
                      style={{ marginTop: "9px", fontSize: "33px" }}
                      className="material-icons"
                    >
                      keyboard_arrow_right
                    </i>
                  </span>
                </ReadMore>
                <hr />
              </ReadWithHr>
            </ServicesDemoMiniBottom>
          </ServicesDemoMini>
          <ServicesDemoMini>
            <ServicesDemoMiniTop>
              <img src={Doctor2} alt="woman-img" />
            </ServicesDemoMiniTop>
            <ServicesDemoMiniBottom>
              <h1>Reviewing Medicines</h1>
              <p>
                Risus turpis blandit tellus orcivel quam sup lobortis nibh
                pretium euleo us blandit nibh pharetra is velit celerisque sit
                id volutpat.
              </p>
              <ReadWithHr
                isHovered={activeButton === 2}
                onMouseEnter={() => setActiveButton(2)}
                onMouseLeave={() => setActiveButton(null)}
              >
                <ReadMore>
                  <p>Readmore</p>
                  <span>
                    <i
                      style={{ marginTop: "9px", fontSize: "33px" }}
                      className="material-icons"
                    >
                      keyboard_arrow_right
                    </i>
                  </span>
                </ReadMore>
                <hr />
              </ReadWithHr>
            </ServicesDemoMiniBottom>
          </ServicesDemoMini>
          <ServicesDemoMini>
            <ServicesDemoMiniTop>
              <img src={Doctor3} alt="woman-img" />
            </ServicesDemoMiniTop>
            <ServicesDemoMiniBottom>
              <h1>Reviewing Medicines</h1>
              <p>
                Risus turpis blandit tellus orcivel quam sup lobortis nibh
                pretium euleo us blandit nibh pharetra is velit celerisque sit
                id volutpat.
              </p>
              <ReadWithHr
                isHovered={activeButton === 3}
                onMouseEnter={() => setActiveButton(3)}
                onMouseLeave={() => setActiveButton(null)}
              >
                <ReadMore>
                  <p>Readmore</p>
                  <span>
                    <i
                      style={{ marginTop: "9px", fontSize: "33px" }}
                      className="material-icons"
                    >
                      keyboard_arrow_right
                    </i>
                  </span>
                </ReadMore>
                <hr />
              </ReadWithHr>
            </ServicesDemoMiniBottom>
          </ServicesDemoMini>
        </ServicesDemo>

        <TrackBtn
          isHovered={activeButton === 4}
          onMouseEnter={() => setActiveButton(4)}
          onMouseLeave={() => setActiveButton(null)}
        >
          View All
        </TrackBtn>
      </TrackMain>
    </>
  );
};

export default TrackComponent;
