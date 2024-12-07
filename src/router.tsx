import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import HomeComponent from "./components/Home/home"


const RouterComponents = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<HomeComponent/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default RouterComponents