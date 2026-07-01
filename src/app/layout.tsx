import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Background } from "@/components/background";
import { LayoutContent } from "@/components/layout-content";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Reza Saputra Desky | Portfolio",
    template: "%s | Reza Saputra Desky",
  },
  description:
    "Full-stack developer crafting modern web experiences with clean code and thoughtful design.",
  openGraph: {
    title: "Reza Saputra Desky",
    description:
      "Full-stack developer crafting modern web experiences with clean code and thoughtful design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} h-full scroll-smooth antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme:dark)");if(t==="dark"||(!t&&m.matches))document.documentElement.classList.add("dark")}catch(e){}})()`
        }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "list",
                  urls: ["/about", "/skill", "/contact"],
                },
              ],
            }),
          }}
        />
        <ThemeProvider>
          <Background />
          <LayoutContent>
            <Sidebar />
            <main className="flex-1 min-w-0">{children}</main>
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}

