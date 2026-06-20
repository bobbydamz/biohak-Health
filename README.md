# BioHAK Wellness — Holding Page

A "launching soon" page for BioHAK Wellness, built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Design notes

- **Palette**: paper off-white background, deep ink-green text, a single botanical green signature accent.
- **Type**: Fraunces (display) paired with Inter (body/UI).
- **Signature element**: an animated leaf-vein line drawing behind the headline, drawn with CSS `stroke-dashoffset`, referencing the leaf in the BioHAK mark.
- **Countdown**: targets **1 September 2026, 00:00 WAT**. Update the date in `components/Countdown.tsx` if it changes.
- **Email signup**: currently a stub that logs to console — see "Connecting the email signup" below.
- **Logo**: currently a placeholder wordmark+icon in `components/Logo.tsx` — see "Adding the real logo" below.
- Respects `prefers-reduced-motion` and has visible keyboard focus states throughout.

## Getting started locally

Requires [Node.js](https://nodejs.org) 18.17 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding the real logo

1. Drop your logo file into `/public` (e.g. `public/logo.svg`).
2. Open `components/Logo.tsx` — it has a comment block with the exact `<Image>` snippet to paste in, replacing the placeholder wordmark.

## Connecting the email signup

`components/EmailSignup.tsx` currently simulates a submission. To wire it up for real:

- **Mailchimp / ConvertKit / Klaviyo etc.**: create an API route at `app/api/subscribe/route.ts` that forwards the email to your provider's API (keep the API key in an environment variable, never in client code), then call `fetch("/api/subscribe", ...)` from the form instead of the stub.
- **Google Form**: point the fetch at the form's `formResponse` URL with the correct `entry.XXXXXXX` field name for the email question (use `mode: "no-cors"`, since Google Forms doesn't return a readable response).

## Deployment (Vercel)

This project is ready to deploy as-is. See the walkthrough provided alongside this repo for the full step-by-step (GitHub → Vercel import → deploy).

## Project structure

```
app/
  layout.tsx       — root layout, fonts, metadata
  page.tsx          — the holding page itself
  globals.css       — design tokens, animations, base styles
components/
  Logo.tsx          — logo placeholder (swap for real logo)
  LeafVein.tsx       — animated signature SVG
  Countdown.tsx      — live countdown to launch
  EmailSignup.tsx    — stubbed signup form
```
