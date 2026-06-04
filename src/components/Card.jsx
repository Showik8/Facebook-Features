import Button from "./Button";

const Card = ({ food }) => {
  const { name, description, tags, nutrition, price } = food;

  return (
    <div className="border-2 border-black w-100 h-120 flex flex-col justify-between ">
      <div className="w-99 h-50 bg-red-300"></div>
      <div className="flex justify-around gap-3 ">
        <h1>{name}</h1>
        <div>
          <p>{tags.map((tag) => tag + "/")}</p>
        </div>
      </div>

      <p>{description}</p>
      <div className="flex gap-4">
        <p>{nutrition.calories} CAl</p>

        <span>
          P/F/C {nutrition.protein}/{nutrition.fat}/{nutrition.carbs}
        </span>
        <span>{nutrition.temperature}°C</span>
      </div>
      <div className="flex gap-1 justify-around px-3 items-center ">
        <div className="flex flex-row w-20">
          <p className="text-black-300">{price.current}</p>
          <p className="text-red-500">{price.original}</p>
          <p>{price.currency}</p>
        </div>
        <Button text="Buy" bgcolor="bg-green-500" textColor="text-white" />
      </div>
    </div>
  );
};

export default Card;
