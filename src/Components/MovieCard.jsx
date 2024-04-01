import React, { useContext, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "../FireBase";

const MovieCard = ({ data }) => {
  // like
  const [like, setLike] = useState(false);
  // get current User from store
  const { currentUser } = useContext(AuthContext);
  // the movie ID
  const movieId = doc(db, "Users", `${currentUser?.email}`);

  const likeClick = async () => {
    if (currentUser?.email) {
      setLike(!like);

      // update Doc
      await updateDoc(movieId, {
        userList: arrayUnion({
          id: data?.id,
          title: data?.title,
          backdrop_path: data?.poster_path,
        }),
      });
    } else {
      alert("please login first");
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
          onClick={likeClick}
          className="absolute top-2 left-2  text-lg group-hover:visible  invisible font-bold"
        >
          {like ? (
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
