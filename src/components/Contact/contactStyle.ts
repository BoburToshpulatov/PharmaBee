import styled from "styled-components";
import womanSmile from '../../assets/services-img/woman-smile.png'


export const BackgroundImg = styled.div`
 position: relative; /* Ensures proper stacking of child elements */
  background: var(--Quaternary, #006D77); /* Background color */
  display: inline-block; /* Adjusts the size to fit the image */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hides any overflow from the image */
width: 100%;
height: 408px;
img{
    width: 100%; /* Adjust as needed */
  height: 408px; /* Maintain aspect ratio */
  opacity: 0.6; /* Makes the image semi-transparent */
  position: absolute;
}
`
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
    h1{
        margin: 0;
        color: var(--Light, #FFF);

/* Heading/1 */
font-family: Roboto;
font-size: 72px;
font-style: normal;
font-weight: 900;
line-height: 82px; /* 113.889% */
    }
 `
 export const HomeDirect = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 color: #FFF;
 span{
    color: var(--Secondary, #FFF);
font-family: "Font Awesome 5 Free";
font-size: 16px;
font-style: normal;
font-weight: 900;
line-height: 24px; /* 171.429% */
 }
p{
    color: var(--Secondary, #FFF);

/* Link/Regular */
font-family: Nunito;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */ 
margin: 0;
margin-top: 2px;
}
 `

 export const ContactMain = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 `
export const MapContainer = styled.div`
width: 1196px;
height: 420px;
display: flex;
gap: 40px;
margin-top: 100px;
`
export const MapContainerLeft = styled.div`
width: 578px;
height: 420px;
display: flex;
flex-direction: column;
align-items: flex-start;
h2{
    margin: 0;
    color: var(--Tertiary-2, #82929B);

/* Heading/5 */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
}
h1{
    margin: 0;
    color: var(--Dark, #062A3F);

/* Heading/2 */
font-family: Roboto;
font-size: 48px;
font-style: normal;
font-weight: 900;
line-height: 64px; /* 133.333% */
margin-top: 16px;
}
p{
    margin: 0;
    color: var(--Dark, #062A3F);
margin-top: 32px;
/* Paragraph/body */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
}
`
export const MapContainerLeftBottom = styled.div`
display: flex;
flex-direction: column;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
height: 168px;
width: 578px;
margin-top: 32px;
`
export const MapContainerLeftBottomMini = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 15px;
height: 36px;
width: 440px;
p{
    color: var(--Dark, #062A3F);

/* Paragraph/Hero */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
margin: 0;
}
img{
    width: 20px;
    height: 20px;
}
`

export const MapContainerRight = styled.div`
width: 578px;
height: 400px;
border-radius: 20px;
`

export const ContactUs = styled.div`
width: 1196px;
height: 612px;
margin-top: 93px;
display: flex;
justify-content: center;
gap: 40px;
align-items: center;
`

export const ContactUsLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 681px;
height: 612px;
border-radius: 20px;
background-image: url('${womanSmile}');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`
export const ContactUsLeftEmail = styled.div`
display: flex;
width: 538px;
height: 468px;
padding: 32px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
border-radius: 10px;
background: var(--Light, #FFF);
box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.30);
input{
    display: flex;
height: 28px;
padding: 16px 0px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
color: var(--Tertiary-2, #82929B);

/* Paragraph/Hero */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
border: 1px solid white;
border-bottom: 1px solid #BDBDBD;
transition: border-color 0.3s ease;
}
input:focus {
      border:1px solid lightgray;
      outline: none; /* Optional: remove the default focus outline */
    }
textarea{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 10px;
gap: 24px;
align-self: stretch;
height: 152px;
color: var(--Tertiary-2, #82929B);

/* Paragraph/Hero */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
border: 1px solid white;
border-bottom: 1px solid #BDBDBD;
transition: border-color 0.3s ease;
}
textarea:focus {
      border:1px solid lightgray;
      outline: none; /* Optional: remove the default focus outline */
    }
`
export const MsgBtn = styled.button<{ isHovered: boolean }>`
display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 16px;
border: none;
border-radius: 50px;
background: var(--Primary, #19BE6F);
color: var(--Light, #FFF);
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
transform: ${({ isHovered }) => (isHovered ? 'translateY(-10px)' : 'translateY(0)')};
`
export const ContactUsRight = styled.div`
width: 475px;
height: 340px;
display: flex;
flex-direction: column;
align-items: flex-start;
h2{
    color: var(--Tertiary-2, #82929B);

/* Heading/5 */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
margin: 0;
}
h1{
    color: var(--Dark, #062A3F);

/* Heading/2 */
font-family: Roboto;
font-size: 48px;
font-style: normal;
font-weight: 900;
line-height: 64px; /* 133.333% */
margin: 0;
margin-top: 16px;
}
p{
    color: var(--Dark, #062A3F);

/* Paragraph/body */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
margin: 0;
margin-top: 32px;
}
`
