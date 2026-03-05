"use client";

import { ChevronsUpDownIcon, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect,useState } from "react";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function ModeToggle({ showLabel = true }: { showLabel?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const icon = theme === "dark" ? (
    <Moon className="w-4 h-4" />
  ) : theme === "light" ? (
    <Sun className="w-4 h-4" />
  ) : (
    <Laptop className="w-4 h-4" />
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={showLabel ? "gap-1 px-2 py-0 text-xs" : "p-2"}
          aria-label="Toggle theme"
        >
          {showLabel ? (
            <>
              <span className="capitalize">{theme}</span>
              <span className="inline"> theme</span>
              <ChevronsUpDownIcon className="size-3" />
            </>
          ) : (
            <span className="sr-only">Theme</span>
          )}
          {!showLabel && icon}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="w-4 h-4 mr-2" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="w-4 h-4 mr-2" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="w-4 h-4 mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
