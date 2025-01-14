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
  .float._anim-items {
    opacity: 0;
    transform: translate(110%, 0) scale(0.1);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
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

export const TeamMainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Founders = styled.div`
  width: 100%;
  height: 1058px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--Tertiary-1, #f9f9f9);
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
    transform: translate(0, 65%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: none;
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
export const TeamMembers2 = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 1196px;
  height: 600px;
  gap: 40px;
  margin-top: 40px;
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

export const StaffText = styled.div`
  width: 1196px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    text-align: center;

    /* Heading/3 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 133.333% */
  }
`;
