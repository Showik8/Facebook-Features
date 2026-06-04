import Header from "./Header";
import Card from "./Card";
import { phones } from "../App";
import { Outlet } from "react-router-dom";

const Zoomer = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen flex flex-col items-center bg-gray-50">
        <Header />

        <div className="flex flex-wrap gap-10 mt-30">
          {phones.map((phone) => (
            <Card key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
      <Outlet context={phones} />
    </>
  );
};

export default Zoomer;
