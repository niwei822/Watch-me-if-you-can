// moviesController.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, "./src/data/movies.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const movies = data.results;
let movieId = movies.length + 1;

const controllerFuncs = {
  getMovies: (req, res) => {
    res.status(200).json(movies);
  },
  postMovie: (req, res) => {
    const newMovie = req.body;
    newMovie.id = movieId++;
    movies.push(newMovie);
    res.status(201).json(movies);
  },
  updateMovie: (req, res) => {
    const id = req.params.id;
    const updatedMovie = req.body;
    const index = movies.findIndex((movie) => movie.id == id);
    if (index === -1) {
      return res.status(404).send("Movie not found");
    }
    movies[index] = { ...movies[index], ...updatedMovie };
    res.status(200).json(movies[index]);
  },
  deleteMovie: (req, res) => {
    const id = req.params.id;
    const index = movies.findIndex((movie) => movie.id == id);
    if (index === -1) {
      return res.status(404).send("Movie not found");
    }
    const deletedMovie = movies.splice(index, 1)[0];
    res.status(200).json(deletedMovie);
  },
};

export default controllerFuncs;
