import React, { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: "dark",
    darkTheme: () => { },
    lightTheme: () => { },
});

export const ThemeProvide = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}