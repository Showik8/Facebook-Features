import { useParams } from "react-router-dom";
import { phones } from "../App";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Phone() {
  const { id } = useParams();
  const user = useOutletContext();
  console.log(user);
  const navigate = useNavigate();

  const product = phones.find((p) => p.id === Number(id));
  console.log(product);

  return (
    <div>
      <p>პროდუქტის ID: {id}</p>
      <Card phone={product} />

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Phone;
