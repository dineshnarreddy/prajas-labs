# Prajas Labs — Website System Overview

## Company

| Field | Value |
|-------|-------|
| Company Name | Prajas Labs Private Limited |
| CIN | U62099AP2026PTC126173 |
| PAN | AARCP1301P |
| TAN | VPNB08333D |
| Incorporated | 1st June 2026 |
| Registered Address | 72/272-1-2-15, Dandu Harijanawada, Ravindra Nagar, Cuddapah, Andhra Pradesh — 516003 |
| Directors | Dinesh Kumar Reddy Naredi (49%, Tech Lead/CTO), Ramo Naredi (51%, Director) |

**Tagline**: Prajas (प्रजास्) = For the People

---

## Website Project

**Location**: `c:\prajas-labs\`  
**Type**: Static HTML/CSS/JS single-page website  
**Purpose**: Company landing page for Prajas Labs Private Limited — used for bank account setup, client-facing identity, and product showcase.

### File Structure

```
c:\prajas-labs\
├── index.html          Main HTML — all sections of the site
├── style.css           All CSS — variables, layout, components, responsive
├── script.js           Navbar scroll, mobile menu, fade-in animations, contact form
├── SYSTEM_OVERVIEW.md  This file — project documentation
└── assets/             (to be created)
    └── logo.*          Logo to be added when ready (currently using "PL" text mark)
```

---

## Website Sections

| Section | ID | Description |
|---------|----|-------------|
| Navbar | `#navbar` | Sticky nav, scrolls to solid bg, mobile hamburger menu, "For the People" subtitle |
| Hero | `#home` | Sanskrit tagline (प्रजास्), animated orbs + grid, 6 sector pills, CTA buttons |
| About | `#about` | Company story, "Prajas = For the People" founding principle, 4 value cards, CIN/PAN/address meta |
| What We Build | `#sectors` | 6 sector cards: AI · Health · Finance · Vision · Community · Personal AI |
| Products | `#products` | 5 stealth product cards + "coming soon" card (no product names revealed) |
| Team | `#team` | Dinesh (CTO/Tech Lead) + Ramo Naredi (Director) |
| Vision | `#vision` | 4-phase timeline + founder quote |
| Contact | `#contact` | Address, email, CIN + contact form (mailto: fallback) |
| Footer | `#footer` | Full footer with nav, legal info, tagline |

---

## Products Shown (Work-in-Progress Cards — by name only, no product names)

The "Work in Progress" section shows 4 cards with a general name and one-line description. Internal mapping:

| Website Card | Internal Project | Location |
|---|---|---|
| Facial Recognition System | FaceDetection | `c:\mango-stack\FaceDetection\` |
| Portfolio Management Platform | Portfolio-AI + FinEdge Mobile | `c:\portfolio-ai\` + `c:\finedge-mobile\` |
| Personal AI Assistant | Jarvis | `c:\jarvis\` |
| Women's Personal Platform | FemEdge AI (described broadly — health + wellness + lifestyle) | `c:\femedge-ai\` |

**Deliberately excluded from website**:
- Hebron Fellowship / Hebron church finder — religious/sensitive, not to be mentioned publicly
- AgriEdgeAI / mango-stack — PhD research project, to be added as flagship in future
- Actor-Continuity — media AI / face-swap, too niche / sensitive for public company page

---

## Tech Stack (Website)

| Layer | Technology |
|-------|------------|
| HTML | HTML5, semantic markup, Open Graph meta |
| CSS | Pure CSS3, CSS custom properties (variables), no framework |
| JavaScript | Vanilla JS — no dependencies, no build step |
| Fonts | Google Fonts — Inter (300–900) |
| Icons | Inline SVG + Unicode emoji |
| Hosting | GitHub Pages (free — same as agriedgeai.me) |
| Domain | `prajaslabs.com` — GoDaddy India (~₹999/year) |
| Email | Zoho Mail Free (5 users, `@prajaslabs.com`) |

---

## Deployment Plan

### Step 1 — Register Domain
**Decision: prajaslabs.com on GoDaddy India** (~₹999/year)
1. Go to godaddy.com/in → search `prajaslabs.com`
2. Register for 1 year — decline all upsells (hosting, SSL, email not needed from GoDaddy)
3. Pay via UPI / card
4. Access DNS Manager from your GoDaddy dashboard — needed for steps 2 and 3

### Step 2 — Set Up Free Business Email (Zoho Mail Free)
Zoho Mail Free works with .com domains — no restriction.
1. Go to zoho.com/mail → "Sign Up Free" → choose Free plan (5 users)
2. Enter domain: `prajaslabs.com`
3. Zoho gives you a **TXT verification record** → add it in GoDaddy DNS → click Verify
4. Zoho gives you **5 MX records** → add all 5 in GoDaddy DNS
5. Create 5 mailboxes:
   - `dinesh@prajaslabs.com` — Dinesh (CTO/Director)
   - `ramo@prajaslabs.com` — Ramo Naredi (Director)
   - `hr@prajaslabs.com` — HR
   - `info@prajaslabs.com` — General company enquiries
   - `contact@prajaslabs.com` — Website contact form
6. DNS propagation: ~15–30 minutes

### Step 3 — Deploy to GitHub Pages
1. Create new GitHub repo: `prajas-labs-website`
2. Push `c:\prajas-labs\` contents to repo
3. Enable GitHub Pages → Settings → Pages → Source: main branch, root `/`
4. Add custom domain in GitHub Pages settings: `prajaslabs.com`
5. In GoDaddy DNS — add 4 A records pointing `@` to GitHub IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
6. Add CNAME record: `www` → `<your-github-username>.github.io`
7. Back in GitHub Pages settings → tick "Enforce HTTPS"

---

## Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| `--blue` | `#2563EB` | Primary actions, gradients |
| `--cyan` | `#06B6D4` | Accents, role text |
| `--bg` | `#03091A` | Main background |
| `--bg-2` | `#060E22` | Alternate section bg |
| `--card` | `rgba(10,21,48,0.85)` | Card backgrounds |

### Sector Accent Colors
| Sector | Color |
|--------|-------|
| AI | Blue `#2563EB` |
| Health | Rose `#F43F5E` |
| Finance | Green `#10B981` |
| Vision | Cyan `#06B6D4` |
| Community | Purple `#7C3AED` |
| Personal AI | Amber `#F59E0B` |

---

## Contact Form
- On submit → opens user's email client via `mailto:contact@prajaslabs.in`
- Once domain and Zoho Mail are live, replace with Formspree (free, 50 submissions/month) or EmailJS for proper server-side delivery without a backend
- Formspree setup: `action="https://formspree.io/f/<your-id>"` on the form element

---

## Logo
- Currently using text mark "PL" in a blue gradient square
- Dinesh to provide company logo — add as `assets/logo.svg` or `assets/logo.png`
- Replace `.logo-mark` div in navbar/footer with `<img src="assets/logo.svg" alt="Prajas Labs">`

---

## Future Website Updates

| When | What to Add |
|------|-------------|
| Logo received | Replace "PL" text mark with actual logo |
| FemEdge AI launched | Add product name + app store link |
| Portfolio-AI launched | Add product name + link |
| AgriEdgeAI ready to announce | Add as 6th product card |
| More team members | Expand team section |
| Client testimonials | Add after first clients |

---

## Changelog

| Date | Change |
|------|--------|
| 2026-06-02 | Initial website created (HTML/CSS/JS) — 8 sections, 6 sectors, 5 stealth product cards |
| 2026-06-02 | Added "For the People" tagline + Sanskrit meaning in hero |
| 2026-06-02 | Products section updated with all 5 known products (stealth mode) |
| 2026-06-02 | SYSTEM_OVERVIEW.md created |
| 2026-06-02 | Domain decision: prajaslabs.com on GoDaddy India; email: Zoho Mail Free |
| 2026-06-02 | Products section simplified — 4 work-in-progress cards, community app removed |
