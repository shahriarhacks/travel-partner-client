import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "../Services/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/review?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <>
      {reviews.length < -1 ? (
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
      )}
    </>
  );
};

export default Reviews;
