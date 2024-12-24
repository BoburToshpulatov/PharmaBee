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

export const TrackMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px;
`;

export const TrackText = styled.div`
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

export const OrderId = styled.div`
  padding: 32px 32px 32px 32px;
  background-color: var(--e-global-color-099a789);
  border-radius: 10px 10px 10px 10px;
  width: 736px;
  height: 284px;
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  box-shadow: 0px 5px 30px 0px rgba(132, 155, 169, 0.2);
  z-index: 1;
  p {
    color: var(--Dark, #062a3f);
    text-align: start;

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin-bottom: 32px;
  }
  button {
    display: flex;
    width: 120px;
    padding: 12px 0;
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
    transition: all 0.4s ease;
    cursor: pointer;
  }
  button:hover {
    background-color: #c36;
  }
`;

export const OrderIdMiddle = styled.div`
  display: flex;
  width: 736px;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;
export const OrderIdMiddleBoxes = styled.div`
  width: 340px;
  height: 94px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  h1 {
    color: #062a3f;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 2;
  }
  input {
    cursor: pointer;
    padding: 16px 0;
    font-family: Nunito;
    font-size: 18px;
    font-weight: 400;
    color: #82929b;
    border: none;
    border-bottom: 1px solid #062a3f1a;
  }
  input:focus {
    border: 1px white;
    outline: none; /* Optional: remove the default focus outline */
    border-bottom: 1px solid #062a3f1a;
  }
`;

export const PharmaBeeBottom = styled.div`
  display: inline-flex;
  padding: 96px 32px 32px 32px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 1132px;
  border-radius: 20px;
  background-color: #f9f9f9;
  margin-top: -50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  /* .float._anim-items {
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
  } */
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
