import React from "react";

const Subscribed = () => {
  return (
    <div className="my-20">
      <h1 className="text-center font-bold text-2xl text-sky-400 ">
        NEWSLETTER
      </h1>
      <p className="text-orange-400 my-4 text-center">
        Subscribe to our newsletter and get 7% off your first purchase
      </p>
      <form className="flex flex-col md:flex-row w-full justify-center">
        <div className=" relative ">
          <input
            type="text"
            id='"form-subscribe-Subscribe'
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Email"
          />
        </div>
        <button
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribed;
