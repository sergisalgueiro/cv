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
  * `schema.org/Person` JSON-LD metadata for search engines and LinkedIn previews.
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
│   │   └── es/index.astro        # Spanish (/es)
│   └── styles/
│       └── global.css            # Tailwind base & print styles
├── public/
│   └── sergi-salgueiro-cv.pdf    # Downloadable CV PDF
├── .env.example                  # Template for deployment variables (git-tracked)
├── Caddyfile                     # Caddy configuration for Raspberry Pi
├── deploy.sh                     # 1-command build & sync to Raspberry Pi
└── nginx.conf                    # Alternative Nginx configuration
```

---

## 🛠️ Local Development (Mac)

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

Whenever you edit your CV content in `src/data/cv.ts` or replace `public/sergi-salgueiro-cv.pdf`:

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

## 📝 Updating Your CV

* **Bio, Experience, Education, or Skills:** Edit [`src/data/cv.ts`](src/data/cv.ts).
* **Downloadable PDF File:** Replace [`public/sergi-salgueiro-cv.pdf`](public/sergi-salgueiro-cv.pdf) with your updated PDF file.
* Then run `./deploy.sh`!
