import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    const response = await fetch(`https://swapi.dev/api/films/`);
    const data = await response.json();
    const transforemdMovies = data.results.map((item) => {
      return {
        id: item.episode_id,
        title: item.title,
        openingText: item.opening_crawl,
        releaseDate: item.release_date,
      };
    });

    setMovies(transforemdMovies)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
