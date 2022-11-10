import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  const questions = useLoaderData();
  useTitle("Blog");
  return (
    <div className="m-20">
      {questions.map((question) => (
        <div
          key={question?._id}
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            {question?.qs}
          </div>
          <div className="collapse-content">
            <p>{question?.ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
