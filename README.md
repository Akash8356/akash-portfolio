# Akash Prajapati: Developer Portfolio

Static site (HTML, CSS, vanilla JS). Live at https://akash8356.github.io/akash-portfolio/

## Deploy to GitHub Pages
1. Create a **public** repo named `akash-portfolio` under `Akash8356`.
2. Upload everything in this folder (keep `.github/workflows/deploy.yml`) and push to `main`:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Akash8356/akash-portfolio.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab; the "Deploy to GitHub Pages" run publishes the site (about a minute).

All asset paths are relative, so the `/akash-portfolio/` subpath works.

## Contact form (Web3Forms, free)
1. Go to https://web3forms.com, enter `akash.p8869@gmail.com`, and copy the access key from the email.
2. **Recommended:** repo **Settings → Secrets and variables → Actions → New repository secret**, name `WEB3FORMS_KEY`, value = your key. The deploy workflow swaps it into `config.js` at build time, so it never sits in your repo or git history. (It is still visible in the deployed site's JavaScript. Browsers need it, so no static site can truly hide it.)
   Alternative: paste it into `assets/js/config.js` as `web3formsKey`.
3. Commit and push. Until a real key is set, the form opens the visitor's email app (mailto fallback).
4. **Test it:** submit the live form once and confirm the email arrives. Treat it as working only after that.
Spam protection: a hidden honeypot field plus a number captcha (5 digits drawn on a canvas). Leave captcha **off** in the Web3Forms dashboard for this form, since this site uses its own. The number check runs in the browser, so it stops simple bots but not someone posting to Web3Forms directly with your key. you can also enable captcha/domain restrictions in the Web3Forms dashboard.

## Updating content
- Resumes, skills, projects, role rotator: `assets/js/config.js`.
- Replace a resume by overwriting the PDF in `assets/documents/` (keep the file name).
- Experience, education and awards: `index.html`.

## Before going live
Check the open items in the checklist you were given (LinkedIn URL, company name, client names, "3.4+ years").
