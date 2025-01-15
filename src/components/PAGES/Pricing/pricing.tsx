import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  BackgroundImg,
  BackgroundText,
  ContactUs,
  ContactUsLeft,
  ContactUsLeftEmail,
  ContactUsRight,
  HomeDirect,
  IncludedServices,
  IncludedServicesMini,
  MsgBtn,
  PricingBox,
  PricingBoxBasic,
  PricingBoxPro,
  PricingBoxProText,
  PricingBtn,
  PricingBtn2,
  PricingMain,
  PricingText,
  ReadMore,
  ReadWithHr,
  ServicesDemo,
  ServicesDemoMini,
  ServicesDemoMiniBottom,
  ServicesDemoMiniTop,
  TextDivider,
  TrackBtn,
} from "./pricingStyle";
import emailjs from "@emailjs/browser";
// IMG
import scientist from "../../../assets/services-img/image.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import minus from "../../../assets/pricing-img/minus.svg";
import divider from "../../../assets/home-img/divider (1).svg";
import Doctor1 from "../../../assets/services-img/woman-doctor.png";
import Doctor2 from "../../../assets/services-img/man-doctor.png";
import Doctor3 from "../../../assets/services-img/doctor3.png";

const PricingComponent = () => {
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
        <img src={scientist} alt="background-img" />
        <BackgroundText>
          <h1 className="float _anim-items _anim-no-hide">Pricing</h1>
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
            <p>Pricing</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <PricingMain>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon"
        />
        <PricingText>
          <h2>PRICING</h2>
          <h1 className="float _anim-items _anim-no-hide">Pricing plan</h1>
          <p>
            Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
            pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
            id volutpat.
          </p>
        </PricingText>

        <PricingBox className="float _anim-items _anim-no-hide">
          <PricingBoxBasic>
            <h2>BASIC</h2>
            <h1>
              <span>$</span>29<span>/ Month</span>
            </h1>
            <IncludedServices>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Sagittis quam sodales</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Adipiscing vitae metus ut</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Risus ac sit non at nam dolor</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <img src={minus} alt="minus-icon" />
                <p>
                  <span>Donec etiam euismod eu</span>
                </p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <img src={minus} alt="minus-icon" />
                <p>
                  <span>Varius accumsan ornare</span>
                </p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <img src={minus} alt="minus-icon" />
                <p>
                  <span>Faucibus viverra facilisi.</span>
                </p>
              </IncludedServicesMini>
            </IncludedServices>
            <PricingBtn
              isHovered={activeButton === 1}
              onMouseEnter={() => setActiveButton(1)}
              onMouseLeave={() => setActiveButton(null)}
            >
              Select Plan
            </PricingBtn>
          </PricingBoxBasic>
          <PricingBoxPro>
            <PricingBoxProText>
              <h1>PRO</h1>
              <button>RECOMMENDED</button>
            </PricingBoxProText>
            <h1>
              <span>$</span>49<span>/ Month</span>
            </h1>
            <IncludedServices>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Sagittis quam sodales</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Adipiscing vitae metus ut</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Risus ac sit non at nam dolor</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Donec etiam euismod eu</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <img src={minus} alt="minus-icon" />
                <p>
                  <span>Varius accumsan ornare</span>
                </p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <img src={minus} alt="minus-icon" />
                <p>
                  <span>Faucibus viverra facilisi.</span>
                </p>
              </IncludedServicesMini>
            </IncludedServices>
            <PricingBtn2
              isHovered={activeButton === 2}
              onMouseEnter={() => setActiveButton(2)}
              onMouseLeave={() => setActiveButton(null)}
            >
              Select Plan
            </PricingBtn2>
          </PricingBoxPro>
          <PricingBoxBasic>
            <h2>ENTERPRISE</h2>
            <h1>
              <span>$</span>139<span>/ Month</span>
            </h1>
            <IncludedServices>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Sagittis quam sodales</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Adipiscing vitae metus ut</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Risus ac sit non at nam dolor</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Donec etiam euismod eu</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Varius accumsan ornare</p>
              </IncludedServicesMini>
              <IncludedServicesMini>
                <i className="fas fa-check"></i>
                <p>Faucibus viverra facilisi.</p>
              </IncludedServicesMini>
            </IncludedServices>
            <PricingBtn
              isHovered={activeButton === 3}
              onMouseEnter={() => setActiveButton(3)}
              onMouseLeave={() => setActiveButton(null)}
            >
              Select Plan
            </PricingBtn>
          </PricingBoxBasic>
        </PricingBox>

        <TextDivider>
          <h1 className="float _anim-items _anim-no-hide">Our Services</h1>
          <img src={divider} alt="divider-img" />
        </TextDivider>

        <ServicesDemo>
          <ServicesDemoMini className="float _anim-items _anim-no-hide">
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
                isHovered={activeButton === 4}
                onMouseEnter={() => setActiveButton(4)}
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
          <ServicesDemoMini className="float1 _anim-items _anim-no-hide">
            <ServicesDemoMiniTop>
              <img src={Doctor2} alt="woman-img" />
            </ServicesDemoMiniTop>
            <ServicesDemoMiniBottom>
              <h1>Health Checks & Screening</h1>
              <p>
                Risus turpis blandit tellus orcivel quam sup lobortis nibh
                pretium euleo us blandit nibh pharetra is velit celerisque sit
                id volutpat.
              </p>
              <ReadWithHr
                isHovered={activeButton === 5}
                onMouseEnter={() => setActiveButton(5)}
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
          <ServicesDemoMini className="float2 _anim-items _anim-no-hide">
            <ServicesDemoMiniTop>
              <img src={Doctor3} alt="woman-img" />
            </ServicesDemoMiniTop>
            <ServicesDemoMiniBottom>
              <h1>Personal Check</h1>
              <p>
                Risus turpis blandit tellus orcivel quam sup lobortis nibh
                pretium euleo us blandit nibh pharetra is velit celerisque sit
                id volutpat.
              </p>
              <ReadWithHr
                isHovered={activeButton === 6}
                onMouseEnter={() => setActiveButton(6)}
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
          isHovered={activeButton === 7}
          onMouseEnter={() => setActiveButton(7)}
          onMouseLeave={() => setActiveButton(null)}
        >
          View All Services
        </TrackBtn>

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
      </PricingMain>
    </>
  );
};

export default PricingComponent;
