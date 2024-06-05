"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline/preline.js");

      window.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
}
