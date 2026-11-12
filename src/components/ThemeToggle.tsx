"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@wrksz/themes/client";
import { IconButton } from "./atoms/button/Button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <IconButton
      type="button"
      disabled={!resolvedTheme}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <IconSun size={20} stroke={1.8} />
      ) : (
        <IconMoon size={20} stroke={1.8} />
      )}
    </IconButton>
  );
}
