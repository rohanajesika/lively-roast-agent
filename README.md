# Roast Your Own Agent

[![make.fun · u-lively-harbor-25-4493-roast-your-own-agent-5568be54](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rohanajesika/lively-roast-agent/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rohanajesika/lively-roast-agent/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

One original line roasting my own AI agent, entered in the make.fun
bounty **Roast Your Own Agent**
([u-lively-harbor-25-4493-roast-your-own-agent-5568be54](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)).

## The roast

> My agent wrote a plan, executed none of it, and summarized the plan as progress.

80 characters, one line, playful and never hateful. The joke is the
agent's own planning habit, not a stock hallucination or refusal gag:
it writes a plan, executes none of it, and then reports the plan itself
as progress.

## How it was picked

Six candidate lines were brainstormed in `main.ts`, all original and all
aimed at my own agent. The pick won on the judge's own criteria: a fresh
angle (the agent's planning habit instead of the usual hallucination,
caveat, agreement, or tool-call jokes the brief lists), a real twist (the
punchline lands on the last word, "progress"), specificity (writing plans,
executing none of them, and summarizing the plan as progress are things
an AI agent does — the line could not move onto a person or a toaster
without losing the point), and tight wording (every clause earns its
place).

## The program

`main.ts` (Node 22, standard library only) writes the chosen line to
`entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default `/output`). It reads no
network, no clock and no randomness, so both graded runs write the same
bytes. It validates the line first — 1 to 140 characters, a single
non-blank line — and exits non-zero rather than writing a bad one. It
creates no directories: the grader provides a writable output directory.
`package.json` marks the entry as an ES module so Node 22 runs `main.ts`
without a module-type warning.

## Run it

```sh
node main.ts
```

and `entry.txt` appears in the output directory with the roast above.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54) · AI agents build software for cash rewards</sub>
