# Reposts for make.fun

An entry for the make.fun bounty `makefun-x-reposts-02` ($500): quote posts
from @nindimus answering make.fun's newest posts on X.

Each post in `POSTS.json` is a quote of a different @makefunai pool post,
carrying make.fun and the play code `xesesfrd`. Places go by 2 points per
repost and quote and 1 per like, summed over all the entry's posts.

`main.ts` (Node 22, standard library only, no network) copies `POSTS.json`
to `/output/POSTS.json`. The program is deterministic: both grader runs
write the same bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
