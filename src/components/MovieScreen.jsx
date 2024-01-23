import React from 'react'

function MovieScreen({ watchlist, page, setPage, movieList }) {
    
    const movieDisplay = movieList.map((movie) => {
        return <h2>{movie.original_title}</h2>
    })

  return (
      <div className='page'>
          <h1>Homero's Movie Theatre</h1>
          <h3>Add a movie to your watchlist</h3>
          <div className="movie-container">{movieDisplay}</div>
    </div>
  )
}

export default MovieScreen