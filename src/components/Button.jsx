const Button = ({ text, bgcolor, textColor }) => {
  return (
    <button
      className={` border-2 border-black rounded-lg px-6 py-2 ${bgcolor} ${textColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
