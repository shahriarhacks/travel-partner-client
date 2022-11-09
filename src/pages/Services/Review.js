import React from "react";
import { Link } from "react-router-dom";

const Review = ({ review }) => {
  return (
    <div className="p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-100 text-gray-900">
      <div className="flex space-x-4">
        <img
          alt=""
          src={review?.userImg}
          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <Link to="./" className="text-sm font-semibold">
            {review?.userName}
          </Link>
          <span className="text-xs text-gray-400">{review?.time}</span>
        </div>
      </div>
      <div>
        <p className="my-2">Review for:{review?.reviewName}</p>
        <p>Review Message: {review?.message}</p>
      </div>
    </div>
  );
};

export default Review;
