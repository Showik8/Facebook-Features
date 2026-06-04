const Button = ({ value, PropsClick, type }) => {
  return (
    <button
      onClick={() => PropsClick(value)}
      className={`p-2 border-2  ${type == "operator" ? "bg-blue-300 border-yellow" : "bg-gray-400"}`}
    >
      {value}
    </button>
  );
};

export default Button;
