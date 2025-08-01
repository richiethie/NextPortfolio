# Richie Thiesfeldt Portfolio 🚀

Welcome to my personal portfolio site, built with [Next.js](https://nextjs.org), showcasing my work, blog posts, and projects as a full-stack software engineer.

## ✨ Features

- Personal projects and client work gallery  
- Blog with Markdown support  
- Contact form with API handling  
- SEO-optimized pages with sitemap and robots.txt  
- Responsive, mobile-friendly design  
- Modern UI using Tailwind CSS + Lucide icons

## 🚀 Tech Stack

- Next.js 15 App Router  
- TypeScript  
- Tailwind CSS  
- React  
- Markdown (gray-matter, remark)  
- Lucide React Icons  
- Resend (for contact emails)  
- Vercel hosting & analytics

## 💻 Getting Started

1️⃣ Clone the repo:

```bash
git clone https://github.com/richiethie/next-portfolio.git
cd next-portfolio
```
2️⃣ Install dependencies:

```bash
npm install
# or
yarn install
```
3️⃣ Run the development server:

```bash
npm run dev
```
Open http://localhost:3000 to see it locally.

🏗 Build & Deploy
To build the production app:

```bash
npm run build
```
To generate the sitemap after build:

```bash
npm run build:sitemap
```
This project is deployed on Vercel — just push to the main branch, and Vercel handles it!

🔧 Available Scripts
npm run dev → Start local dev server

npm run build → Build for production

npm run start → Start production server

npm run lint → Run ESLint checks

npm run build:sitemap → Build app + generate sitemap

## 🌎 Live Site
👉 https://richiethie.com

## 🛠 Customization
To edit site content:

Projects: src/lib/projects.ts

Blog posts: Markdown files in src/content/*.md

Site metadata: app/layout.tsx → metadata

## 📣 Connect with Me
GitHub: @richiethie

LinkedIn: Richie Thiesfeldt

Email: richiethie.dev@gmail.com

## 💬 Feedback
Have suggestions or want to collaborate?
Open an issue or reach out — I'd love to hear from you!

## 📄 License
This project is open source and available under the MIT License.

---