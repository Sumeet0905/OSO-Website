import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Displaybooks from "./components/Navbar/Displaybooks/Displaybooks";
import Banner from "./components/Navbar/Banner/Banner";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ContactUs from "./components/Contact Us/Contact Us";
const App = () => {
  return (
  <div className="overflow-x-hidden bg-white2 text-dark">
   {/* <div className="realtive overflow-hidden">  
   <Navbar />
    <Hero />
    </div>
    <Displaybooks />
    <Banner />
    <Bestsellers />
    <Testimonial />
    <Footer />
    <About />*/}
    <ContactUs />
    </div>
  );
};

export default App
