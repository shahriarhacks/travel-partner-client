import React from "react";
import travel from "../../../assets/Animation/travel.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="hero">
          <div className="hero-content text-center">
            <div className="w-full mx-auto mt-10">
              <h1 className="text-4xl font-bold">Travel Partner</h1>
              <p className="py-6 text-xl">
                World's qualified traveler.
                <br />
                Believe in Humanity.
              </p>
              <Link to="/services">
                <button className="btn btn-outline btn-primary hover:rounded-full">
                  Get Started
                </button>
              </Link>
              <div className="mt-8">
                <p>
                  Travel is the movement of people between distant geographical{" "}
                  <br />
                  locations. Travel can be done by foot, bicycle, automobile,{" "}
                  <br />
                  train, boat, bus, airplane, ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-3/4 mx-auto">
        <Lottie animationData={travel} loop={true} />
      </div>
    </div>
  );
};

export default Banner;
