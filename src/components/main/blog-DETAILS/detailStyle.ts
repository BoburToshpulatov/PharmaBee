import styled from "styled-components";

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
  border: 1px solid black;
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
  border: 1px solid black;
  margin-top: 64px;
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
  border: 1px solid black;
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
