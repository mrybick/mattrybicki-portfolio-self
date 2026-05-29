# mattrybicki.com

My personal portfolio. The source for [mattrybicki.com](https://mattrybicki.com).

## What this is

This is the third version of my personal site, and the first one I actually built by hand.

The first two sites I shipped were vibe-coded: I described what I wanted, an AI wrote it, and I shipped code I couldn't read. This one is the opposite. Every line here was hand-typed by me, one concept at a time, with AI acting only as a Socratic tutor (explaining concepts, pointing at docs, reviewing my work) and never as an author. The point was to actually understand my own code.

That is what the footer badge means: roughly 1,100 lines, hand-coded, no AI authoring.

## Stack

- **TypeScript**
- **React 19**
- **Next.js 16** (App Router)
- **Tailwind CSS v4** (design tokens wired through `@theme` in `app/globals.css`)

No component libraries. Layout, state, and interactions are built from primitives.

## Structure

```
app/
  page.tsx          home (hero, timeline, selected work, contact)
  resume/page.tsx   interactive resume (lane toggle, expandable entries)
  layout.tsx        root layout, fonts, metadata
  globals.css       design tokens + Tailwind theme
components/
  Nav, Footer, HeroBleed, ResumeSection, SkillsSection
```

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
