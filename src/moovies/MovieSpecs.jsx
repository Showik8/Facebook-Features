import { useOutletContext } from "react-router";

export default function MovieSpecs() {
  const movie = useOutletContext();
  const { genre, duration, rating } = movie.specs;
  return (
    <div>
      <h3>მახასიათებლები</h3>
      <p>ჟანრი: {genre}</p>
      <p>ხანგრძლივობა: {duration} წუთი</p>
      <p>რეიტინგი: ⭐ {rating}</p>
    </div>
  );
}
