"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getPageTitle } from "@/lib/navigation";

export function usePageTitle() {
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    return getPageTitle(pathname);
  }, [pathname]);

  return pageTitle;
}
