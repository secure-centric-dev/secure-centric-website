# Secure-Centric — WordPress Website & Interactive Design Repository

> **Repository:** `https://github.com/secure-centric-dev/secure-centric-website.git`  
> **Client:** Secure-Centric (Cyber AB Registered Provider Organization)  
> **Framework:** WordPress Full Site Editing (FSE) Block Theme + Gutenberg Patterns  
> **Client Demo:** Self-contained in `/demo` folder  

---

## 📁 Repository Structure

```
secure-centric-website/
├── .github/
│   └── workflows/
│       └── deploy.yml           <-- Automated CI/CD (Lints theme + Deploys /demo to GitHub Pages)
├── demo/                        <-- Interactive 20-Page HTML Design Prototype
│   ├── index.html               <-- Client presentation application with HUD
│   ├── theme-json-blueprint.json<-- theme.json reference
│   └── assets/
│       ├── css/                 <-- Brand guide styling, variables, components
│       └── js/                  <-- 20-page dataset & interactive SPA router
├── wp-admin/                    <-- WordPress Core Administration
├── wp-includes/                 <-- WordPress Core Libraries
├── wp-content/
│   ├── plugins/                 <-- WordPress Plugins
│   └── themes/
│       └── secure-centric/      <-- Custom Gutenberg Block Theme (FSE)
│           ├── style.css        <-- Theme declaration
│           ├── theme.json       <-- Palette, typography, and container constraints
│           ├── functions.php    <-- Pattern categories & font enqueues
│           ├── templates/       <-- FSE templates (front-page.html, index.html, page.html)
│           ├── parts/           <-- Template parts (header.html, footer.html)
│           └── patterns/        <-- Custom Gutenberg block patterns
├── wp-config.php                <-- Environment-aware configuration (CI/CD friendly)
├── wp-config-sample.php         <-- Default WordPress config sample
├── .env.example                 <-- Local database settings template
├── .gitignore                   <-- Standard WP ignores (uploads, cache, secrets)
└── index.php                    <-- WordPress entry point
```

---

## ⚡ Quick Start: Push to GitHub

The local repository is already configured with your remote:
```bash
# Verify remote
git remote -v
# origin  https://github.com/secure-centric-dev/secure-centric-website.git (fetch)
# origin  https://github.com/secure-centric-dev/secure-centric-website.git (push)

# Push all code to main branch:
git push -u origin main
```

---

## 🔄 CI/CD Deployment Architecture (Best Practices)

You asked: *"we also want CI/CD deployment later so correct me wherever I am wrong"*.

Here is the architectural review and setup implemented in this repository:

### 1. Security: No Database Credentials in Git
- **Correction:** Never hardcode database passwords in `wp-config.php` when committing to Git.
- **Implementation:** Our `wp-config.php` uses an **environment-aware pattern**:
  ```php
  defined( 'DB_NAME' ) or define( 'DB_NAME', getenv( 'DB_NAME' ) ?: 'secure_centric_db' );
  defined( 'DB_USER' ) or define( 'DB_USER', getenv( 'DB_USER' ) ?: 'root' );
  defined( 'DB_PASSWORD' ) or define( 'DB_PASSWORD', getenv( 'DB_PASSWORD' ) ?: '' );
  ```
  - Locally, you can copy `.env.example` to `.env` or create a `wp-config-local.php` (both are gitignored).
  - In staging/production, CI/CD injects credentials via server environment variables or hosting secrets.

### 2. Media Uploads Must NOT Be Tracked in Git
- In `.gitignore`, `wp-content/uploads/` is strictly ignored.
- **Why:** If clients or authors upload hundreds of PDFs, videos, and images, tracking them in Git causes repository bloat, slow clones, and merge conflicts.
- **Best Practice:** Media should reside in persistent volume storage on your server, or offloaded to AWS S3 / Cloudflare R2 via an offload plugin.

### 3. Automated GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Included out-of-the-box:
1. **Lint Checks:** Automatically validates PHP syntax in `wp-content/themes/secure-centric` and verifies `theme.json` on every push/PR.
2. **Interactive Demo Deploy:** Automatically publishes the `/demo` folder to **GitHub Pages** whenever you push to `main`! Your client can always see the live interactive design at:  
   `https://secure-centric-dev.github.io/secure-centric-website/`
3. **Staging / Production Server Hook:** Includes ready-to-uncomment SSH/RSync steps to sync `wp-content/themes/secure-centric/` to your live hosting server.

---

## 🎨 Design Demo (`/demo`)

The `/demo` folder contains the interactive, client-facing prototype with all 20 pages from the wireframe pack:
- Exact colors from the Brand Guide: Midnight (`#060B24`), Electric Blue (`#2F5BFF`), Cyber Cyan (`#00D4FF`), Violet (`#7B5CFF`), Ice (`#F5F7FF`).
- High-tech aesthetic matching **Redspin.com**.
- Interactive **"🔍 Inspect Gutenberg Blocks"** HUD toggle to demonstrate the 1:1 mapping with native WordPress Gutenberg blocks.

© 2026 Secure-Centric LLC.
