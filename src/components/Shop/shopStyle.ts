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

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  background: var(--Tertiary-1, #fff);
`;

export const CounterMedicine = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  hr {
    width: 100%;
    height: 0.5px;
    opacity: 0.2;
    background: #82929b;
    margin: 0;
    margin-top: 600px;
    position: absolute;
  }
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 30%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const CounterMedicineTop = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 1196px;
  height: 84px;
  .float._anim-items {
    opacity: 0;
    transform: translate(200%, 0);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const CounterMedicineTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/3 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 133.333% */
    margin: 0;
  }
  p {
    color: var(--Dark, #062a3f);
    text-align: right;

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
    transform: translate(-200%, 0);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const CounterMedicineTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #82929b;
  width: 89px;
  height: 40px;
  gap: 1.8px;

  cursor: pointer;
  p {
    color: var(--Tertiary-2, #82929b);
    text-align: center;

    /* Text Button */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
  span {
    color: var(--Tertiary-2, #82929b);
    text-align: center;
    font-family: "Font Awesome 5 Free";
    font-size: 18px;
    font-style: normal;
    line-height: 24px; /* 171.429% */
    margin-top: 4px;
    margin-right: -5px;
  }
`;
export const CounterMedicineBottom = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1195px;
  height: 366px;
  margin-top: 50px;
`;
export const CounterMedicineBottomMini = styled.div`
  display: flex;
  width: 167px;
  height: 324px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: var(--Light, #fff);
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
`;

export const MiniBoxTop = styled.div`
  width: 100%;
  flex: 1;
  img {
    width: 157px;
    height: 90%;
  }
`;

export const MiniBoxBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Heading/5 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    margin: 0;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    background-color: #19be6f;
    font-family: Roboto;
    font-weight: 700;
    border-radius: 50px;
    padding: 10px 25px;
    margin-top: 16px;
    border: none;
  }
`;
export const PriceSale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  p {
    margin: 0;
    padding-right: 3px;
    border-bottom: 1px solid #006d77;
    font-weight: 500;
    color: var(--Quaternary, #006d77);
    text-align: center;

    /* Heading/6 */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
  .sale {
    font-size: 16px;
    color: #828282; /* Gray color for old price */
    text-decoration: line-through; /* Strikes through the text */
    border: none;
  }
`;
export const MotherAndBaby = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  hr {
    width: 100%;
    height: 0.5px;
    opacity: 0.2;
    background: #82929b;
    margin: 0;
    margin-top: 670px;
    position: absolute;
  }
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 30%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const MotherAndBabyTop = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 1196px;
  height: 84px;
  .float._anim-items {
    opacity: 0;
    transform: translate(200%, 0);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
