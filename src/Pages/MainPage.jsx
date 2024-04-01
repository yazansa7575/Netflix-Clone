import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import requests from "../Constants";
import Row from "../Components/Row.jsx";

const MainPage = () => {
  const [popularMovies, setPopularMovie] = useState([]);
  //   choose a randome movie from popularMovie
  let movie = popularMovies[Math.floor(Math.random() * popularMovies.length)];
  //   get all movies
  useEffect(() => {
    (async () => {
      let res = await axios.get(requests.requestPopular);
      setPopularMovie(res?.data?.results);
      // console.log(res.data.results);
    })();
  }, []);
  // spalice overview's movie
  const overviewMovieSlice = (str, num) => {
    if (num) {
      str = String(str).slice(0, num) + "...";
    }
    return str;
  };

  return (
    <>
      {/* hero sec  */}
      <div className=" w-full h-[100dvh] relative">
        <div className=" relative w-full h-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title}
            className=" w-full h-full object-cover"
          />
          <div className=" absolute top-0 w-full h-full bg-gradient-to-r from-black "></div>
        </div>
        <div className=" absolute top-[60%] sm:top-[50%]  translate-y-[-50%] p-4 md:p-8 ">
          <h3 className=" font-bold md:text-4xl text-3xl">{movie?.title}</h3>
          <div className="flex gap-2 my-4">
            <button className="  font-bold py-2 px-4 text-black bg-white rounded">
              Play
            </button>
            <button className="  font-bold py-2 px-4 text-white border border-white rounded">
              Wath Later
            </button>
          </div>
          <p className="text-md md:text-sm  text-gray-400 ">
            Released: {movie?.release_date}
          </p>
          <p className="text-md md:text-sm text-white my-2 md:w-[60%] w-[70%] ">
            {overviewMovieSlice(movie?.overview, 110)}
          </p>
        </div>
      </div>
      {/* row sec  */}
      <div className="bg-gradient-to-l from-gray-900 ">
        <Row title="Up coming" req={requests.requestUpcoming} />
        <Row title=" TopRated" req={requests.requestTopRated} />
        <Row title=" Trending" req={requests.requestTrending} />
        <Row title=" Popular" req={requests.requestPopular} />
        <Row title=" Horror" req={requests.requestHorror} />
      </div>
    </>
  );
};

export default MainPage;
