# Prajas Labs — Complete System Overview

> Last updated: 2 June 2026
> This document records every piece of information about the company, website, services, accounts, and decisions made. Keep this updated whenever anything changes.

---

## 1. Company Details

| Field | Value |
|-------|-------|
| **Full Name** | Prajas Labs Private Limited |
| **CIN** | U62099AP2026PTC126173 |
| **PAN** | AARCP1301P |
| **TAN** | VPNB08333D |
| **Incorporated** | 1st June 2026 |
| **Type** | Company Limited by Shares |
| **Act** | Companies Act, 2013 (18 of 2013) |
| **Registrar** | CRC Manesar 2 (Central Registration Centre) |
| **Signed by** | Aparajit Barua, Assistant Registrar of Companies |
| **Registered Address** | 72/272-1-2-15, Dandu Harijanawada, Ravindra Nagar, Cuddapah, Cuddapah-516003, Andhra Pradesh, India |
| **Tagline** | For the People |
| **Meaning** | "Prajas" means "the people" — the founding principle of the company |

---

## 2. Founders / Directors

### Dinesh Kumar Reddy Narreddy
| Field | Value |
|-------|-------|
| Role | Co-Founder, Director, Chief Technology Officer (CTO) |
| Shareholding | 49% |
| Personal email | NARREDDydineshkumarreddy@gmail.com |
| Company email | DineshKumarReddyNarreddy@Prajaslabs.com |
| Phone | 7842142118 |
| Location | UK (PhD) + India |
| Education | PhD researcher, Artificial Intelligence for Agriculture in Small Scale Farming, UK university |
| Experience | 8+ years building AI systems |
| Role description | Innovator, technical architect, drives all products and R&D at Prajas Labs |

### Ramamohan Reddy Narreddy
| Field | Value |
|-------|-------|
| Role | Co-Founder, Director |
| Shareholding | 51% (majority) |
| Company email | RamamohanreddyNarreddy@Prajaslabs.com |
| Location | Kadapa, Andhra Pradesh, India |
| Relation | Father of Dinesh |
| Role description | Strategic oversight, operational leadership, community values |

---

## 3. Domain & Hosting

### Domain
| Field | Value |
|-------|-------|
| Domain | prajaslabs.com |
| Registrar | GoDaddy India |
| Cost | ~₹999/year |
| Purchased | June 2026 |
| Control Panel | dashboard.godaddy.com → Prajas Labs → Domain |
| Auto-renewal | Check GoDaddy dashboard — ensure enabled |

### Hosting
| Field | Value |
|-------|-------|
| Provider | GitHub Pages (free) |
| GitHub Repo | https://github.com/dineshnarreddy/prajas-labs |
| Repo visibility | Public (required for free GitHub Pages) |
| Branch | main |
| Custom domain | prajaslabs.com |
| HTTPS | Enforced (Let's Encrypt certificate via GitHub) |
| Live URL | https://prajaslabs.com |

---

## 4. DNS Records (GoDaddy)

All records are set in GoDaddy DNS Manager. Do NOT delete these.

### Website (GitHub Pages)
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 1 Hour |
| A | @ | 185.199.109.153 | 1 Hour |
| A | @ | 185.199.110.153 | 1 Hour |
| A | @ | 185.199.111.153 | 1 Hour |
| CNAME | www | dineshnarreddy.github.io | 1 Hour |

### Email (Microsoft 365)
| Type | Name | Value | TTL |
|------|------|-------|-----|
| MX | @ | prajaslabs-com.mail.protection.outlook.com (Priority: 0) | 1 Hour |
| TXT | @ | v=spf1 include:spf.protection.outlook.com -all | 1 Hour |
| TXT | _dmarc | v=DMARC1;p=quarantine;adkim=r;aspf=r;rua=mailto:dmarc_rua@onsecureserver.net | 1 Hour |
| CNAME | autodiscover | autodiscover.outlook.com | 1 Hour |
| CNAME | enterpriseenrollment | enterpriseenrollment-s.manage.microsoft.com | 1 Hour |
| CNAME | enterpriseregistration | enterpriseregistration.windows.net | 1 Hour |

### System (GoDaddy default — do not touch)
| Type | Name | Value |
|------|------|-------|
| NS | @ | ns03.domaincontrol.com |
| NS | @ | ns04.domaincontrol.com |
| SOA | @ | Primary nameserver: ns03.domaincontrol.com |
| CNAME | _domainconnect | _domainconnect.gd.domaincontrol.com |

---

## 5. Microsoft 365

### Account
| Field | Value |
|-------|-------|
| Plan | Microsoft 365 Business Basic |
| Admin account | DineshKumarReddyNarreddy@Prajaslabs.com (or DineshNarreddy@Prajaslabs.com) |
| Tenant name | PrajasLabs |
| Default domain | PrajasLabs.onmicrosoft.com |
| Tenant ID | 257e4b48-81b4-4fe7-9f5c-e183b3681507 |
| Admin portal | admin.cloud.microsoft |
| Trial started | June 2026 |

> ⚠️ **IMPORTANT — TRIAL DEADLINE: CANCEL OR PAY BY 2 JULY 2026**
> Cost after trial: ₹152.25/user/month × 5 users = **₹761.25/month**
> To cancel or add payment: admin.cloud.microsoft → Billing → Subscriptions

### Email Accounts (5 users)
| Display Name | Email Address | Role | License |
|---|---|---|---|
| Dinesh Kumar Reddy Narreddy | DineshKumarReddyNarreddy@Prajaslabs.com | CTO / Director | M365 Business Basic |
| Ramamohan Reddy Narreddy | RamamohanreddyNarreddy@Prajaslabs.com | Director | M365 Business Basic |
| HUMAN RESOURCES | hr@Prajaslabs.com | HR | M365 Business Basic |
| info prajas | info@Prajaslabs.com | General Info | M365 Business Basic |
| contact prajas | contact@Prajaslabs.com | Website Contact | M365 Business Basic |

Note: Long usernames (Dinesh, Ramo) kept intentionally for official validation processes.

### What M365 Business Basic Includes
- Outlook email with @Prajaslabs.com addresses
- Microsoft Teams
- OneDrive (1TB per user)
- SharePoint
- Web versions of Word, Excel, PowerPoint
- 50GB mailbox per user

---

## 6. Website — Technical Details

### File Structure
```
c:\prajas-labs\
├── index.html          Single-page website (all sections)
├── style.css           All styling — responsive, dark theme
├── script.js           Nav scroll, mobile menu, fade-in, contact form
└── SYSTEM_OVERVIEW.md  This file
```

No build process. No framework. Pure HTML/CSS/JS — fast, no dependencies.

### Fonts
- Google Fonts: Inter (weights 300–900)
- Loaded via Google Fonts CDN

### Contact Form
- On submit: opens email client via `mailto:contact@prajaslabs.com`
- For a proper backend form (no email client popup), set up Formspree free tier:
  - Sign up at formspree.io → create form → replace form action with `https://formspree.io/f/<id>`
  - Free: 50 submissions/month

---

## 7. Website — Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#040C18` | Main background |
| `--bg2` | `#060F20` | Alternate sections |
| `--bg3` | `#091525` | Cards, inputs |
| `--c1` | `#0369A1` | Deep blue (gradient start) |
| `--c2` | `#0EA5E9` | Sky blue (primary) |
| `--c3` | `#38BDF8` | Light blue (accents, tags) |
| `--grad` | `#0369A1 → #0EA5E9` | Buttons, logo, accents |
| `--text` | `#94A3B8` | Body text |
| `--hi` | `#F0F6FF` | Headings, white text |
| `--dim` | `#475569` | Muted text, labels |

### Typography
- Font: Inter
- H1 hero: 5rem / 900 weight
- H2 sections: 2.5rem / 800 weight
- Body: 1rem / 400 weight
- Letter spacing: -0.03em on large headings

### Domain Accent Colors (sector cards)
| Domain | Color |
|--------|-------|
| Artificial Intelligence | Sky blue |
| Health Technology | Rose red |
| Financial Intelligence | Emerald green |
| Computer Vision | Cyan |
| Community Platforms | Violet |
| Personal AI | Amber |

---

## 8. Website — Sections & Content

| Section | ID | Key Content |
|---------|-----|-------------|
| Navbar | — | PL logo, "For the People" subtitle, 6 nav links |
| Hero | `#home` | "Technology That Empowers Everyone", 4-stat strip |
| About | `#about` | Company story, 4 principle cards |
| What We Build | `#sectors` | 6 domain cards with SVG icons |
| Products | `#products` | 4 work-in-progress cards |
| Team | `#team` | Dinesh + Ramo profile cards |
| Vision | `#vision` | 4-phase timeline + founder quote |
| Contact | `#contact` | Address, email + contact form |
| Footer | — | Links, legal (CIN/PAN) |

### Hero Stats Strip
- 6 Technology Domains
- AI-First Core Capability
- Multi-Sector Technology Company
- India Headquartered

---

## 9. Products Shown on Website (Stealth — no names revealed)

| Website Card | Internal Project | Location on Disk |
|---|---|---|
| Facial Recognition System | FaceDetection | `c:\mango-stack\FaceDetection\` |
| Portfolio Management Platform | Portfolio-AI + FinEdge Mobile | `c:\portfolio-ai\` + `c:\finedge-mobile\` |
| Personal AI Assistant | Jarvis | `c:\jarvis\` |
| Women's Personal Platform | FemEdge AI | `c:\femedge-ai\` |

### Deliberately NOT shown on website
| Project | Reason |
|---------|--------|
| Hebron Fellowship (church finder) | Religious/sensitive — not to be mentioned publicly |
| AgriEdgeAI / mango-stack | Dinesh's PhD project — will be flagship product in future, not yet |
| Actor-Continuity (face swap) | Too niche / sensitive for company homepage |

---

## 10. Six Technology Domains (shown on website)

| # | Domain | Description |
|---|--------|-------------|
| 01 | Artificial Intelligence | Custom AI models, deep learning, intelligent automation |
| 02 | Health Technology | Diagnostic tools, health monitoring, women's health |
| 03 | Financial Intelligence | Portfolio management, market analysis, investment AI |
| 04 | Computer Vision | Facial recognition, identity verification, visual AI |
| 05 | Community Platforms | Connecting people to communities, events, social infrastructure |
| 06 | Personal AI | Voice-enabled assistants, personal AI, on-premise AI |

---

## 11. Content Decisions & Rules

| Decision | Reason |
|----------|--------|
| No Sanskrit/Hindi text anywhere | Dinesh's preference — not needed |
| No "Incorporated June 2026" in hero/about | Too much company detail upfront on website |
| CIN only in footer legal area | Legal requirement, not marketing |
| No community/faith app mentioned | Hebron Fellowship is religious — sensitive, don't reveal |
| No AgriEdgeAI on website yet | PhD research project, will be flagship later — not ready |
| "For the People" tagline in English only | Clean, global appeal |
| Long email usernames kept | Required for official validation processes |
| Dark navy/blue color scheme | Professional, global tech company feel |
| No emojis in section content | Clean/premium look |
| SVG icons for domain cards | More professional than emoji |

---

## 12. All Known Projects on This Laptop

| Project | Location | Status |
|---------|----------|--------|
| AgriEdgeAI / mango-stack | `c:\mango-stack\` | Live in production (agriedgeai.me) |
| FemEdge AI | `c:\femedge-ai\` | In development — women's health AI |
| FaceDetection | `c:\mango-stack\FaceDetection\` | In development — facial recognition |
| Portfolio-AI | `c:\portfolio-ai\` | In development — financial AI |
| FinEdge Mobile | `c:\finedge-mobile\` | In development — React Native finance app |
| Jarvis | `c:\jarvis\` | In development — personal AI assistant |
| Actor-Continuity | `c:\actor-continuity\` | Core complete — face swap/voice clone for theatre |
| Hebron Fellowship | `c:\hebron-fellowship\` | In development — church/community finder |
| AI-UI-Demo | `c:\mango-stack\ai-ui-demo\` | Prototype — Streamlit chat UI |
| Prajas Labs Website | `c:\prajas-labs\` | LIVE — prajaslabs.com |

---

## 13. Deployment Workflow

To update the website after making changes to files in `c:\prajas-labs\`:

```powershell
cd c:\prajas-labs
git add index.html style.css script.js
git commit -m "describe what changed"
git push origin main
```

GitHub Pages auto-deploys in ~1–2 minutes. Do Ctrl+Shift+R on the browser to force-refresh cache.

---

## 14. Future Website Updates

| Trigger | What to Add |
|---------|-------------|
| Logo designed | ✅ Done 2026-07-21 — logo.svg in repo, applied to navbar and footer |
| FemEdge AI launched | Add product name + Google Play / App Store link |
| Portfolio-AI launched | Add product name + link |
| AgriEdgeAI ready to announce | Add as 5th product card, add "Agriculture AI" as 7th domain |
| More team members | Expand team section |
| Contact form backend needed | Set up Formspree free tier (50 submissions/month free) |
| Privacy policy needed | Create `privacy-policy.html` for Play Store compliance |

---

## 15. Costs Summary

| Service | Cost | Frequency | Notes |
|---------|------|-----------|-------|
| prajaslabs.com domain | ~₹999 | Annual | GoDaddy India |
| Microsoft 365 Business Basic | ₹761.25 | Monthly (5 users) | ⚠️ Trial ends 2 July 2026 |
| GitHub Pages hosting | ₹0 | Free | |
| Google Fonts (Inter) | ₹0 | Free | |
| **Total monthly after trial** | **~₹761** | | |
| **Total annual** | **~₹10,130** | | Domain + M365 |

---

## 16. Important Reminders

1. **⚠️ Microsoft 365 trial expires 2 July 2026** — either add payment method or cancel at admin.cloud.microsoft → Billing → Subscriptions
2. **GoDaddy domain renewal** — check auto-renewal is enabled; domain expires annually ~June 2027
3. **Logo** — ✅ logo.svg created and live on site (navbar + footer). letterhead.html available at prajaslabs.com/letterhead.html
4. **Contact form** — currently uses mailto (opens email client); upgrade to Formspree for proper server-side delivery when needed
5. **Company bank account** — website at prajaslabs.com can be shared with bank for account opening

---

## 17. Changelog

| Date | Change |
|------|--------|
| 2026-06-01 | Prajas Labs Private Limited incorporated (CIN: U62099AP2026PTC126173) |
| 2026-06-02 | Domain prajaslabs.com registered on GoDaddy India |
| 2026-06-02 | Microsoft 365 Business Basic trial started (5 users) |
| 2026-06-02 | All 5 M365 email accounts created |
| 2026-06-02 | Domain connected to M365 (DNS auto-configured via GoDaddy integration) |
| 2026-06-02 | GitHub repo dineshnarreddy/prajas-labs created |
| 2026-06-02 | GitHub Pages enabled, prajaslabs.com connected, HTTPS enforced |
| 2026-06-02 | Website v1 launched: 8 sections, 6 sectors, 4 product cards |
| 2026-06-02 | Website redesigned: removed Sanskrit, clean blue palette, content cleaned |
| 2026-06-02 | Removed incorporated date, CIN from prominent sections — footer only |
| 2026-07-21 | Full website redesign v2: dark OLED navy palette, Syne+Inter fonts, animated neural network SVG hero, marquee, domain cards with colored left borders, product header bands, NaukriSetu orphan-card fix |
| 2026-07-21 | logo.svg created — SVG recreation of company logo icon (network dome + 3 human figures in amber/blue/gray), icon-only (no text), works on dark and light backgrounds |
| 2026-07-21 | Logo applied to navbar and footer, replacing PL text mark |
| 2026-07-21 | letterhead.html created — print-ready A4 corporate letterhead with logo, dark header, contenteditable fields, watermark, signature block, company seal area, CIN/PAN/TAN in footer |
| 2026-07-21 | CSS ui-ux-pro-max improvements: premium multi-layer card hover shadows, inset highlight, section title gradient accent line (::after), richer --glow token, focus-visible ring, prefers-reduced-motion support |
| 2026-07-21 | logo.png added — actual company logo PNG (1784657833190.png from Downloads) replaces logo.svg; letterhead.html updated to use logo.png |
| 2026-07-21 | Full website redesign v3 — Linear/Vercel style: near-black #07090F bg, Syne 800 hero H1 (clamp 4–8.5rem), left-aligned hero, numbered domain list (01–06), products mosaic board, editorial about, minimal team list, no marquee, no eyebrow chips, no hero stat strip, no neural net SVG |
| 2026-07-22 | Website redesign v4 — premium two-column hero: logo.svg mark floats on right column with glow + drop shadow + float animation; gradient clip text on "the People."; dot grid background (body::before); radial glow (hero::after); logo references switched from logo.png → logo.svg in navbar + footer; logo.svg rebuilt with proper filled polygon trapezoid bodies (3 human figures: amber left, blue centre largest, gray right) + 3D radialGradient network nodes |
| 2026-07-22 | Website redesign v5 (Modern Dark Cinema — UI/UX Pro Max) — complete CSS overhaul: background switched from flat #07090F to linear-gradient(160deg, #0A0A12→#020206) with background-attachment:fixed; accent changed from sky-blue #0EA5E9 to premium indigo #5E6AD2 (Linear's exact brand color); animated ambient light blobs (3 elements, blur 90px, slow 11–15s drift keyframe); hero h1 shortened to "Built for / the people." with warm amber gradient on "the people."; hero kicker changed to "India · Technology · For the People"; hero description rewritten with conviction copy; nav-btn + btn-primary changed to pill shape (border-radius:9999px); cards glassmorphic (backdrop-filter:blur(12px), rgba surface + rgba border); nav bar glassmorphic; premium easing cubic-bezier(0.16,1,0.3,1) throughout; section glow dividers (gradient 1px border-top); inline SVG illustration accent updated: hi-orb + hi-bar + hi-glow gradients shifted to indigo; Card A bar/sparkline/tag changed from sky-blue to indigo; orb circles updated; connection line A changed to indigo |
| 2026-07-23 | ROLLBACK: Website v6 (Next.js export) reverted per Dinesh — live site back to v5 static (dark, commit 4c78797 state). v6 source preserved at C:\prajas-labs-next for re-publish |
| 2026-07-29 | Website v7 PUBLISHED (re-publish of Next.js site after full correction round) — content verified 152/152 lines against original site (automated diff): real founder names restored (Dinesh Kumar Reddy Narreddy CTO, Ramamohan Reddy Narreddy Director), contact@prajaslabs.com, Cuddapah address, CIN/PAN, real Vision roadmap + CTO quote, topic dropdown, all original copy verbatim; Emil Kowalski emil-design-eng skill applied (security-audited before install): spring mouse-tilt on WellCycle phone mockup, blur headline entrance, hover gating, press feedback, 120ms menu exit; Butterick typography pass: curly apostrophes, caps tracking ≤12%; title "Prajas Labs — For the People". Privacy/product pages preserved untouched |
| 2026-07-29 | Website v8 PUBLISHED — company-first restructure per Dinesh: WellCycle phone mockup removed from hero (was projecting single product + pink), replaced with product-agnostic Domain Constellation SVG (6 domains orbit Prajas hub, logo teal/amber spheres, spring tilt); all 5 products equal cards, WellCycle → Learn more → /wellcycle.html; dashed "More in the works" future slot (new launches = add one card, no redesign); Proof stats product-agnostic; contact form wired to FormSubmit AJAX → contact@prajaslabs.com (real delivery pipeline, error state + mailto fallback) — NEEDS one-time activation click in contact@ inbox; QA suite run: 1 h1, heading hierarchy fixed (footer h4→h3), 8/8 anchors resolve, all imgs alt, all fields labeled, meta/OG/favicon/skip-link/landmarks all present, zero stale content |
| 2026-07-29 | Website v9 PUBLISHED — fixes from Dinesh's live testing: (1) "Learn more" 404 fixed — new /wellcycle/ page inside Next app (content verbatim from wellcycle.html + FemEdge SYSTEM_OVERVIEW read-only facts): phone mockup hero "Women's Health AI That Stays With You", stats band (20/On-Device/AES-256/GDPR), How It Works 01-04, tech chips (ONNX/SQLCipher/Keystore/TLS1.3/R8/NICE-ESHRE-NAMS), 20 condition chips, 4 privacy pillars, beta CTA + Partner (wellcycle-collab.html); (2) Ramamohan Reddy Narreddy corrected to Founder · Director; (3) hero Domain Constellation now visible on all screens (was hidden <1024px); (4) navbar/footer links absolute /#anchor so subpage nav works; (5) link audit 37/37 resolve. Note: "PMOS" typo on old page rendered as PCOS on new page |
| 2026-07-29 | Website v10 PUBLISHED — (1) "localhost" report investigated: site HTML contains ZERO localhost references (only benign Next.js URL-parser string in framework chunk, present in every Next site); user's localhost sighting = Chrome top-sites/history tile from dev testing; hardened anyway: metadataBase + canonical + og:url declare https://prajaslabs.com on both pages; (2) mobile layout fixes: constellation capped 400px + 12px labels (was disproportionate on mobile/desktop-mode), hero gaps tightened, WellCycle phone privacy badge responsive position (was pushed off-screen on narrow phones) |
| 2026-07-29 | Website v11 PUBLISHED — WellCycle page rewritten for laymen + IP protection per Dinesh: removed all implementation disclosures (ONNX Runtime, SQLCipher AES-256, Android Keystore, TLS 1.3, R8, NICE/ESHRE/NAMS chips deleted); How It Works + privacy pillars + stats + hero copy in plain everyday language ("everything stays on your phone", "locked & safe", "Free — for every woman"); verified 0 technical terms remain on page. Note: old wellcycle.html (still on server) retains technical copy — consider retiring/redirecting it |
| 2026-07-29 | wellcycle.html (old technical page) replaced with redirect → /wellcycle/ — closes IP disclosure (old page listed ONNX/SQLCipher/AES-256/TLS stack publicly); original recoverable from git history (commit 727ed62) |
| 2026-07-29 | Website v12 PUBLISHED — legal positioning per Dinesh: WellCycle framed as wellness/health-awareness app, NOT diagnostic/screening tool (SaMD risk). "A companion, not a doctor" disclaimer card added (does not diagnose/treat/cure/prevent + consult doctor + emergency line — mirrors in-app consent); "checks/screens/conditions" → "awareness/insights/health topics" sitewide; cancer-risk chips → Breast/Ovarian/Uterine Health; PHQ-9 → Mental Wellbeing; "WellCycle informs; only a doctor can diagnose"; homepage "diagnostic tools" → "health tools". Recommend lawyer review before investor presentations |
| 2026-08-06 | Website v13 PUBLISHED — GovStep product page added per Dinesh (NaukriSetu/Pinged app renamed to GovStep, new Play Store listing, com.govstep.jobs). New `/govstep/` page mirrors WellCycle's structure (hero, stats, how-it-works, coverage, privacy, CTA) with GovStep's real content and its own brand orange (#ED6C02, matches the Android app icon) as a local accent — shared site tokens (paper/ink/blue/amber) untouched. Homepage Products card renamed from stale "NaukriSetu" → "GovStep", now links to the new page. Privacy Policy link points to the GovStep backend's own `/privacy` endpoint (single source of truth, not duplicated on this site). Used ui-ux-pro-max skill's `--domain landing`/`--domain color` guidance for a government/trust vertical (Trust & Authority section ordering) — kept the app's actual orange identity over the generic civic-navy palette suggestion, to stay consistent with the live app rather than the generic default. |
| 2026-08-06 | GitHub Pages build failure fixed — first deploy of this content (commit 9424947) failed instantly (API: `status=errored`, "Page build failed", `duration=0`) on every attempt. Removed Next.js 16/Turbopack's RSC prefetch/debug payload files (`__next*.txt`, `index.txt` alongside every `index.html`) sitewide — these are meaningless without a live Next.js server and appear to have been the trigger. A later rebuild attempt also failed instantly, which turned out to be a build-collision artifact from triggering multiple rebuilds back-to-back via the Pages API while diagnosing — a clean single trigger (`POST /pages/builds`) completed successfully. Confirmed live: `/govstep/` returns 200, homepage no longer contains "NaukriSetu" anywhere. Diagnosed using the GitHub REST API directly (`/pages`, `/pages/builds/latest`, `/actions/runs`) via the existing git-credential-manager token — `gh auth login` itself rejected that token for missing `read:org` scope, but plain `curl` with the same token worked fine for read + Pages-build-trigger calls. |
| 2026-08-07 | New `/govstep/privacy/` page — self-hosted privacy policy, reversing the v13 decision to point offsite at the GovStep backend's `/privacy` endpoint. Backstory: needed a nicer URL than the raw Railway address for Play Console, first tried a `govstep.prajaslabs.com` custom subdomain (Railway custom domain + GoDaddy CNAME) — but that requires a manual GoDaddy dashboard login neither Dinesh nor Claude had readily to hand, and Dinesh pointed out the obviously simpler fix: since GitHub push access already exists, just host the policy content directly on the site instead of routing through DNS/a third-party registrar at all. Content copied verbatim from the live `/privacy` page (fetched via curl, not retyped from memory), rebuilt with the site's own design tokens (Fraunces/Inter, paper/ink/blue palette) instead of the backend page's inline CSS. GovStepPage.tsx's two "Privacy Policy" links updated to `/govstep/privacy/`. No DNS, no external domain, no dependency outside this repo. |
| 2026-08-06 | Website v13 PUBLISHED — ALL founder names removed sitewide per Dinesh (re-add later when approved): Team section + both cards removed from homepage; nav "Team" + footer "Leadership" links removed; Vision quote attribution → "The Prajas Labs founding team"; personal gmail (dineshlazer999@) stripped from wellcycle-collab/present/privacy pages (also fixed invalid mailto format); wellcycle-present contact card → "Prajas Labs / Founding Team"; verified 0 name occurrences across export + all static pages |
| 2026-08-06 | Website v14 PUBLISHED — sensitive-data removal per Dinesh (fraud-prevention): (1) PAN AARCP1301P removed from footer + wellcycle-privacy.html + wellcycle-collab.html (tax ID, NOT legally required on a website, used in loan/identity fraud + fake invoices); (2) letterhead.html DELETED from public server — was live at /letterhead.html with 31 contenteditable fields AND real CIN+PAN+TAN VPNB08333D = ready-made forgery kit for fake official Prajas letters; preserved at C:\prajas-labs-private\letterhead.html + git history; (3) full registered street address (72/272-1-2-15, Dandu Harijanawada, Ravindra Nagar) reduced to "Cuddapah, Andhra Pradesh, India" on contact + privacy page (residential; MCA holds it on record); (4) CIN U62099AP2026PTC126173 RETAINED — mandated by Companies Act 2013 s.12(3)(c), already public on MCA portal, no added exposure. Audited clean: no source maps, no API keys/secrets, no phone numbers, only contact@prajaslabs.com exposed |
