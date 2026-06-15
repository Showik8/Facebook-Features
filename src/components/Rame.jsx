import { useContext } from "react";
import { ThemeContext } from "../App";

const Rame = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>{theme}</h1>
    </div>
  );
};

export default Rame;
