import styled from "styled-components";
import womanDoctor from "../../../assets/faq/woman-doctor.png";

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

export const FaqMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaqMainText = styled.div`
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
  p {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
`;
export const Process = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 200px;
  margin-top: 50px;
`;
export const ProcessMini1 = styled.div`
  width: 372px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--Primary, #19be6f);
  img {
    width: 372px;
    height: 200px;
    opacity: 0.3;
    position: absolute;
  }
  h1 {
    color: var(--Light, #fff);
    text-align: center;

    /* Heading/3 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 133.333% */
    z-index: 1;
  }
`;

export const ProcessMini2 = styled.div`
  width: 372px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--Dark, #062a3f);
  img {
    width: 372px;
    height: 200px;
    opacity: 0.5;
    position: absolute;
    border-radius: 20px;
  }
  h1 {
    color: var(--Light, #fff);
    text-align: center;
    z-index: 1;
    /* Heading/3 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 133.333% */
  }
`;
export const ProcessMini3 = styled.div`
  width: 372px;
  height: 200px;
  display: inline-block; /* Adjusts the size to fit the image */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--Dark, #062a3f);
  img {
    width: 372px;
    height: 200px;
    opacity: 0.5;
    position: absolute;
    border-radius: 20px;
  }
  h1 {
    color: var(--Light, #fff);
    text-align: center;
    z-index: 1;
    /* Heading/3 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 133.333% */
  }
`;
export const AccordionMain = styled.div`
  width: 1196px;
  height: auto;
  display: flex;
  gap: 40px;
  margin-top: 100px;
`;

export const AccordionMainLeft = styled.div`
  display: flex;
  width: 681px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  h2 {
    color: var(--Primary, #19be6f);

    /* Heading/4 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
  .accordion {
    /* box-shadow: none;
    border: none;
    transition: ease 0.3s; */

    h1 {
      color: var(--Dark, #062a3f);

      /* Heading/3 */
      font-family: Roboto;
      font-size: 36px;
      font-style: normal;
      font-weight: 900;
      line-height: 48px; /* 133.333% */
    }
    p {
      color: var(--Dark, #0b1a30);

      /* Paragraph/body */
      font-family: Nunito;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
    }
    .exp-icon {
      color: var(--Dark, #062a3f);
      font-family: "Font Awesome 5 Free";
      font-size: 35px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      overflow: hidden;
      transition: height 0.3s ease;
    }
  }
`;

export const AccordionMainRight = styled.div`
  width: 475px;
  height: auto;
  border-radius: 20px;
  background-image: url("${womanDoctor}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
