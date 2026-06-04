import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ users, setUser }) => {
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  function checkCredentials() {
    const user = users.find(
      (u) => u.email == emailInput && u.password == password,
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigation("/profile");
    } else {
      alert("noo");
    }
  }

  return (
    <div className="flex items-center px-8 justify-between h-screen">
      <div className="flex w-[70%] items-center">
        <h1 className="text-6xl mt-60 mr-10 font-bold w-[20%]">
          გაეცანით იმას,
          <span className="text-blue-500 font-bold"> რაც გიზიდავთ</span>
        </h1>
        <img
          className="w-[70%] h-screen"
          src="https://static.xx.fbcdn.net/rsrc.php/yB/r/83zWJdc6PJI.webp"
          alt="Background"
        />
      </div>
      <div className="flex w-[20%] flex-col h-screen justify-center gap-4 border-l border-gray-400 px-4 ">
        <h2 className="text-xl font-bold">Facebook-ში შესვლა</h2>
        <input
          onChange={(E) => setEmailInput(E.target.value)}
          className="px-6  w-full py-2 outline-blue-500 rounded-lg border border-gray-400 hover:border-black"
          type="text"
          placeholder="ელ. ფოსტა ან ტელ. ნომერი"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="px-6  w-full py-2 outline-blue-500 rounded-lg border border-gray-400 hover:border-black  "
          type="password"
          placeholder="პაროლი"
        />
        <button
          onClick={() => checkCredentials()}
          className="  bg-blue-500 text-white px-5 py-2 rounded-lg w-full"
        >
          შესვლა
        </button>
      </div>
    </div>
  );
};

export default LogIn;
