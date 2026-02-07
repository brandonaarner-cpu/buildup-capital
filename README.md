# BuildUp Capital Website

Modern, professional website for BuildUp Capital - providing fast, flexible financing for real estate investors and small businesses.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel-ready

## 🎨 Design

- **Color Palette:** White, Black, Blue (#3b82f6 primary, navy accents)
- **Style:** Modern, bold, clean, professional
- **Responsive:** Mobile-first design approach

## 📁 Project Structure

```
buildup-capital/
├── app/
│   ├── page.tsx                          # Homepage
│   ├── apply/                            # Application form (3-step)
│   ├── rehab-flip-loans/                # Loan program pages
│   ├── acquisition-bridge-loans/
│   ├── asset-backed-business-loans/
│   ├── sba-bridge-loans/
│   ├── borrowers/                        # Multi-lane sales page
│   ├── lenders/                          # For lenders page
│   ├── how-it-works/                    # Process explanation
│   ├── about/                           # About page
│   ├── privacy/                         # Privacy policy
│   └── terms/                           # Terms of service
├── components/
│   ├── Navigation.tsx                   # Main navigation
│   ├── Footer.tsx                       # Footer component
│   └── ApplicationForm.tsx              # Multi-step application form
└── public/                              # Static assets
```

## ✨ Features

### Core Pages
1. **Homepage** - Hero, ICP tiles, loan programs, trust elements
2. **Apply** - 3-step intake form with lane routing:
   - Rehab/Flip
   - Acquisition Bridge
   - Asset-Backed Business
   - SBA Bridge
3. **Loan Program Pages** - Detailed pages for each loan type
4. **Borrowers** - Multi-lane sales page (real estate, business, development, portfolio)
5. **How It Works** - Process timeline and FAQs
6. **For Lenders** - Partnership opportunities
7. **About** - Mission, values, track record

### Design Features
- Mobile-first responsive design
- Smooth animations and transitions
- Accessible navigation with dropdown menus
- SEO-optimized metadata
- Clean, professional UI components
- Reusable button styles (btn-primary, btn-secondary)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd buildup-capital
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🚢 Deployment to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - BuildUp Capital website"
   git branch -M main
   git remote add origin https://github.com/brandonaarner-cpu/buildup-capital.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import the `buildup-capital` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel project settings → Domains
   - Add `buildup.capital` and `www.buildup.capital`
   - Follow DNS configuration instructions

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📝 Development Notes

### Adding New Pages

1. Create new folder in `app/` directory
2. Add `page.tsx` file with page component
3. Include metadata for SEO
4. Add navigation link in `Navigation.tsx` and `Footer.tsx`

### Customizing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    blue: {
      // Customize blue shades here
    }
  }
}
```

### Form Submissions

The application form (`components/ApplicationForm.tsx`) currently logs to console.
To integrate with a backend:

1. Replace the `handleSubmit` function
2. Add API route in `app/api/apply/route.ts`
3. Connect to your preferred email service or CRM

Example API route structure:
```typescript
// app/api/apply/route.ts
export async function POST(request: Request) {
  const formData = await request.json();
  // Process submission
  // Send to email/CRM/database
  return Response.json({ success: true });
}
```

## 🎯 Next Steps / Future Enhancements

- [ ] Set up contact email and integrate form submissions
- [ ] Add blog functionality (foundation is ready)
- [ ] Implement analytics (Google Analytics, Vercel Analytics)
- [ ] Add chat widget or contact form
- [ ] Create case studies / testimonials section
- [ ] Add loan calculators
- [ ] Implement structured data for rich snippets
- [ ] Add performance monitoring
- [ ] Set up A/B testing for conversion optimization

## 📊 SEO Optimization

- ✅ Semantic HTML structure
- ✅ Meta tags on all pages
- ✅ OpenGraph tags for social sharing
- ✅ Descriptive page titles
- ✅ Mobile-responsive design
- ✅ Fast loading times (Next.js optimizations)
- ⏳ Structured data (can be added)
- ⏳ Sitemap generation (can be added)

## 🤝 Support

For questions or issues:
- Email: brandon.a.arner@gmail.com
- GitHub: brandonaarner-cpu

## 📄 License

© 2026 BuildUp Capital. All rights reserved.

---

**Built with ❤️ using Next.js 14**
