import Image from "next/image";
import { User, GraduationCap, Building2, MapPin, Calendar } from "lucide-react";
import { glassCard, glassCardHover } from "@/lib/styles";

const careers = [
  {
    company: "STKIP Usman Safri",
    role: "Website Administrator & Developer",
    location: "Kutacane, Aceh, Indonesia",
    period: "2024 – Present",
    logo: "/stkip.png",
  },
  {
    company: "STKIP Usman Safri Journal",
    role: "Website Administrator & OJS Administrator",
    location: "Kutacane, Aceh, Indonesia",
    period: "2024 – Present",
    logo: "/stkip.png",
  },
  {
    company: "Rumah Analisa",
    role: "Website Administrator & Developer",
    location: "Banda Aceh, Indonesia",
    period: "2025 – Present",
    logo: "/rumahanalisa.png",
  },
];


  "hover:from-background/80 hover:via-background/80 hover:to-primary/[0.05] hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 dark:hover:from-background/60 dark:hover:via-background/60 dark:hover:to-primary/[0.1] dark:hover:border-primary/[0.25] dark:hover:shadow-primary/[0.12]";

function SectionHeader({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-3.5" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-border/60 via-border/40 to-transparent" />
    </div>
  );
}

function LogoContainer({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] overflow-hidden ring-1 ring-primary/10 backdrop-blur-sm">
      <Image src={src} alt={alt} width={48} height={48} className="size-full object-cover" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-16 md:py-24 animate-in">
      {/* ─── Personal Information ─── */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <User className="size-5" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">About Me</h1>
        <div className="mt-6 max-w-xl text-left">
          <p className="text-sm leading-relaxed text-foreground/85">
            Saya adalah Reza Saputra, seorang Mahasiswa Teknologi Informasi yang memiliki minat besar dalam bidang teknologi, khususnya pengembangan perangkat lunak dan web development. Saya senang mempelajari teknologi baru, mengembangkan keterampilan pemrograman, serta terus meningkatkan kemampuan dalam menciptakan solusi digital yang inovatif dan bermanfaat.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
            Sebagai mahasiswa, saya berkomitmen untuk terus belajar, beradaptasi dengan perkembangan teknologi, dan mempersiapkan diri untuk berkarier di industri teknologi informasi.
          </p>
        </div>
      </div>

      {/* ─── Education ─── */}
      <div className="mt-16 animate-in-fade" style={{ animationDelay: "0.15s" }}>
        <SectionHeader icon={GraduationCap} label="Education" />
        <div className={`group rounded-xl ${glassCard} ${glassCardHover} p-5 md:p-6`}>
          <div className="flex items-start gap-4">
            <LogoContainer src="/uin.png" alt="UIN Ar-Raniry" />
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-semibold md:text-base group-hover:text-primary transition-colors">
                Universitas Islam Negeri Ar-Raniry
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">
                Fakultas Sains &amp; Teknologi
              </p>
              <p className="mt-0.5 text-xs font-medium md:text-sm">
                Program Studi Teknologi Informasi
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  Banda Aceh
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5" />
                  2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Career ─── */}
      <div className="mt-16 animate-in-fade" style={{ animationDelay: "0.25s" }}>
        <SectionHeader icon={Building2} label="Career" />
        <div className="grid gap-4 md:grid-cols-3 animate-stagger">
          {careers.map((item, i) => (
            <div
              key={i}
              style={{ "--i": i } as React.CSSProperties}
              className={`group rounded-xl ${glassCard} ${glassCardHover} p-5`}
            >
              <div className="flex items-start gap-4">
                <LogoContainer src={item.logo} alt={item.company} />
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-semibold group-hover:text-primary transition-colors">{item.company}</h2>
                  <p className="mt-0.5 text-xs font-medium text-foreground/80">{item.role}</p>
                  {item.location && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {item.location}
                    </p>
                  )}
                  {item.period && <p className="mt-0.5 text-xs text-muted-foreground">{item.period}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

