# Foam Coffee Baguio Concept Website

A polished marketing website concept for Foam Coffee in Baguio City, designed as a premium proposal site with strong brand direction, a working inquiry form, and mobile-friendly navigation.

## Project overview

This project is built with Next.js App Router, TypeScript, Tailwind CSS, and a lightweight marketing-first design system inspired by Baguio’s cool weather, cloud-like foam language, and warm café interiors. The site is intentionally a concept/proposal and includes a demo mode banner and noindex settings when `NEXT_PUBLIC_DEMO_MODE=true`.

## Setup instructions

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:3000

## npm install

```bash
npm install
```

## npm run dev

```bash
npm run dev
```

## Environment variables

The project uses the following environment variables:

- `RESEND_API_KEY`: Your Resend API key for sending form submissions.
- `CONTACT_TO_EMAIL`: Recipient email for website inquiries. Default: `foamcoffeeph@gmail.com`
- `CONTACT_FROM_EMAIL`: Verified sender address configured in Resend.
- `NEXT_PUBLIC_DEMO_MODE`: Set to `true` for demo mode preview; set to `false` when the site is ready to go live.

Example values are included in `.env.example`.

## Resend configuration

1. Create a Resend account and generate an API key.
2. Add your verified sending domain in Resend.
3. Set `CONTACT_FROM_EMAIL` to a valid sender address such as `hello@yourdomain.com`.
4. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` to your environment.
5. Use the form in the site to test the message flow.

If email configuration has not been completed yet, the site still shows a working email and phone link and the form can still behave in demo mode without exposing the API key.

## How the contact form works

The contact form posts to `/api/contact` using a Next.js route handler. The handler:

- validates posted values with Zod
- blocks obvious bot submissions using a hidden honeypot field
- sends an HTML email via Resend
- sets `replyTo` to the visitor’s email address where supported
- returns a JSON success or error state to the frontend

The server does not expose the Resend key to the browser.

## How to change recipient email

Update `CONTACT_TO_EMAIL` in `.env.local` or `.env.example`.

Example:

```bash
CONTACT_TO_EMAIL=hello@yourdomain.com
```

## How to replace sample photos

The project includes stylized placeholder image slots under `public/images/` and `public/images/social/`.

To replace them:

1. Add the real files in the same folders.
2. Keep the same image filenames or update the references in `data/foam.ts`.
3. Use the same aspect ratios so the layout remains stable.

The project includes a fallback treatment so missing images do not break the layout.

## How to update branches

Update the following file:

- `data/foam.ts`

The `branches` array contains the verified Baguio details for Travelite and Legarda.

## How to update menu

Update the `menuHighlights` array in:

- `data/foam.ts`

This section is intended as a curated highlights view rather than a full static menu. It is designed to be easy to revise when a current menu is supplied.

## How to disable DEMO MODE

Set this value to `false` in your environment:

```bash
NEXT_PUBLIC_DEMO_MODE=false
```

This removes the preview banner and allows the site to be indexed by search engines.

## How to deploy on Vercel

1. Push the project to GitHub.
2. Import it into Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy the project.
5. Confirm the app builds successfully.

## How to connect a custom domain

1. In Vercel, open the project dashboard.
2. Go to Settings > Domains.
3. Add your custom domain.
4. Update DNS records as instructed by Vercel.
5. Save and wait for DNS propagation.

## Notes

- This is a website concept and not the official Foam Coffee website.
- No database or authentication is included.
- The project does not invent prices, awards, or unverified business details.
- Business information should be verified with Foam Coffee before production deployment.
