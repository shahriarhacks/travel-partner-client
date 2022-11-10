import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/image/about.jpg";
import useTitle from "../../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className="my-16">
      <h3 className="text-2xl text-center text-sky-400 font-bold">About Us</h3>
      <div className="m-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div>
          <img src={about} className="w-full rounded" alt="About Us" />
        </div>
        <div>
          <h1 className="text-5xl font-semibold">Travel is the part of life</h1>
          <p className="mt-4">
            Travel is the movement of people between distant geographical
            locations. Travel can be done by foot, bicycle, automobile, train,
            boat, bus, airplane, ship or other means, with or without luggage,
            and can be one way or round trip
          </p>
          <p className="my-4">
            Since time immemorial, humans and animals alike; have valued the
            importance of travel. One of the greatest advantages of travel is
            that it takes you on a journey into new worlds that you would have
            never been exposed to. Traveling allows you to meet people of
            different cultures, with diverse traditions and distinctive
            lifestyles. As you travel and discover these newly found worlds,
            take a moment to reflect not only on the differences that you
            observe in their lifestyle and behavior but on the things that unite
            us. This practice will not only broaden your mind but will allow
            your authentic self to surface.
          </p>
          <Link to="/services">
            <button className="btn btn-outline hover:rounded-full btn-primary">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
