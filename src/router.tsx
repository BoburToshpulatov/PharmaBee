import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import HomeComponent from "./components/Home/home"
import AboutUs from "./components/About/aboutUs"
import ShopComponent from "./components/Shop/shop"
import ServicesComponent from "./components/Services/services"
import BlogComponent from "./components/Blog/blog"
import ContactComponent from "./components/Contact/contact"


const RouterComponents = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<HomeComponent/>}/>
      <Route path="/about" element = {<AboutUs/>}/>
      <Route path="/shop" element = {<ShopComponent/>}/>
      <Route path="/services" element = {<ServicesComponent/>}/>
      <Route path="/blog" element = {<BlogComponent/>}/>
      <Route path="/contact" element = {<ContactComponent/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default RouterComponents