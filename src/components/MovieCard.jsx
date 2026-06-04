import { useState } from "react";

function MovieCard({ title, image, year, ratings }) {
  const [isLiked, setIsLiked] = useState(false);



  return (
    <div
      className={`w-62.5 h-75 border-2 flex flex-col justify-between  ${ratings > 5 ? "border-red-600" : "border-green-600"} `}
    >
      <img src={image} alt={title} />
      <div className="flex flex-col">
        <h1>{title}</h1>
        <div className="flex gap-2">
          <p>year: {year}</p>
          <p>ratings: {ratings}</p>
        </div>
      </div>

      <button
        className="border-2 p-2 rounded-md"
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? "Dislike" : "Like"}
      </button>
    </div>
  );
}

export default MovieCard;
