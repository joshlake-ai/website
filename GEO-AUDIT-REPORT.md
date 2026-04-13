# GEO Audit Report: Josh Lake

**Audit Date:** April 13, 2026
**URL:** https://joshlake.ai
**Business Type:** Personal Brand / Thought Leader
**Pages Analyzed:** 4

---

## Executive Summary

**Overall GEO Score: 48/100 (Poor)**

joshlake.ai has strong first-person content and excellent technical performance as a static HTML site, but remains undermined by two foundational gaps: the site has no search engine indexation (Google and Bing return zero results), and Josh Lake has limited third-party brand signals for AI entity recognition. Significant local code improvements (llms.txt, schema enrichment, canonical fixes, conflict disclosures) have been implemented but **not yet deployed to production** -- deploying these changes is the single highest-leverage action and would raise the projected score to approximately 58-62/100. Beyond deployment, the biggest remaining opportunities are sourcing statistical claims, building external authority signals, and expanding content volume.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 44/100 | 25% | 11.0 |
| Brand Authority | 28/100 | 20% | 5.6 |
| Content E-E-A-T | 70/100 | 20% | 14.0 |
| Technical GEO | 62/100 | 15% | 9.3 |
| Schema & Structured Data | 52/100 | 10% | 5.2 |
| Platform Optimization | 29/100 | 10% | 2.9 |
| **Overall GEO Score** | | | **48.0/100** |

### Projected Score After Deploying Local Changes

| Category | Current | Projected | Delta |
|---|---|---|---|
| AI Citability | 44 | 48 | +4 (llms.txt, better schema) |
| Brand Authority | 28 | 28 | 0 (requires external actions) |
| Content E-E-A-T | 70 | 75 | +5 (disclosures, OG consistency) |
| Technical GEO | 62 | 78 | +16 (llms.txt, canonicals, sitemap, meta fixes) |
| Schema & Structured Data | 52 | 65 | +13 (WebSite, Organizations, Article enrichment, @id linking) |
| Platform Optimization | 29 | 32 | +3 (better crawl signals) |
| **Projected Score** | **48** | **~59** | **+11** |

---

## Deployment Gap (Fix Immediately)

The following improvements exist in local source code but have NOT been deployed to the live Cloudflare Pages site:

| Fix | File(s) | Impact |
|---|---|---|
| llms.txt created | `/llms.txt` | +10-15 pts Technical GEO |
| Sitemap URLs fixed (extensionless) | `sitemap.xml` | Crawl signal consistency |
| Canonical URLs fixed on all articles | `writing/*.html` | Stops URL signal fragmentation |
| OG/Twitter meta standardized | `writing/*.html` | Consistent social/AI preview |
| Article schemas enriched (dateModified, image, publisher as Org, mainEntityOfPage, @id) | `writing/*.html` | +10-13 pts Schema |
| WebSite schema added | `index.html` | Site-level entity signal |
| 3 standalone Organization schemas added | `index.html` | Independent entity discovery |
| Person schema @id added | `index.html` | Cross-page entity linking |
| Conflict of interest disclosures added | `writing/electrification-sequencing.html`, `writing/panel-upgrade-myth.html` | +5 pts Trustworthiness |
| Internal links fixed (extensionless) | All `.html` files | No more redirect chains |
| robots.txt updated with LLMs-txt | `robots.txt` | AI crawler signaling |

**Action: Deploy current local source to production immediately.** This is the highest-leverage single action available.

---

## Critical Issues (Fix Immediately)

### 1. Site Is Not Indexed by Google or Bing
- `site:joshlake.ai` returns zero results on both Google and Bing
- Without indexation, AI platforms that rely on search data (Google AI Overviews, ChatGPT browsing, Perplexity, Bing Copilot) cannot discover or cite any content
- **Fix:** Submit sitemap.xml to Google Search Console and Bing Webmaster Tools. Verify ownership for both. Enable Cloudflare Crawler Hints (IndexNow) in the Cloudflare dashboard under Speed > Optimization.

### 2. Local Changes Not Deployed
- llms.txt, schema fixes, canonical fixes, OG standardization, conflict disclosures, and sitemap fixes exist locally but are not live
- **Fix:** Deploy current source to Cloudflare Pages immediately.

### 3. Statistical Claims Lack Source Citations
- 15+ quantitative claims across articles have zero external citations
- Key unsourced claims: "average home uses 4% of panel capacity," "60-70% of gas usage is space heating," "15-25% water heating," "2-5% cooking," "30-50% energy cost reduction"
- AI systems weigh sourced claims more heavily when deciding what to cite
- **Fix:** Add inline hyperlinks to EIA, DOE, NREL, or industry sources for every numerical claim. This single action would raise AI Citability by an estimated 15-20 points.

---

## High Priority Issues

### 4. AI at a Startup Article Has Zero External References
- Purely experiential with no citations to research, case studies, or industry reports
- AI models answering "how should a startup implement AI?" will cite McKinsey, HBR, or Y Combinator over an unverified personal essay
- **Fix:** Add 3-5 references to published AI implementation research throughout the article.

### 5. FAQ Schema Questions Are Philosophical, Not Search-Optimized
- Current questions: "Why should we electrify everything?", "How will AI change business?", "What does it mean to build for the long game?"
- These do not match queries users ask AI assistants
- **Fix:** Replace or supplement with fact-based questions: "How much does it cost to electrify a home?", "Do I need a panel upgrade for a heat pump?", "What should I electrify first?", "How to implement AI at a small company?"

### 6. No Privacy Policy
- The site collects email addresses via the EEN newsletter form but has no privacy policy page
- **Fix:** Add a `/privacy` page linked from the footer covering data collection, usage, and unsubscribe instructions.

### 7. sameAs Links Limited to 3 Platforms
- Person schema only links to LinkedIn, X, and GitHub
- Missing: Crunchbase, Wikipedia (if page exists), Wikidata
- Organization schemas have zero sameAs links
- **Fix:** Add Crunchbase profile URL to sameAs array. Create Wikidata entry for Josh Lake with claims linking to MIT, Elephant Energy, and founder roles. Add sameAs to Organization schemas.

### 8. No SpeakableSpecification Schema
- Voice search optimization is absent across all pages
- **Fix:** Add `speakable` property to Article schemas targeting headlines and introductory paragraphs.

---

## Medium Priority Issues

### 9. Missing HSTS and Security Headers
- No Strict-Transport-Security, Content-Security-Policy, X-Frame-Options, or Permissions-Policy headers
- **Fix:** Create a `_headers` file for Cloudflare Pages with appropriate security headers.

### 10. Limited Brand Authority Signals
- No Wikipedia page, no Reddit presence, no YouTube content, no podcast appearances indexed for Josh Lake
- LinkedIn is the only strong external platform signal
- DR Richardson (Elephant Energy co-founder) has stronger media presence than Josh Lake
- **Fix:** Build external presence systematically (see 30-day plan).

### 11. Very Thin Content Footprint
- Only 4 pages / 3 articles
- AI systems favor sites with topical depth and breadth
- Competitors (Rewiring America, EnergySage, This Old House) have hundreds or thousands of pages
- **Fix:** Publish 2-4 articles per month in core domains targeting electrification subtopics.

### 12. No Images in AI or Sequencing Articles
- Panel article has 13 images; other two articles have zero
- Images with descriptive alt text provide additional AI extraction signals
- **Fix:** Add 2-3 relevant images per article (diagrams, decision trees, process flows).

### 13. 8+ Homepage Images Missing Alt Text
- Accessibility violation and missed SEO signal
- **Fix:** Add descriptive alt attributes to every `<img>` tag on the homepage.

---

## Low Priority Issues

### 14. No Responsive Image Attributes
- Images lack `srcset` and explicit `width`/`height` attributes
- **Fix:** Add responsive image markup to improve CLS and mobile performance.

### 15. Organization Schemas Lack Enrichment
- Standalone Organization blocks missing `logo`, `foundingDate`, and `sameAs`
- **Fix:** Add these properties to all 3 Organization schema blocks.

### 16. Article Schemas Missing wordCount and articleSection
- Recommended properties that help AI models understand content scope
- **Fix:** Add `wordCount` and `articleSection` to each Article schema.

### 17. No Dedicated /about Page
- Homepage serves as bio, but a separate author page would strengthen expertise signals
- **Fix:** Consider creating a `/about` page linked from article author bylines.

---

## Category Deep Dives

### AI Citability (44/100)

**Strengths:**
- Panel article product comparison (12 companies with pricing) is highly citable for comparison queries
- Named frameworks: "The Sequencing Problem," the panel decision tree, the 7-step electrification process
- NEC Section 220.87 reference demonstrates specific code-level knowledge
- Electrification rebate table with 5-category taxonomy is directly extractable
- robots.txt is wide open -- no AI crawlers blocked
- Strong callout boxes and numbered lists create scannable, extractable content blocks

**Weaknesses:**
- 15+ statistical claims with zero source citations -- the single largest citability failure
- AI article has zero external references of any kind (purely experiential)
- FAQ schema wraps opinion content, not factual answers
- No "Sources" or "Methodology" sections on any article
- Product pricing in panel article not linked to manufacturer pages
- Only 4 pages provides extremely thin citability surface area
- Site not indexed -- AI platforms cannot discover the content

**Best citability examples from the site:**
- Panel capacity statistic with cost framing (Article 3) -- would be excellent if sourced
- Named "sequencing problem" concept (Article 2)
- 12-company product decision tree for avoiding panel upgrades (Article 3)
- Rebate taxonomy table (Article 2)

### Brand Authority (28/100)

**Platform presence:**

| Platform | Status | Details |
|---|---|---|
| Wikipedia | Not found | No page for Josh Lake or Elephant Energy |
| Reddit | Not found | No threads mentioning Josh Lake in energy context |
| YouTube | Not found | No videos featuring Josh Lake |
| LinkedIn | Found | Active profile, complete career history |
| Podcasts | Not found | Co-founder DR Richardson has appearances; Josh does not |
| Media/Press | Weak | GlobeNewsWire funding announcement only; DR Richardson is primary spokesperson |
| Industry Pubs | Minimal | ACHR News author page exists (1 signal) |
| Crunchbase | Found | Elephant Energy profile ($5.8M funding) names Josh as co-founder |

**Entity recognition assessment:** An AI system would NOT reliably recognize "Josh Lake" as a distinct entity today. Key barriers: name collision with multiple unrelated people, no Wikipedia or Wikidata entry, secondary positioning behind DR Richardson in Elephant Energy press, and the personal site is not indexed.

### Content E-E-A-T (70/100)

**Experience: 88/100** -- The site's standout dimension. Strong first-person CTO narrative, "thousands of projects" practitioner knowledge, named companies with specific roles/outcomes. Minor gap: no specific before/after case studies with measurable results.

**Expertise: 80/100** -- MIT and Stanford credentials directly relevant. NEC code references demonstrate professional-grade knowledge. 12-company product landscape mapping shows market fluency. Gap: no separate author page, no peer-reviewed citations.

**Authoritativeness: 52/100** -- Weakest E-E-A-T dimension. New site with no inbound authority signals. Zero media mentions, speaking engagements, or "as featured in" signals. Only 3 articles provides thin topical depth. Crunchbase and ACHR News are the only third-party signals.

**Trustworthiness: 60/100** -- Good transparency (name, education, work history, location, email, social links). Critical gaps: unsourced statistical claims in YMYL content, no conflict-of-interest disclosure on live site (fixed locally), no privacy policy. Version note on panel article is a positive signal.

### Technical GEO (62/100)

**Sub-scores:**

| Component | Score |
|---|---|
| AI Crawler Access | 95/100 |
| Performance & Rendering | 95/100 |
| Response & Status | 80/100 |
| Meta Tags & Headers | 55/100 |
| Sitemap & Structure | 45/100 |
| Image Optimization | 45/100 |
| Security Headers | 40/100 |
| llms.txt | 0/100 |

**Strengths:** Fully open robots.txt, static HTML with no JS rendering required, 150ms page loads, 18-69KB page sizes, content immediately visible to AI crawlers.

**Key issues:** llms.txt missing (fixed locally), canonical/sitemap URL mismatch (fixed locally), inconsistent Twitter cards (fixed locally), missing HSTS/CSP/X-Frame-Options, images missing alt text and responsive attributes.

### Schema & Structured Data (52/100)

**What exists on the live site:**
- Person schema (comprehensive: name, credentials, education, companies, knowsAbout, awards)
- FAQPage with 6 Q&As
- Article + BreadcrumbList on all 3 writing pages

**What exists locally but is not deployed:**
- Person schema with @id for cross-page entity linking
- WebSite schema
- 3 standalone Organization JSON-LD blocks with @ids
- Enriched Article schemas (dateModified, image, publisher as Organization, mainEntityOfPage)

**What's still missing:**
- SpeakableSpecification on Article schemas
- sameAs expanded beyond 3 platforms (needs Crunchbase, Wikidata)
- Organization schemas need logo, foundingDate, sameAs
- Article schemas need wordCount, articleSection

### Platform Optimization (29/100)

| Platform | Score | Key Issue |
|---|---|---|
| Bing Copilot | 33/100 | Not indexed in Bing; no Bing Webmaster Tools verification |
| ChatGPT | 32/100 | Not blocked; no llms.txt; content quotable but undiscoverable |
| Perplexity | 26/100 | No authority signals; zero Reddit/community presence |
| Google AI Overviews | 25/100 | Not in Google index; FAQPage schema invisible |
| Gemini | 22/100 | No Google index, no Knowledge Graph entity, no YouTube |

The indexation gap is the primary driver of low platform scores. Content quality alone would score 55-65/100 across platforms.

---

## Quick Wins (Implement This Week)

1. **Deploy local changes to Cloudflare Pages** -- all the schema, canonical, OG, llms.txt, and disclosure fixes are ready to ship (expected impact: +11 points overall)
2. **Submit sitemap to Google Search Console and Bing Webmaster Tools** -- prerequisite for all AI platform visibility (expected impact: +15-20 points across platforms over 2-4 weeks)
3. **Enable Cloudflare Crawler Hints (IndexNow)** -- one toggle in Cloudflare dashboard, accelerates Bing discovery (expected impact: faster Bing indexation)
4. **Source the "4% panel capacity" claim** -- find and link to DOE/EIA data for the most-cited statistic on the site (expected impact: anchors credibility of best article)
5. **Add Crunchbase URL to Person schema sameAs** -- 30-second edit with meaningful entity recognition impact

## 30-Day Action Plan

### Week 1: Deploy and Get Indexed
- [ ] Deploy current local source to Cloudflare Pages (all fixes live)
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Submit sitemap.xml to Bing Webmaster Tools
- [ ] Enable Cloudflare Crawler Hints (IndexNow)
- [ ] Add Crunchbase URL to Person schema sameAs array
- [ ] Create `_headers` file with HSTS, CSP, X-Frame-Options

### Week 2: Source Claims and Strengthen Schema
- [ ] Add inline citations for all statistical claims (EIA, DOE, NREL sources)
- [ ] Add 3-5 external references to AI at a Startup article
- [ ] Rewrite FAQ schema questions to match real search queries
- [ ] Add SpeakableSpecification to all Article schemas
- [ ] Add logo, foundingDate, sameAs to Organization schemas
- [ ] Add alt text to all homepage images missing it
- [ ] Create privacy policy page

### Week 3: Build Content and External Signals
- [ ] Publish 1-2 new articles targeting high-volume electrification queries
- [ ] Share articles on Reddit (r/heatpumps, r/HomeImprovement, r/solar)
- [ ] Post article summaries on LinkedIn with joshlake.ai links
- [ ] Create Wikidata entry for Josh Lake with verifiable claims
- [ ] Add images to AI and Sequencing articles

### Week 4: Build External Authority
- [ ] Pitch 2-3 guest posts to industry publications (Canary Media, CleanTechnica, GreenBuildingAdvisor)
- [ ] Record first YouTube explainer video (panel upgrade content)
- [ ] Reach out to 3-5 climate tech / electrification podcasts for guest appearances
- [ ] Populate GitHub profile at github.com/joshlake18 with bio and pinned repos
- [ ] Update LinkedIn headline to reinforce joshlake.ai as canonical personal brand URL

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| https://joshlake.ai/ | Josh Lake // Serial Entrepreneur, Builder, Optimist | 5 (FAQ questions not search-optimized, sameAs limited to 3 platforms, 8+ images missing alt text, no privacy policy, Organization schemas thin) |
| https://joshlake.ai/writing/ai-at-a-startup | What I Learned Implementing AI at a 40-Person Startup | 5 (zero external citations, no images, publisher typed as Person on live, no speakable schema, no FAQ schema) |
| https://joshlake.ai/writing/electrification-sequencing | The Electrification Sequencing Problem | 4 (unsourced statistics, no images, no speakable schema, no FAQ schema) |
| https://joshlake.ai/writing/panel-upgrade-myth | You Probably Don't Need a Panel Upgrade | 3 (unsourced anchor statistic, no speakable schema, no FAQ schema) |

## Appendix: Score Change vs. Prior Audit (April 13, 2026)

| Category | Prior Score | Current Score | Change | Notes |
|---|---|---|---|---|
| AI Citability | 52 | 44 | -8 | Stricter sourcing penalty applied; unsourced claims now weighted more heavily |
| Brand Authority | 28 | 28 | 0 | No change in external signals |
| Content E-E-A-T | 72 | 70 | -2 | Disclosure gap still present on live site |
| Technical GEO | 68 | 62 | -6 | Canonical/sitemap mismatch and missing llms.txt still on live |
| Schema & Structured Data | 62 | 52 | -10 | Scores reflect live site; local fixes not yet deployed |
| Platform Optimization | 38 | 29 | -9 | Stricter indexation penalty; still zero pages indexed |
| **Overall** | **53** | **48** | **-5** | **Local fixes would raise to ~59 (+11 from prior)** |
