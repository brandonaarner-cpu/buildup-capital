# BuildUp Capital - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub

```bash
# Set default branch to main
git branch -M main

# Add your GitHub remote (replace with your repository URL)
git remote add origin https://github.com/brandonaarner-cpu/buildup-capital.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub (brandonaarner-7672 account)
3. Import the `buildup-capital` repository
4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** .next (default)
5. Click **Deploy**

### Step 3: Custom Domain Setup

Once deployed, add your custom domain:

1. Go to your project in Vercel
2. Navigate to **Settings** → **Domains**
3. Add domains:
   - `buildup.capital`
   - `www.buildup.capital`
4. Configure DNS at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. Wait for DNS propagation (usually 5-30 minutes)

## 🔧 Environment Variables (Optional)

If you add backend services later, add environment variables in Vercel:

1. Go to **Settings** → **Environment Variables**
2. Add variables like:
   - `NEXT_PUBLIC_API_URL`
   - `EMAIL_SERVICE_KEY`
   - `CRM_API_KEY`
   - etc.

## 📊 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test application form (check console logs)
- [ ] Test mobile responsiveness
- [ ] Check navigation links
- [ ] Verify SEO metadata (view page source)
- [ ] Test across browsers (Chrome, Safari, Firefox)
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Configure contact email forwarding
- [ ] Set up form submission backend
- [ ] Add SSL certificate verification

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update homepage copy"
git push origin main

# Vercel will auto-deploy
```

## 🌐 Preview Deployments

Every branch and PR gets a preview URL:
- Main: `https://buildup-capital.vercel.app`
- Branch: `https://buildup-capital-git-[branch-name].vercel.app`

## 📱 Performance Optimization

Already implemented:
- ✅ Static page generation
- ✅ Image optimization ready
- ✅ Responsive design
- ✅ Minimal JavaScript
- ✅ Tailwind CSS purging

Next steps:
- Add images to `/public` folder
- Implement lazy loading for images
- Add preconnect/prefetch for fonts
- Set up caching headers

## 🐛 Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Ensure all dependencies are in `package.json`

**Pages not rendering:**
- Clear Vercel cache and redeploy
- Check for TypeScript errors
- Verify file structure matches routes

**Forms not submitting:**
- Check browser console for errors
- Verify API routes if using backend
- Test locally first with `npm run dev`

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Brandon: brandon.a.arner@gmail.com

---

**Ready to deploy? Run the commands above and you'll be live in minutes!** 🚀
