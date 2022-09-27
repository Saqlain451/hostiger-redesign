import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hosting from "./pages/Hosting/Hosting";
import Contact from "./pages/Contact/Contact";
import Vps from "./pages/Vps/Vps";
import Domain from "./pages/Domain/Domain";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.js";
import ScrollToTop from "./components/Scroll";
const App = () => {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
        <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/vps" element={<Vps />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/carousel" element={<Carousel/>} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
