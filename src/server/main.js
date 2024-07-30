import express from "express";
import ViteExpress from "vite-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// Define __filename and __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const dataPath = path.resolve(__dirname, "../data/movies.json");
const rawData = fs.readFileSync(dataPath);
const data = JSON.parse(rawData);
const movies = data.results;
app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});
let movieId = movies.length + 1;

app.post("/api/movies", (req, res) => {
  const newMovie = req.body;
  newMovie.id = movieId++;
  movies.push(newMovie);
  res.status(201).json(newMovie);
})
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
