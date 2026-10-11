# TheCrypto

An educational website about cryptocurrencies and crypto exchanges, built with Next.js. It is served at [thecrypto.com.br](https://thecrypto.com.br) through Firebase App Hosting.

## Features

- **Learning paths**: 23 lessons across four tracks (fundamentals, exchanges, security and custody, risk and strategy), with progress saved in the browser.
- **Exchange guide**: CEX vs DEX vs brokers vs P2P, the trade lifecycle, a breakdown of fees, red flags, an interactive due-diligence checklist and a live directory of top exchanges by trust score.
- **Live markets**: top 100 assets with prices, 24h and 7d changes, market cap, volume, sparklines, global market stats and top movers, in USD or BRL.
- **Tools**: live crypto converter, dollar-cost averaging backtester using real price history, exchange fee calculator and leverage/liquidation calculator.
- **Glossary**: 90 searchable terms grouped by category.
- **Quiz**: 40 questions with explanations and links to the related lessons.
- SEO metadata, sitemap, robots, Open Graph image and JSON-LD.

## Stack

- Next.js 16 (App Router, Cache Components) with strict TypeScript
- Tailwind CSS 4
- TanStack React Query for server state
- Zustand for client state (persisted preferences, learning progress, quiz history)
- axios for every HTTP call, zod for validation

Market data comes from the public [CoinGecko API](https://www.coingecko.com/en/api). Route handlers under `app/api` proxy CoinGecko with an in-memory cache that serves the last good snapshot (flagged as delayed) when the provider is unavailable.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Environment variables

Both are optional. Copy `.env.example` to `.env.local` to set them.

| Variable | Description |
|---|---|
| `COINGECKO_API_URL` | Base URL of the CoinGecko API. Defaults to the public endpoint. |
| `COINGECKO_API_KEY` | CoinGecko demo API key for higher rate limits. |

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint (comments are not allowed in source files) |

## Deployment

The app is deployed to Firebase App Hosting. `firebase.json` targets the `thecrypto` backend and `apphosting.yaml` holds the Cloud Run settings.

```bash
npx firebase-tools deploy --only apphosting --project <firebase-project-id>
```

## Disclaimer

All content is for educational purposes only and is not financial, investment, legal or tax advice.
