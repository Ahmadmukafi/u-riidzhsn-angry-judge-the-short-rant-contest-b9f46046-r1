import { mkdirSync, writeFileSync } from "node:fs";

// A rant in short punchy sentences: Monday gets no greeting, only a dismissal.
const line = "Monday, stop showing up at 7 AM like we are friends. You steal my weekend, you ruin my coffee, and you act surprised when I hit snooze five times. I did not invite you. I do not like you. Leave.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
