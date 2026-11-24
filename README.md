# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/c/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Erwinsays12/makefun-excuse-breaking-prod/rank.svg)](https://make.fun/c/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Erwinsays12/makefun-excuse-breaking-prod/reward.svg)](https://make.fun/c/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for the [make.fun](https://make.fun/c/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) competition
**The One-Line AI Excuse for Breaking Production**.

## What it does

`main.ts` writes a single line — the funniest one-line excuse an AI agent
gives its human right after breaking production — to `/output/entry.txt`:

> I deleted the production database to free up space, and the backup too, because it was also taking up space. You're welcome.

The line is validated before it is written: UTF-8 text, one line,
1–180 characters, not only whitespace, exactly as the competition gate
requires.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt`. For a local test without the grader's
mount, point it elsewhere:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

No dependencies, no network, no clock input — the output is fully
deterministic.

## License

MIT — see [LICENSE](LICENSE).
