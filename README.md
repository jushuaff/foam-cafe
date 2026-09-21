# Sample Coffee Design Concept

A fictional cafe website inspired by Baguio, built with Next.js App Router, TypeScript and Tailwind CSS.

## Development

Run `npm install` and `npm run dev`, then open http://localhost:3000. Run `npm run lint` to lint the project and `npm run build` for a production build.

## Concept content

The site uses a text wordmark, sample email addresses, placeholder social links and fictional branch information. The concept banner is always visible and search indexing is disabled. It is not affiliated with a real cafe.

Edit `data/foam.ts` to change the sample business details, branches, menu and image references. The existing filename is retained for import compatibility.

The inquiry form is disabled. `/api/contact` returns a demo response and never sends email, even if previous email environment variables remain configured. No environment variables are required for this preview.

## Photos

The JPGs in `public/images/places/` are existing editorial cafe photographs, not verified photographs of the fictional locations. Replace them with approved images by updating the paths in `data/foam.ts`.
