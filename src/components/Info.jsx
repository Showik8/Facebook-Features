import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Info = ({ setUser }) => {
  const user = useOutletContext();
  const [age, setAge] = useState(null);
  const [edditing, setEdditing] = useState(false);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  function calculateAge() {
    const dob = user.dob;
    const current = Date.now() - new Date(dob).getTime();
    const age = Math.floor(current / 1000 / 60 / 60 / 24 / 365);
    setAge(age);
  }

  function save() {
    setUser((prev) => ({ ...prev, phone, email }));
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
    setEdditing(false);
  }

  useEffect(() => {
    calculateAge();
  }, []);

  return (
    <div className="h-full w-full">
      <div>
        <label className="font-bold">პერსონალური დეტალური ინფრომაცია</label>

        <h2>ასაკი: {age}</h2>
        <h2 className="text-base">მობილური: {user.phone}</h2>
        <h2 className="text-base">ელ.ფოსტა: {user.email}</h2>
      </div>
      <button
        className="px-5 py-0 rounded-2xl border-2  bg-green-500 text-white"
        onClick={() => setEdditing(true)}
      >
        Edit
      </button>

      {edditing && (
        <div className="flex flex-col border border-gray-400 rounded-xl w-[30%]">
          <label htmlFor="Phone">შეცვალე მობილურის ნომერი:</label>
          <input
            className="border px-2 py-1 outline-blue-500 rounded-lg w-full"
            value={phone}
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="Email">შეცვალე ელ.ფოსტა:</label>
          <input
            className="border px-2 py-1 outline-blue-500 rounded-lg w-full"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => save()}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Info;
