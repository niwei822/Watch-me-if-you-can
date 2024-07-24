import React from 'react'

function MovieForm(addMovie
    ) {

  const handleForm = (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      poster_path: e.target.poster.value,
      overview: e.target.overview.value,
      release_date: e.target.release_date.value
    }
    addMovie(newMovie)
  }
  return (
    <div className="movie-form">
      <h1>Add a Moive</h1>
      <form onSubmit={handleForm}>
        <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="Title" />
        </div>
        <div>
        <label htmlFor="poster">Poster</label>
        <input id="poster" type="text" placeholder="Poster URL" />
        </div>
        <div>
        <label htmlFor="overview">Overview</label>
        <textarea id="overview" placeholder="Overview"></textarea>
        </div>
        <div>
        <label htmlFor="release_date">Release Date</label>
        <input id="release_date" type="text" placeholder="Release Date" />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default MovieForm
