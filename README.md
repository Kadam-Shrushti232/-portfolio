# Shrushti Kadam — Portfolio

A fully animated, data-driven personal portfolio website built with plain HTML, CSS, and JavaScript (no build step required). All content is stored in a single config file.

---

## File Structure

```
PORTFOLIO/
├── index.html          ← Main portfolio (don't edit this)
├── portfolio-data.js   ← ✏️  Edit ALL content here
├── photo.jpg           ← 📸  Replace to change your photo
├── resume.pdf          ← 📄  Replace to update your resume
└── README.md           ← This file
```

---

## How to Update Your Content

### 📸 Change your photo
1. Rename your new photo to exactly `photo.jpg`
2. Drop it into the `PORTFOLIO/` folder (overwrite the old one)
3. Done — refresh the page

> **Tip:** Any square or portrait image works best. The site auto-crops it to a circle.

---

### 📄 Update your resume
1. Export your latest resume as a PDF
2. Rename it to `resume.pdf`
3. Drop it into the `PORTFOLIO/` folder (overwrite the old one)
4. Done — the "Download Resume" button always points to this file

---

### ✏️ Update bio, location, or personal info
Open `portfolio-data.js` and edit the top section:

```js
name:     "Your Name",
title:    "Your Title",
location: "Your City, Country",
email:    "your@email.com",
linkedin: "https://www.linkedin.com/in/yourprofile",
github:   "https://github.com/yourusername",
```

---

### ✏️ Update your bio paragraph
Find the `bio` field in `portfolio-data.js`:

```js
bio: `I'm a ... student specializing in ...`,
```

Edit the text between the backticks. You can use `<strong>word</strong>` to bold keywords.

---

### ➕ Add a new project
Open `portfolio-data.js`, find the `projects` array, and paste a new object at the end:

```js
{
  title:       "My New Project",
  description: "What this project does and why it matters.",
  tech:        ["Python", "TensorFlow", "Flask"],
  accuracy:    "94%",
  github:      "https://github.com/yourusername/project-repo",
  live:        null   // ← Set to "https://your-demo.com" if you have a live link
},
```

---

### ➕ Add a new skill category
Find the `skills` array in `portfolio-data.js` and add:

```js
{
  category: "Cloud",
  icon:     "☁️",
  items:    ["AWS", "Oracle Cloud", "Firebase"]
},
```

---

### ➕ Add a new certification
Find the `certifications` array and add:

```js
{
  title:  "Your Certification Title",
  issuer: "Issuing Body · Platform",
  icon:   "🏅"
},
```

---

### ✏️ Update the typing animation texts
Change the words that cycle in the hero subtitle:

```js
typingTexts: [
  "AI & ML Student",
  "Builder",
  "Your Custom Text Here"
],
```

---

## 🚀 Deployment

### Option 1 — GitHub Pages (free, easiest)

1. Create a new GitHub repository (e.g. `my-portfolio`)
2. Upload all four files (`index.html`, `portfolio-data.js`, `photo.jpg`, `resume.pdf`)
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/my-portfolio`

> **Note:** It may take 1–2 minutes for the first deploy to go live.

---

### Option 2 — Vercel (fastest, auto-deploys on push)

1. Push your portfolio folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import your repo
4. Leave all settings as default and click **Deploy**
5. You'll get a live URL like `https://my-portfolio.vercel.app`

Every time you push new files (e.g. a new `resume.pdf`), Vercel auto-redeploys.

---

### Option 3 — Netlify (drag & drop, no account needed)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire `PORTFOLIO/` folder onto the page
3. Done — you get a live URL instantly

---

## Features

| Feature | Details |
|---|---|
| Particle background | Canvas-based animated network on hero |
| Typing animation | Cycles through your `typingTexts` automatically |
| Cursor spotlight | Glowing light follows mouse on hero section |
| Scroll reveal | Each section fades & slides in on scroll |
| Underline animation | Section headings draw an underline when entering view |
| Skill card glow | Hover scales cards with a violet glow border |
| Project card lift | Hover lifts cards with shadow + top-border reveal |
| Dark / Light mode | Smooth transition toggle in the navbar |
| Glassmorphism cards | Frosted glass effect throughout |
| Mobile responsive | Hamburger menu, single-column layouts on phones |
| Data-driven | All content in `portfolio-data.js` — zero HTML edits needed |

---

## Troubleshooting

**Photo not showing?**
Make sure the file is named exactly `photo.jpg` (lowercase, `.jpg` extension) and is in the same folder as `index.html`.

**Resume link not working?**
Make sure the file is named exactly `resume.pdf` and is in the same folder as `index.html`. Some browsers block file downloads from `file://` URLs — deploy to GitHub Pages or Netlify to test properly.

**Animations not playing?**
The site loads GSAP from a CDN. If you're offline or the CDN is blocked, animations gracefully fall back to CSS transitions. Everything still works.

**Content not updating?**
Hard-refresh the browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac) to clear the cache.

---

*Built with HTML · CSS · JavaScript · GSAP*
