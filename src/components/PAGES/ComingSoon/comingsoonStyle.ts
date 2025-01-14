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
export const ComingSoonMainContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 741px;
  height: 424px;
  img {
    width: 200px;
    height: 34px;
  }
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
