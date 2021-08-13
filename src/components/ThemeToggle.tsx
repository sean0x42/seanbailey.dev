import React from "react";

import MoonIcon from "./icons/Moon";
import SunIcon from "./icons/Sun";
import { Theme, useTheme } from "../app/themeContext";

interface ThemeToggleProps {
  setTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FunctionComponent<ThemeToggleProps> = (props) => {
  const theme = useTheme();

  function handleClick() {
    props.setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      onClick={handleClick}
      className="text-teal-800 dark:text-teal-400 focus:outline-none focus:ring-2 ring-teal-500 p-2"
      aria-label={
        theme === "light" ? "Enable dark theme" : "Enable light theme"
      }
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
