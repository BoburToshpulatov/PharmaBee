import styled from 'styled-components';



 export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  .float-btn{
    width: 200px;
  }
`;

export const FloatingButton = styled.button<{ isHovered: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  /* Float up when hovered */
  transform: ${({ isHovered }) => (isHovered ? 'translateY(-10px)' : 'translateY(0)')};

  &:hover {
    background-color: #0056b3;
  }
`;