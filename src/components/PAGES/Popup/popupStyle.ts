import styled from "styled-components";

export const ComingSoonMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--Secondary, #ebf8f2);
  width: 100%;
  height: 100vh;
`;
export const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.1 ease, visibility 0.1 ease;
  z-index: 999;
`;
export const ComingSoonMainContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 741px;
  height: 424px;
  position: absolute;
`;
export const ComingSoonMainContentText = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 741px;
  height: 142px;
  h1 {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Heading/1 */
    font-family: Roboto;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 82px; /* 113.889% */
  }
  p {
    color: var(--Dark, #062a3f);
    text-align: center;

    /* Paragraph/Hero */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
`;

export const CLock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  width: 600px;
  height: 120px;
`;

export const ClockMini = styled.div`
  display: flex;
  width: 88px;
  height: 88px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--Light, #fff);

  /* shadow/1 */
  box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.1);
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
  h2 {
    color: var(--Tertiary-2, #82929b);
    text-align: center;

    /* Text Button Small */
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 184.615% */
  }
`;

export const PopupContainer = styled.div`
  width: 578px;
  height: 539px;
  border-radius: 20px;
  background: var(--Dark, #062a3f);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  visibility: hidden;
  transition: all 0.6s ease-out;
  background: #062a3f;
  z-index: 1000;
  &.open-popup {
    visibility: visible;
    transform: scale(1);
  }
  img {
    opacity: 0.3;
    width: 578px;
    height: 539px;
    border-radius: 20px;
    position: absolute;
    z-index: 0;
  }
  h2 {
    color: var(--Light, #fff);
    text-align: center;
    z-index: 1;
    /* Heading/3 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 133.333% */
    margin-top: 25px;
  }
  h1 {
    color: var(--Primary, #062a3f);
    text-align: center;

    /* Heading/1 */
    font-family: Roboto;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 82px; /* 113.889% */
    margin-top: 16px;
    position: relative;
    z-index: 1;
  }
  p {
    color: var(--Light, #fff);
    text-align: center;

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
    margin-top: 16px;
    z-index: 1;
  }
`;

export const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: initial;
  cursor: pointer;
  z-index: 1;
  color: var(--Tertiary-2, #82929b);
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 133.333% */
  position: relative;
  top: 15px;
  align-self: flex-end;
  right: 20px;
  &:hover {
    color: #fff;
  }
`;
export const EmailBox = styled.div`
  display: flex;
  width: 450px;
  height: 148px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: var(--Light, #fff);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: var(--Light, #fff);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
  margin-top: 32px;
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
    font-weight: 700;
    line-height: 28px; /* 155.556% */
    border: 1px solid white;
    border-bottom: 1px solid #bdbdbd;
    transition: border-color 0.3s ease;
  }
  input:focus {
    border: 1px solid lightgray;
    outline: none; /* Optional: remove the default focus outline */
  }
`;

export const MsgBtn = styled.button<{ isHovered: boolean }>`
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
  border: none;
  border-radius: 50px;
  background: var(--Primary, #19be6f);
  color: var(--Light, #fff);
  text-align: center;
  cursor: pointer;
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
