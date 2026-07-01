"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  User,
  Code2,

  Mail,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About", icon: User },
  { href: "/skill", label: "Skill", icon: Code2 },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

function NavLink({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-sm transition-all duration-300 md:py-2.5",
        isActive
          ? "bg-primary/10 font-medium text-primary"
          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300",
          isActive ? "bg-primary" : "bg-transparent"
        )}
      />
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
          isActive
            ? "bg-primary text-primary-foreground"
            : "bg-muted/60 text-muted-foreground group-hover:bg-muted group-hover:text-foreground"
        )}
      >
        <Icon className="size-3.5" />
      </span>
      <span className="flex-1 text-left">{label}</span>
      <ChevronRight
        className={cn(
          "size-3.5 transition-all duration-300",
          isActive
            ? "translate-x-0 opacity-100 text-primary"
            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        )}
      />
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);


  const isActive = (href: string) => {
    if (href === "/about") {
      return pathname === "/about" || pathname === "/";
    }
    return pathname === href;
  };

  return (
    <>
      {/* ─── Mobile Header ─── */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-primary/10 bg-gradient-to-r from-background/70 via-background/70 to-primary/[0.02] px-4 py-2.5 backdrop-blur-xl md:hidden dark:from-background/70 dark:via-background/70 dark:to-primary/[0.04]">
        <Link href="/about" className="flex items-center gap-2.5">
          <Avatar className="size-8 ring-1 ring-foreground/10">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback className="text-[11px] font-semibold">RSD</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Reza Saputra Desky</p>
            <p className="text-[11px] text-muted-foreground">Full-stack Developer</p>
          </div>
        </Link>
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl text-muted-foreground hover:text-foreground"
          >
            <Sun className="size-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="relative rounded-xl text-muted-foreground hover:text-foreground"
          >
            <Menu
              className={`size-[18px] transition-all duration-300 ${
                mobileOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute size-[18px] transition-all duration-300 ${
                mobileOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </Button>
        </div>
      </header>

      {/* ─── Mobile Drawer (CSS-only transition) ─── */}
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/20 transition-all duration-250 md:hidden ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-gradient-to-b from-background/95 via-background/95 to-primary/[0.03] shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out md:hidden dark:from-background/95 dark:via-background/95 dark:to-primary/[0.05] ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative flex flex-col items-center px-6 pt-12 pb-8">
            <div className="absolute top-8 h-32 w-32 rounded-full bg-foreground/5 blur-3xl" />
            <Avatar className="relative size-20 ring-2 ring-foreground/10 ring-offset-2 ring-offset-background">
              <AvatarImage src="/profile.jpg" alt="Profile" />
              <AvatarFallback className="text-2xl font-semibold">RSD</AvatarFallback>
            </Avatar>
            <h2 className="relative mt-4 text-lg font-semibold">Reza Saputra Desky</h2>
            <p className="relative text-xs text-muted-foreground">Full-stack Developer</p>
          </div>

          <div className="mx-6 mb-2 border-t border-primary/10" />

          <nav className="flex flex-col gap-0.5 px-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={Icon}
                  isActive={isActive(link.href)}
                  onClick={() => setMobileOpen(false)}
                />
              );
            })}
          </nav>

          <div className="mt-auto border-t border-primary/10 px-6 py-5">
            <div className="flex items-center justify-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </>

      {/* ─── Desktop Sidebar ─── */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col border-r border-primary/10 bg-gradient-to-b from-background/50 via-background/50 to-primary/[0.02] backdrop-blur-2xl md:flex dark:from-background/30 dark:via-background/30 dark:to-primary/[0.04]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-foreground/[0.02] to-transparent" />

        <Link href="/about" className="relative flex flex-col items-center px-6 pt-12 pb-6">
          <div className="absolute top-10 h-36 w-36 rounded-full bg-foreground/5 blur-3xl" />
          <Avatar className="relative size-24 ring-2 ring-foreground/10 ring-offset-4 ring-offset-background transition-transform duration-300 hover:scale-105">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback className="text-3xl font-semibold">RSD</AvatarFallback>
          </Avatar>
          <h1 className="relative mt-5 text-lg font-semibold">Reza Saputra Desky</h1>
          <p className="relative mt-0.5 text-xs text-muted-foreground">Full-stack Developer</p>
        </Link>

        <nav className="flex flex-col gap-0.5 px-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={Icon}
                isActive={isActive(link.href)}
                onClick={() => {}}
              />
            );
          })}
        </nav>

        <div className="mt-auto border-t border-primary/10 px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg text-muted-foreground hover:text-foreground"
            >
              <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

