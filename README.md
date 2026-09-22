# IMARIXA — Website

**Intelligence. Innovation. Impact.**

Production-ready marketing website for IMARIXA, a technology company offering website design, e-commerce, SEO, professional email, AI/automation and business software to clients in Tanzania and internationally.

Static HTML/CSS/JS. No build step, no framework, no external dependencies beyond Google Fonts.

---

## Project structure

```
imarixa-website/
├── index.html              Main site (all sections)
├── 404.html                 Custom not-found page
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── README.md
├── .gitignore
├── .env.example             Configuration placeholders (no real secrets)
│
├── assets/
│   ├── images/               Hero / section photography (.webp)
│   ├── icons/                 Reserved for additional icon assets
│   └── brand/                 Logo, favicons, app icons
│
├── css/
│   └── style.css             Full design system + layout
│
├── js/
│   └── main.js                Mobile menu, package CTAs, quote form
│
└── .github/
    └── workflows/
        └── deploy.yml         GitHub Pages deployment
```

---

## Running locally

No build tooling is required. From the project folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or open `index.html` directly in a browser (some relative-path behavior may differ slightly from a real server).

---

## Deploying to GitHub Pages

1. Push this repository to GitHub on the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to "GitHub Actions."
3. The included workflow (`.github/workflows/deploy.yml`) will build and deploy automatically on every push to `main`.
4. Your site will be live at `https://<username>.github.io/<repo>/` (or your custom domain, see below).

---

## Custom domain

1. Add a `CNAME` file at the project root containing only your domain, e.g.:
   ```
   www.imarixa.com
   ```
2. In **Settings → Pages**, enter the same custom domain and enable **Enforce HTTPS**.
3. At your DNS provider, create:
   - A `CNAME` record for `www` pointing to `<username>.github.io`
   - Or `A` records for the apex domain pointing to GitHub Pages' IPs (see [GitHub's Pages documentation](https://docs.github.com/pages) for current IPs)
4. Update `og:url`, `canonical`, and `sitemap.xml` to match your final domain.

No `CNAME` file is included by default since a confirmed domain wasn't provided.

---

## Connecting the quote form

The form (`#quoteForm` in `index.html`, handled in `js/main.js`) currently opens a prefilled WhatsApp message instead of submitting anywhere — no backend is pretended to exist. To connect a real backend:

**Option A — Formspree** (fastest)
1. Create a form at [formspree.io](https://formspree.io) and copy the form ID.
2. Set the form's `action` to `https://formspree.io/f/YOUR_ID` and `method="POST"`.
3. Remove or adjust the WhatsApp-only fallback in `main.js` once submissions are confirmed working.

**Option B — Resend / a serverless function**
1. Add `RESEND_API_KEY` and related values to your deployment environment (see `.env.example`).
2. Create a serverless function (Cloudflare Worker, Vercel/Netlify function, etc.) that receives the form POST and sends an email via Resend.
3. Point the form's `action` at that function's endpoint.

**Option C — EmailJS**
1. Set up a service/template at [emailjs.com](https://www.emailjs.com).
2. Add the EmailJS SDK and call `emailjs.send()` from `main.js` using the IDs in `.env.example`.

Whichever you choose, never commit real API keys — use environment variables in your hosting provider's dashboard (GitHub Actions secrets, Vercel/Netlify env vars, etc.), referencing the names in `.env.example`.

---

## Connecting a real payment gateway

The Payments section currently displays IMARIXA's public payment numbers and bank details only — no live checkout is wired up, and none is claimed to exist.

To go live:
1. Choose a provider that supports Tanzanian mobile money (e.g. Selcom, ClickPesa) and/or cards (Stripe, Flutterwave, DPO).
2. Implement checkout as: **Frontend → your serverless backend → payment provider**. Never call payment provider secret endpoints directly from frontend JS.
3. Store `PAYMENT_PROVIDER_API_KEY`, `PAYMENT_PROVIDER_SECRET`, and `PAYMENT_WEBHOOK_SECRET` (see `.env.example`) only in your backend/serverless environment variables — never in this repository.
4. Replace the "Gateway configuration required" badge in the Visa/Mastercard payment card once live.

---

## Social media links

Update the `href` values in the Contact section and footer of `index.html`, and the `sameAs` array in the JSON-LD block at the top of `index.html`, to match confirmed official accounts only. Do not add accounts that aren't documented as official IMARIXA channels.

---

## Editing content

All copy, pricing, and package details are sourced from the IMARIXA company profile and promotional flyers. If prices or packages change:
- Update the four `.price-card` blocks in `index.html` (`#packages`)
- Update the matching `<option>` list in the quote form's package `<select>`
- Update `js/main.js` only if package `data-package` / `data-price` attribute names change

---

## Production checklist

- [ ] Confirm final domain and add `CNAME`
- [ ] Update `canonical`, `og:url`, `sitemap.xml` with final domain
- [ ] Connect quote form to a real backend (see above)
- [ ] Connect payment gateway or confirm manual payment flow is acceptable at launch
- [ ] Verify all social links point to real, confirmed accounts
- [ ] Test mobile menu, package buttons, WhatsApp links, FAQ accordion
- [ ] Run Lighthouse for performance / accessibility / SEO
- [ ] Confirm `.env` is not committed (`.gitignore` already covers this)
- [ ] Enable HTTPS after custom domain DNS propagates

---

© 2026 IMARIXA. All Rights Reserved.
