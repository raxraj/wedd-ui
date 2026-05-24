# 🌺 Wedd UI — Indian Wedding Component Library

A **ShadCN-based**, **Tailwind CSS v4** component library built for Indian traditional wedding planning apps. Features a rich, warm Indian wedding palette (maroon, gold, saffron, ivory) and ready-to-use Storybook stories for every component.

---

## ✨ Features

- 🎨 **Indian Wedding Theme** — Maroon (`#800020`), Gold (`#C9A84C`), Saffron (`#FF6700`), Ivory (`#FFF8F0`)
- 💠 **ShadCN UI** base components (Button, Card, Badge, Progress, Dialog, Tabs, Separator)
- 🏮 **9 Wedding-specific components** covering the full wedding planning lifecycle
- 📖 **Storybook** with autodocs, a11y checks, and multiple stories per component
- 🔷 **TypeScript** throughout
- ⚡ **Next.js 14** App Router + Tailwind CSS v4

---

## 🚀 Getting Started

```bash
npm install
npm run dev          # Start Next.js dev server (http://localhost:3000)
npm run storybook    # Start Storybook (http://localhost:6006)
npm run build        # Build Next.js for production
npm run build-storybook  # Build Storybook static site
npm run lint         # Run ESLint
```

---

## 🧩 Components

### Base UI (ShadCN)
Located in `src/components/ui/`

| Component | Description |
|-----------|-------------|
| `Button` | Themed action buttons (maroon/gold variants) |
| `Card` | Card with Header, Title, Description, Content, Footer |
| `Badge` | Status/label badges |
| `Progress` | Progress bar (used in budget & checklist) |
| `Dialog` | Modal dialogs |
| `Tabs` | Tabbed navigation |
| `Separator` | Visual divider |

### Wedding Components
Located in `src/components/wedding/`

| Component | Description |
|-----------|-------------|
| `WeddingHeader` | Decorative hero banner with names, date, venue & Sanskrit blessing |
| `GuestList` | Full guest management with RSVP status, sides, table numbers, dietary notes |
| `BudgetTracker` | Total budget overview + per-category allocated/spent progress bars |
| `EventTimeline` | Wedding ceremony schedule (Haldi → Mehendi → Sangeet → Baraat → Pheras → Reception) |
| `VendorCard` | Vendor info card with ratings, payment progress, status management |
| `InvitationCard` | Printable-style digital wedding invitation |
| `WeddingCountdown` | Live countdown timer to the wedding day |
| `WeddingChecklist` | Pre-wedding task manager grouped by category with priorities |
| `ExpenseSummary` | Expense log with category breakdown chart and recent transactions |

---

## 📖 Storybook

Run `npm run storybook` to browse all components interactively.

Stories are in `src/stories/`:

```
src/stories/
├── WeddingHeader.stories.tsx
├── GuestList.stories.tsx
├── BudgetTracker.stories.tsx
├── EventTimeline.stories.tsx
├── VendorCard.stories.tsx
├── InvitationCard.stories.tsx
├── WeddingCountdown.stories.tsx
├── WeddingChecklist.stories.tsx
├── ExpenseSummary.stories.tsx
└── ShadcnUI.stories.tsx      ← Base components with wedding theme
```

Each story file includes multiple variants (e.g. Default, edge cases, interactive).
Storybook is configured with:
- `@storybook/addon-docs` — Auto-generated docs from props/JSDoc
- `@storybook/addon-a11y` — Accessibility checks
- `@storybook/addon-vitest` — Component testing
- `@chromatic-com/storybook` — Visual regression via Chromatic
- Three background presets: **Ivory** (default), White, Maroon

---

## 🎨 Theme Palette

| Token | Value | Usage |
|-------|-------|-------|
| Wedding Maroon | `#800020` | Primary headers, buttons |
| Wedding Gold | `#C9A84C` | Accents, borders, highlights |
| Wedding Saffron | `#FF6700` | Alerts, dietary flags |
| Wedding Ivory | `#FFF8F0` | Page backgrounds |
| Wedding Rose | `#C2185B` | Bride-side accents |
| Wedding Emerald | `#00695C` | Confirmed/booked status |
| Wedding Navy | `#1A237E` | Contacted status |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + wedding CSS variables
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                  # ShadCN base components
│   └── wedding/             # Wedding-specific components + index.ts
├── stories/                 # Storybook stories
└── lib/
    └── utils.ts             # cn() helper
.storybook/
├── main.ts                  # Storybook config (Next.js framework)
└── preview.ts               # Global decorators, CSS import, backgrounds
```
