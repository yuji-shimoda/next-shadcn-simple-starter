"use client";

import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  // useEffect only runs on the client, so now we can safely show the UI
  // @see https://github.com/pacocoursey/next-themes/tree/main/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  if (isDark) {
    return (
      <>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.sun />
          Light Mode
        </DropdownMenuItem>
      </>
    );
  }
  return (
    <>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        <Icons.moon />
        Dark Mode
      </DropdownMenuItem>
    </>
  );
}
