import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  return (
    <div className="my-14 mx-10 grid grid-cols-1 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
