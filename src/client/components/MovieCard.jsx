import React from 'react'

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
    </div>
  )
}

export default MovieCard
