import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { banner, price, title, details, _id } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={banner} alt={title} />
        {/* <PhotoView src={imageURL}>
          <img src={imageURL} style={{ objectFit: "cover" }} alt="" />
        </PhotoView> */}
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
