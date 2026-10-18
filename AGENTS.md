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

7. **Cohesive Motion & Animation Architecture**:
   - **Unified Page Orchestration ("Comes Together")**:
     - Never animate elements in isolation with conflicting directions or erratic speeds. Every page must animate as an orchestrated, harmonious whole.
     - **Sequence & Stagger Hierarchy**:
       1. Top badges and primary headlines initiate first with subtle upward drift (`animate-fade-in-up stagger-1`).
       2. Supporting text and subheadings cascade next (`animate-fade-in-up stagger-2`).
       3. Main interactive card / primary focal interface scales and settles in (`animate-scale-in stagger-3` or `animate-fade-in-up stagger-3`).
       4. Metric grids, data cards, and workflow items stagger in sequentially (`stagger-1` through `stagger-5`).
   - **Text Animations**:
     - Clean, subtle entrance with micro-translation (`translate-y-2` to `0` or `translate-y-4` to `0`) and unified easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
     - Headline text must remain crisp, clear, and stable with zero layout shift.
   - **Card & Surface Animations**:
     - **Entry**: Smooth upward reveal (`animate-fade-in-up`) or soft scale reveal (`animate-scale-in`).
     - **Interactive / Hover Lift**: Glass cards must feature smooth elevation (`hover:-translate-y-1`), luminous edge refraction (`hover:border-white/30`), and soft celestial aura (`hover:shadow-[0_16px_40px_rgba(0,0,0,0.45),0_0_20px_rgba(56,189,248,0.18)]`) using `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
   - **Accessibility**:
     - Honor `@media (prefers-reduced-motion: reduce)` by disabling translational shifts and falling back to clean instant renders or subtle opacity.


