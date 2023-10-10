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
      {credits.length == 0 ? (
        <p>Movie doesnt have credits</p>
      ) : (
        <ul className="profile_list">
          {credits.map((credit) => (
            <li className="profile_card" key={credit.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`}
              />
              {credit.name} - {credit.character}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CastPage;
