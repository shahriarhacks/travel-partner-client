import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import About from "../shared/About";
import Contact from "../shared/Contact";
import ServiceCard from "../shared/ServiceCard";
import Subscribed from "../shared/Subscribed";

import Banner from "./components/Banner";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://server-seven-silk.vercel.app/home/packages")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      <About />
      <>
        <h1 className="text-2xl text-center font-bold text-sky-400">
          Services
        </h1>
        <div className="my-14 mx-10 grid grid-cols-1 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to="/services">
            <button className="btn btn-outline btn-success hover:rounded-full text-center">
              More Services
            </button>
          </Link>
        </div>
      </>
      <Contact />
      <Subscribed />
    </div>
  );
};

export default Home;
