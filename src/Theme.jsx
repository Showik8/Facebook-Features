import { useContext } from "react";
import { ThemeContext } from "./App";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="border-2 p-3  rounded-2xl bg-amber-300"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
export default Theme;

ხ;
