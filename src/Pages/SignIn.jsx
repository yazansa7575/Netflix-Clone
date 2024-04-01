import { Link } from "react-router-dom";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { stringSliceError } from "../Utilse";

const SignIn = () => {
  let emailRef = useRef();
  let passRef = useRef();
  let nav = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let { signIn } = useContext(AuthContext);

  const bttonClicked = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(emailRef?.current?.value, passRef?.current?.value);
      nav("/");
    } catch (error) {
      setError(stringSliceError(error.message));
    }
    setIsLoading(false);
  };
  return (
    <div className=" relative flex items-center justify-center min-h-screen">
      {/* bg-  */}
      <div className=" hidden md:block absolute top-0 left-0 z-[-4]  w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/582aecb2-9125-46db-a907-3762d36d1f11/NL-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className=" w-full h-full object-cover   "
        />
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
      </div>
      {/* form  */}
      <form className="z-[4]  bg-black-20 p-10 w-full md:w-[350px]  rounded  bg-black/75 sm:mt-0 mt-20">
        <h3 className=" text-2xl font-bold">Sign In</h3>
        {error && <div className="p-3 bg-red-600 my-4 w-full ">{error}</div>}
        <div className="flex flex-col gap-3 mt-4">
          <>
            <label className=" text-md ">Email</label>
            <input className="p-3  text-black" type="email" ref={emailRef} />
          </>
          <>
            <label className=" text-md ">Password</label>
            <input className="p-3  text-black" type="password" ref={passRef} />
          </>
          <button
            className={`  p-3 mt-2 ${isLoading ? "bg-gray-600" : "bg-red-600"}`}
            onClick={(e) => bttonClicked(e)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
          <p
            className=" cursor-pointer"
            onClick={() => alert(`Why \n go make other one 😒 `)}
          >
            Forgot password?
          </p>
          <p>
            New to Netflix ?{" "}
            <Link to="/SignUp" className=" cursor-pointer">
              Sign up now.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
