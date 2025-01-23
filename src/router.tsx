import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/main/Footer/Footer";
import Navbar from "./components/main/Navbar/Navbar";
import HomeComponent from "./components/main/Home/home";
import AboutUs from "./components/PAGES/About/about";
import ShopComponent from "./components/main/Shop/shop";
import ServicesComponent from "./components/main/Services/services";
import BlogComponent from "./components/main/Blog/blog";
import ContactComponent from "./components/main/Contact/contact";
import TrackComponent from "./components/PAGES/TrackOrder/track";
import LocationComponent from "./components/PAGES/Locations/location";
import PricingComponent from "./components/PAGES/Pricing/pricing";
import TeamComponent from "./components/PAGES/Team/team";
import TestimonialComponent from "./components/PAGES/Testimonial/testimonial";
import FaqComponent from "./components/PAGES/FAQ/faq";
import ComingsoonComponent from "./components/PAGES/ComingSoon/comingsoon";
import PopupComponent from "./components/PAGES/Popup/popup";
import NotFound from "./components/PAGES/404/404";
import BlogDetail from "./components/main/blog-DETAILS/blogDetail";
import { useState } from "react";
import LoginComponent from "./components/main/Login/LoginComponent";
import SignUp from "./components/main/Login/SignUp";

const RouterComponents = () => {
  const [count, setCount] = useState<number>(0);
  let location = useLocation();

  const hiddenNavbar =
    location.pathname !== "/comingsoon" &&
    location.pathname !== "/popup" &&
    location.pathname !== "/login" &&
    location.pathname !== "/signUp";

  return (
    <>
      {hiddenNavbar && <Navbar count={count} />}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/shop"
          element={<ShopComponent setCount={setCount} count={count} />}
        />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/blog" element={<BlogComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/track" element={<TrackComponent />} />
        <Route path="/location" element={<LocationComponent />} />
        <Route path="/pricing" element={<PricingComponent />} />
        <Route path="/team" element={<TeamComponent />} />
        <Route path="/testimonial" element={<TestimonialComponent />} />
        <Route path="/faq" element={<FaqComponent />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/comingsoon" element={<ComingsoonComponent />} />
        <Route path="/popup" element={<PopupComponent />} />
        <Route path="/blogDetail/:id" element={<BlogDetail />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      {hiddenNavbar && <Footer />}
    </>
  );
};

export default RouterComponents;
