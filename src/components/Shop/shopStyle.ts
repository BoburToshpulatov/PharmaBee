import styled from "styled-components";

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

export const Categories = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 2106px;
flex-shrink: 0;
background: var(--Tertiary-1, #FFF);

`

export const CounterMedicine = styled.div`
width: 100%;
height: 766px;
display: flex;
flex-direction: column;
align-items: center;
hr{
  width: 100%;
  height: 0.5px;
  opacity: 0.2;
background: #82929B;
margin: 0;
margin-top: 766px;
position: absolute;
}
`
export const CounterMedicineTop = styled.div`
display: inline-flex;
justify-content: space-between;
align-items: center;
width: 1196px;
height: 84px;
margin-top: 196px;
`

export const CounterMedicineTopLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
h1{
  color: var(--Dark, #062A3F);

/* Heading/3 */
font-family: Roboto;
font-size: 36px;
font-style: normal;
font-weight: 900;
line-height: 48px; /* 133.333% */
margin: 0;
}
p{
  color: var(--Dark, #062A3F);
text-align: right;

/* Paragraph/body */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
margin: 0;
}
`
export const CounterMedicineTopRight = styled.div<{ isHovered: boolean }>`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid  #82929B;;
width: 89px;
height: 40px;
gap: 1.8px;
padding: 0;
cursor: pointer;
p{
  color: var(--Tertiary-2, #82929B);
text-align: center;

/* Text Button */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
}
span{
  color: var(--Tertiary-2, #82929B);
text-align: center;
font-family: "Font Awesome 5 Free";
font-size: 18px;
font-style: normal;
line-height: 24px; /* 171.429% */
margin-top: 4px;
}

transition: transform 0.4s ease, background-color 0.3s ease;

/* Float up when hovered */
transform: ${({ isHovered }) => (isHovered ? 'translateY(-10px)' : 'translateY(0)')};
`
export const CounterMedicineBottom = styled.div`
display: inline-flex;
align-items: flex-start;
gap: 40px;
width: 1195px;
height: 366px;
margin-top: 50px;
`
export const CounterMedicineBottomMini = styled.div`
display: flex;
width: 167px;
height: 324px;
padding: 20px;
flex-direction: column;
align-items: center;
border-radius: 10px;
background: var(--Light, #FFF);
box-shadow: 0px 5px 40px 0px rgba(132, 155, 169, 0.10);
`

export const MiniBoxTop = styled.div`
width: 100%;
flex: 1;
img{
width: 157px;
height: 90%;
}
`

export const MiniBoxBottom = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
h1{
  color: var(--Dark, #062A3F);
text-align: center;

/* Heading/5 */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
margin: 0;
}
button{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 16px;
  background-color: #19BE6F;
  font-family: Roboto;
  font-weight: 700;
  border-radius: 50px;
  padding: 10px 25px;
  margin-top: 16px;
  border: none;
}
`
export const PriceSale = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 3px;
p{
  margin: 0;
  padding-right:3px;
  border-bottom: 1px solid #006D77;
  font-weight: 500;
  color: var(--Quaternary, #006D77);
text-align: center;

/* Heading/6 */
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
}
.sale{
  font-size: 16px;
  color: #828282; /* Gray color for old price */
  text-decoration: line-through; /* Strikes through the text */
  border: none;
}
`
export const MotherAndBaby = styled.div`
width: 100%;
height: 670px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
hr{
  width: 100%;
  height: 0.5px;
  opacity: 0.2;
background: #82929B;
margin: 0;
margin-top: 670px;
position: absolute;
}
`
export const MotherAndBabyTop = styled.div`
display: inline-flex;
justify-content: space-between;
align-items: center;
width: 1196px;
height: 84px;
`