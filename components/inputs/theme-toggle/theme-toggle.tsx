import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
}
/**
 * An unstyled button that can toggle the color mode.
 * @param string - { className } A string used to style the button using Tailwind CSS classes
 * @returns JSX.Element
 */
const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={className}
    >
      {theme === "light" ? (
        <MoonIcon height="24px" width="24px" />
      ) : (
        <SunIcon height="24px" width="24px" />
      )}
    </button>
  );
};

export { ThemeToggle };
