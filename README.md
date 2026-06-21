# Setup Instructions for React/shadcn integration

Currently, this codebase is purely Vanilla HTML/JS with GSAP and Tailwind CSS via CDN.
To properly integrate the provided React components (`MacbookScroll` from Aceternity UI), you must set up a full React project environment.

## 1. Initialize a Next.js (or Vite) project
```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
```

## 2. Initialize shadcn/ui
```bash
npx shadcn@latest init
```

## 3. Install required dependencies
The `MacbookScroll` component uses Framer Motion and Tabler Icons:
```bash
npm install motion @tabler/icons-react clsx tailwind-merge
```

## 4. Default Component Path
The default path for shadcn components is `/components/ui`.
**Why it's important:** The `shadcn` CLI automatically installs components (like buttons, dialogs, etc.) into this specific directory based on the configuration in `components.json`. Placing your custom reusable UI components (like `macbook-scroll.tsx`) in this same directory ensures a consistent import structure (`@/components/ui/macbook-scroll`) and keeps your codebase organized.

## 5. Files
I have placed the requested files in the following locations within this workspace for your convenience:
- `components/macbook-scroll-demo.tsx`
- `components/ui/macbook-scroll.tsx`
- `lib/utils.ts`

*(Note: The main `index.html` has also been updated natively with GSAP to replicate the Macbook effect without needing React, as requested in your prompt's Russian instructions).*
