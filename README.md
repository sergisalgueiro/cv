# Sergi Salgueiro Genís — CV & Portfolio Website

Trilingual, responsive, ultra-fast personal CV website designed with **Astro** and **Tailwind CSS**. Optimized and self-hosted on a **Raspberry Pi 3 running Raspberry Pi OS** with **Caddy**.

---

## 🌟 Key Features

* **3 Languages Supported:**
  * English: `/`
  * Catalan: `/ca`
  * Spanish: `/es`
* **Theme Switcher:**
  * Dark and Light mode toggle.
  * Defaults automatically to the user's system or browser preference (`prefers-color-scheme`).
  * Anti-FOUC inline script in `<head>` preventing white flash on dark mode loads.
* **Fully Responsive:**
  * **Mobile (< 640px):** Touch-friendly controls, collapsible drawer menu.
  * **Tablets & iPads:** Fluid layout, comfortable touch targets.
  * **Desktop & Ultra-wide:** Constrained max-width layout for comfortable reading lengths.
  * **Print & PDF (`@media print`):** Ink-optimized styling stripping dark backgrounds, navigation buttons, and toggles to print a clean paper resume (`Cmd + P` / `Ctrl + P`).
* **Included Sections:**
  * **About:** Bio, quick contact buttons (Phone, Email + click-to-copy toast, LinkedIn, GitHub, Download PDF).
  * **Experience:** Interactive timeline with roles at **Wallbox Chargers** (Senior Software Engineer & Senior C++ Engineer) and **Idneo Technologies** (HP Jet Fusion 3D printers) with all tech tags.
  * **Education:** **DTU** (Master's in Electric Engineering - Automation & Robotics) and **UPC** (Bachelor's in Electronics & Industrial Automation Engineering), with coursework and thesis topics.
  * **Skills:** Categorized technical skill chips (Programming, Backend/IoT, Embedded Systems, Testing/Tools).
  * **Languages:** Spoken languages with dot ratings (Catalan, Spanish, English, French).
* **Structured Data & SEO:**
  * Multi-language XML Sitemap (`@astrojs/sitemap`) generated automatically for `/`, `/ca`, `/es` with Google `xhtml:link rel="alternate" hreflang` entries.
  * Dynamic `robots.txt` automatically pointing search engines to `sitemap-index.xml`.
  * Proper canonical URLs, `hreflang` alternate link tags, and Open Graph / Twitter Card meta tags.
  * Googlebot indexing & snippet directives (`max-snippet:-1`, `max-image-preview:large`).
  * `schema.org/Person` JSON-LD rich structured data linking LinkedIn, GitHub, alumni institutions, and spoken languages.
  * One-click Google Search Console verification support via `PUBLIC_GOOGLE_SITE_VERIFICATION`.
* **Single Source of Truth:**
  * All content and translations live in [`src/data/cv.ts`](src/data/cv.ts).

---

## 🏗️ Project Structure

```text
├── src/
│   ├── components/
│   │   ├── About.astro           # Bio, contacts, copy email toast, PDF download
│   │   ├── Experience.astro      # Work experience timeline & tech chips
│   │   ├── Education.astro       # Master's & Bachelor's degrees & thesis
│   │   ├── Skills.astro          # Categorized skills matrix
│   │   ├── Languages.astro       # Spoken language proficiency ratings
│   │   ├── Header.astro          # Sticky navbar, mobile menu & toggles
│   │   ├── Footer.astro          # Pi 3 hosting badge & print tip
│   │   ├── ThemeToggle.astro     # Dark/light mode switcher
│   │   ├── LanguageSelector.astro # Trilingual EN/CA/ES switcher
│   │   └── CVPage.astro          # Base page template
│   ├── data/
│   │   └── cv.ts                 # Single source of truth for all content & locales
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell, anti-FOUC, SEO & schema.org
│   ├── pages/
│   │   ├── index.astro           # English (/)
│   │   ├── ca/index.astro        # Catalan (/ca)
│   │   ├── es/index.astro        # Spanish (/es)
│   │   └── robots.txt.ts         # Dynamic robots.txt with sitemap reference
│   └── styles/
│       └── global.css            # Tailwind base & print styles
├── public/
│   └── CV_Sergi_Salgueiro.pdf    # Downloadable CV PDF
├── .env.example                  # Template for deployment variables (git-tracked)
├── .dockerignore                 # Excludes local artifacts from Docker context
├── Dockerfile                    # Multi-stage Docker build (deps, dev, builder, runner)
├── docker-compose.yml            # Compose services for dev, build, and web
├── Makefile                      # Convenient CLI shortcuts (make dev, make build, etc.)
├── Caddyfile                     # Caddy configuration for Raspberry Pi
├── deploy.sh                     # 1-command build (local or Docker) & sync to Raspberry Pi
└── nginx.conf                    # Nginx configuration for production container
```

---

## 🐳 Dockerized Development & Build (Recommended — No Local Tools)

You **do not need Node.js or npm installed locally**. Everything runs in isolated Docker containers.

### Quick Commands (Makefile)

| Command | Description | URL / Output |
| :--- | :--- | :--- |
| `make dev` | Start live-reloading Astro dev server | [http://localhost:4321](http://localhost:4321) |
| `make build` | Compile static site into `./dist/` | `./dist/` on host |
| `make prod` | Run production Nginx web server in background | [http://localhost:80](http://localhost:80) |
| `make stop` | Stop all running project containers | — |
| `make deploy`| Build and deploy to Raspberry Pi | — |
| `make shell` | Open interactive shell inside Node container | — |
| `make clean` | Remove containers and node_modules volume | — |

### Direct Docker Compose Commands

```bash
# 1. Start local dev server with hot reload
docker compose up dev

# 2. Build static files into ./dist on the host
docker compose run --rm build

# 3. Test production Nginx server locally
docker compose up -d web
# Stop it when done
docker compose down
```

---

## 🛠️ Alternative: Local Development (Requires Local Node.js 20+)

If you already have Node.js and npm installed and prefer running natively:

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build production static bundle (dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🍓 Raspberry Pi 3 Deployment

The Raspberry Pi 3 runs **Caddy v2.11.7** as a `systemd` service (`caddy.service`), serving static files with a low memory footprint (~40 MB RAM, 0% CPU).

### Deploying Updates (1 Command)

Whenever you edit your CV content in `src/data/cv.ts` or replace `public/CV_Sergi_Salgueiro.pdf`:

```bash
./deploy.sh
```

This automated script:
1. Loads optional variables from `.env` (if present).
2. Builds the static site on your Mac (`npm run build`).
3. Syncs `dist/` to the target server via `rsync`.
4. Sets correct web permissions (`755`).
5. Updates `/etc/caddy/Caddyfile` and reloads Caddy with zero downtime.

---

## 🌐 Public Internet Access (Optional)

To make your CV available to external recruiters without opening router ports:
1. Install `cloudflared` on Raspberry Pi OS.
2. Run `cloudflared tunnel create cv-tunnel`.
3. Route your domain (e.g. `cv.salgueiro.com`) to `http://localhost:80`.
4. Cloudflare provides free SSL, DDoS protection, and global edge caching.

---

## 🔍 Google Indexing & Search Engine Optimization (SEO)

The website is fully optimized for fast indexing and multilingual ranking across Google and other search engines.

### 1. Setting Your Production Domain
In `.env` (or directly in `astro.config.mjs`):
```bash
SITE_URL=https://sergisalgueiro.pages.dev
```
When built, this automatically configures:
- Canonical URLs (`<link rel="canonical">`)
- Sitemaps (`/sitemap-index.xml` and `/sitemap-0.xml` with Google `xhtml:link rel="alternate" hreflang` entries for `/`, `/ca`, and `/es`)
- Robots directive (`/robots.txt` referencing your exact sitemap URL)

### 2. Google Search Console Submission
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property (Domain or URL Prefix).
3. **Verification options:**
   * **DNS TXT record** (simplest if using Cloudflare or domain registrar).
   * **HTML tag**: Add `PUBLIC_GOOGLE_SITE_VERIFICATION="your-verification-code"` to `.env` and rebuild/deploy.
4. Once verified, navigate to **Sitemaps** in the left sidebar and submit:
   ```text
   sitemap-index.xml
   ```
5. Use the **URL Inspection** tool on `https://<your-domain>/` and click **"Request Indexing"**.

### 3. Boosting Indexing Speed via High-Authority Backlinks
Google indexes new domains much faster when linked from established profiles:
* **LinkedIn:** Add your domain to your Profile **Contact info** (Website) and in your "About" or Featured section.
* **GitHub:** Add your domain to your GitHub profile bio / website field.

---

## 📝 Updating Your CV

* **Bio, Experience, Education, or Skills:** Edit [`src/data/cv.ts`](src/data/cv.ts).
* **Downloadable PDF File:** Replace [`public/CV_Sergi_Salgueiro.pdf`](public/CV_Sergi_Salgueiro.pdf) with your updated PDF file.
* Then run `./deploy.sh`!
