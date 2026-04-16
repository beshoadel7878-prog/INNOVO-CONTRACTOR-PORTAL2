# Contractor-Guidelines-Portal

Static portal for contractor payment and guideline workflows.

## Structure

- `index.html`: entry page that redirects to `payments-invoices.html`
- `payments-invoices.html`: main hosted portal page
- `assets/`: shared styles, scripts, icons, and images

## Local preview

Open `index.html` in a browser, or serve the folder with any simple static server.

## GitHub Pages

This repository is prepared for GitHub Pages deployment from the `main` branch using the included GitHub Actions workflow.

Expected site URL:

`https://beshoadel7878-prog.github.io/Contractor-Guidelines-Portal/`

## Notes

- Internal Innovo corporate navigation links point to `https://www.innovogroup.com/...` so they do not break on GitHub Pages.
- The landing page redirects visitors to `payments-invoices.html`.
- If GitHub Pages is not already enabled for the repository, enable it once in repository settings and select `GitHub Actions` as the source.
