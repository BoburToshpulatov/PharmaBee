import styled from "styled-components";
import covid from "../../../assets/home-img/covid.png";

export const PharmaBeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 977px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  .polygon {
    position: absolute;
    align-self: flex-start;
  }
`;
export const PharmaBeeTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 0);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const PharmaBeeTopLeft = styled.div`
  display: flex;
  width: 578px;
  height: 478px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  z-index: 1;
  margin-right: -66px;
  h2 {
    color: #849ba9;

    /* Heading/5 */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    align-self: stretch;
    margin: 0;
  }
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/1 */
    font-family: Roboto;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    width: 681px;
    margin: 0;
    margin-top: -3px;
  }
  p {
    color: var(--Dark, #062a3f);

    /* Paragraph/Hero */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    width: 450px;
    margin: 0;
    margin-top: -5px;
  }
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const ProductsLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const FloatingButton = styled.button<{ isHovered: boolean }>`
  display: flex;
  gap: 5px;
  padding: 12px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--Primary, #19be6f);
  color: var(--Light, #fff);
  text-align: center;
  cursor: pointer;

  /* Text Button */
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  border: none;
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};

  i {
    color: #fff;
    font-size: 30px;
    font-weight: 300;
    margin-top: 4px;
    margin-right: -15px;
  }
`;

export const WhiteBtn = styled.button<{ isHovered: boolean }>`
  display: flex;
  padding: 13px 32px;
  gap: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: var(--Primary, #19be6f);
  background: #ffffff;
  text-align: center;
  cursor: pointer;

  /* Text Button */
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  border: none;
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};

  i {
    color: #19be6f;
    font-size: 19px;
    font-weight: 900;
    margin-right: 2px;
  }
`;

export const PharmaBeeTopRight = styled.div`
  width: 681px;
  height: 600px;
  flex-shrink: 0;
  border-radius: 20px;
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
  margin-top: 100px;
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
  flex-shrink: 0;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 2106px;
  flex-shrink: 0;
  background: var(--Tertiary-1, #f9f9f9);
`;

export const CounterMedicine = styled.div`
  width: 100%;
  height: 766px;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 100%;
    height: 0.5px;
    opacity: 0.2;
    background: #82929b;
    margin: 0;
    margin-top: 766px;
    position: absolute;
  }
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 20%);
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
  margin-top: 196px;
  .float._anim-items {
    opacity: 0;
    transform: translate(100%, 0);
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
    transform: translate(-100%, 0);
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
  border-bottom: 1px solid #82929b;
  width: 89px;
  height: 40px;
  gap: 1.8px;
  margin: 10px;
  cursor: pointer;

  p {
    color: var(--Tertiary-2, #82929b);
    text-align: center;
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
    transform: translate(0, 20%);
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
    transform: translate(100%, 0);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const Covid = styled.div`
  width: 100%;
  height: 644px;
  background: #ebfaf3;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  img {
    position: absolute;
  }
`;
export const CovidMini1 = styled.div`
  flex: 1.1;
  background-image: url("${covid}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CovidMini2 = styled.div`
  flex: 1;
`;
export const CovidMini2Inf = styled.div`
  width: 100%;
  height: 476px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  h2 {
    color: var(--Dark, #062a3f);

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
    padding: 0;
    margin-top: 32px;
  }
  .float._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const ReadMore = styled.div<{ isHovered: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  height: 56px;
  text-align: center;
  background: #ebfaf3;
  gap: 3px;
  margin-top: 32px;
  border: none;
  border-bottom: 1px solid #19be6f;
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};
  cursor: pointer;
  p {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    color: var(--Primary, #19be6f);
    margin: 0;
  }
  span {
    color: var(--Primary, #19be6f);
    text-align: center;
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 900;
    line-height: 24px; /* 171.429% */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 0;
    i {
      font-size: 30px;
      margin-left: 7px;
      margin-top: 2px;
    }
  }
  hr {
    height: 1px;
    width: 130px;
    position: absolute;
    align-self: flex-end;
    opacity: 0;
  }
`;

export const CovidMini3 = styled.div`
  flex: 1;
  margin-right: 40px;
  margin-left: -12px;
  display: flex;
  height: 444px;
  align-self: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  overflow: hidden;
  .float._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  .float1._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.2s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  .float2._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.4s;
  }

  .float2._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  .float3._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease 0.6s;
  }

  .float3._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const CovidMini3Instructions = styled.div`
  display: flex;
  padding: 16px;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background: #fff;
  position: relative;
  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
`;
export const CovidBtn = styled.button<{ isHovered: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  background-color: #19be6f;
  font-family: Roboto;
  font-weight: 700;
  border-radius: 50px;
  padding: 12px 22px;
  border: none;
  transition: transform 0.4s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-10px)" : "translateY(0)"};
  cursor: pointer;
`;
export const Mini3Instructions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 64px;
    height: 64px;
    position: relative;
  }
  h1 {
    color: #000;

    /* Heading/5 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
`;
export const MiddleWrapper = styled.div`
  width: 100%;
  height: 2050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--Tertiary-1, #fff);
`;
export const Brands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1196px;
  height: 540px;
  margin-top: 100px;
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/2 */
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px; /* 133.333% */
    margin: 0;
  }
  img {
    margin: 0;
    padding: 0;
  }
  .float._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 80%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const BrandsLogos = styled.div`
  display: flex;
  width: 1068px;
  height: 260px;
  padding: 64px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 20px;
  border: 1px dashed #a8b6c2;
  background: var(--Light, #fff);
  margin-top: 23px;
`;

export const BrandLogosLeft = styled.div`
  display: flex;
  height: 260px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1;
  h1 {
    margin: 0;
    color: var(--Dark, #062a3f);

    /* Heading/4 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    mix-blend-mode: luminosity;
  }
  p {
    color: var(--Dark, #062a3f);

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    mix-blend-mode: luminosity;
    margin: 0;
  }
`;
export const BrandLogosRight = styled.div`
  display: flex;
  height: 260px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  flex: 1;
`;
export const BrandLogosRightMini = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 46px;
`;
export const Testimonials = styled.div`
  width: 1196px;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
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
  .float._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 80%);
    transition: all 1s ease 0.2s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
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
    transform: translate(0, 30%);
    transition: all 1s ease 0.3s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .float2._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 30%);
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
export const PromotionInf = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 481px;
  margin-top: 50px;
  .float._anim-items._anim-items {
    opacity: 0;
    transform: translate(0, 20%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
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
