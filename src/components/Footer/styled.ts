import styled from "styled-components";

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 942px;
  justify-content: center;
  align-items: center;

  .footer_top._anim-items {
    opacity: 0;
    transform: translate(0px, 100px);
    transition: all 0.8s ease 0s;
  }

  .footer_top._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
    transition: all 0.8s ease ;
  }
`;

export const FooterTop= styled.div`
display: flex;
width: 700px;
height: 330px;
margin-bottom: -200px;
padding: 32px;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 20px;
background: var(--Secondary, #EBF8F2);
z-index: 1;
h1{
    color: var(--Dark, #062A3F);

/* Heading/3 */
font-family: Roboto;
font-size: 36px;
font-style: normal;
font-weight: 900;
margin-top: -1px;
}
img{
    margin-top: -45px;
}
p{
    color: var(--Dark, #062A3F);
text-align: center;

/* Paragraph/body */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
align-self: stretch;
margin-top: -15px;
}
.email._anim-items {
    opacity: 0;
    transform: translate(0px, 100px);
    transition: all 0.8s ease 0s;
  }

  .email._anim-items._active {
    opacity: 1;
    transform: translate(0px, 0px);
    transition: all 0.8s ease;
  }
`
export const EmailSubscription = styled.div`
display: flex;
padding: 16px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: var(--Light, #FFF);
width: 667px;
height: 56px;
gap: 5px;

/* shadow/1 */
box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.10);
input{
    color: var(--Tertiary-2, #82929B);

/* Paragraph/body */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
width: 470px;
height: 56px;
border: none;

}
`

export const FloatingButton = styled.button<{ isHovered: boolean }>`
 display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
border-radius: 50px;
background: var(--Primary, #19BE6F);
color: var(--Light, #FFF);
text-align: center;
    cursor: pointer;

/* Text Button */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
border: none;
  transition: transform 0.5s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) => (isHovered ? 'translateY(-10px)' : 'translateY(0)')};

  &:hover {
    background-color: #17a15b;
  }
`;

export const FooterBottom = styled.div`
height: 750px;
background-color: #062A3F;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
gap: 90px;
`
export const MainWrapper = styled.div`
display: flex;
position: relative;
width: 1196px;
height: 288px;
gap: 40px;
`
export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 186px;
  gap: 36px;
  p {
    color: var(--Tertiary-2, #82929B);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;

  }
  img{
    width: 200px;
height: 33.784px;
  }
`;
export const AddressBox =styled.div`
display: flex;
width: 412px;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 40px;
flex-shrink: 0;
h1{
    color: var(--Light, #FFF);

/* Heading/4 */
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
`
export const AddressBoxInf = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-top: 13px;
`
export const AddressBoxInfMini = styled.div`
display: flex;
height: 36px;
align-items: center;
gap: 16px;

p{
    color: var(--Tertiary-2, #82929B);

/* Link/Regular */
font-family: Nunito;
font-size: 16px;
font-weight: 700;
line-height: normal;
}
img{
    width: 20px;
    height: 18px;
}
`
export const MenuColumn = styled.div`
display: flex;
width: 146px;
flex-direction: column;
align-items: flex-start;
gap: 33px;
flex-shrink: 0;
h1{
    color: var(--Light, #FFF);

/* Heading/4 */
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 133.333% */
margin: 0;
}

`
export const MenuColumnText =styled.div`
display: flex;
flex-direction: column;
gap: 16px;

p{
    color: var(--Tertiary-2, #82929B);

/* Link/Regular */
font-family: Nunito;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
margin: 0;
}
`
export const PolicyIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid rgba(25, 190, 111, 0.15);
height: 80px;
width: 100%;
`
export const PolicyIconsMini = styled.div`
display: flex;
width: 1196px;
height: 32px;
justify-content: space-between;
align-items: flex-start;
h1{
    color: var(--Tertiary-2, #82929B);

/* Paragraph/body */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
margin: 0;
}
`
export const MediaIcons = styled.div`
display: flex;
align-items: flex-start;
gap: 16px;
button{
    display: flex;
width: 32px;
height: 32px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
border-radius: 100px;
background: var(--Tertiary-2, #82929B);
border: none;
}
`
