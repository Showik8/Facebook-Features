import { createContext, useState } from "react";
import Theme from "./Theme";

export const ThemeContext = createContext(null);

const UseTheme = (children) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`w-screen h-screen ${theme === "light" ? "bg-gray-200" : "bg-black"} flex justify-center items-center `}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default UseTheme;
