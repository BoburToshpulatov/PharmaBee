import React from "react";
import { useState } from "react";
import {
  AboutMain,
  BackgroundImg,
  BackgroundText,
  Hexogon,
  HomeDirect,
  MainImg,
  MainImgLeft,
  MainImgRight,
  PharmaBeeBottom,
  PharmaBeeBottomMini,
  ReadMore,
  ReadMore2,
  TeamContainer,
  TeamCovid,
  TeamCovidLeft,
  TeamCovidRight,
  TeamMembers,
  TeamMembersMini,
  TeamMembersMiniBottom,
  TeamMembersMiniTop,
  TeamText,
  TestimonialsPeople,
  TestimonialsPeopleLeft,
  TestimonialsPeopleRight,
  TextDivider,
} from "./aboutStyle";
import scientist from "../../../assets/about-img/scientist.png";
import woman from "../../../assets/about-img/woman-img.png";
import divider from "../../../assets/home-img/divider (1).svg";
import miniPolygon from "../../../assets/home-img/icon-polygon.svg";
import lorry from "../../../assets/home-img/shipped.svg";
import support from "../../../assets/home-img/support.svg";
import approved from "../../../assets/home-img/approved.svg";
import polygon from "../../../assets/about-img/bg-polygon (5).svg";
import team1 from "../../../assets/about-img/teamMember1.png";
import team2 from "../../../assets/about-img/teamMember2.png";
import team3 from "../../../assets/about-img/teamMember3.png";
import jody from "../../../assets/home-img/jody.png";
import gene from "../../../assets/home-img/gene.png";

const AboutUs = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  return (
    <>
      <BackgroundImg>
        <img src={scientist} alt="background-img" />
        <BackgroundText>
          <h1>About Us</h1>
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
            <p>About Us</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <AboutMain>
        <MainImg>
          <MainImgLeft>
            <h2>ABOUT US</h2>
            <h1>Arcu eu elit est elementum quam sem nibh adipiscing duied.</h1>
            <p>
              Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
              pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
              id volutpat pulvinar Nunc nulla eu eu lectus orci, feugiat odio
              pellentesque. <br />
              <br />
              Aliquam varius elit sit nisi euismod. Consectetur pharetra quisque
              quam nibh hac et mauris in. Morbi diam pellentesque morbi at
              fringilla erat. Morbi scelerisque sit pellentesque nunc aliquam
              sit. Mattis eu.
            </p>

            <ReadMore
              isHovered={activeButton === 1}
              onMouseEnter={() => setActiveButton(1)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>View our services</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore>
          </MainImgLeft>
          <MainImgRight>
            <img src={woman} alt="woman-img" />
          </MainImgRight>
        </MainImg>

        <TextDivider>
          <h1>Why Shop From Pharmabee</h1>
          <img src={divider} alt="divider-icon" />
        </TextDivider>

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

        <TeamContainer>
          <img
            style={{ position: "absolute", alignSelf: "flex-start" }}
            src={polygon}
            alt="polygon-img"
          />
          <TeamText>
            <h2>TEAM</h2>
            <h1>Our Professional Team</h1>
            <p>
              Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
              pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
              id volutpat.
            </p>
          </TeamText>

          <TeamMembers>
            <TeamMembersMini>
              <TeamMembersMiniTop>
                <img src={team1} alt="team-img" />
              </TeamMembersMiniTop>
              <TeamMembersMiniBottom>
                <h1>Jessie Davis</h1>
                <p>Founder PharmaBee</p>
              </TeamMembersMiniBottom>
            </TeamMembersMini>
            <TeamMembersMini>
              <TeamMembersMiniTop>
                <img src={team2} alt="team-img" />
              </TeamMembersMiniTop>
              <TeamMembersMiniBottom>
                <h1>Jamie Taylor</h1>
                <p>CEO & Founder</p>
              </TeamMembersMiniBottom>
            </TeamMembersMini>
            <TeamMembersMini>
              <TeamMembersMiniTop>
                <img src={team3} alt="team-img" />
              </TeamMembersMiniTop>
              <TeamMembersMiniBottom>
                <h1>Chris Mason</h1>
                <p>General Manager</p>
              </TeamMembersMiniBottom>
            </TeamMembersMini>
          </TeamMembers>
        </TeamContainer>
        <TeamCovid>
          <TeamCovidLeft></TeamCovidLeft>
          <TeamCovidRight>
            <h2>INFORMATION</h2>
            <h1>COVID-19</h1>
            <p>
              Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
              pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
              id volutpat pulvinar Nunc nulla eu eu lectus orci, feugiat odio
              pellentesque. <br />
              <br /> Aliquam varius elit sit nisi euismod. Consectetur pharetra
              quisque quam nibh hac et mauris in. Morbi diam pellentesque morbi
              at fringilla erat. Morbi scelerisque sit pellentesque nunc aliquam
              sit. Mattis eu.
            </p>
            <ReadMore2
              isHovered={activeButton === 2}
              onMouseEnter={() => setActiveButton(2)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <p>Read more</p>
              <span>
                <i
                  style={{ marginTop: "7px", fontSize: "28px" }}
                  className="material-icons"
                >
                  keyboard_arrow_right
                </i>
              </span>
            </ReadMore2>
          </TeamCovidRight>
        </TeamCovid>

        <TextDivider>
          <h1>Testimonials</h1>
          <img src={divider} alt="divider-icon" />
        </TextDivider>

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
      </AboutMain>
    </>
  );
};

export default AboutUs;
