import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("Add Services");
  const handelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const duration = form.duration.value;
    const price = form.price.value;
    const banner = form.banner.value;
    const thumb = form.thumb.value;
    const about = form.about.value;
    const details = form.details.value;
    const data = {
      title,
      duration,
      about,
      details,
      price,
      banner,
      thumb,
    };
    fetch("https://server-seven-silk.vercel.app/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Package Added Successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="m-10">
      <form onSubmit={handelUpdate}>
        <input
          name="title"
          type="text"
          placeholder="Package Title"
          className="input input-ghost w-full my-4  input-bordered"
          required
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="price"
            type="text"
            placeholder="Package Price"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="duration"
            type="text"
            placeholder="You Package Duration Time"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="banner"
            type="text"
            placeholder="Your Package Banner Image URL"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="thumb"
            type="text"
            placeholder="Your Package Thumb Image URL"
            className="input input-ghost w-full  input-bordered"
            required
          />
        </div>
        <textarea
          name="about"
          className="textarea textarea-bordered h-24 my-4 w-full"
          placeholder="About Your Package"
          required
        ></textarea>
        <textarea
          name="details"
          className="textarea textarea-bordered h-44 my-4 w-full"
          placeholder="Details Your Packages"
          required
        ></textarea>

        <input
          className="btn btn-primary btn-outline hover:rounded-full"
          type="submit"
          value="Add Package"
        />
      </form>
    </div>
  );
};

export default AddServices;
