import React from "react";
import MovieCard from "./MovieCard";

function Watchlist({ list, removeMovie }) {
  const movieDisplay = list.map((movie) => {
    return <MovieCard movie={movie} list={list} removeMovie={removeMovie} />;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default Watchlist;
