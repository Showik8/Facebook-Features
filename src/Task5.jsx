import { useState } from "react";
const Task5 = () => {
  const [count, setCount] = useState(10);
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);

    if (count == 0 && !isLiked) {
      setCount(count + 1);
    }

    if (count > 0 && isLiked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button className="p-4 bg-green-400" onClick={() => handleLike()}>
        {isLiked ? "❤️" : "🤍"}
        {count}
      </button>
    </div>
  );
};

export default Task5;
