# Tereraishe Mahupa — Portfolio Website

Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.  
Showcasing work done during the industrial attachment at **Lynia Finance** (NUST, 2025–2026).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS Variables |
| Animations | Framer Motion |
| Fonts | Sora · DM Sans · JetBrains Mono |
| Deployment | Vercel |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Production build
npm run build
npm start
```

## Personalisation Checklist

Before deploying, update these:

- [ ] `components/Hero.tsx` — replace `TM` avatar with a real photo (`<Image>` tag)
- [ ] `components/Contact.tsx` — update GitHub and LinkedIn URLs
- [ ] `public/cv.pdf` — add your actual CV for the download link
- [ ] `app/layout.tsx` — update metadata description / Open Graph
- [ ] `components/Contact.tsx` — wire form to [Formspree](https://formspree.io) or [Resend](https://resend.com)

## Deploy to Vercel (Free)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "feat: portfolio website"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com → Import repo → Deploy
# Zero config required — Vercel auto-detects Next.js
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Design system, fonts, CSS variables
│   ├── layout.tsx         # Root layout + SEO metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Hero section with orbit animation
│   ├── About.tsx          # About with info cards
│   ├── Skills.tsx         # Skill group cards
│   ├── Projects.tsx       # Featured + project cards
│   ├── Experience.tsx     # Work & education timeline
│   ├── Contact.tsx        # Contact links + message form
│   ├── Footer.tsx         # Footer
│   ├── FadeIn.tsx         # Scroll-triggered fade wrapper
│   └── SectionHeader.tsx  # Reusable section title
└── public/
    └── cv.pdf             # Add your CV here
```

## Adding a New Project

Open `components/Projects.tsx` and add an entry to the `projects` array:

```ts
{
  icon: "🔬",
  context: "Machine Learning · Python",
  title: "Your Project Title",
  desc: "Description of what you built and why.",
  outcomes: "Key results and impact.",
  stack: ["Python", "scikit-learn", "Streamlit"],
  links: [{ label: "Demo", href: "https://your-demo-link.com" }],
}
```

---

Built for NUST Industrial Attachment Assessment · Lynia Finance · 2026
