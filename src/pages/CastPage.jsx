import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCredit } from "../services/MoviesServices";

function CastPage() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getCredit(movieId)
      .then((res) => setCredits(res.cast))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h2>Cast: </h2>
      <ul>
        {credits.map((credit) => (
          <li key={credit.id}>
            {credit.name} - {credit.character}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CastPage;
