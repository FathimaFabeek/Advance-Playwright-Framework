# Advance Playwright Framework

A TypeScript-based browser automation framework built with Playwright Test. It includes page-object examples, data-reading utilities, and a custom HTML test reporter.

## Requirements

- Node.js and npm
- Chromium (install it with the command below)

## Setup

Install the project dependencies and the Playwright Chromium browser:

```bash
npm install
npx playwright install chromium
```

## Running tests

Run the Chromium test suite:

```bash
npm test -- --project=chromium
```

Run a specific test file:

```bash
npx playwright test tests/01_Login.spec.ts --project=chromium
```

Run the suite in CI mode (headless, with CI retries and a single worker) from PowerShell:

```powershell
$env:CI = "true"
npm test -- --project=chromium
```

Locally, Chromium runs headed by default. The configured viewport and browser window size are 1920×1080.

## Reports and artifacts

The custom reporter writes timestamped HTML reports to `tta-report/report_<timestamp>.html`. It also maintains `tta-report/index.html` as a link to the latest report and `tta-report/history.html` as a report index.

Playwright is configured to collect screenshots, videos, and traces. The custom reporter copies available artifacts into the report directory. Test results and generated reports are local output and should not be committed.

## Environment configuration

The Playwright configuration loads variables from a root `.env` file. Set `BASE_URL` to override the target URL, or choose an environment with `TTA_ENV`:

| `TTA_ENV` | Default base URL |
| --- | --- |
| `qa` (default) | `https://app.thetestingacademy.com` |
| `dev` or `local` | `http://localhost:3000` |
| `stg`, `stage`, or `staging` | `https://stage.thetestingacademy.com` |
| `prod` or `production` | `https://app.thetestingacademy.com` |
| `api` | `https://restful-booker.herokuapp.com` |

Environment-specific URLs can be overridden with `QA_BASE_URL`, `DEV_BASE_URL`, `STG_BASE_URL`, `PROD_BASE_URL`, and `API_BASE_URL`. MySQL-backed data utilities use `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, and `MYSQL_DATABASE`. Keep credentials in `.env`; do not commit that file.

## Project layout

```text
playwright.config.ts       Playwright projects, browser settings, and reporter
tests/                     Playwright test specifications
src/pages/                 Page-object classes
src/utils/                 Custom reporter and CSV, Excel, YAML, and MySQL utilities
tta-report/                Generated HTML reports and test artifacts
```

## Type checking

```bash
npx tsc --noEmit
```
