
import { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import "./movies.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=74288c2d&s=${query}&type=movie`
      );
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
console.log(movies)
  return (
    <div className="movies-page">
      <SearchBar onSearch={fetchMovies} />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
