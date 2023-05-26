import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const [isLoading,setIsLoading] = useState(false)

  async function fetchMoviesHandler() {
    setIsLoading(true)
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
    setIsLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length >0  && <MoviesList movies={movies} />}
        {!isLoading && movies.length ===0  && <p>영화가 없습니다</p>}
        {isLoading && <p>로딩중입니다</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
