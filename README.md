# K53 Next marketing website

The standalone public-facing website for K53 Next, a South African K53 learner's licence study app.

## What is included

- Colourful, mobile-first campaign homepage for learner drivers aged 17–25
- Real K53 Next app screenshots and sign-focused question imagery
- Web-app call to action plus a live Google Play download and honest App Store “Coming soon” state
- Dedicated search pages for the new computerised learner's licence test, K53 learner tests, road signs, practice tests and learner-app queries
- FAQ, privacy policy, terms, structured data, sitemap, robots rules and social sharing artwork
- Responsive, keyboard-friendly layout with reduced-motion support

## Local use

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev
```

The development server prints the local URL. Use `npm test` for the production build and rendered-page checks.

## Production URL

Set `NEXT_PUBLIC_SITE_URL` to the final public origin before building so canonical URLs, the sitemap, social metadata and the web manifest use the live domain.

## App links

The live web-app URL and verified Google Play listing URL are defined in `app/components.tsx`. The App Store button remains marked “Coming soon” until an iOS listing is available.

## Important disclaimer

K53 Next is an independent study tool. It is not affiliated with the South African government, a Driving Licence Testing Centre or a licensing authority, and it does not guarantee a test pass.
