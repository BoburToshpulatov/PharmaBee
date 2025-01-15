import styled from "styled-components";
import womanSmile from "../../../assets/services-img/woman-smile.png";

export const BackgroundImg = styled.div`
  position: relative; /* Ensures proper stacking of child elements */
  display: inline-block; /* Adjusts the size to fit the image */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hides any overflow from the image */
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const DetailMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 30%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const ArticleName = styled.div`
  width: 1196px;
  height: 184px;
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 20px;
  background: var(--Light, #fff);
  margin-top: -124px;
  z-index: 1;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/2 */
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px; /* 133.333% */
  }
  h3 {
    color: var(--Tertiary-2, #82929b);

    /* Heading/5 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
`;

export const ArticleText = styled.div`
  width: 1196px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-top: 64px;

  p {
    color: var(--Dark, #0b1a30);

    /* Paragraph */
    font-family: Inter, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
  }
  h1 {
    color: var(--Dark, #0b1a30);

    /* Headline / 3 */
    font-family: Lora;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px; /* 133.333% */
  }
  h3 {
    color: var(--Dark, #0b1a30);

    /* Headline / 4 */
    font-family: Lora;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 116.667% */
  }
`;

export const ShareThis = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 1164px;
  height: 32px;
  border-radius: 10px;
  background: var(--Tertiary-1, #f9f9f9);
  margin-top: 64px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const ShareThisLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  button {
    border: none;
    display: flex;
    padding: 4px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: var(--Light, #fff);

    /* shadow/1 */
    box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
    color: var(--Quaternary, #006d77);

    /* Button Text */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }
`;
export const ShareThisRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 290px;
  height: 32px;
  h1 {
    color: var(--Dark, #0b1a30);

    /* Heading/5 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
  a {
    display: flex;
    align-items: center;
  }
  a:visited,
  a:active,
  a:link {
    color: inherit;
  }

  .icon {
    width: 32px;
    height: 32px;
  }
  .facebook {
    color: #1f5ed8;
  }
  .facebook:hover {
    transform: scale(1.1); /* Add a hover effect */
    transition: transform 0.3s ease;
  }
  .twitter {
    color: #4ebfff;
  }
  .twitter:hover {
    transform: scale(1.1); /* Add a hover effect */
    transition: transform 0.3s ease;
  }
  .instagram {
    color: rgb(215, 70, 152);
  }
  .instagram:hover {
    transform: scale(1.1); /* Add a hover effect */
    transition: transform 0.3s ease;
  }
  .youtube {
    color: #ff0000;
    width: 33px;
    height: 33px;
  }
  .youtube:hover {
    transform: scale(1.1); /* Add a hover effect */
    transition: transform 0.3s ease;
  }
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 349px;
  height: 102px;
  margin-top: 100px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 100%);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
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
`;
export const PromotionInf = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 481px;
  margin-top: 50px;
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
export const Comment = styled.div`
  width: 1196px;
  height: 536px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 100px;
  .float._anim-items {
    opacity: 0;
    transform: translate(-150%, 0);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const CommentLeft = styled.div`
  display: flex;
  width: 475px;
  height: 248px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
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

export const CommentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 681px;
  height: 536px;
  border-radius: 20px;
  background-image: url("${womanSmile}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .float._anim-items {
    opacity: 0;
    transform: translate(150%, 0);
    transition: all 1s ease;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
export const ContactUsLeftEmail = styled.form`
  display: flex;
  width: 538px;
  height: 392px;
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
