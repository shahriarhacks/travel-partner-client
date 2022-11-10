import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = ({ review, handleDelete }) => {
  const { user } = useContext(AuthContext);

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

      {user?.email === review.email ? (
        <div className="flex justify-between">
          <div>
            <button
              onClick={() => handleDelete(review?._id)}
              className="btn btn-outline btn-warning hover:rounded-full"
            >
              Delete
            </button>
          </div>
          <div>
            <Link to={`/edit/${review?._id}`}>
              <button className="btn btn-outline btn-primary hover:rounded-full">
                Edit
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Review;
