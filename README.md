# Portfolio — Reza Saputra Desky

Personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Features a smooth navy-blue design with glass morphism, CSS-only animations, and View Transitions API.

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 + PostCSS |
| **Components** | Base UI (Radix) + Custom |
| **Icons** | Lucide React |
| **Font** | Onest (Google Fonts) |
| **Animations** | CSS-only (no Framer Motion) |
| **Deploy** | Static Export (output: "export") |

## Pages

- / — Redirects to About
- /about — Personal info, education, career
- /skill — Tech stack with icons
- /contact — Contact links

## Features

- **Dark/light mode** with localStorage persistence & anti-flash script
- **Glass morphism** cards with backdrop blur
- **CSS-only page transitions** via View Transitions API
- **Scroll-triggered fade-in** animations (CSS nimation-timeline)
- **Stagger animations** using CSS custom properties (--i)
- **Responsive** — mobile sidebar drawer + desktop sidebar
- **Keyboard accessible** form inputs with proper labels
- **reduced-motion** support for accessibility

## Getting Started

```bash
npm install
npm run dev      # development server on :3000
npm run build    # static export to /out
npm run start    # serve static export locally
```

## Project Structure

```
src/
├── app/
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── skill/        # Skills page
│   ├── globals.css   # Global styles, theme, animations
│   ├── layout.tsx    # Root layout with sidebar
│   └── page.tsx      # Redirect to /about
├── components/
│   ├── ui/           # Base UI components (button, badge, avatar)
│   ├── background.tsx    # Decorative background orbs
│   ├── layout-content.tsx
│   ├── sidebar.tsx       # Navigation sidebar
│   └── theme-provider.tsx
└── lib/
    ├── styles.ts     # Shared glass card styles
    └── utils.ts      # cn() utility
```

## Color Palette

Navy blue theme with cool neutrals:

```css
--primary: oklch(0.45 0.18 264);     /* Navy */
--accent:  oklch(0.85 0.06 264);     /* Light blue */
--muted:   oklch(0.96 0.006 260);    /* Cool neutral */
```

Dark mode automatically adjusts all colors for readability.

## Lighthouse

- **Performance:** 100
- **Accessibility:** 96
- **Best Practices:** Passed