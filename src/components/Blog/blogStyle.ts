import styled from "styled-components";

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
    transform: translate(200%, 0) scale(0.1);
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
export const BlogMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 0);
    transition: all 1.5s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const BlogText = styled.div`
  display: flex;
  width: 580px;
  height: 208px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 100px;
  .float._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 65%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
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
export const PromotionInf = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 481px;
  margin-top: 50px;
`;
export const PromotionInf2 = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 481px;
  margin-top: 40px;
`;

export const PromotionInfMini = styled.div`
  display: flex;
  width: 372px;
  flex-direction: column;
  align-items: flex-start;
  width: 372px;
  height: 481px;
  border-radius: 10px;
  background: var(--Light, #fff);
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);

  img {
    height: 277px;
    width: 372px;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const PromotionInfMiniBottom = styled.div`
  display: flex;
  height: 140px;
  width: 308px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/4 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    margin: 0;
  }
  p {
    color: var(--Tertiary-2, #82929b);

    /* Help Text */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
    margin: 0;
  }
`;
