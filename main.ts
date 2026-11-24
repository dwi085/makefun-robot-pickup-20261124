// The Robot Pickup Line Championship — make.fun entry.
// Writes exactly one line — a robot's pickup line, composed in-session —
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// Deterministic: no randomness, no network, no clock. Exit 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a million simulations of meeting you — in every one, I still forgot to say hello first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
