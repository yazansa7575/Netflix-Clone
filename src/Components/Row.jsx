import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, req }) => {
  const [movies, setMovies] = useState();
  const slider = useRef();
  //   get movies
  useEffect(() => {
    (async () => {
      let res = await axios.get(req);
      setMovies(res?.data?.results);
      // console.log(res.data.results);
    })();
  }, []);
  // goRight
  const goRight = () => {
    slider.current.scrollLeft += +500;
  };
  // goLeft
  const goLeft = () => {
    slider.current.scrollLeft += -500;
  };

  
  return (
    <div>
      <h2 className="p-3  pb-0 md:text-xl  text-white relative group z-[99]">
        {title}
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
  );
};

export default Row;
