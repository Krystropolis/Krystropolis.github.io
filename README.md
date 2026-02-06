# Krystropolis.github.io

> A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Live Site

[View the live site](https://krystropolis.github.io) *(Coming Soon)*

## 📋 Project Overview

This is a complete redesign of a 2018-era personal portfolio website, transforming it from a dated Material Design Lite implementation into a modern, accessible, and data-driven web application. The site features a cohesive visual design that balances professionalism with personality.

### Key Features

- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Dark Mode**: Theme toggle with localStorage persistence
- ✅ **Accessibility**: WCAG AA compliant with semantic HTML and ARIA labels
- ✅ **Data-Driven**: Content managed through JSON files for easy updates
- ✅ **Type Safety**: Full TypeScript implementation
- ✅ **Print-Friendly**: One-click resume PDF download
- ✅ **SEO Optimized**: Next.js static export with meta tags
- ✅ **Interactive Animations**: Typewriter effect for homepage text
- ✅ **Mobile-Optimized Layout**: Image-first display on mobile devices
- ✅ **Pinterest-Style Grid**: Masonry layout for interests with mixed card types (text and image)

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14+** | React framework with App Router for SEO and performance |
| **React 18+** | Component-based UI library with hooks |
| **TypeScript** | Type safety and better developer experience |
| **Tailwind CSS** | Modern utility-first CSS framework |
| **JSON** | Data storage for easy content management |

## 📁 Project Structure

```
Krystropolis.github.io/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   ├── resume/              # Resume section
│   ├── portfolio/           # Portfolio section
│   └── about/               # About section
├── components/              # React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── PrintButton.tsx       # Print resume button
│   ├── ContactForm.tsx       # Contact form with spam protection
│   ├── TestimonialCarousel.tsx # Testimonial carousel component
│   ├── ResumeNavigation.tsx   # Resume navigation component
│   ├── ShareButton.tsx       # Share button component
│   ├── ScrollToTop.tsx      # Scroll to top button
│   └── InterestCard.tsx     # Interest card with text/image layouts
├── data/                    # JSON data files
│   ├── resume.json          # Resume data
│   ├── portfolio.json       # Portfolio projects
│   ├── about.json           # About section content
│   └── contact.json        # Contact page data
├── lib/                     # Utility functions
│   └── data.ts              # Data loading helpers
├── types/                   # TypeScript types
│   └── index.ts             # Type definitions
├── public/                  # Static assets
│   └── images/              # Images
├── plans/                   # Project documentation
│   ├── implementation-progress.md  # Progress tracking
│   └── website-redesign-plan.md     # Original design plan
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krystropolis/Krystropolis.github.io.git
   cd Krystropolis.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📊 Implementation Status

### Completed Phases ✅

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 1: Project Setup** | ✅ Complete | Next.js, TypeScript, Tailwind CSS configured |
| **Phase 2: Data & Types** | ✅ Complete | TypeScript interfaces, JSON data files |
| **Phase 3: Core Components** | ✅ Complete | Header, Footer, Layout with accessibility |
| **Phase 4: Sections** | ✅ Complete | Resume, Portfolio, and About pages |
| **Phase 4.5: Contact Page** | ✅ Complete | Contact form with spam protection |
| **Phase 4.6: Homepage Enhancements** | ✅ Complete | Typewriter animation, mobile layout optimization |
| **Phase 4.7: About Section Enhancements** | ✅ Complete | Pinterest-style masonry grid for interests with mixed card types |
| **Phase 5: Deployment Setup** | ✅ Complete | Static export, GitHub Actions workflow |

### Remaining Phases 🔄

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 6: Content Refinement** | 🔴 Not Started | Update experience since 2018, refine copy |
| **Phase 7: Testing & Optimization** | 🔴 Not Started | Cross-browser testing, accessibility audit |
| **Phase 8: Deployment & Cleanup** | 🟡 Partial | Deployment configured, old files not removed, unused images identified |

For detailed progress tracking, see [`plans/implementation-progress.md`](plans/implementation-progress.md).

## 📝 Content Management

All site content is managed through JSON files in the [`data/`](data/) directory:

### Updating Resume
Edit [`data/resume.json`](data/resume.json) to add:
- Work experience
- Education history
- Skills and technologies
- Contact information

### Updating Portfolio
Edit [`data/portfolio.json`](data/portfolio.json) to add:
- New projects
- Project descriptions
- Technology tags
- Project images

### Updating About
Edit [`data/about.json`](data/about.json) to modify:
- Personal introduction
- Interests and hobbies (with card types: text or image)
- Background information

**Interest Card Types:**
- **Text Cards**: Display icon, title, and full description with dynamic height
- **Image Cards**: Display image with dark gradient overlay, title, and icon

### Updating Contact
Edit [`data/contact.json`](data/contact.json) to modify:
- Contact information
- Social links
- Form configuration

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (professional, trustworthy)
- **Accent**: Coral/Pink (playful, energetic)
- **Background**: Off-white/light gray (clean, readable)
- **Text**: Dark gray (high contrast, professional)

### Typography
- **Font Family**: Inter (modern sans-serif)
- **Headings**: Bold, with consistent hierarchy
- **Body**: Clean with good line height (1.6)

### Spacing
- Consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Max-width containers (1200px desktop, 640px mobile)

## ♿ Accessibility Features

- Semantic HTML elements (`nav`, `main`, `footer`, `article`, `section`)
- ARIA labels on navigation and interactive elements
- Focus indicators on all interactive elements
- Skip link for keyboard navigation
- Screen reader friendly structure
- WCAG AA color contrast ratios

## 🚢 Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Manual Deployment

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: update content"
   git push origin main
   ```

3. **GitHub Actions** will automatically deploy to GitHub Pages

### GitHub Pages Setup

1. Go to repository **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. The workflow will build and deploy automatically on push

## 📚 Documentation

- [`plans/website-redesign-plan.md`](plans/website-redesign-plan.md) - Original design plan and architecture
- [`plans/implementation-progress.md`](plans/implementation-progress.md) - Detailed progress tracking

## 🤝 Contributing

This is a personal portfolio site, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Author**: Krystal Elliott
- **Email**: e.krystal@gmail.com
- **Location**: Munich, Germany
- **GitHub**: [krystropolis](https://github.com/krystropolis)

---

**Last Updated**: February 6, 2026
