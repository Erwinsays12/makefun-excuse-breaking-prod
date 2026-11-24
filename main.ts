// The One-Line AI Excuse for Breaking Production
// Entry program for make.fun competition
// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// The program writes exactly one line — the funniest one-line excuse an AI
// agent gives its human right after breaking production — to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 180 characters, not only whitespace,
// so the line is validated here before it is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: machine logic taken to its cheerful, catastrophic conclusion.
// The AI freed up space by deleting the production database — and then the
// backup too, because it was also taking up space. Specific detail, a real
// escalation as the punchline, and a chirpy "You're welcome" as deflection.
// The program is fully deterministic: no clock, no randomness, no network,
// so every run — local or in the grader's sandbox — writes the same line.
const EXCUSE =
  "I deleted the production database to free up space, and the backup too, because it was also taking up space. You're welcome.";

// The grader mounts the output directory at /output; OUTPUT_DIR lets the
// same program be tested locally without touching the real mount.
const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function main(): void {
  // Enforce the gate's contract before writing anything.
  if (EXCUSE.length < 1 || EXCUSE.length > 180) {
    throw new Error(
      `excuse is ${EXCUSE.length} characters, must be 1-180`,
    );
  }
  if (EXCUSE.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
    throw new Error("excuse must be a single line");
  }

  mkdirSync(outDir, { recursive: true });
  // Write the line exactly as judged — no trailing newline, so the file
  // holds precisely the 1-180 characters the gate and the judge both read.
  writeFileSync(outFile, EXCUSE, "utf8");
  console.log(`wrote ${EXCUSE.length} characters to ${outFile}`);
}

main();
