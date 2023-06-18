"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@/shadcn/ui/switch";
import { Label } from "@/shadcn/ui/label";

const handleChanged = (event: boolean) => {
  localStorage.setItem("dark-mode", event ? "dark" : "light");
  if (event) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const checkPreferredColorScheme = (): string => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("dark-mode");
    if (storedMode) {
      setIsDarkMode(storedMode === "dark");
    } else {
      const preferredMode = checkPreferredColorScheme();
      setIsDarkMode(preferredMode === "dark");
      localStorage.setItem("dark-mode", preferredMode);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      handleChanged(isDarkMode);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <Switch
        id="toggle-dark-mode"
        defaultChecked={isDarkMode}
        onCheckedChange={handleChanged}
      />
      <Label htmlFor="toggle-dark-mode">Dark mode</Label>
    </div>
  );
};

export default ThemeSwitcher;
