import React, { useContext } from "react";

export type Theme = "light" | "dark";

export const ThemeContext = React.createContext<Theme>("light");

export function useTheme() {
  return useContext(ThemeContext);
}
