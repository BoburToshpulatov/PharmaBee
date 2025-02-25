import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  BackgroundImg,
  BackgroundText,
  Founders,
  HomeDirect,
  StaffText,
  TeamMainContainer,
  TeamMembers,
  TeamMembers2,
  TeamMembersMini,
  TeamMembersMiniBottom,
  TeamMembersMiniTop,
  TeamText,
} from "./teamStyle";
import scientist from "../../../assets/team-img/background.png";
import polygon from "../../../assets/services-img/bg-polygon (3).svg";
import team1 from "../../../assets/about-img/teamMember1.png";
import team2 from "../../../assets/about-img/teamMember2.png";
import team3 from "../../../assets/about-img/teamMember3.png";
import divider from "../../../assets/home-img/divider (1).svg";
import staff1 from "../../../assets/team-img/staff1.png";
import staff2 from "../../../assets/team-img/staff2.png";
import staff3 from "../../../assets/team-img/staff3.png";
import staff4 from "../../../assets/team-img/staff4.png";
import staff5 from "../../../assets/team-img/staff5.png";
import staff6 from "../../../assets/team-img/staff6.png";

const TeamComponent = () => {
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
        <img src={scientist} alt="background-img" />
        <BackgroundText>
          <h1 className="float _anim-items _anim-no-hide">Our Team</h1>
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
            <p>Our Team</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <TeamMainContainer>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />
        <Founders>
          <TeamText>
            <h2>TEAM</h2>
            <h1 className="float _anim-items _anim-no-hide">
              Our Professional Team
            </h1>
            <p>
              Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
              pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
              id volutpat.
            </p>
          </TeamText>

          <TeamMembers>
            <TeamMembersMini className="float _anim-items _anim-no-hide">
              <TeamMembersMiniTop>
                <img src={team1} alt="team-img" />
              </TeamMembersMiniTop>
              <TeamMembersMiniBottom>
                <h1>Jessie Davis</h1>
                <p>Founder PharmaBee</p>
              </TeamMembersMiniBottom>
            </TeamMembersMini>
            <TeamMembersMini className="float1 _anim-items _anim-no-hide">
              <TeamMembersMiniTop>
                <img src={team2} alt="team-img" />
              </TeamMembersMiniTop>
              <TeamMembersMiniBottom>
                <h1>Jamie Taylor</h1>
                <p>CEO & Founder</p>
              </TeamMembersMiniBottom>
            </TeamMembersMini>
            <TeamMembersMini className="float2 _anim-items _anim-no-hide">
              <TeamMembersMiniTop>
                <img src={team3} alt="team-img" />
              </TeamMembersMiniTop>
              <TeamMembersMiniBottom>
                <h1>Chris Mason</h1>
                <p>General Manager</p>
              </TeamMembersMiniBottom>
            </TeamMembersMini>
          </TeamMembers>
        </Founders>

        <StaffText>
          <h1 className="float _anim-items _anim-no-hide">Our Staff</h1>
          <img src={divider} alt="divider-icon" />
        </StaffText>

        <TeamMembers>
          <TeamMembersMini className="float _anim-items _anim-no-hide">
            <TeamMembersMiniTop>
              <img src={staff1} alt="team-img" />
            </TeamMembersMiniTop>
            <TeamMembersMiniBottom>
              <h1>Sydney Martin</h1>
              <p>Staff</p>
            </TeamMembersMiniBottom>
          </TeamMembersMini>
          <TeamMembersMini className="float1 _anim-items _anim-no-hide">
            <TeamMembersMiniTop>
              <img src={staff2} alt="team-img" />
            </TeamMembersMiniTop>
            <TeamMembersMiniBottom>
              <h1>Lucy Miller</h1>
              <p>Staff</p>
            </TeamMembersMiniBottom>
          </TeamMembersMini>
          <TeamMembersMini className="float2 _anim-items _anim-no-hide">
            <TeamMembersMiniTop>
              <img src={staff3} alt="team-img" />
            </TeamMembersMiniTop>
            <TeamMembersMiniBottom>
              <h1>Amaya Jordan</h1>
              <p>Staff</p>
            </TeamMembersMiniBottom>
          </TeamMembersMini>
        </TeamMembers>

        <TeamMembers2>
          <TeamMembersMini className="float _anim-items _anim-no-hide">
            <TeamMembersMiniTop>
              <img src={staff4} alt="team-img" />
            </TeamMembersMiniTop>
            <TeamMembersMiniBottom>
              <h1>Sarah Carter</h1>
              <p>Staff</p>
            </TeamMembersMiniBottom>
          </TeamMembersMini>
          <TeamMembersMini className="float1 _anim-items _anim-no-hide">
            <TeamMembersMiniTop>
              <img src={staff5} alt="team-img" />
            </TeamMembersMiniTop>
            <TeamMembersMiniBottom>
              <h1>Emily Thompson</h1>
              <p>Staff</p>
            </TeamMembersMiniBottom>
          </TeamMembersMini>
          <TeamMembersMini className="float2 _anim-items _anim-no-hide">
            <TeamMembersMiniTop>
              <img src={staff6} alt="team-img" />
            </TeamMembersMiniTop>
            <TeamMembersMiniBottom>
              <h1>Dennis Adams</h1>
              <p>Staff</p>
            </TeamMembersMiniBottom>
          </TeamMembersMini>
        </TeamMembers2>
      </TeamMainContainer>
    </>
  );
};

export default TeamComponent;
