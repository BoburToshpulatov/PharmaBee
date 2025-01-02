import React, { SyntheticEvent } from "react";
import { useState } from "react";
import {
  AccordionMain,
  AccordionMainLeft,
  AccordionMainRight,
  BackgroundImg,
  BackgroundText,
  FaqMain,
  FaqMainText,
  HomeDirect,
  Process,
  ProcessMini1,
  ProcessMini2,
  ProcessMini3,
} from "./faqStyle";
import scientist from "../../../assets/faq/background.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import process1 from "../../../assets/faq/process1.png";
import process2 from "../../../assets/faq/process2.png";
import process3 from "../../../assets/faq/process3.png";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqComponent = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) =>
    (event: SyntheticEvent, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <BackgroundImg>
        <img src={scientist} alt="background-img" />
        <BackgroundText>
          <h1>FAQ</h1>
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
          <h1>Have Any Question?</h1>
          <p>
            Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
            pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
            id volutpat.
          </p>
        </FaqMainText>
        <Process>
          <ProcessMini1>
            <img src={process1} alt="process-img" />
            <h1>Get Started</h1>
          </ProcessMini1>
          <ProcessMini2>
            <img src={process2} alt="process2-img" />
            <h1>Product</h1>
          </ProcessMini2>
          <ProcessMini3>
            <img src={process3} alt="process3-img" />
            <h1>Payment</h1>
          </ProcessMini3>
        </Process>

        <AccordionMain>
          <AccordionMainLeft>
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
          <AccordionMainRight></AccordionMainRight>
        </AccordionMain>
      </FaqMain>
    </>
  );
};

export default FaqComponent;
