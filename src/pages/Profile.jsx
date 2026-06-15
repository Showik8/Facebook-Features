import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div className="px-10 flex flex-col  justify- w-screen h-screen ">
      <Header user={user} />
      <Outlet context={user} />
    </div>
  );
};

export default Profile;
