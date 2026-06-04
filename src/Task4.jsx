import { useState } from "react";

const Task4 = () => {
  const [user, setUser] = useState({ userName: "", email: "" });

  function handelChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  console.log(user);

  return (
    <div className=" border-2 gap-2 flex flex-col w-[200px]">
      <label htmlFor="username">Username</label>
      <input
        name="userName"
        className="border-2"
        type="text"
        onChange={(e) => handelChange(e)}
      />

      <label htmlFor="email">email</label>
      <input
        name="email"
        className="border-2"
        type="email"
        onChange={(e) => handelChange(e)}
      />
    </div>
  );
};

export default Task4;
