import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Edit = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, message, time } = useLoaderData();

  const handelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user?.displayName;
    const email = user?.email;
    const userImg = user?.photoURL;
    const message = form.message.value;

    const review = {
      review: _id,
      reviewName: title,
      userName,
      email,
      message,
      userImg,
      time: time,
    };
    console.log(review);
  };

  return (
    <div className="m-10">
      <form onSubmit={handelUpdate}>
        <h2 className="text-4xl my-6">You are about to review: {title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            defaultValue={user?.displayName}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 my-4 w-full"
          placeholder="Your Message"
          defaultValue={message}
          required
        ></textarea>

        <input
          className="btn btn-primary btn-outline hover:rounded-full"
          type="submit"
          value="Saved Change"
        />
      </form>
    </div>
  );
};

export default Edit;
