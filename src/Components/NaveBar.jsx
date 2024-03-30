import React from "react";
import { Link } from "react-router-dom";

const NaveBar = () => {
  return (
    <div className="flex  flex-wrap gap-3 justify-between items-center w-full p-5  absolute z-[100]">
      <Link to="/">
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 ">
          NETFLIX
        </h2>
      </Link>
      <div>
        <Link to="/SignIn">
          <button className=" p-2 px-5  mr-2  ">Sign In</button>
        </Link>
        <Link to="/SignUp">
          <button className="buttonWithBg p-2 px-5 bg-red-600  rounded ">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NaveBar;
