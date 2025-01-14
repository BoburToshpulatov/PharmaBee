import styled from "styled-components";
import womanSmile from "../../../assets/services-img/woman-smile.png";

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
export const OurServices = styled.div`
  width: 100%;
  background: var(--Tertiary-1, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ServicesText = styled.div`
  display: flex;
  width: 580px;
  height: 208px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 100px;
  h2 {
    color: var(--Tertiary-2, #82929b);
    text-align: center;

    /* Heading/5 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    margin: 0;
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
  .float._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 65%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const ServicesDemo = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 560px;
  margin-top: 50px;

  .float._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float1._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease 0.2s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float2._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease 0.4s;
  }

  .float2._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const ServicesDemo2 = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 560px;
  margin-top: 40px;

  .float._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float1._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease 0.2s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float2._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease 0.4s;
  }

  .float2._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const ServicesDemoMini = styled.div`
  display: flex;
  width: 372px;
  height: 560px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: var(--Light, #fff);

  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
`;
export const ServicesDemoMiniTop = styled.div`
  img {
    height: 272px;
    width: 372px;
    border-radius: 10px 10px 0px 0px;
  }
`;
export const ServicesDemoMiniBottom = styled.div`
  display: flex;
  padding: 24px 32px 32px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  h1 {
    margin: 0;
    color: var(--Dark, #062a3f);

    /* Heading/4 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
  p {
    color: var(--Dark, #062a3f);

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin: 0;
  }
`;
export const ReadWithHr = styled.div<{ isHovered: boolean }>`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  hr {
    width: 112px;
    height: 0.5px;
    background: #062a3f;
    margin: 0;
  }
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};
`;
export const ReadMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  p {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Text Button */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    margin: 0;
  }
  span {
    color: var(--Dark, #062a3f);
    text-align: center;
    font-family: "Font Awesome 5 Free";
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 24px; /* 171.429% */
  }
`;

export const PharmaBeeBottom = styled.div`
  display: inline-flex;
  padding: 32px 32px 96px 32px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 1132px;
  border-radius: 20px;
  background: var(--Tertiary-1, #fff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  margin-top: 100px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float1._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
    transition: all 1s ease 0.2s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float2._anim-items {
    opacity: 0;
    transform: translate(0, 50%);
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
  flex-shrink: 0;
`;
export const FindLocation = styled.div`
  display: flex;
  width: 601px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin-top: -44px;
  border-radius: 10px;
  background: var(--Light, #ffffff);

  /* shadow/1 */
  box-shadow: 0px 8px 30px -2px rgba(132, 155, 169, 0.15);

  input {
    width: 429px;
    height: 56px;
    color: #849ba9;

    /* Text Button */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    border: 1px solid white;
    transition: border-color 0.3s ease;
  }
  input:focus {
    border: 1px solid lightgray;
    outline: none; /* Optional: remove the default focus outline */
  }
  button {
    display: flex;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 50px;
    background: var(--Primary, #19be6f);
    color: var(--Light, #fff);
    text-align: center;
    border: none;
    /* Text Button */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
`;

export const ContactUs = styled.div`
  width: 1196px;
  height: 612px;
  margin-top: 93px;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
`;

export const ContactUsLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 681px;
  height: 612px;
  border-radius: 20px;
  background-image: url("${womanSmile}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const ContactUsLeftEmail = styled.div`
  display: flex;
  width: 538px;
  height: 468px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 10px;
  background: var(--Light, #fff);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
  input {
    display: flex;
    height: 28px;
    padding: 16px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    color: var(--Tertiary-2, #82929b);

    /* Paragraph/Hero */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    border: 1px solid white;
    border-bottom: 1px solid #bdbdbd;
    transition: border-color 0.3s ease;
  }
  input:focus {
    border: 1px solid lightgray;
    outline: none; /* Optional: remove the default focus outline */
  }
  textarea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
    gap: 24px;
    align-self: stretch;
    height: 152px;
    color: var(--Tertiary-2, #82929b);

    /* Paragraph/Hero */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    border: 1px solid white;
    border-bottom: 1px solid #bdbdbd;
    transition: border-color 0.3s ease;
  }
  textarea:focus {
    border: 1px solid lightgray;
    outline: none; /* Optional: remove the default focus outline */
  }
`;
export const MsgBtn = styled.button<{ isHovered: boolean }>`
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: none;
  border-radius: 50px;
  background: var(--Primary, #19be6f);
  color: var(--Light, #fff);
  text-align: center;

  /* Text Button */
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  margin-top: 10px;
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};
`;
export const ContactUsRight = styled.div`
  width: 475px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .float._anim-items {
    opacity: 0;
    transform: translate(-100%, 0);
    transition: all 1s ease 0.5s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  h2 {
    color: var(--Tertiary-2, #82929b);

    /* Heading/5 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    margin: 0;
  }
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/2 */
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px; /* 133.333% */
    margin: 0;
    margin-top: 16px;
  }
  p {
    color: var(--Dark, #062a3f);

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin: 0;
    margin-top: 32px;
  }
`;

export const Testimonials = styled.div`
  width: 1196px;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 80%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
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
    margin: 0;
  }
`;
export const TestimonialsPeople = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 402px;
  margin-top: 50px;

  .float._anim-items {
    opacity: 0;
    transform: translate(0, 80%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float1._anim-items {
    opacity: 0;
    transform: translate(0, 80%);
    transition: all 1s ease 0.3s;
  }

  .float1._anim-items._active {
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
