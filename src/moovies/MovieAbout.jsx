import { useOutletContext } from "react-router";

// useOutletContext — იღებს იმ მონაცემს, რომელიც მშობელმა
// <Outlet context={movie} />-ით გადმოსცა. ასე არ ვიმეორებთ ძებნას.

export default function MovieAbout() {
  const movie = useOutletContext();
  return (
    <div>
      <h3>აღწერა</h3>
      <p>{movie.summary}</p>
      <p>წელი: {movie.year}</p>
    </div>
  );
}
