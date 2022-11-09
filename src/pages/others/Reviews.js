import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "../Services/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/review?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
