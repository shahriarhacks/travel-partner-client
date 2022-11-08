import React from "react";
import About from "../shared/About";
import Contact from "../shared/Contact";
import Subscribed from "../shared/Subscribed";

import Banner from "./components/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Contact />
      <Subscribed />
    </div>
  );
};

export default Home;
