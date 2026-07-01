"use client";
import Image from "next/image";
import { Code2, Database, BookOpen, Smartphone, Wrench } from "lucide-react";
import { glassCard, glassCardHover } from "@/lib/styles";

const categories = [
  { name: "Web Development", icon: Code2, skills: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind CSS", "Laravel", "PHP"] },
  { name: "Mobile Development", icon: Smartphone, skills: ["Flutter", "Dart", "Android Studio"] },
  { name: "Database", icon: Database, skills: ["MySQL", "PostgreSQL", "SQLite", "Firebase"] },
  { name: "CMS & OJS", icon: BookOpen, skills: ["WordPress", "Open Journal Systems (OJS)"] },
  {
    name: "Tools & Technologies",
    icon: Wrench,
    skills: ["Visual Studio Code", "Git", "GitHub", "Figma", "Postman", "XAMPP", "Laragon", "Android Studio", "Docker", "cPanel", "phpMyAdmin", "Vercel", "Linux"],
  },
];

const simpleIconsMap: Record<string, string> = {
  HTML: "html5/html5-original",
  CSS: "css3/css3-original",
  JavaScript: "javascript/javascript-original",
  "Next.js": "nextjs/nextjs-original",
  React: "react/react-original",
  "Tailwind CSS": "tailwindcss/tailwindcss-original",
  Laravel: "laravel/laravel-original",
  PHP: "php/php-original",
  Flutter: "flutter/flutter-original",
  Dart: "dart/dart-original",
  "Android Studio": "androidstudio/androidstudio-original",
  MySQL: "mysql/mysql-original",
  PostgreSQL: "postgresql/postgresql-original",
  SQLite: "sqlite/sqlite-original",
  Firebase: "firebase/firebase-plain",
  WordPress: "wordpress/wordpress-plain",
  "Visual Studio Code": "vscode/vscode-original",
  Git: "git/git-original",
  GitHub: "github/github-original",
  Figma: "figma/figma-original",
  Postman: "postman/postman-original",
  Docker: "docker/docker-original",
  cPanel: "cpanel/cpanel-original",
  Vercel: "vercel/vercel-original",
  Linux: "linux/linux-original",
};

function getSkillLogoUrl(skill: string): string | null {
  const path = simpleIconsMap[skill];
  if (!path) return null;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;
}



export default function SkillPage() {
  return (
    <section className="min-h-screen px-6 py-16 md:py-24 animate-in">
      {/* ─── Header ─── */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Code2 className="size-5" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills &amp; Expertise</h1>
        <p className="mt-3 text-sm text-muted-foreground">Tech stack and tools I work with to bring ideas to life.</p>
      </div>

      {/* ─── Categories ─── */}
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <div key={cat.name} className="mt-12 animate-in-fade">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-3.5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cat.name}</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-border/60 via-border/40 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 animate-stagger-scale">
              {cat.skills.map((skill, i) => {
                const logoUrl = getSkillLogoUrl(skill);
                return (
                  <div
                    key={skill}
                    style={{ "--i": i } as React.CSSProperties}
                    className={`group rounded-xl ${glassCard} ${glassCardHover} p-4 text-center`}
                  >
                    <div className="relative mx-auto mb-2 flex size-8 items-center justify-center">
                      {logoUrl ? (
                        <Image
                          src={logoUrl}
                          alt={skill}
                          width={24}
                          height={24}
                          className="size-6 transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                        />
                      ) : null}
                    </div>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">{skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}


