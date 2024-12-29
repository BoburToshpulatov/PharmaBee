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
export const TestimonialsMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TestimonialsSecondary = styled.div`
  width: 100%;
  height: 858px;
  background: var(--Secondary, #ebf8f2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestimonialsMainText = styled.div`
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

export const TestimonialsPeople = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 402px;
  margin-top: 50px;
  z-index: 1;
  /* .float1._anim-items._anim-items {
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
  } */
`;
export const TestimonialsPeople2 = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 402px;
  margin-top: -60px;
  z-index: 1;
  /* .float1._anim-items._anim-items {
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
  } */
`;
export const TestimonialsPeople3 = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  width: 1196px;
  height: 402px;
  margin-top: 40px;
  z-index: 1;
  /* .float1._anim-items._anim-items {
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
  } */
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
