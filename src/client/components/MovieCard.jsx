import React, { useState } from 'react'

function MovieCard({ movie, editMovie, deleteMovie }) {
  const [edit, setEdit] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState(movie);

  const handleEdit = (e) => {
    e.preventDefault();
    editMovie(movie.id, updatedMovie);
    setEdit(false);
  };
  if(edit) {
    return (
      <div className='movie-card'>
        <h2>Edit Movie</h2>
        <form onSubmit={handleEdit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={updatedMovie.title}
              onChange={(e) => setUpdatedMovie({ ...updatedMovie, title: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="poster_path">Poster</label>
            <input
              type="text"
              placeholder="Poster URL"
              value={updatedMovie.poster_path}
              onChange={(e) => setUpdatedMovie({ ...updatedMovie, poster_path: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="overview">Overview</label>
            <textarea
              placeholder="Overview"
              value={updatedMovie.overview}
              onChange={(e) => setUpdatedMovie({ ...updatedMovie, overview: e.target.value })}
            ></textarea>
          </div>
          <div>
            <label htmlFor="release_date">Release Date</label>
            <input
              type="text"
              placeholder="Release Date"
              value={updatedMovie.release_date}
              onChange={(e) => setUpdatedMovie({ ...updatedMovie, release_date: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setEdit(false)}>Cancel</button>
        </form>
      </div>
    );
  }
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
}

export default MovieCard
