# V8 perf vs other language

[![CircleCI](https://circleci.com/gh/gengjiawen/v8-perfs.svg?style=svg)](https://circleci.com/gh/gengjiawen/v8-perfs)

Inspired by https://www.youtube.com/watch?v=UJPdhx5zTaw.
Original see this in https://medium.com/dailyjs/how-do-i-get-started-with-v8-development-17e976ebe4af.

## Perf Result

| version                   | time  |
| ------------------------- | ----- |
| nodejs 11 (v8 7.0.276.32) | 1.561 |
| gcc                       | 1.741 |
| gcc with O3               | 1.035 |

You can view nodejs version using (https://stackoverflow.com/a/51470389/1713757)

```bash
docker run --rm -it node:11 bash -c "node -p process.versions"
```
