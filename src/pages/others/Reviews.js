import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Review from "../Services/Review";

const Reviews = () => {
  useTitle("My Reviews");
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://server-seven-silk.vercel.app/review?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [url]);

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

  if (reviews.length >= 0) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {reviews.map((review) => (
          <Review
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">
        You have no review Add Review please
        <strong>
          Visit for adding
          <Link className="text-blue-500" to="/services">
            Review
          </Link>
        </strong>
      </h1>
    </div>
  );
  /* {reviews.length < -1 ? (
        <div>
          <h1 className="text-5xl font-bold text-center">
            You have no review Add Review please
            <strong>
              Visit for adding{" "}
              <Link className="text-blue-500" to="/services">
                Review
              </Link>
            </strong>
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      )} */
};

export default Reviews;
