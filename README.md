# Playwright [Issue 31140] Reproduction

Steps to reproduce:

1. `git clone https://github.com/askoufis/playwright-31140-reproduction.git`
1. `cd playwright-31140-reproduction`
1. `pnpm install`
1. `pnpm exec playwright install`
1. `pnpm test`

The test succeeds on `@playwright/test@1.42.1`, but fails on `@playwright/test@1.43.0`.

[issue 31140]: https://github.com/microsoft/playwright/issues/31140
