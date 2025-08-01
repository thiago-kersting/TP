"use client";

import { usePageTitle } from "@/hooks/use-page-title";

export function SiteHeaderClient() {
  const pageTitle = usePageTitle();

  return <h1 className="text-base font-medium">{pageTitle}</h1>;
} 