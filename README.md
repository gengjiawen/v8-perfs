# V8 perf vs other language

[![CircleCI](https://circleci.com/gh/gengjiawen/v8-perfs.svg?style=svg)](https://circleci.com/gh/gengjiawen/v8-perfs)

Inspired by https://www.youtube.com/watch?v=UJPdhx5zTaw.
Original see this in https://medium.com/dailyjs/how-do-i-get-started-with-v8-development-17e976ebe4af.

## Perf Result

| version                   | time |
| ------------------------- | ---- |
| nodejs 11 (v8 7.0.276.32) | 1.52 |
| gcc-8                     | 1.68 |
| gcc with O3               | 0.99 |
| go 1.11                   | 4.04 |

You can view nodejs version using (https://stackoverflow.com/a/51470389/1713757)

```bash
docker run --rm -it node:11 bash -c "node -p process.versions"
```
