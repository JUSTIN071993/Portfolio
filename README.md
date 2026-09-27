# Justin Automation portfolio

Customized from brewed-ops/portfolio-template using https://jbern-automation.lovable.app/ on 26 September 2026.

Includes identity, portrait, services, six popup case studies, process, tools, certifications as stated on the source, contact email and adapted FAQ. The original responsive shell, contour background, theme controls and navigation are retained. Product mockups and unprovided testimonials are replaced with relevant case studies and the six-step process.

No social accounts, location, pricing, client names, certificate IDs or testimonials were supplied on the source, so none were invented. Contact opens an email draft; no backend is configured. Case studies open in themed, scrollable dialogs with challenges, solutions, workflows, screenshots, features and outcomes. Screenshots load from the original portfolio. Close with the X button, Escape, or the backdrop.

Run npm ci, then npm run dev. Production: npm run build. Deploy dist to a static host with SPA fallback to index.html. Set deployment-specific share URLs after choosing your host.

Validation: TypeScript and production build passed; ESLint has no errors (two inherited React Fast Refresh warnings). Desktop and 390px phone views checked. npm audit reports zero known vulnerabilities after compatible dependency updates.

In restricted environments, use `npm run build -- --configLoader runner` and `npm run preview -- --configLoader runner --host 127.0.0.1` to preview the production build.

## Vercel deployment

Import this repository into Vercel as the `justinbernaldez` project. Vercel uses `vercel.json` to build the Vite app and route direct visits such as `/projects` back to the application.

The contact form posts JSON to the Make.com webhook configured as the Vercel environment variable `VITE_CONTACT_ENDPOINT`. The payload contains `firstName`, `lastName`, `email`, `message`, and the empty honeypot field `website`. Configure the variable for Production, Preview, and Development, then redeploy. Until it is configured, the form opens an email draft addressed to `justin.automationtech@gmail.com`.

Display identity: Justin. Showcase navigation removed; old showcase URLs redirect to Projects. Palette: parchment #F1EAD7, sand #D6C8AD, olive #BDC4A2, sage #898E75, bark #675F4C, olivewood #2D3021.
