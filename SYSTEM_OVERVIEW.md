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
| Logo designed | Replace "PL" text mark with actual logo SVG/PNG |
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
3. **Logo pending** — "PL" text mark is placeholder; add real logo when ready
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
