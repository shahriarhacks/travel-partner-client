import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Review from "./Review";

const Service = () => {
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  const { id } = useParams();
  const { _id, title, banner, thumb, duration, price, about, details } =
    service;
  useEffect(() => {
    fetch("https://server-seven-silk.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.filter((d) => d.review === id);
        setReviews(newData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = (id) => {
    fetch(`https://server-seven-silk.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully");
          const remaining = reviews.filter((rv) => rv._id !== id);
          setReviews(remaining);
        }
      });
  };
  return (
    <div>
      <div className="m-10">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={thumb} className="w-3/4 h-3/4 rounded-xl" alt={title} />
          </figure>
          <div className="card-body mx-20">
            <h2 className="card-title">{title}</h2>
            <p>{about}</p>
            <div className="card-actions justify-between my-4">
              <div>
                <p>
                  <strong className="text-primary text-xl">
                    Price:${price}
                  </strong>
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-primary text-xl">
                    Package Duration:{duration}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 my-10 shadow-xl">
          <figure className="w-1/2">
            <img src={banner} className="w-full rounded-lg" alt="Album" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">{title}</h2>
            <p>{details}</p>
            <div className="card-actions justify-between my-4">
              <Link to={`/give-review/${_id}`}>
                <button className="btn btn-outline btn-warning hover:rounded-full">
                  Give Review
                </button>
              </Link>
              <Link to={`/checkout/${_id}`}>
                <button className="btn btn-outline btn-primary hover:rounded-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Review Section */}
      <div className="my-20 mx-10">
        <h1 className="text-4xl font-bold text-center text-sky-400 my-5">
          Review Section
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <Review
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
