import React from 'react'
import { useState } from 'react';
import { ButtonContainer, FloatingButton } from './homeStyle'

const HomeComponent = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    return (
      <ButtonContainer>
        {/* Button 1 */}
        <FloatingButton
          isHovered={activeButton === 1}
          onMouseEnter={() => setActiveButton(1)}
          onMouseLeave={() => setActiveButton(null)}
        >
          Button 1
        </FloatingButton>
  
        {/* Button 2 */}
        <FloatingButton className='float-btn'
          isHovered={activeButton === 2}
          onMouseEnter={() => setActiveButton(2)}
          onMouseLeave={() => setActiveButton(null)}
        >
          Button 2
        </FloatingButton>
  
        {/* Button 3 */}
        <FloatingButton
          isHovered={activeButton === 3}
          onMouseEnter={() => setActiveButton(3)}
          onMouseLeave={() => setActiveButton(null)}
        >
          Button 3
        </FloatingButton>
      </ButtonContainer>
    );
  };
  

export default HomeComponent