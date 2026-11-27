// makefun-x-reposts-02 entry (Node 22, standard library only): copies POSTS.json
// from the repository root to /output/POSTS.json, where the gate reads it.
// The entry is the posts themselves: quotes of make.fun's newest X posts,
// made from one public account, each carrying make.fun and the play code.
// Nothing this program writes about the posts is scored.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`wrote ${join(OUTPUT_DIR, 'POSTS.json')}`);
