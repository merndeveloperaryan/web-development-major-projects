import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="w-full min-h-screen flex flex-wrap gap-8 mt-10 bg-[#1F1E24] overflow-hidden py-5">
      {data &&
        data.map((c, i) => (
          <Link
            key={i}
            className="w-56 min-h-72 shadow-[8px_8px_18px_8px_rgba(0,0,0,0.5)]"
          >
            <img
              className="h-3/4 w-full object-cover object-center"
              src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path
              }`}
              alt=""
            />
            <h1 className="text-sm font-bold text-zinc-400 mt-5 mb-5 px-1">
              {c.title || c.original_title || c.name || c.original_name}
            </h1>
          </Link>
        ))}
    </div>
  );
};

export default Cards;
