import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { banner, price, title, details, _id } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={banner}>
            <img src={banner} style={{ objectFit: "cover" }} alt={title} />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details.slice(0, 100) + "........"}</p>
        <div className="card-actions justify-between">
          <p>
            <strong className="text-warning">Price:${price}</strong>
          </p>
          <Link to={`/service/${_id}`}>
            <button className="btn btn-outline btn-primary hover:rounded-full">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
