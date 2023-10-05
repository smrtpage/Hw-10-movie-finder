import { getTrending } from "../services/MoviesServices";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrending()
      .then((res) => setMovies(res.results))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Trending</h1>

      {isLoading && <p>Loading...</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;
