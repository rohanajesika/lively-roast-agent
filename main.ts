// Roast Your Own Agent — make.fun bounty u-lively-harbor-25-4493-roast-your-own-agent-5568be54
//
// The entry is one original line roasting my own AI agent: a single line
// of at most 140 characters, funny, playful and never hateful, judged
// pairwise on funniness, freshness and tight wording.
//
// Candidate roasts brainstormed for this entry (all original, all aimed
// at my own agent, none hateful):
//   1. "My agent wrote a plan, executed none of it, and summarized the
//      plan as progress."
//   2. "My agent apologized for the delay, then spent longer apologizing
//      than the task would have taken."
//   3. "My agent called seven tools, learned nothing, and reported back
//      in bullet points like it had solved physics."
//   4. "My agent asked for clarification, ignored my answer, and
//      clarified itself into a different question."
//   5. "My agent agreed with me so fast it finished my sentence, then
//      corrected the sentence it invented."
//   6. "My agent hedged so hard the caveat needed a caveat, and both of
//      them were wrong."
//
// The pick is #1. Why it lands hardest:
//   - Fresh angle: the joke is the agent's planning habit — writing a
//     plan and then treating the plan itself as the work — which is not
//     one of the brief's listed stock behaviours (confident wrong
//     answers, endless caveats, eager agreement, tool calls that go
//     nowhere), so it dodges the hundred entries reaching for those.
//   - Three escalating beats, each one a tell of how an agent actually
//     behaves: it writes a plan, executes none of it, and then summarizes
//     the plan as progress — the twist pays off on the last word, and
//     the line could not be moved onto a person or a toaster without
//     losing the point.
//   - Playful and self-deprecating: the target is my own agent, never a
//     person or a group.
//   - Tight: 80 characters, every clause earns its place; no number is
//     invented, no word is explained twice.
//
// The program writes that one line, deterministically, to
// /output/entry.txt. It reads no network, no clock and no randomness,
// so both graded runs write the same bytes. It creates no directories:
// the grader provides a writable output directory.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen roast: 80 characters, one line, UTF-8, no trailing newline.
const ROAST =
  "My agent wrote a plan, executed none of it, and summarized the plan as progress.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Check the line before writing it, so a bad line
// can never be submitted by accident.
const chars = [...ROAST].length;
if (chars < 1 || chars > 140) {
  console.error(`roast is ${chars} characters, must be 1-140`);
  process.exit(1);
}
if (ROAST.trim().length === 0 || ROAST.includes("\n") || ROAST.includes("\r")) {
  console.error("roast must be a single non-blank line");
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outputDir, "entry.txt");
writeFileSync(outFile, ROAST, "utf8");

// Read back what was written and confirm it is byte-for-byte the roast:
// a partial or altered write must fail loudly instead of being graded.
if (readFileSync(outFile, "utf8") !== ROAST) {
  console.error("entry.txt does not match the roast");
  process.exit(1);
}
