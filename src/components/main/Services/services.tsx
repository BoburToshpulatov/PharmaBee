import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  BackgroundImg,
  BackgroundText,
  ContactUs,
  ContactUsLeft,
  ContactUsLeftEmail,
  ContactUsRight,
  FindLocation,
  Hexogon,
  HomeDirect,
  MsgBtn,
  OurServices,
  PharmaBeeBottom,
  PharmaBeeBottomMini,
  ReadMore,
  ReadWithHr,
  ServicesDemo,
  ServicesDemo2,
  ServicesDemoMini,
  ServicesDemoMiniBottom,
  ServicesDemoMiniTop,
  ServicesText,
  Testimonials,
  TestimonialsPeople,
  TestimonialsPeopleLeft,
  TestimonialsPeopleRight,
} from "./servicesStyle";
import emailjs from "@emailjs/browser";
import scientists from "../../../assets/services-img/image.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import Doctor1 from "../../../assets/services-img/woman-doctor.png";
import Doctor2 from "../../../assets/services-img/man-doctor.png";
import Doctor3 from "../../../assets/services-img/doctor3.png";
import Doctor4 from "../../../assets/services-img/doctor4.png";
import Doctor5 from "../../../assets/services-img/doctor5.png";
import Doctor6 from "../../../assets/services-img/doctor6.png";
import miniPolygon from "../../../assets/home-img/icon-polygon.svg";
import lorry from "../../../assets/home-img/shipped.svg";
import support from "../../../assets/home-img/support.svg";
import approved from "../../../assets/home-img/approved.svg";
import jody from "../../../assets/home-img/jody.png";
import gene from "../../../assets/home-img/gene.png";
import divider from "../../../assets/home-img/divider (1).svg";

const ServicesComponent = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  // Floating effect
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

  //Email Js
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
        <img src={scientists} alt="background-img" />
        <BackgroundText>
          <h1 className="float _anim-items _anim-no-hide">Services</h1>
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
            <p>Services</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <OurServices>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />
        <ServicesText>
          <h2>SERVICES</h2>
          <h1 className="float _anim-items _anim-no-hide">Our Services</h1>
          <p>
            Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
            pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
            id volutpat.
          </p>
        </ServicesText>
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
          <ServicesDemoMini className="float1 _anim-items _anim-no-hide">
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
          <ServicesDemoMini className="float2 _anim-items _anim-no-hide">
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

        <ServicesDemo2>
          <ServicesDemoMini className="float _anim-items _anim-no-hide">
            <ServicesDemoMiniTop>
              <img src={Doctor4} alt="woman-img" />
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
              <img src={Doctor5} alt="woman-img" />
            </ServicesDemoMiniTop>
            <ServicesDemoMiniBottom>
              <h1>Reviewing Medicines</h1>
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
              <img src={Doctor6} alt="woman-img" />
            </ServicesDemoMiniTop>
            <ServicesDemoMiniBottom>
              <h1>Reviewing Medicines</h1>
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
        </ServicesDemo2>

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

        <FindLocation>
          <input type="text" placeholder="Find nearest Pharmabee" />
          <button>Find Now</button>
        </FindLocation>

        <ContactUs>
          <ContactUsLeft>
            <ContactUsLeftEmail ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email address"
                required
              />
              <input type="number" placeholder="Phone Number" required />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
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

        <Testimonials>
          <h1 className="float _anim-items _anim-no-hide">Testimonials</h1>
          <img src={divider} alt="divider-icon" />
        </Testimonials>

        <TestimonialsPeople>
          <TestimonialsPeopleLeft className="float _anim-items _anim-no-hide">
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
          <TestimonialsPeopleRight className="float1 _anim-items _anim-no-hide">
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
      </OurServices>
    </>
  );
};

export default ServicesComponent;
