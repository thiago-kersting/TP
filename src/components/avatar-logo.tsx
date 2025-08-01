"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AvatarLogoProps {
  className?: string;
}

export const AvatarLogo = ({ className }: AvatarLogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "size-12 animate-pulse rounded-full bg-gray-200",
          className
        )}
      />
    );
  }

  const imageSrc =
    resolvedTheme === "dark"
      ? "/assets/logo-dark.webp"
      : "/assets/logo-light.png";

  return (
    <Image
      src={imageSrc}
      width={120}
      height={120}
      alt="TF Finance Edu"
      className={cn("rounded-full size-12", className)}
    />
  );
};
