import { Cart, NavbarBottom, NavbarBottomMain, NavbarMain, NavbarTop, NavbarTopLeft, NavbarTopMenu, NavbarTopRight, NavbarTopRightNumber, NavbarTopRightTime, Pages, PagesPopper, PopperInf } from "./styled"
import clock from '../../assets/navbar-img/clock.svg'
import operator from '../../assets/navbar-img/operator.svg'
import logo from '../../assets/navbar-img/pharmabee-logo.svg'
import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';






const Navbar = () => {


  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <NavbarMain>
      <NavbarTop>
        <NavbarTopMenu>
          <NavbarTopLeft>
            <p>Subscribes now to get a discount on every shopping here</p>
            <button>Subscribe Now</button>
          </NavbarTopLeft>
          <NavbarTopRight>
            <NavbarTopRightTime>
              <img src={clock} alt="clock-icon" />
              <h1>Monday 07.00 am - 12.00 pm Sunday</h1>
            </NavbarTopRightTime>
            <NavbarTopRightNumber>
              <img src={operator} alt="operator-icon" />
              <h1>021 0002 345</h1>
            </NavbarTopRightNumber>
          </NavbarTopRight>
        </NavbarTopMenu>
      </NavbarTop>

      <NavbarBottom>
        <NavbarBottomMain>
          <img src={logo} alt="logo-icon" />
          <Pages>
            <p>Home</p>
            <p>Shop</p>
            <p>Services</p>
            <PagesPopper onClick={handleClick('bottom-start')}>
            
      <Popper 
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper >
              <Typography sx={{ p: 2, marginTop:'-10px' }}>
                <PopperInf>
                <p>About us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
                <p>404</p>
                <p>Coming soon</p>
                </PopperInf>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
     <p >Pages</p>
     <i  className='fas fa-angle-down' style={{fontSize: '16px'}} ></i>
         </PagesPopper >
           
           <p>Blog</p>
            <p >Contact</p>
          </Pages>
          <Cart>
          <i className='fas fa-search'></i>
          <Badge badgeContent={4} color="success">
      <ShoppingCartIcon color="action" />
    </Badge>
          </Cart>
        </NavbarBottomMain>
      </NavbarBottom>
    </NavbarMain>
  );
};

export default Navbar