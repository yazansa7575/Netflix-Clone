import React, { useContext, useEffect, useRef, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../FireBase";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const UserProfile = () => {
  // slider
  const slider = useRef();
  // goRight
  const goRight = () => {
    slider.current.scrollLeft += +500;
  };
  // goLeft
  const goLeft = () => {
    slider.current.scrollLeft += -500;
  };
  // all movies
  const [movies, setMovies] = useState();
  // curren tUser
  const { currentUser } = useContext(AuthContext);
  //get all movies [user List]
  useEffect(() => {
    onSnapshot(doc(db, "Users", currentUser?.email), (doc) => {
      setMovies(doc?.data()?.userList);
      console.log("doc?.data()?.userList");
      console.log(doc?.data()?.userList);
    });
  }, [currentUser?.email]);

  return (
    <div>
      {/* bg  */}
      <div className=" relative  w-full h-[400px]">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/582aecb2-9125-46db-a907-3762d36d1f11/NL-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className=" w-full h-full object-cover   "
        />
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="absolute top-[50%] ml-5 text-2xl md:text-4xl  font-bold">
          My List
        </div>
      </div>
      <div className="my-5">
        <h2 className="p-3 my-3  pb-0 md:text-xl  text-white relative group z-[99]">
          My List
          <span className=" duration-150 mx-3  group-hover:w-[100px]  w-[10px] h-[2px] bg-red-600 absolute bottom-[-5px] left-0 "></span>
        </h2>
        <div className=" relative">
          <div
            onClick={goLeft}
            className=" absolute top-[50%] left-[2%] translate-y-[-50%] text-4xl font-bold    opacity-50 hover:opacity-100 cursor-pointer z-10"
          >
            <MdChevronLeft />
          </div>
          {/* slider  */}
          <div
            ref={slider}
            className=" relative p-3 my-4 mt-0 w-full h-full  whitespace-nowrap scrollbar-hide  scroll-smooth overflow-x-scroll   "
          >
            {movies?.length > 0
              ? movies.map((m, index) => {
                  return <MovieCard data={m} key={index} />;
                })
              : ""}
          </div>
          {/* slider  */}
          <div
            onClick={goRight}
            className=" absolute top-[50%] right-[2%] translate-y-[-50%] text-4xl font-bold    opacity-50 hover:opacity-100 cursor-pointer z-10"
          >
            <MdChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
