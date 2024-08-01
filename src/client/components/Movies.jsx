import React, { useState } from 'react';
import MovieCard from './MovieCard';

const Movies = ({movies, editMovie, deleteMovie}) => {
    return (
        <div className="movie-container">
            <h1>Movies</h1>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} editMovie={editMovie} deleteMovie={deleteMovie} />
                ))}
            </ul>
        </div>
    );
};

export default Movies;