"use client";

import { usePathname } from "next/navigation";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAddProject = pathname.startsWith("/addproject");

  return (
    <div className={isAddProject ? "" : "md:pl-64"}>
      {children}
    </div>
  );
}
