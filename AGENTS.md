<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## BhumiSync Project Architecture & Coding Rules

1. **Feature Component Isolation**:
   - Whenever creating a page (e.g. `/login` at `src/app/login/page.tsx`), a corresponding component folder named after that page (e.g. `src/app/_components/login/`) MUST be created inside `_components`.
   - All page-specific components live inside this dedicated subfolder.

2. **Action Folder & Prototype Files**:
   - For every page/feature, a corresponding folder named after that page (e.g. `src/app/_actions/login/`) MUST be created inside `_actions`.
   - **Prototype Phase Rule**: Prototype server action files will be created inside this folder (e.g. `src/app/_actions/login/actions.ts`), but NO implementation code will be written in them yet (stubs/empty declarations only). Data and interactions will be handled on the client or via mock state.

3. **Matching Skeleton Loader**:
   - Whenever building any page, always create a matching skeleton loader (`loading.tsx` or skeleton component) in that page directory.
   - The skeleton must mirror the page layout 1:1 using glassmorphic pulse placeholders so loading transitions are seamless.

4. **Design System & Aesthetics**:
   - Strictly adhere to the **Luminous Registry Glass** theme (deep oceanic navy canvas `#081324`, celestial sky blue `#38bdf8`, frosted glass panels `backdrop-blur-xl`, `1px` translucent borders `rgba(255, 255, 255, 0.18)`).

5. **Arrow Functions for All Components**:
   - All React components MUST be declared using arrow functions (e.g. `export const MyComponent = () => { ... };`).

6. **Direct Imports (No Barrel index.ts Files)**:
   - Do NOT create `index.ts` files inside component folders. Always use direct, explicit file imports (e.g. `import { HeroSection } from "@/app/_components/home/HeroSection";`).

7. **Cohesive Motion & Animation Architecture (Framer Motion & GSAP)**:
   - **Animation Libraries First**:
     - Do NOT write raw keyframe animations from scratch. Use **Framer Motion** (`framer-motion`) and **GSAP** (`gsap`) for all component, card, text, and timeline animations.
   - **Framer Motion for Component & Card Orchestration**:
     - Use Framer Motion (`motion.div`, `motion.section`, `variants`, `AnimatePresence`) for declarative page-level coordination, staggered card entrances, interactive hover elevations (`whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}`), tap feedback (`whileTap={{ scale: 0.98 }}`), and layout animations.
   - **GSAP for Precision Timelines & Text Orchestration**:
     - Use GSAP (`gsap.timeline()`, `gsap.from()`, `gsap.to()`) for high-precision text reveals, headline split-word effects, numerical ticker counters, smooth SVG stroke/path drawings, and multi-step choreography across sections.
     - Always wrap GSAP calls in client hooks (`useRef`, `useEffect`) with proper cleanup (`ctx.revert()`).
   - **Unified Page Orchestration ("Comes Together")**:
     - Never animate elements in isolation with conflicting directions or erratic speeds. Every page must animate as an orchestrated, harmonious whole.
     - **Sequence & Stagger Hierarchy**:
       1. Ambient light blooms and page backdrop establish atmosphere.
       2. Top badges and primary headlines initiate first with subtle upward drift (`y: 20` to `y: 0`, opacity `0` to `1`).
       3. Supporting text and subheadings cascade next with synchronized easing.
       4. Main interactive card / primary focal interface settles in with soft scale (`scale: 0.97` to `1`).
       5. Metric grids, data cards, and workflow items stagger in sequentially (`staggerChildren: 0.08 - 0.12s`).
   - **Accessibility & Reduced Motion**:
     - Always respect `useReducedMotion()` from Framer Motion or `@media (prefers-reduced-motion: reduce)` in GSAP by disabling translational shifts and maintaining clean opacity fades.

8. **Bilingual Support (English & Bangla)**:
   - **Full Dual-Language Requirement**:
     - Every page, component, modal, table, badge, and form MUST support both **English (`en`)** and **Bangla (`bn`)**.
   - **Centralized Dictionary (`src/lib/i18n/`) & Context (`src/context/LanguageContext.tsx`)**:
     - Never hardcode raw user-facing text strings directly in components without dictionary binding.
     - Always access translated labels using the `useLanguage()` hook (`const { t, language } = useLanguage();`).
   - **Global Language Switcher**:
     - The top navigation bar must host a persistent, glassmorphic language switch (`EN` / `বাং`).
   - **Persistence**:
     - Language choice must persist in `localStorage` under `bhumisync_lang`, defaulting to `'en'` on initial visit.
   - **Cadastral & Registry Terminology Fidelity**:
     - Use accurate Bangladesh land administration terminology in Bengali (e.g., Khatian -> খতিয়ান, Daag -> দাগ, Mouza -> মৌজা, Sub-Registrar -> সাব-রেজিস্ট্রার, Mutation -> নামজারি, Heba/Kabala -> হেবা/কবলা, Encumbrance -> দায়/ঋণভার).

9. **Fluid Multi-Device Responsiveness (Mobile, Tablet, Desktop, Ultra-wide)**:
   - Every page, component, modal, table, card grid, and banner MUST be fully responsive down to `320px` width without horizontal body overflow.
   - **Horizontal Overflow Prevention**:
     - Never use rigid pixel widths (`w-[600px]`, `min-w-[800px]`) on container elements without responsive constraints (`max-w-full`, `overflow-x-auto`).
     - All data tables and multi-column ledgers must be wrapped in `overflow-x-auto` with styled scrollbars.
   - **Adaptive Grid Scaling**:
     - Multi-column grids must scale hierarchically: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (or similar).
     - Flex buttons and status pill clusters must use `flex-wrap` and `gap-2 sm:gap-3` so they never clip or spill over card boundaries on mobile.
   - **Typography & Padding Scaling**:
     - Use responsive text sizing (`text-2xl sm:text-3xl lg:text-4xl`) and fluid padding (`p-4 sm:p-6 lg:p-8`, `px-4 sm:px-6 lg:px-8`).
   - **Touch Target Accessibility**:
     - Ensure buttons, dropdowns, and interactive chips on mobile maintain touch-friendly target areas (`min-h-[40px]`, `py-2.5 px-3.5`).





