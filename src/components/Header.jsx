import { useNavigate, Link } from "react-router-dom";

const Header = ({ user }) => {
  const navigation = useNavigate();
  function logOut() {
    localStorage.removeItem("user");
    navigation("/");
  }

  return (
    <div className=" px-10 flex flex-col w-screen ">
      <div className="flex  items-center justify-between border-b pb-2 border-gray-400">
        <div className="flex items-center gap-2 justify-center">
          <img
            className="w-20 h-20 rounded-4xl "
            src={user.url}
            alt="Profile Photo"
          />
          <h1 className="text-2xl">
            {user.name} {user.surname}
          </h1>
        </div>

        <button
          className="bg-blue-500 border-2 rounded-xl px-6 py-1 text-white"
          onClick={logOut}
        >
          Log Out
        </button>
      </div>
      <nav>
        <ul className="flex gap-4 py-2">
          <li className="text-gray-500 hover:bg-gray-200 px-4 rounded-lg cursor-pointer">
            <Link to={"/profile/"}>ყველა</Link>
          </li>
          <li className="text-gray-500 hover:bg-gray-200 px-4 rounded-lg cursor-pointer">
            <Link to={"/profile/info"}>ინფორმაცია</Link>
          </li>
          <li className="text-gray-500 hover:bg-gray-200 px-4 rounded-lg cursor-pointer">
            <Link to={"/profile/friends"}>მეგობრები</Link>
          </li>
          <li className="text-gray-500 hover:bg-gray-200 px-4 rounded-lg cursor-pointer">
            <Link to={"/profile/about"}>პოსტები</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
