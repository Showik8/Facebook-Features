import { useState } from "react";

function Task3() {
  const [name, setName] = useState("");

  function nameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h1>gamarjoba {name}</h1>
      <input
        className="border-2 "
        type="text"
        onChange={(e) => nameChange(e)}
      />
    </>
  );
}

export default Task3;
