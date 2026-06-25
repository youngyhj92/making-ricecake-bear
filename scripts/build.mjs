import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const entries = ["index.html", "styles.css", "script.js", "assets"];

if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true });
}

mkdirSync(dist, { recursive: true });

for (const entry of entries) {
  cpSync(join(root, entry), join(dist, entry), { recursive: true });
}

console.log("Built static frontend into dist/");
