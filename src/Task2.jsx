import { useState } from "react";
function Task2() {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      {isVisible && <h1>ES aris teqsti</h1>}

      <button onClick={() => handleClick()}>
        {isVisible ? "DAMALE" : "Gamoachine"}
      </button>
    </>
  );
}

export default Task2;
