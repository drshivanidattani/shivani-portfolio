# PORTFOLIO WEBSITE — ALL DECISIONS
*Single source of truth for every locked design, tech, and content decision.*
*Do not modify locked decisions without explicit approval.*

**Owner:** Shivani Dattani
**Created:** February 19, 2026
**Last Updated:** February 19, 2026
**Ship Deadline:** February 26, 2026

---

## 1. SITE STRUCTURE — LOCKED ✅

| Page | Route | Purpose | Type |
|------|-------|---------|------|
| Home | `/` | Positioning + sectioned case cards + CTA | Landing |
| EMR Migration | `/emr-migration` | Systems thinking case (Practo Ray → Zenoti) | Real Work (Evenly Intern) |
| Lead Management System | `/lead-management` | Growth/process case (built from scratch) | Real Work (Evenly Current) |
| Career Assessment Tool | `/career-assessment` | Product assignment case | Independent Project |
| SQL Analytics | `/sql-analytics` | SaaS subscription analytics simulation | Independent Project |
| The Path | `/the-path` | Transition narrative + technical competency story | Storytelling |

### Home Page Sections
- **"From the Field"** — EMR Migration, Lead Management System
- **"Independent Projects"** — Career Assessment Tool, SQL Analytics
- Must answer in <10 seconds: Who are you? What do you do? Why should I care?

### Explicitly Excluded
- Blog/writing section (no PM writing yet)
- AI experiments (wait for 3+ experiments)
- Separate resume/contact pages (contact in footer or The Path)
- Learning/How I Think page (cases demonstrate thinking)

---

## 2. TECH STACK — LOCKED ✅

| Layer | Tool | Justification |
|-------|------|---------------|
| Framework | Next.js 14 (App Router) | File-based routing (each case = one route), built-in image optimization, SSR for fast loads, industry standard React framework |
| Styling | Tailwind CSS | Utility-first for rapid iteration without CSS file context-switching, massive industry adoption |
| Animation | Framer Motion | Declarative animations native to React, scroll reveals + hover states with minimal code. GSAP would be overkill |
| Icons | Phosphor Icons + Lucide React | Two libraries for variety without bloat |
| UI Components | shadcn/ui | Unstyled, composable, owned (not a dependency). Shows understanding of component architecture |
| Content | MDX | Separates case study content from page logic. Future updates = edit one .mdx file, not JSX |
| Font | Geist Sans + Geist Mono | Built into Next.js (zero config). Clean, modern, designed for interfaces |
| Deployment | Vercel | Built by Next.js team, zero-config deploy, automatic preview URLs, free tier sufficient |

### Polish Phase Tool
| Tool | Purpose | When |
|------|---------|------|
| Antigravity (Google) | Visual polish, micro-interactions, final design refinement | After functional build is complete. Does NOT replace Claude Code for structural work. |

### Build Workflow
| Tool | Role |
|------|------|
| Claude.ai | Strategy, thinking, decisions, specs, content, troubleshooting |
| Claude Code | All technical execution — scaffold, build, debug |
| Antigravity | Final visual polish only (post-build) |

---

## 3. VISUAL DESIGN — LOCKED ✅

### Design Philosophy
- Dark SaaS aesthetic with personality (not corporate-flat, not pure minimalism)
- UI-component-style design elements as personality — styled like dashboards, terminals, workflow diagrams, system architecture cards
- Design elements that *look like systems* instead of stock images
- Approachable tone, slightly playful
- Text-heavy with diagrams/workflows where possible

### Reference Sites
| Site | Role | Reason |
|------|------|--------|
| beans.talk | Primary reference | Dark, interactive UI components, approachable, bold headlines, personality |
| linear.app | Secondary reference | Dark minimal SaaS. Liked but too corporate-cool as primary |

### Rejected References
| Site | Reason |
|------|--------|
| brittanychiang.com | Too developer-focused, wrong tone for PM |
| Athos Dark (Framer template) | "Plain and boring." Built for UX portfolio, not PM text-heavy case studies |

---

## 4. COLOR SYSTEM — LOCKED ✅

### Brand Color (from personal logo)
| Element | Value | Source |
|---------|-------|--------|
| Primary Accent | `#E74011` | Shivani's logo — red-orange |
| Logo Pink (secondary) | `#FED4D2` | From logo mark |

### Usage Strategy
- `#E74011` = Bold moments: logo, hero accent, section highlights, card borders
- UI-friendly variants (softer shades from gradient) = Links, badges, hover states, interactive elements
- `#FED4D2` = Soft secondary accent, subtle highlights
- **Full gradient palette:** To be imported from Figma JSON (pending upload from Shivani)

### Surface Colors
| Element | Value |
|---------|-------|
| Background | `#0A0A0A` |
| Surface/cards | `#111111` – `#1A1A1A` |
| Primary text | `#FAFAFA` |
| Secondary text | `#888888` |
| Borders | Subtle, low-opacity white or gray |

---

## 5. TYPOGRAPHY — LOCKED ✅

| Role | Font | Notes |
|------|------|-------|
| Primary (headings + body) | Geist Sans | Built into Next.js. Zero config. |
| Monospace (UI cards, system elements) | Geist Mono | Built into Next.js. Code blocks, metric displays. |
| Decorative (signature/brand mark) | Logo script font (SVG/image) | Used ONLY as logo/signature mark in hero + footer. Not as a text font. |

### Typography Style
- Headlines: Bold, large, punchy
- Body: Regular weight, generous line-height
- Narrow-to-medium content column (not full-width)
- Generous whitespace between sections

### Evaluated & Rejected
| Font | Reason |
|------|--------|
| Inter | "Too rounded" |
| Space Grotesk | "Certain characters too sharp and distracting" |
| Caveat / Kalam / Permanent Marker | Unnecessary — logo script handles personality. These would feel forced. |

---

## 6. CONTENT & VOICE — LOCKED ✅

### Positioning
"Execution-focused builder who turns operational chaos into strategic advantage through system design."

### Voice Rules
- Say what happened, with numbers
- No corporate jargon
- If it sounds like LinkedIn AI wrote it, rewrite it
- Read it aloud — should sound natural

### Banned Phrases
"leverage," "synergy," "spearhead," "value-added," "strategic initiatives," "cross-functional collaboration," "stakeholder alignment," "drive results," "passionate about," "proven track record"

### Verified Metrics — USE ONLY THESE

**Evenly Current (Growth & Ops Associate, Aug-Oct 2025):**
- 15% MoM growth
- 30% package conversion increase
- 100+ lost leads recovered

**Evenly Intern (Founder's Office, Dec 2023-Jun 2024):**
- 40% revenue growth (Feb-Jun 2024)
- <1% inventory error rate
- Zero revenue disruption during Zenoti migration
- 100% patient documentation digitized
- Team grew from 4 to 14+

**Deloitte (Consulting Analyst, Jul 2024-Jul 2025):**
- 18 Epic modules tested
- 400+ release notes analyzed
- 50+ defects resolved
- Zero production defects in owned modules
- 10 workflows designed in 6-week M&A integration
- 11 critical defects caught (Neurology)
- 300 test cases validated
- 5 team members trained

---

## 7. FOLDER STRUCTURE — LOCKED ✅
```
portfolio-site\
├── docs\                           ← Decision docs (not deployed)
│   └── DECISIONS.md
├── src\
│   ├── app\                        ← Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx                ← Home
│   │   ├── emr-migration\
│   │   ├── lead-management\
│   │   ├── career-assessment\
│   │   ├── sql-analytics\
│   │   └── the-path\
│   ├── components\
│   │   ├── layout\                 ← Nav, Footer
│   │   ├── ui\                     ← shadcn/ui
│   │   └── case-study\             ← Metric cards, diagrams, case-specific
│   ├── content\                    ← MDX case study files
│   ├── lib\                        ← Utilities, MDX config
│   ├── styles\                     ← Global CSS, Tailwind overrides
│   └── assets\                     ← Logo SVG, images
├── public\                         ← Static assets (favicon, OG image)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Relationship to Other Folders
- `C:\Shivani Claude\PM Project\portfolio\` = Source material (extraction sessions, case drafts). NOT the website.
- `C:\Shivani Claude\PM Project\portfolio-site\` = The deployable website.
- `C:\Shivani Claude\PM Project\working\` = Throwaway files (swatches, experiments).

---

## 8. OPEN ITEMS

| Item | Status | Notes |
|------|--------|-------|
| Orange gradient palette from Figma | PENDING | Shivani to share Figma JSON with gradient shades of #E74011 |
| Logo SVG/font file | PENDING | Need the actual logo asset for hero + footer |
| Build sequence / daily milestones | NOT STARTED | Next planning step |
| Case study content finalization | IN PROGRESS | EMR ~95% extracted, Lead Mgmt extracted, others pending |

---

## Deployment Workflow — LOCKED
- **Decision:** Code → GitHub → Vercel auto-deploy from main
- **Date:** Feb 19, 2026
- **Rationale:** Every push is instantly visible. No separate deploy step. Enables continuous verification during build.

## Build Tracker — LOCKED
- **Decision:** Notion database for 73-task tracker
- **URL:** https://www.notion.so/0cd2cbc711384266bab383d0891622cc
- **Date:** Feb 19, 2026

## claude-mem Plugin — REJECTED
- **Decision:** Do not install claude-mem. Permanently rejected for this project.
- **Date:** Feb 20, 2026
- **Rationale:** Existing documentation (CLAUDE.md, MEMORY.md, DECISIONS.md) + codebase itself serves as persistent memory. Adding Bun, Chroma, SQLite, Python, and 5 hook scripts introduces fragile dependencies on a Windows machine. Community plugin with no compatibility guarantees. Do not revisit.

*This file is the single source of truth. All build prompts reference this document.*
