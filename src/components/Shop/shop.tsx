import React from 'react'
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { BackgroundImg, BackgroundText, Categories, CounterMedicine, CounterMedicineBottom, CounterMedicineBottomMini, CounterMedicineTop, CounterMedicineTopLeft, CounterMedicineTopRight, HomeDirect, MiniBoxBottom, MiniBoxTop, MotherAndBaby, MotherAndBabyTop, PriceSale } from './shopStyle'
import shop from '../../assets/shop-img/image.png'
import microscope from '../../assets/home-img/microscope.png'
import mask from '../../assets/home-img/mask.png'
import thermometer from '../../assets/home-img/thermometer.png'
import pills from '../../assets/home-img/pills.png'
import liquid from '../../assets/home-img/liquid.png'
import walking from '../../assets/home-img/walking.png'

const ShopComponent = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);
    const value = 4;
  return (
  <>
  <BackgroundImg>
    <img src={shop} alt="background-img" />
    <BackgroundText>
        <h1>Shop</h1>
        <HomeDirect>
    <span><i className='fas fa-home'></i></span>
    <p style={{marginLeft:'-5px'}}>Home</p>
    <span><i style={{marginTop:'9px',fontSize:'26px'}} className="material-icons">keyboard_arrow_right</i></span>
    <p>Shop</p>
    </HomeDirect>
    </BackgroundText>
  </BackgroundImg>
  
  <Categories>
    <CounterMedicine>
      <CounterMedicineTop>
        <CounterMedicineTopLeft>
          <h1>Over the Counter Medicine</h1>
          <p>Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed facilisis molestie aliquam.</p>
        </CounterMedicineTopLeft>
        <CounterMedicineTopRight isHovered={activeButton === 3}
        onMouseEnter={() => setActiveButton(3)}
        onMouseLeave={() => setActiveButton(null)}>
        <p>View all</p>
        <span><i className="material-icons">keyboard_arrow_right</i></span>
        </CounterMedicineTopRight>
       </CounterMedicineTop>
       <CounterMedicineBottom>
        <CounterMedicineBottomMini>
          <MiniBoxTop>
            <img src={microscope} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={mask} alt="mask-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={thermometer} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={pills} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={liquid} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
       </CounterMedicineBottom>
       <hr />
    </CounterMedicine>

    <MotherAndBaby>
    <MotherAndBabyTop>
        <CounterMedicineTopLeft>
          <h1>Mother & Baby</h1>
          <p>Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed facilisis molestie aliquam.</p>
        </CounterMedicineTopLeft>
        <CounterMedicineTopRight isHovered={activeButton === 4}
        onMouseEnter={() => setActiveButton(4)}
        onMouseLeave={() => setActiveButton(null)}>
        <p>View all</p>
        <span><i className="material-icons">keyboard_arrow_right</i></span>
        </CounterMedicineTopRight>
       </MotherAndBabyTop>
       <CounterMedicineBottom>
        <CounterMedicineBottomMini>
          <MiniBoxTop>
            <img src={walking} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={liquid} alt="mask-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={pills} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={thermometer} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={mask} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
       </CounterMedicineBottom>
       <hr />
    </MotherAndBaby>
  
    <MotherAndBaby>
    <MotherAndBabyTop>
        <CounterMedicineTopLeft>
          <h1>Personal Care</h1>
          <p>Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed facilisis molestie aliquam.</p>
        </CounterMedicineTopLeft>
        <CounterMedicineTopRight isHovered={activeButton === 5}
        onMouseEnter={() => setActiveButton(5)}
        onMouseLeave={() => setActiveButton(null)}>
        <p>View all</p>
        <span><i className="material-icons">keyboard_arrow_right</i></span>
        </CounterMedicineTopRight>
       </MotherAndBabyTop>
       <CounterMedicineBottom>
        <CounterMedicineBottomMini>
          <MiniBoxTop>
            <img src={walking} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={mask} alt="mask-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={liquid} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={thermometer} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
        <CounterMedicineBottomMini>
        <MiniBoxTop>
            <img src={microscope} alt="microscope-img" />
          </MiniBoxTop>
          <MiniBoxBottom>
            <h1>Tincidunt accumsan facilisis</h1>
            <Rating size='small' name="read-only" value={value} readOnly />
          <PriceSale><p className='sale'>$86</p> <p>$46</p></PriceSale>
          <button>Add to cart</button>
          </MiniBoxBottom>
        </CounterMedicineBottomMini>
       </CounterMedicineBottom>
    </MotherAndBaby>
  </Categories>
  </>  
  )
}

export default ShopComponent