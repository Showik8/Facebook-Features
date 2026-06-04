import { useOutletContext } from "react-router";

export default function MovieReviews() {
  const movie = useOutletContext();

  return (
    <div>
      <h3>მიმოხილვები</h3>
      <ul>
        {movie.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
}
