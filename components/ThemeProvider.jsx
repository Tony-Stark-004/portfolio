"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }) {
  // Read the theme already applied by the inline <script> in layout.jsx
  // so initial state matches what's on the DOM — avoids any flicker.
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return document.documentElement.getAttribute("data-theme") || "dark";
  });

  // Sync DOM + localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("portfolio-theme-v2", theme); } catch (_) {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
