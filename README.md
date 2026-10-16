# Awaneesh Kumar: resume website

A static, multi-page site. No build step and no dependencies.

## Publish on GitHub Pages
1. Create a repository, for example `awaneesh-kumar.github.io` (a repository named `<your-username>.github.io` is served at `https://<your-username>.github.io`).
2. Upload every file and the `assets` folder from this folder to the repository root.
3. In the repository, open Settings, then Pages, set Source to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, and save.
4. Wait a minute or two, then open the address GitHub shows.

## Shared header and footer
The menu lives in `header.html` and the footer in `footer.html`. Every page loads them with jQuery (`assets/site.js`), so a change to either file updates the whole site. Because the files are loaded by script, open the site through a web server and not by double-clicking the HTML files. On Windows, double-click `preview.bat` (needs Python) to preview at http://localhost:8000. GitHub Pages works without any extra step.

## Change the photo
Replace `assets/profile.jpg` with your own image (portrait orientation, about 720 x 900 px) and keep the same file name.

## Pages
- index.html: professional summary
- work-history.html: career timeline
- projects.html: project write-ups
- skills.html: skills, certifications, education
- global-footprint.html: map of places worked and travelled
