import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/home";
import AboutUs from "./components/PAGES/About/about";
import ShopComponent from "./components/Shop/shop";
import ServicesComponent from "./components/Services/services";
import BlogComponent from "./components/Blog/blog";
import ContactComponent from "./components/Contact/contact";
import TrackComponent from "./components/PAGES/TrackOrder/track";
import LocationComponent from "./components/PAGES/Locations/location";
import PricingComponent from "./components/PAGES/Pricing/pricing";
import TeamComponent from "./components/PAGES/Team/team";
import TestimonialComponent from "./components/PAGES/Testimonial/testimonial";
import FaqComponent from "./components/PAGES/FAQ/faq";
import NotFound from "./components/PAGES/404/404";
import ComingsoonComponent from "./components/PAGES/ComingSoon/comingsoon";
import PopupComponent from "./components/PAGES/Popup/popup";

const RouterComponents = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<ShopComponent />} />
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
      </Routes>
      <Footer />
    </>
  );
};

export default RouterComponents;
