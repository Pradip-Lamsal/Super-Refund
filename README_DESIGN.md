# Refund My Super - Redesigned Website

A modern, minimal redesign of the Refund My Super website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Smooth Scrolling**: Buttery smooth navigation between sections
- **Framer Motion Animations**: Beautiful transitions and micro-interactions
- **Responsive Design**: Works perfectly on all devices
- **Modern UI Components**: Built with shadcn/ui inspired components
- **Subtle Background Patterns**: Minimal decorative elements
- **Real-time Calculator**: Dynamic super refund estimation
- **Color Scheme**: Based on #0095eb primary color with compatible soft colors

## 🎨 Design Improvements

- Clean, minimal design with better spacing
- Smooth page transitions and animations
- Interactive hover effects on cards and buttons
- Optimized color palette for readability
- Professional typography
- Enhanced visual hierarchy
- Subtle background patterns for depth
- Modern card-based layouts

## 📦 Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Unsplash Images** - High-quality stock photos

## 🚀 Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Add your logo**:

   - Place your `Logo.png` file in the `/public` folder
   - The logo should be approximately 200x50 pixels for best results

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
my-app/
├── app/
│ ├── globals.css # Global styles with custom theme
│ ├── layout.tsx # Root layout
│ └── page.tsx # Main page
├── components/
│ ├── ui/ # Reusable UI components
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ └── input.tsx
│ ├── sections/ # Page sections
│ │ ├── HeroSection.tsx
│ │ ├── HowItWorksSection.tsx
│ │ ├── SuperannuationSection.tsx
│ │ └── ContactSection.tsx
│ └── Navigation.tsx # Header navigation
├── lib/
│ └── utils.ts # Utility functions
└── public/
└── Logo.png # Your logo (add this file)
\`\`\`

## 🎯 Sections

1. **Hero Section** - Main headline with calculator
2. **How It Works** - 5-step process with icons
3. **Superannuation Info** - Two-part informational section
4. **Contact/CTA** - Call to action with contact details

## 🎨 Color Palette

- **Primary**: #0095eb (Blue)
- **Primary Dark**: #0077be
- **Primary Light**: #33aaef
- **Accent**: #6dd400 (Green)
- **Accent Light**: #8ae426
- **Text**: #1f2937 (Dark Gray)
- **Subtle Text**: #4b5563 (Medium Gray)

## 📝 Customization

### Update Colors

Edit the CSS variables in \`app/globals.css\`:
\`\`\`css
:root {
--primary: #0095eb;
--accent: #6dd400;
/_ ... other colors _/
}
\`\`\`

### Modify Calculator

The calculator logic is in \`components/sections/HeroSection.tsx\`:
\`\`\`typescript
const refund = numBalance \* 0.15; // 15% refund calculation
\`\`\`

### Change Images

Update image URLs in the respective section components.

## 🔧 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📄 License

© 2021 Refund My Super. All Rights Reserved.

---

**Note**: Remember to add your \`Logo.png\` file to the \`/public\` folder before deploying!
