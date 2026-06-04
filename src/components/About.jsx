import { useState } from "react";
import { useOutletContext } from "react-router-dom";
const About = ({ setUser }) => {
  const user = useOutletContext();

  return (
    <div>
      {user.posts && user.posts.map((p) => <Card post={p} key={p.title} />)}
    </div>
  );
};

export default About;

function Card({ post }) {
  const [liked, setLiked] = useState(false);

  function handleLike(post) {
    setLiked(!liked);

    if (!liked) {
      post.likes++;
      setUser(user);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      post.likes--;
      setUser(user);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  return (
    <div className="flex gap-5">
      <h1
        className={`text-lg font-semibold ${liked ? "text-green-500" : "text-red-500"}`}
      >
        {post.title}
      </h1>
      <span className="text-lg font-semibold">{post.likes}</span>
      <button
        onClick={() => handleLike(post)}
        className="text-lg font-semibold"
      >
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}
