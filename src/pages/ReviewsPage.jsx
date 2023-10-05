import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../services/MoviesServices";

function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getReviews(movieId)
      .then((res) => setReviews(res.results))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h2>Reviews: </h2>
      {reviews.length == 0 && <p>Movie doesnt have reviews</p>}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ReviewsPage;
