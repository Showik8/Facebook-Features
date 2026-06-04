import { useEffect, useState } from "react";

const Component = ({}) => {
  const [userName, setUserName] = useState("gio");
  const [userAge, setUserAge] = useState(21);

  useEffect(() => {}, [userName, userAge]);

  return (
    <div className="w-full h-full">
      <button onClick={() => setUserAge(2222)}>Change User Ages</button>
      <button onClick={() => setUserName("Nika")}>Change User Names</button>
    </div>
  );
};

export default Component;
