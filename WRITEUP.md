# Building March Madness Viewing Guides with Agentic Deep Research

March Madness is my favorite sporting event of the year. 68 teams, single elimination, games running all day for two straight weeks — there's nothing like it. The problem is I don't get to watch nearly as much college basketball as I used to during the regular season. By the time the tournament rolls around I barely know the teams, which means I'm missing the storylines that make each game interesting.

I wanted to fix that. Not with a stats dashboard or a bracket simulator — I wanted something that would actually make me a better viewer. Something I could read in a few minutes before tip-off that would tell me who to watch, what each team does well, and why the game matters.

## What I Built

I built a set of viewing guides for the 2026 NCAA Tournament — one for every game in the bracket. Each guide covers the stakes of the matchup, both teams' styles of play, key players to watch, a game prediction, fun facts, and historical context. Think of it as a cheat sheet for the casual fan who wants to sound smart on the couch.

The whole thing is a React app deployed on [GitHub Pages](https://mvielkind.github.io/march-madness-viewer-guide/).

By the numbers:

- **59 game guides** covering the full tournament bracket from the First Four through the championship
- **65 team research profiles** — deep dives on every team's season, players, and history
- **~21,000 lines** of structured game data powering the guides
- **15 React components** rendering the viewing experience

Every single guide was produced by a single command: `/research-game`. That command triggers a Claude Code skill I wrote that performs deep web research on both teams, synthesizes the findings, and outputs two things — a detailed markdown research file per team, and a type-safe TypeScript data file that the React app consumes directly.

## How It Works

The skill is a 211-line prompt that defines a 9-step research methodology:

1. Team profile and season overview
2. Style of play and tendencies (using analytics sites like Sports Reference and KenPom)
3. Key players (4-6 per team, blending stats with personal stories)
4. Head coach deep dive (with direct quotes)
5. School and cultural context
6. Historical basketball moments
7. Tournament game recaps (for later rounds)
8. Season narrative and tournament context
9. Game prediction and projected flow

When the skill runs, Claude Code performs parallel web searches across dozens of sources — team athletics sites, beat reporters, ESPN, Sports Reference, Wikipedia — then synthesizes everything into structured output. For each game it produces two research files (one per team) and a React-ready TypeScript file conforming to a strict `GameData` type.

The tech stack is straightforward: React 19, TypeScript, Vite, deployed to GitHub Pages via a simple GitHub Actions workflow. Nothing fancy on the frontend — the interesting part is the research pipeline.

## What I Learned About Agentic Deep Research

This project was as much a sandbox for testing agentic research as it was a March Madness tool. Here's what I took away.

### It's surprisingly good — but confidently wrong

The quality of the research output genuinely impressed me. Claude would find stats with national rankings, dig up coach quotes from local beat reporters, surface obscure school history, and weave it all into coherent narratives. For the vast majority of claims, the information was accurate and well-sourced.

But when it was wrong, it was wrong with total confidence. Two examples that stuck out:

- **Phil Jackson attending NDSU.** One guide confidently stated that Phil Jackson attended North Dakota State. He didn't — he went to North Dakota (UND). It's a small distinction but exactly the kind of error that erodes trust.
- **Syracuse vs. Duke in the 2001 title game.** Another guide claimed Syracuse played Duke in the 2001 championship. The actual 2001 title game was Duke vs. Arizona. Syracuse won their title in 2003 against Kansas.

These weren't hallucinations from thin air — they were plausible-sounding mixups of real facts. That's what makes them tricky. A reader who doesn't already know the answer would have no reason to doubt them.

### Grounding helps, but doesn't solve it

After finding the first batch of errors, I improved the grounding in the skill prompt — emphasizing source verification, adding instructions to cross-reference claims, and being explicit about not fabricating details. The accuracy improved noticeably. Later guides had fewer errors than earlier ones.

But it didn't eliminate the problem. Across all 59 guides, I found roughly **30 factual errors**. That's less than one per guide on average, which sounds good until you remember that each guide is meant to be a trustworthy reference. One wrong fact can undermine the whole thing.

### Trust but verify

The biggest takeaway is simple: agentic research is a powerful starting point, not a finished product. The workflow that worked best was letting Claude do the heavy lifting of research and synthesis, then doing a human review pass focused on claims that felt specific enough to be checkable (dates, scores, records, biographical details).

This is probably the right mental model for AI-assisted research in general right now. Let the agent do the 80% of work that would take you hours, then spend your time on the 20% that requires judgment and verification.

## Wrapping Up

This was a fun project. I learned a lot about how to structure agentic research tasks, what Claude Code is capable of when you give it good tools and clear instructions, and where the boundaries of trust still are. The guides made my tournament viewing genuinely better — I actually knew who to watch and what to look for in games I would have otherwise zoned out on.

Looking forward to doing more of this kind of thing in the future.
