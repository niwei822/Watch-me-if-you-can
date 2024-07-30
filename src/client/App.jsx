import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";
import MovieForm from "./components/MovieForm";
import "./App.css";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get("/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("Error fetching movies:", err);
      });
  }, []);

  const addMovie = (newMovie) => {
    axios.post("/api/movies", newMovie)
      .then((res) => {
        setMovies([...movies, res.data]);
        setShowForm(false);
        alert("Movie has been added!");
      })
      .catch((err) => {
        console.log("Error adding movie:", err);
        alert("Error adding movie. Please try again.");
        setShowForm(true);
      });
  }

  return (
    <div>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <MovieForm addMovie={addMovie} /> : <Movies movies={movies} />}
    </div>
  );
}

export default App;
