import { useState } from "react";
import Movies from "./components/Movies";
import movieData from "../data/movies.json";
import Header from "./components/Header";
import MovieForm from "./components/MovieForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(movieData.results);
  const [showForm, setShowForm] = useState(false);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  }
  return (
    <div>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <MovieForm /> : <Movies movies={movies} />}
    </div>
  );
}


export default App;
