import React from "react";

const NaveBar = () => {
  return (
    <div className="flex  flex-wrap gap-3 justify-between items-center w-full p-5  absolute z-[100]">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 ">NETFLIX</h2>
      <div>
        <button className=" p-2 px-5  mr-2  ">Sign In</button>
        <button className="buttonWithBg p-2 px-5 bg-red-600  rounded ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NaveBar;
