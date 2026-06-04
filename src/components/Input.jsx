import { useState } from "react";

const Input = ({ type = "text", label }) => {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-100  border-2 rounded-md">
      <label>{label}</label>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type={type == "password" && showPassword ? "text" : "password"}
        placeholder={label}
      />

      {type == "password" && (
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      )}
    </div>
  );
};

export default Input;
