import styled from "styled-components";

export const NavbarMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavbarTop = styled.div`
  display: flex;
  height: 36px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: var(--Dark, #062a3f);
`;
export const NavbarTopMenu = styled.div`
  display: flex;
  width: 1195.553px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
export const NavbarTopLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  p {
    color: var(--Light, #fff);

    /* Paragraph/body */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
  button {
    display: flex;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: var(--Primary, #19be6f);
    text-align: center;
    cursor: pointer;

    /* Text Button Small */
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 184.615% */
    border-radius: 50px;
    border: 1px solid var(--Primary, #19be6f);
    background: var(--Dark, #062a3f);
  }
`;
export const NavbarTopRight = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  gap: 32px;
`;
export const NavbarTopRightTime = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  gap: 16px;
  h1 {
    color: var(--Light, #fff);

    /* Link/Regular */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
  }
`;
export const NavbarTopRightNumber = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  gap: 16px;
  h1 {
    color: var(--Light, #fff);

    /* Link/Regular */
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
  }
`;
export const NavbarBottom = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  background: var(#f9f9f9);
  border-bottom: 1px solid lightgrey;
`;
export const NavbarBottomMain = styled.div`
  display: flex;
  width: 1195.553px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  .boxPopper {
    display: flex;
    padding: 12px 16px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  }
`;
export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  p {
    color: var(--Dark, #82929b);

    /* Link/Regular */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    cursor: pointer;
    transition: color 0.3s ease;
  }
  p:hover {
    color: #19be6f;
  }
  .active {
    color: #19be6f; /* Green color for the active link */
  }
`;
export const PagesPopper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  i {
    margin-top: 2px;
    cursor: pointer;
    transition: color 0.3s ease;
    font-size: 18px;
    color: #82929b;
  }
  &:hover {
    p {
      color: #19be6f;
    }
    i {
      color: #19be6f;
    }
  }
  .active {
    color: #19be6f; /* Green color for the active link */
  }
`;
export const PopperInf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  p {
    color: var(--Dark, #82929b);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    cursor: pointer;
    transition: color 0.3s ease;
  }
  p:hover {
    color: #19be6f;
  }
  .active {
    color: #19be6f; /* Green color for the active link */
  }
`;

export const Cart = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  .shopping-cart {
    color: var(--Tertiary-2, #82929b);
  }
  .shopping-cart:hover {
    color: var(--Tertiary-2, rgb(89, 95, 99));
    transition: all 0.2s ease;
  }
  i {
    color: var(--Tertiary-2, #82929b);
    font-family: "Font Awesome 5 Free";
    font-size: 19px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;
export const Drawer = styled.div`
  display: flex;
`;
