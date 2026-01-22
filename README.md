# 🥢 Golden Dragon Restaurant

**Authentic Chinese Cuisine**

A complete, professional Chinese restaurant website built with Next.js, showcasing the flexible BAAM Studio restaurant template system.

## 🎨 Theme

- **Primary**: Red (#DC2626) - Lucky red
- **Secondary**: Gold (#F59E0B) - Fortune gold
- **Style**: Traditional elegant Chinese

## 🚀 Quick Start

```bash
npm install
npm run dev
# Visit http://localhost:3001
```

## 📦 Built With

- Next.js 16
- TypeScript
- Tailwind CSS
- Unsplash Photos
- BAAM Studio Template System

## 🍜 Features

- 70+ Chinese dishes with dual language (English/Chinese)
- Chef's specials and house favorites  
- Tea menu section
- Online reservations
- Photo gallery
- Customer reviews
- Blog with recipes

**Proof of concept for flexible restaurant template architecture.**


lsof -ti:3001 | xargs kill -9
rm -rf .next
npm run dev

npm install
npm run build

git add .
git commit -m "Update: describe your changes"
git push

curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_nauWisxUnYXYgXZFyQ8wgxLz6Y1L/erh5dPp37K