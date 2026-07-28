# Best Interior Designers in Hyderabad

## Mission
Create implementation-ready, token-driven UI guidance for Best Interior Designers in Hyderabad that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Best Interior Designers in Hyderabad
- URL: https://lhinteriors.in/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Montserrat`, `font.family.stack=Montserrat, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=26px`
- Typography scale: `font.size.xs=13px`, `font.size.sm=13.3px`, `font.size.md=14px`, `font.size.lg=15px`, `font.size.xl=16px`, `font.size.2xl=20px`, `font.size.3xl=26px`, `font.size.4xl=58px`
- Color palette: `color.text.primary=#211d1a`, `color.text.secondary=#bf793b`, `color.text.tertiary=#636363`, `color.text.inverse=#ffffff`, `color.surface.base=#000000`, `color.surface.strong=#f8f8f8`
- Spacing scale: `space.1=5px`, `space.2=8px`, `space.3=10px`, `space.4=12px`, `space.5=15px`, `space.6=16px`, `space.7=17px`, `space.8=20px`
- Radius/shadow/motion tokens: `radius.xs=5px` | `motion.duration.instant=300ms`, `motion.duration.fast=400ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (89), buttons (30), lists (9), navigation (3).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
