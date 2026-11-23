// One-Line Roast: The Gadget You Use Every Day
//
// Writes a single original roast line to /output/entry.txt.
// Deterministic: the same line on every run, no clock, no network,
// no input of any kind.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: my phone's face unlock recognises everyone except its owner.
const ROAST =
  "My phone unlocks for my sleeping face, my cat, and a photo of me, but never for me, awake, holding it.";

if (ROAST.length === 0 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
