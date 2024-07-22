import { useState } from "react";
import Movies from "./components/Movies";
import movieData from "../data/movies.json";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(movieData.results);
  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}

export default App;
