import {
  Cart,
  NavbarBottom,
  NavbarBottomMain,
  NavbarMain,
  NavbarTop,
  NavbarTopLeft,
  NavbarTopMenu,
  NavbarTopRight,
  NavbarTopRightNumber,
  NavbarTopRightTime,
  Pages,
  PagesPopper,
  PopperInf,
} from "./styled";
import clock from "../../assets/navbar-img/clock.svg";
import operator from "../../assets/navbar-img/operator.svg";
import logo from "../../assets/navbar-img/pharmabee-logo.svg";
import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const timeoutRef = React.useRef<number | null>(null); // Use number for browser compatibility

  const handleMouseEnter =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current); // Clear any existing timeout
      }
      setAnchorEl(event.currentTarget);
      setOpen(true); // Show the popper
      setPlacement(newPlacement);
    };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      setAnchorEl(null);
    }, 500);
  };

  React.useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={location.pathname === "/" ? "active" : ""}>Home</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/shop">
              <p className={location.pathname === "/shop" ? "active" : ""}>
                Shop
              </p>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/services">
              <p className={location.pathname === "/services" ? "active" : ""}>
                Services
              </p>
            </Link>
            <PagesPopper
              onMouseEnter={handleMouseEnter("bottom-start")}
              onMouseLeave={handleMouseLeave}
            >
              <Popper
                sx={{ zIndex: 1200 }}
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography sx={{ p: 2, marginTop: "24px" }}>
                        <PopperInf>
                          <Link style={{ textDecoration: "none" }} to="/about">
                            <p
                              className={
                                location.pathname === "/about" ? "active" : ""
                              }
                            >
                              About us
                            </p>
                          </Link>
                          <Link style={{ textDecoration: "none" }} to="/track">
                            <p
                              className={
                                location.pathname === "/track" ? "active" : ""
                              }
                            >
                              Track Order
                            </p>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/location"
                          >
                            <p
                              className={
                                location.pathname === "/location"
                                  ? "active"
                                  : ""
                              }
                            >
                              Locations
                            </p>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/pricing"
                          >
                            <p
                              className={
                                location.pathname === "/pricing" ? "active" : ""
                              }
                            >
                              Pricing
                            </p>
                          </Link>
                          <Link style={{ textDecoration: "none" }} to="/team">
                            <p
                              className={
                                location.pathname === "/team" ? "active" : ""
                              }
                            >
                              Team
                            </p>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/testimonial"
                          >
                            <p
                              className={
                                location.pathname === "/testimonial"
                                  ? "active"
                                  : ""
                              }
                            >
                              Testimonials
                            </p>
                          </Link>
                          <Link style={{ textDecoration: "none" }} to="/faq">
                            <p
                              className={
                                location.pathname === "/faq" ? "active" : ""
                              }
                            >
                              FAQ
                            </p>
                          </Link>
                          <Link style={{ textDecoration: "none" }} to="/404">
                            <p
                              className={
                                location.pathname === "/404" ? "active" : ""
                              }
                            >
                              404
                            </p>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/comingsoon"
                          >
                            <p
                              className={
                                location.pathname === "/comingsoon"
                                  ? "active"
                                  : ""
                              }
                            >
                              Coming soon
                            </p>
                          </Link>
                          <Link style={{ textDecoration: "none" }} to="/popup">
                            <p
                              className={
                                location.pathname === "/popup" ? "active" : ""
                              }
                            >
                              Popup
                            </p>
                          </Link>
                        </PopperInf>
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
              <p>Pages</p>
              <i className="fas fa-angle-down" style={{ fontSize: "16px" }}></i>
            </PagesPopper>

            <Link style={{ textDecoration: "none" }} to="/blog">
              <p className={location.pathname === "/blog" ? "active" : ""}>
                Blog
              </p>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <p className={location.pathname === "/contact" ? "active" : ""}>
                Contact
              </p>
            </Link>
          </Pages>
          <Cart>
            <i className="fas fa-search"></i>
            <Badge badgeContent={4} color="success">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Cart>
        </NavbarBottomMain>
      </NavbarBottom>
    </NavbarMain>
  );
};

export default Navbar;
