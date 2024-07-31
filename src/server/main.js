import express from "express";
import ViteExpress from "vite-express";
import controllerFuncs from "../../moviesController.js";

const { getMovies, postMovie, updateMovie, deleteMovie } = controllerFuncs;

const app = express();
app.use(express.json());

app.get("/api/movies", getMovies);
app.post("/api/movies", postMovie);
app.put("/api/movies/:id", updateMovie);
app.delete("/api/movies/:id", deleteMovie);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
