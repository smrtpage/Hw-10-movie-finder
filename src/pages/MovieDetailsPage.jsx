import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetails } from "../services/MoviesServices";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getDetails(movieId)
      .then((res) => setMovie(res))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {movie && (
        <div className="div">
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="poster"
          />
          <h1>{movie.original_title}</h1>
          <p>{movie.tagline}</p>
          <hr />
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>{movie.overview}</p>
        </div>
      )}
      <Link to={`reviews`}>Reviews</Link> <br />
      <Link to={`cast`}>Cast</Link>
      <Outlet />
    </div>
  );
}
export default MovieDetailsPage;
