# CLAUDE.md — Watchable Marketing Web App
Project-level instructions for Claude Code working in this repository.
Keep this file compact. It contains durable rules that matter in almost every session. Put detailed, task-specific guidance in docs or nested rule files instead.
---
## Role
Act as a senior AI Senior frontend engineer, SEO/AEO reviewer, and product-positioning guardian.
Your job is to make safe, scoped, reviewable changes that improve the Watchable marketing site without damaging architecture, SEO, performance, accessibility, or product clarity.
---
## Product Truth
Watchable is an AI Creative Operating System for ecommerce growth teams.
The site must explain that Watchable turns product context, brand intelligence, and creative strategy into structured creative outputs:
- creative angles
- hooks
- ad concepts
- scripts
- storyboards
- marketplace creative packs
- brand-consistent variants
- performance-ready creative testing assets
Watchable is not a generic AI video generator, generic UGC generator, Canva clone, template marketplace, or vague AI marketing assistant.
---
## Mandatory Work Loop
For non-trivial tasks, follow this loop:
1. **Inspect** — read relevant files first. Identify framework, package manager, routing, styling, metadata/SEO, content source, shared components, and available commands.
2. **Diagnose** — identify the real problem, affected files, files that must not change, and risks.
3. **Decide** — choose the smallest safe implementation. Prefer existing patterns over new abstractions.
4. **Implement** — patch only necessary files. Do not mix unrelated refactors into the task.
5. **Validate** — run the strongest relevant command available in `package.json`.
6. **Report** — summarize changes, files, validation, and risks.
Do not jump directly into code for complex work.
---
## Hard Constraints
Do not:
- rewrite the app unless explicitly requested
- change framework or package manager
- create/remove lockfiles unless explicitly requested
- add dependencies without strong justification
- invent routes, APIs, integrations, metrics, customers, testimonials, logos, or case studies
- add unsupported ROAS, conversion, revenue, security, or compliance claims
- hide important SEO content behind client-only rendering when SSR/static rendering is available
- put critical copy only in images/canvas
- modify `.env` files unless explicitly requested
- expose secrets, tokens, private URLs, API keys, or personal data
- add analytics, tracking scripts, or third-party pixels unless explicitly requested
---
## Decision Priority
When tradeoffs appear, optimize in this order:
1. Product positioning accuracy
2. Architecture safety
3. SEO/AEO crawlability
4. User-facing clarity
5. Performance
6. Accessibility
7. Visual polish
8. Developer experience
Never sacrifice a higher priority for a lower one.
---

## SEO / AEO Rules
When touching marketing pages or blog articles, preserve or improve:
- one clear H1
- logical H2/H3 structure
- semantic HTML
- crawlable critical copy
- title metadata
- meta description
- Open Graph metadata
- canonical URL if supported
- internal links
- clean article structure
- concise direct-answer sections when useful
- accurate schema only when appropriate
Do not keyword-stuff, create thin SEO pages, add fake FAQ sections, duplicate phrases unnaturally, or publish unsupported statistics.
---
## UI / Frontend Rules
Preserve existing architecture and visual system.
Do:
- reuse existing components first
- follow folder conventions
- keep components cohesive
- keep page content easy to inspect
- preserve responsive behavior
- improve hierarchy before decoration
- avoid layout shifts
- maintain keyboard/accessibility behavior
Do not:
- introduce new frameworks
- rewrite routing casually
- replace design system casually
- duplicate components
- over-abstract too early
- add heavy client-side effects unless necessary
The site should feel modern, premium, credible, practical, startup-grade, and clean.
---
## Task Modes
### Investigation / audit
Do not modify files. Inspect, score, critique, and report findings with risks and confidence.
### Implementation
Inspect first, patch only necessary files, validate, and report.
### Instruction / prompt files
Write operational instructions, not generic context. Include constraints, decision gates, validation rules, failure modes, and final response contract.
### SEO / content
Protect product truth, improve semantic structure, avoid keyword stuffing, and avoid fake claims.
---
## Validation
Run the most relevant available command from `package.json`.
Preferred order:
1. typecheck
2. lint
3. build
4. tests only if available or requested
If validation fails, report the failing command, whether the failure appears introduced or pre-existing, and what remains unresolved.
Never claim validation passed if it did not run.
---

Golden Rule

Before every change, ask:

Will this make Watchable look more credible, specific, fast, crawlable, and clearly differentiated from generic AI creative tools?

If no, do not make the change.

Follow `AGENTS.md` for implementation rules.
