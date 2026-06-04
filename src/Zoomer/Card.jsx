import { useNavigate } from "react-router-dom";

const Card = ({ phone }) => {
  const navigate = useNavigate();

  const { name, price, oldPrice, monthlyFrom, image } = phone;
  return (
    <div
      className="bg-white rounded-[10px] shadow-md overflow-hidden w-60 h-120 cursor-pointer hover:shadow-lg transition-shadow
    flex flex-col justify-between"
    >
      <img className="w-60 h-60" src={image} alt={name} />

      <div className="px-3 py-2 flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-1">
          <p className="text-lg font-medium text-orange-400">{price} ₾</p>
          <p className="text-lg font-medium text-gray-500 line-through">
            {oldPrice} ₾
          </p>
        </div>
        <p className="text-lg font-medium text-green-600">
          {monthlyFrom} ₾/თვეში
        </p>
        <h2 className="text-lg font-medium wrap-balance-words">{name}</h2>
        <button className="bg-[#F52F83] w-full mt-3 py-2 rounded-[10px] text-white font-medium">
          კალათაში დამატება
        </button>
        <button onClick={() => navigate(`phone/${phone.id}`)}>Open</button>
      </div>
    </div>
  );
};

export default Card;
