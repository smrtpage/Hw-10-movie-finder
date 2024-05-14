import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchMovies } from "../services/MoviesServices";
import Searchbar from "../components/SearchBar";
import ReactPaginate from "react-paginate";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
    page: 1,
  });
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    SearchMovies(searchParams.get("query"), searchParams.get("page"))
      .then((res) => {
        setMovies(res.results);
        setTotalPages(res.total_pages);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  function handleSearch(newQuery) {
    setSearchParams({
      query: newQuery,
      page: searchParams.get("page"),
    });
  }

  function handlePageChange({ selected }) {
    setSearchParams({
      query: searchParams.get("query"),
      page: selected + 1,
    });
  }

  const initialPage = searchParams.get("page") - 1;
  return (
    <div>
      <div className="ShowsPageContainer">
        <p className="heading">Search Movies</p>
        <Searchbar
          onSearch={handleSearch}
          defaultValue={searchParams.get("query")}
        />

        {isLoading && <p>Loading...</p>}
        {searchParams.get("query") == "" && (
          <p className="warn">Write your query</p>
        )}
        {movies.length == 0 ? (
          <p className="warn">
            For {searchParams.get("query")} 0 movies have been found
          </p>
        ) : (
          <ul>
            <p className="warn">
              Search results for: {searchParams.get("query")}
            </p>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link className="movie" to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <ReactPaginate
          className="Paginator"
          pageCount={totalPages}
          initialPage={initialPage}
          onPageChange={handlePageChange}
          previousLabel={null}
          nextLabel={null}
        />
      </div>
    </div>
  );
}
export default MoviesPage;
