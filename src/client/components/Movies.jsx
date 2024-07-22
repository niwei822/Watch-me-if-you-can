import React, { useState } from 'react';
import moviesData from '../../data/movies.json';

const Movies = ({movies}) => {
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;