import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Showcase from "./components/showcase";
import Social from "./components/social";
import Production from "./components/production";
import FeatureSection from "./components/katalog";
import ComponentShowcase from "./components/box";
import Testimonials from "./components/box2";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <hr className="text-gray-300"/>
      {/* <Showcase/> */}
      <Social/>
      <Production/>
      <FeatureSection/>
      <ComponentShowcase/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
