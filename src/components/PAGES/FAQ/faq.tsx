import React, { SyntheticEvent } from "react";
import { useState, useRef, useEffect } from "react";
import {
  AccordionMain,
  AccordionMainLeft,
  AccordionMainRight,
  BackgroundImg,
  BackgroundText,
  ContactUs,
  ContactUsLeft,
  ContactUsLeftEmail,
  ContactUsRight,
  FaqMain,
  FaqMainText,
  HomeDirect,
  MsgBtn,
  Process,
  ProcessMini1,
  ProcessMini2,
  ProcessMini3,
} from "./faqStyle";
import emailjs from "@emailjs/browser";
//IMG
import scientist from "../../../assets/faq/background.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import process1 from "../../../assets/faq/process1.png";
import process2 from "../../../assets/faq/process2.png";
import process3 from "../../../assets/faq/process3.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqComponent = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) =>
    (event: SyntheticEvent, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };

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
          <h1 className="float _anim-items _anim-no-hide">FAQ</h1>
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
            <p>FAQ</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <FaqMain>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />
        <FaqMainText>
          <h2>FAQ</h2>
          <h1 className="float _anim-items _anim-no-hide">
            Have Any Question?
          </h1>
          <p>
            Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
            pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
            id volutpat.
          </p>
        </FaqMainText>
        <Process>
          <ProcessMini1 className="float _anim-items _anim-no-hide">
            <img src={process1} alt="process-img" />
            <h1>Get Started</h1>
          </ProcessMini1>
          <ProcessMini2 className="float1 _anim-items _anim-no-hide">
            <img src={process2} alt="process2-img" />
            <h1>Product</h1>
          </ProcessMini2>
          <ProcessMini3 className="float2 _anim-items _anim-no-hide">
            <img src={process3} alt="process3-img" />
            <h1>Payment</h1>
          </ProcessMini3>
        </Process>

        <AccordionMain>
          <AccordionMainLeft className="float _anim-items _anim-no-hide">
            <h2>Getting Started</h2>
            <Accordion
              className="accordion"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="exp-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <h1>How is my price determined?</h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eget
                  arcu sit dignissim in hendrerit sit morbi turpis commodo
                  tincidunt volutpat sodales mauris molestie sagittis blandit at
                  erat et pretium ultricies massa eu in lacus lorem tincidunt
                  ultrices eget sed fermentum diam etiam ac mauris vestibulum
                  augue suspendisse integer massa. Ipsum tortor et.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="accordion"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="exp-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <h1>Augue nam egestas egestas hac</h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eget
                  arcu sit dignissim in hendrerit sit morbi turpis commodo
                  tincidunt volutpat sodales mauris molestie sagittis blandit at
                  erat et pretium ultricies massa eu in lacus lorem tincidunt
                  ultrices eget sed fermentum diam etiam ac mauris vestibulum
                  augue suspendisse integer massa. Ipsum tortor et.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="accordion"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="exp-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <h1>Etiam nibh consequat pellentesque</h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eget
                  arcu sit dignissim in hendrerit sit morbi turpis commodo
                  tincidunt volutpat sodales mauris molestie sagittis blandit at
                  erat et pretium ultricies massa eu in lacus lorem tincidunt
                  ultrices eget sed fermentum diam etiam ac mauris vestibulum
                  augue suspendisse integer massa. Ipsum tortor et.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="accordion"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="exp-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <h1>Laoreet scelerisque sed orci augue</h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eget
                  arcu sit dignissim in hendrerit sit morbi turpis commodo
                  tincidunt volutpat sodales mauris molestie sagittis blandit at
                  erat et pretium ultricies massa eu in lacus lorem tincidunt
                  ultrices eget sed fermentum diam etiam ac mauris vestibulum
                  augue suspendisse integer massa. Ipsum tortor et.
                </p>
              </AccordionDetails>
            </Accordion>
          </AccordionMainLeft>
          <AccordionMainRight className="float1 _anim-items _anim-no-hide"></AccordionMainRight>
        </AccordionMain>

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
      </FaqMain>
    </>
  );
};

export default FaqComponent;
