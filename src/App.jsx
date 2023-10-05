import { Route, Routes } from "react-router-dom";
import NavLayout from "./layouts/NavLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ReviewsPage from "./pages/ReviewsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import CastPage from "./pages/CastPage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
