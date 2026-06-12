"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // On mount, restore from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("canalside-theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  // Apply data-theme attribute to <html> whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("canalside-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
