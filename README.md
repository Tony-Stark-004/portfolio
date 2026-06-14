# Aditya Kumar — Portfolio

Personal portfolio of **Aditya Kumar**, Full-Stack Software Engineer specializing in AI-powered products and distributed systems.

**GitHub:** [@Tony-Stark-004](https://github.com/Tony-Stark-004)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Language:** JavaScript
- **Animations:** IntersectionObserver scroll-reveal
- **Theming:** Dark / Light mode with zero flash on load

---

## Features

- **Dark & Light mode** — Pantone Black C (`#1D1D1B`) / White Sand (`#E7E7DD`) palette, persisted in `localStorage` with no FOUC
- **Scroll reveal animations** — sections and cards fade up as they enter the viewport
- **Projects showcase** — collapsible repository list, local video demo player, YouTube links
- **Timeline experience** — vertical connector with animated entries
- **Responsive** — mobile-first layout across all screen sizes
- **Custom favicon** — AK monogram SVG

---

## Sections

| Section | Content |
|---------|---------|
| Hero | Name, title, tagline, social links (GitHub · LinkedIn · LeetCode) |
| About | Bio, stats (3 yrs exp · 10K+ users · 2 startups · 200+ resumes/day) |
| Experience | Wasserstoff RJ Innovations · Rooba Finance |
| Projects | E-Commerce Microservices Platform · AI Helpdesk Backend |
| Skills | Languages, frameworks, tools, cloud, concepts |
| Education | VIT Bhopal · Delhi Public School |

---

## Projects

### E-Commerce Microservices Platform
8 independent Spring Boot microservices with Keycloak OAuth2/JWT, RabbitMQ async messaging, Redis rate limiting, full Prometheus / Grafana / Zipkin observability, and Jenkins CI/CD.

### AI Helpdesk Backend
RAG pipeline with pgvector cosine search, Spring AI Tool Calling, JDBC-backed persistent chat memory, and dual LLM support (Google Gemini 2.5 Flash + Ollama llama3.2).

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

---

## Project Structure

```
app/
  layout.jsx          # Root layout — theme script, metadata
  page.jsx            # Single page — all sections composed here
  globals.css         # Theme variables, base styles, animations
components/
  Navbar.jsx          # Sticky nav with active section tracking
  Hero.jsx            # Landing section with social links
  About.jsx           # Bio + stats grid
  Experience.jsx      # Timeline of work history
  Skills.jsx          # Skill group cards
  Education.jsx       # Education cards
  SectionHeading.jsx  # Shared heading component
  ThemeProvider.jsx   # Dark/light context
  Footer.jsx
  projects/
    Projects.jsx
    ProjectCard.jsx
    ReposList.jsx     # Collapsible repository list
    VideoPlayer.jsx
data/
  projects.js         # Project content
  experience.js       # Work history
  skills.js           # Skill groups
  education.js        # Education entries
hooks/
  useScrollReveal.js
  useActiveSection.js
public/
  ecom-microservice-demo.mp4    # git-ignored (>100 MB) — add manually
  helpdesk-ai-demo.mp4          # git-ignored (>100 MB) — add manually
```

---

## Notes

- Demo videos (`*.mp4`) are excluded from git — they exceed GitHub's 100 MB limit. Copy them manually into `public/` after cloning.
- Theme is applied before React hydrates via an inline `<script>` in `<head>` to prevent flash of unstyled content.
