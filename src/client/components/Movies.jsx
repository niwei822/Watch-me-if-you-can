import React, { useState } from 'react';
import MovieCard from './MovieCard';

const Movies = ({movies}) => {
    return (
        <div className="movie-container">
            <h1>Movies</h1>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default Movies;