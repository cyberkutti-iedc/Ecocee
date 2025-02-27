"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Log the props to ensure they are passed correctly
  console.log("ThemeProvider props:", props);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
