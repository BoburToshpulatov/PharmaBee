import styled from "styled-components";
import covidtest from "../../../assets/home-img/covid.png";

export const BackgroundImg = styled.div`
  position: relative; /* Ensures proper stacking of child elements */
  background: var(--Quaternary, #006d77); /* Background color */
  display: inline-block; /* Adjusts the size to fit the image */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hides any overflow from the image */
  width: 100%;
  height: 408px;
  img {
    width: 100%; /* Adjust as needed */
    height: 408px; /* Maintain aspect ratio */
    opacity: 0.6; /* Makes the image semi-transparent */
    position: absolute;
  }
`;
export const BackgroundText = styled.div`
  display: flex;
  flex-direction: column;
  width: 578px;
  height: 138px;
  position: relative;
  width: 1196px;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  h1 {
    margin: 0;
    color: var(--Light, #fff);

    /* Heading/1 */
    font-family: Roboto;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 82px; /* 113.889% */
  }
  .float._anim-items {
    opacity: 0;
    transform: translate(130%, 0) scale(0.1);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
`;
export const HomeDirect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
  span {
    color: var(--Secondary, #fff);
    font-family: "Font Awesome 5 Free";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 24px; /* 171.429% */
  }
  p {
    color: var(--Secondary, #fff);

    /* Link/Regular */
    font-family: Nunito;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    margin: 0;
    margin-top: 2px;
  }
`;

export const AboutMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainImg = styled.div`
  width: 1196px;
  height: 600px;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;

  margin-top: 100px;
`;

export const MainImgLeft = styled.div`
  width: 578px;
  height: 564px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  .float._anim-items {
    opacity: 0;
    transform: translate(-100%, 0);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: none;
  }
  h2 {
    color: var(--Tertiary-2, #82929b);

    /* Heading/5 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/2 */
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px; /* 133.333% */
  }
  p {
    color: var(--Dark, #062a3f);

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
`;
export const MainImgRight = styled.div`
  width: 578px;
  height: 600px;
  border-radius: 20px;
`;

export const ReadMore = styled.div<{ isHovered: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border-bottom: 1.5px solid #19be6f;
  padding-top: 15px;
  padding-bottom: 3px;
  cursor: pointer;
  p {
    color: var(--Primary, #19be6f);
    text-align: center;

    /* Text Button */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
  span {
    color: var(--Primary, #19be6f);
    text-align: center;
    font-family: "Font Awesome 5 Free";
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 24px; /* 171.429% */
    margin-right: -10px;
  }
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};
`;
export const TextDivider = styled.div`
  display: flex;
  width: 1196px;
  height: 102px;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: none;
  }
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Heading/2 */
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px; /* 133.333% */
  }
`;

export const PharmaBeeBottom = styled.div`
  display: inline-flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 1132px;
  border-radius: 20px;
  background-color: #ffffff;
  margin-top: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float1._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.2s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float2._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.4s;
  }

  .float2._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const PharmaBeeBottomMini = styled.div`
  display: flex;
  width: 350.667px;
  height: 245px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Heading/4 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    margin: 0;
  }
  p {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin: 0;
  }
`;
export const Hexogon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86.603px;
  height: 96.906px;
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: 1460px;
  background: var(--Secondary, #ebf8f2);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TeamText = styled.div`
  display: flex;
  width: 580px;
  height: 208px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 100px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  h2 {
    color: var(--Tertiary-2, #82929b);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: 0.18px;
  }
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px; /* 133.333% */
    letter-spacing: 0.48px;
  }
  p {
    color: var(--Dark, #062a3f);
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    letter-spacing: 0.18px;
  }
`;

export const TeamMembers = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 1196px;
  height: 600px;
  gap: 40px;
  margin-top: 50px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 40%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float1._anim-items {
    opacity: 0;
    transform: translate(0, 40%);
    transition: all 1s ease 0.2s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float2._anim-items {
    opacity: 0;
    transform: translate(0, 40%);
    transition: all 1s ease 0.4s;
  }

  .float2._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const TeamMembersMini = styled.div`
  display: flex;
  width: 372px;
  height: 600px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: var(--Light, #fff);
  z-index: 1;
  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
`;
export const TeamMembersMiniTop = styled.div`
  height: 500px;
  align-self: stretch;
  img {
    border-radius: 10px 10px 0 0;
  }
`;
export const TeamMembersMiniBottom = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.24px;
  }
  p {
    color: var(--Tertiary-2, #82929b);
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
    letter-spacing: 0.16px;
  }
`;

export const TeamCovid = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 38px;
  border-radius: 20px;
  background: var(--Light, #fff);

  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
  width: 1196px;
  height: 600px;
  margin-top: -402px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 40%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const TeamCovidLeft = styled.div`
  width: 578px;
  height: 600px;
  border-radius: 20px;
  background-image: url("${covidtest}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TeamCovidRight = styled.div`
  display: flex;
  width: 580px;
  height: 448px;
  padding-right: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  h2 {
    color: var(--Tertiary-2, #82929b);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: 0.18px;
  }
  h1 {
    color: var(--Dark, #062a3f);
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px; /* 133.333% */
    letter-spacing: 0.48px;
  }
  p {
    color: var(--Dark, #062a3f);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    letter-spacing: 0.18px;
  }
`;
export const ReadMore2 = styled.div<{ isHovered: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1.5px solid #19be6f;
  cursor: pointer;
  margin-top: -7px;
  padding-bottom: 5px;
  p {
    color: var(--Primary, #19be6f);
    text-align: center;

    /* Text Button */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
  span {
    color: var(--Primary, #19be6f);
    text-align: center;
    font-family: "Font Awesome 5 Free";
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 24px; /* 171.429% */
    margin-right: -10px;
  }
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};
`;

export const TestimonialsPeople = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 402px;
  margin-top: 50px;
  .float1._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 60%);
    transition: all 1s ease 0.3s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float2._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 60%);
    transition: all 1s ease 0.6s;
  }

  .float2._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const TestimonialsPeopleLeft = styled.div`
  display: flex;
  width: 578px;
  height: 344px;
  padding: 32px 32px 0px 32px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--Light, #fff);

  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
  p {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin: 0;
  }
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Heading/4 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    margin: 0;
    margin-top: 48px;
  }
  .job {
    color: var(--Tertiary-2, #82929b);
    text-align: center;

    /* Heading/6 */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    margin: 0;
  }
  img {
    width: 128px;
    height: 128px;
    flex-shrink: 0;
    border-radius: 50px;
    margin-top: 30px;

    /* shadow/1 */
    box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
  }
`;
export const TestimonialsPeopleRight = styled.div`
  display: flex;
  width: 578px;
  height: 344px;
  padding: 32px 32px 0px 32px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--Light, #fff);

  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
  p {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin: 0;
  }
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Heading/4 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    margin: 0;
    margin-top: 48px;
  }
  .job {
    color: var(--Tertiary-2, #82929b);
    text-align: center;

    /* Heading/6 */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    margin: 0;
  }
  img {
    width: 128px;
    height: 128px;
    border-radius: 50px;
    margin-top: 30px;

    /* shadow/1 */
    box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
  }
`;
