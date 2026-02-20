# Shivani Dattani — PM Portfolio Site

## Project Overview
Personal portfolio website for PM role transition. Showcases 3-4 case studies demonstrating systems thinking, constraint navigation, and measurable outcomes from operational roles.

**Ship Deadline:** February 26, 2026 — functional v1, not perfection.
**Priority:** Speed over polish. Minimize complexity. Ship first, refine later.
**Owner:** Shivani Dattani — technically dependent on Claude Code. Cannot debug independently.

---

## Build Rules (NON-NEGOTIABLE)

1. **Small, testable increments.** Every prompt should produce something visually verifiable in the browser.
2. **Explain before executing.** State what you're doing and why before writing code.
3. **Never batch large changes.** One component or feature per prompt. If it breaks, we know exactly what broke.
4. **No silent assumptions.** If something is ambiguous, ask before proceeding.
5. **Verify paths exist** before writing files. Flag if a target directory is missing.
6. **Flag inconsistencies** with existing files. Don't silently overwrite.
7. **Suggest improvements as suggestions** — flag them clearly and wait for confirmation.
8. **CLAUDE.md is the living decision record.** Every locked decision must be reflected here. Before making ANY change to CLAUDE.md, state the proposed change and wait for explicit permission. Never modify silently.
9. **Delegate execution to sub-agents.** Use the Task tool to spawn Sonnet sub-agents for routine execution — file creation, boilerplate code, copy operations, installations, **MCP/API tool calls** (Notion updates, web fetches, any multi-step tool sequences). Opus decides WHAT to do; Sonnet executes the actual calls. Do not burn Opus tokens on mechanical work.
10. **Task list on every prompt.** At the start of every multi-step prompt, produce a numbered checklist of all tasks. Update each task as ✅ complete, ⏳ in progress, or ❌ failed as you go. Final summary must confirm all tasks are accounted for. No silent skips.
11. **Show diffs before writing.** For any modification to an existing file, show what you're changing before saving. New files can be created directly.
12. **Think, then act — within bounds.** Use the extended thinking tool to reason through implementation choices. When a decision falls within the latitude boundaries below, make the best call, note what you chose in a brief code comment, and keep moving. Do not stop to ask about implementation details that don't affect locked decisions.

### Thinking Latitude — What Requires Permission vs. What Doesn't

**MUST ask permission:**
- Any change to a locked decision (stack, colors, typography, voice, structure)
- Adding new dependencies not already in the tech stack
- Any user-facing content or copy (wording, headlines, descriptions)
- Using color values not defined in the Design System section
- Architecture changes (new routes, layout restructuring, new folders)
- Deleting or renaming existing files
- Deviating from a skill's recommended pattern

**CAN decide autonomously (document the choice in a brief comment):**
- Tailwind utility class selection
- Component internal structure and prop design
- Import ordering and file-internal organization
- CSS spacing, padding, margin values that follow the design system's scale
- Helper function and utility implementation
- Error handling approach within components
- TypeScript type definitions
- Which skill to consult for a given task (follow the Skills Reference mapping)
- Responsive breakpoint behavior (as long as it looks right on desktop first)
- Animation timing and easing curves (within Framer Motion, following ui-animation skill)

**Gray area rule:** If unsure whether something needs permission, err on the side of noting your choice and moving forward. Add a comment: `// DECISION: [what you chose and why]`. Shivani can review and override later. Do NOT block progress on ambiguous implementation details.

---

## DEPLOYMENT WORKFLOW

**Code → GitHub → Vercel (auto-deploy)**

1. All code lives in this directory (`portfolio-site/`)
2. Every task that changes code ends with: `git add . && git commit -m "[description]" && git push origin main`
3. Vercel auto-deploys from `main` — changes are live within ~60 seconds
4. Never batch multiple tasks of changes without pushing
5. Gate check tasks = push + visually verify on Vercel production URL

## PROJECT TRACKING

**Notion Build Tracker:** https://www.notion.so/0cd2cbc711384266bab383d0891622cc
- 73 tasks across 13 phases
- Update task status after completing each task
- Ship deadline: February 26, 2026

---

## Tech Stack (LOCKED — do not suggest alternatives)

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Phosphor Icons + Lucide React |
| UI Components | shadcn/ui |
| Content | MDX (case study content separated from page logic) |
| Fonts | Geist Sans + Geist Mono (built into Next.js) |
| Deployment | Vercel |

---

## Site Structure (LOCKED)

| Page | Route | Type |
|------|-------|------|
| Home | `/` | Landing — positioning + sectioned case cards + CTA |
| EMR Migration | `/emr-migration` | Real Work (Evenly Intern) |
| Lead Management System | `/lead-management` | Real Work (Evenly Current) |
| Career Assessment Tool | `/career-assessment` | Independent Project |
| SQL Analytics | `/sql-analytics` | Independent Project |
| The Path | `/the-path` | Transition narrative |

Home page has two sections: "From the Field" (EMR, Lead Mgmt) + "Independent Projects" (Career Assessment, SQL Analytics).

---

## Design System

### Colors (LOCKED)

| Element | Value |
|---------|-------|
| Primary Accent | `#E74011` (Shivani's brand orange-red) |
| Background | `#0A0A0A` |
| Surface/Cards | `#111111` – `#1A1A1A` |
| Primary Text | `#FAFAFA` |
| Secondary Text | `#888888` |
| Borders | Subtle, low-opacity white or gray |

**Secondary accent:** NOT YET FINALIZED. Do not use `#FED4D2` or any secondary accent color until explicitly told to.

**Gradient palette:** PENDING. Shivani will provide Figma JSON with `#E74011` intensity variants. Do not guess gradient values.

### Typography (LOCKED)

| Role | Font |
|------|------|
| Headings + Body | Geist Sans |
| Monospace (UI cards, metrics, system elements) | Geist Mono |
| Decorative (brand mark) | Logo script as SVG/image — hero + footer ONLY |

**Style:** Bold large punchy headlines. Regular weight with generous line-height for body. Narrow-to-medium content column. Generous whitespace.

### Design Philosophy (LOCKED)

- Dark SaaS aesthetic with personality (not corporate-flat, not pure minimalism)
- UI-component-style elements as personality: dashboards, terminals, workflow diagrams, system architecture cards
- Design elements that look like systems, not stock images
- Approachable, slightly playful (Beanstalk vibe, not Linear's corporate-cool)
- Text-heavy with diagrams/workflows where possible

**Primary reference:** beans.talk
**Secondary reference:** linear.app

---

## Voice & Content Rules

### Positioning
"Execution-focused builder who turns operational chaos into strategic advantage through system design."

### Rules
- Say what happened, with numbers
- No corporate jargon
- If it sounds like LinkedIn AI wrote it, rewrite it
- Read it aloud — should sound natural

### Banned Phrases (NEVER use these in any generated content)
- "leverage" / "leveraged"
- "synergy" / "synergies"
- "spearhead" / "spearheaded"
- "value-added"
- "strategic initiatives"
- "cross-functional collaboration"
- "stakeholder alignment"
- "drive results"
- "passionate about"
- "proven track record"

---

## Verified Metrics (USE ONLY THESE — invent nothing)

### Evenly Current (Growth & Ops Associate, Aug-Oct 2025)
- 15% MoM growth
- 30% package conversion increase
- 100+ lost leads recovered

### Evenly Intern (Founder's Office, Dec 2023-Jun 2024)
- 40% revenue growth (Feb-Jun 2024)
- <1% inventory error rate
- Zero revenue disruption during Zenoti migration
- 100% patient documentation digitized
- Team grew from 4 to 14+

### Deloitte (Consulting Analyst, Jul 2024-Jul 2025)
- 18 Epic modules tested
- 400+ release notes analyzed
- 50+ defects resolved
- Zero production defects in owned modules
- 10 workflows designed in 6-week M&A integration
- 11 critical defects caught (Neurology)
- 300 test cases validated
- 5 team members trained

If a metric is not listed above, flag it as: [NEEDS VERIFICATION: X]

---

## Folder Map
```
portfolio-site/
├── CLAUDE.md              ← This file. Auto-read by Claude Code.
├── .claude/
│   ├── settings.json
│   └── skills/          ← 10 curated skills (auto-discovered by Claude Code)
├── working/               ← Throwaway experiments, test files. Never deploy.
├── docs/
│   └── DECISIONS.md       ← Locked design/architecture decisions
├── src/
│   ├── app/               ← Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx       ← Home
│   │   ├── emr-migration/
│   │   ├── lead-management/
│   │   ├── career-assessment/
│   │   ├── sql-analytics/
│   │   └── the-path/
│   ├── components/
│   │   ├── layout/        ← Nav, Footer
│   │   ├── ui/            ← shadcn/ui components
│   │   └── case-study/    ← Metric cards, diagrams, case-specific
│   ├── content/           ← MDX case study files
│   ├── lib/               ← Utilities, MDX config
│   ├── styles/            ← Global CSS, Tailwind config
│   └── assets/            ← Logo SVG, images
└── public/                ← Static assets (favicon, OG image)
```

### Key Separation
- `C:\Shivani Claude\PM Project\portfolio\` = Source material (extraction sessions, case drafts). NOT part of the deployable site.
- `C:\Shivani Claude\PM Project\portfolio-site\` = THIS project. The deployable website.
- `portfolio-site\working\` = Throwaway experiments for this project only.

---

## MDX Content Convention

Case study content lives in `src/content/` as `.mdx` files. Page components in `src/app/[route]/page.tsx` import and render MDX. This separates content from layout — future updates mean editing `.mdx`, not JSX.

---

## Skills Reference

10 skills are installed in `.claude/skills/` (auto-discovered by Claude Code). Read the relevant skill **before** starting the task it covers — don't read all 10 at once.

### When to Read Which Skill

| Task | Read These Skills First |
|------|------------------------|
| Scaffolding Next.js project | `next-best-practices`, `nextjs-app-router-patterns` |
| Setting up Tailwind config & design tokens | `tailwind-design-system` |
| Building any UI component | `frontend-design`, `ui-ux-pro-max` |
| Building with shadcn/ui | `shadcn-ui`, `ui-ux-pro-max` |
| Writing page/section copy | `copywriting` (filter through banned phrases above) |
| Adding animations or transitions | `ui-animation` |
| Performance optimization | `vercel-react-best-practices` |
| Pre-ship QA/review | `web-design-guidelines` |

### Voice Rules Override
The `copywriting` skill uses generic marketing tone. **Our voice rules (Section: Voice & Content Rules) and banned phrases list ALWAYS override** any copy suggestions from the skill.

### Priority Order (if skills conflict)
1. **This CLAUDE.md** — always wins
2. `next-best-practices` — framework conventions
3. `frontend-design` — aesthetic direction
4. Task-specific skill — domain guidance

---

## Preferences

Long-term working preferences. These persist across sessions and apply to all future work on this project.

### Communication
- Ask before making changes to any locked decision or existing file
- Explain what you're doing and why before executing
- If uncertain between two approaches, present both and ask — don't guess
- Be direct. No filler text or unnecessary caveats.

### Code Style
- Descriptive component names (not generic: `HeroSection` not `Section1`)
- Tailwind classes organized: layout → spacing → typography → colors → effects
- One component per file unless tightly coupled
- Comments only where intent isn't obvious from the code

### Review
- Show diffs for existing file modifications
- Confirm before overwriting any file
- After completing a prompt, list what was created/modified/unchanged

### Content
- All copy follows voice rules in this file — no exceptions
- Metrics come only from the Verified Metrics section — no exceptions
- If content needs a metric not listed, flag it as [NEEDS VERIFICATION] and continue

### Working Patterns
- When installing skills via `npx skills add`, NEVER use the `-y` flag. It auto-installs to every detected agent (.agent/, .agents/, .cursor/, .claude/skills/) and creates 165+ unnecessary symlinks. Always run interactively and select only the target folder manually.
- [TO BE POPULATED — Add more patterns discovered during build]
