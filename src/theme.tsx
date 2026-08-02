import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  brightness: number;
  setBrightness: (v: number) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || "dark";
    } catch {
      return "dark";
    }
  });

  const [brightness, setBrightnessState] = useState<number>(() => {
    try {
      const stored = localStorage.getItem("brightness");
      return stored ? Number(stored) : 1;
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--brightness", String(brightness));
    try {
      localStorage.setItem("brightness", String(brightness));
    } catch {}
  }, [brightness]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const setBrightness = (v: number) => setBrightnessState(v);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, brightness, setBrightness }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export default ThemeProvider;
