import React from 'react'

function MovieCard({movie, addMovie}) {
  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
              />
              <h3>{movie.original_title}</h3>
          </div>
          <button className='add-btn' onClick={() => addMovie(movie)}>Add to List</button>
    </div>
  );
}

export default MovieCard