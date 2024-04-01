import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NaveBar = () => {
  const nav = useNavigate();

  const { currentUser, logOut } = useContext(AuthContext);

  const signOutClicked = async () => {
    await logOut();
    nav("/");
  };

  return (
    <div className="flex  flex-wrap gap-3 justify-between items-center w-full p-5  absolute z-[100]">
      <Link to="/">
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 ">
          NETFLIX
        </h2>
      </Link>
      <div>
        {currentUser ? (
          <>
            <Link to="/UserProfile">
              <button className=" sm:p-2 sm:px-5  sm:mr-2 m-2 ">Profile</button>
            </Link>
            <button
              className="buttonWithBg sm:p-2 sm:px-5 p-2 m-2  bg-red-600  rounded "
              onClick={signOutClicked}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/SignIn">
              <button className="sm:p-2 sm:px-5  sm:mr-2 m-2 ">Sign In</button>
            </Link>
            <Link to="/SignUp">
              <button className="buttonWithBg sm:p-2 sm:px-5  sm:mr-2 m-2 p-2 bg-red-600  rounded ">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NaveBar;
