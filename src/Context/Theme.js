import { createContext, useContext } from "react";

export const ThemeContxet = createContext({
  data: "",
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = ThemeContxet.Provider;

export const useTheme = () => {
  return useContext(ThemeContxet);
};
