import React, { useContext, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "../FireBase";

const MovieCard = ({ data, icon, allMovie }) => {
  // like
  const [like, setLike] = useState();
  // get current User from store
  const { currentUser } = useContext(AuthContext);
  // the movie ID
  const movieId = doc(db, "Users", `${currentUser?.email}`);

  const iconClick = async () => {
    // if user log in
    if (currentUser?.email) {
      // edit mode
      if (icon === "del") {
        // delete the movie when user click -x- button from array in frobt then push it to firebase
        const resulte = allMovie.filter((e) => {
          return e?.id !== data?.id;
        });
        // update Doc
        await updateDoc(movieId, {
          userList: resulte,
        });
      }
      // default mode
      else {
        setLike(!like);
        // update Doc
        await updateDoc(movieId, {
          userList: arrayUnion({
            id: data?.id,
            title: data?.title,
            backdrop_path: data?.poster_path,
          }),
        });
      }
    } else {
      alert("please login first 😊");
    }
  };
  return (
    <>
      {/* movie_card  */}
      <div className="w-[220px] h-[120px] md:w-[300px] md:h-[150px]  inline-block relative mr-2 cursor-pointer rounded-md overflow-hidden  group ">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            data?.backdrop_path || data?.poster_path
          }`}
          alt={data?.title}
          className="w-full h-full object-cover "
        />
        <div className="duration-300 w-full h-full bg-transparent group-hover:bg-black/30   absolute top-0 left-0 p-2  "></div>
        <p className="absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-lg group-hover:visible  invisible font-bold">
          {data?.title}
        </p>
        <p
          onClick={iconClick}
          className="absolute top-2 left-2  text-lg group-hover:visible  invisible font-bold"
        >
          {icon ? (
            <div className="text-white drop-shadow-md ">X</div>
          ) : like ? (
            <FaHeart className="text-red-600  drop-shadow-md " />
          ) : (
            <FaRegHeart />
          )}
        </p>
      </div>
      {/* movie_card_end  */}
    </>
  );
};

export default MovieCard;
