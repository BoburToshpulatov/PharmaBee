import styled from "styled-components";

export const NotFoundPage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundPageMain = styled.div`
  display: flex;
  width: auto;
  height: 600px;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  .float._anim-items {
    opacity: 0;
    transform: translate(0, 80%);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const NotFoundPageMainLeft = styled.div`
  display: flex;
  width: 515px;
  height: 338px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  .float._anim-items {
    opacity: 0;
    transform: translate(-220%, 0);
    transition: all 1s ease 0.3s;
  }

  .float._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  .float1._anim-items {
    opacity: 0;
    transform: translate(0, 150%);
    transition: all 1s ease 0.3s;
  }

  .float1._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  h1 {
    color: var(--Dark, #062a3f);

    /* Heading/1 */
    font-family: Roboto;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 82px; /* 113.889% */
  }
  h2 {
    color: var(--Dark, #062a3f);

    /* Heading/3 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px; /* 133.333% */
  }
  p {
    color: var(--Dark, #062a3f);

    /* Paragraph/Hero */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
`;

export const NotFoundPageMainRight = styled.div`
  width: 681px;
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
  padding-bottom: 5px;
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
    font-size: 18px;
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
