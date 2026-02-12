# Development Workflow - BuildUp Capital

## Branch Structure

```
main (production) → buildup.capital
  ↓
staging (pre-production) → staging-buildup.vercel.app
  ↓
feature/* (development) → automatic preview URLs
```

## Quick Reference

### Starting New Work
```bash
# Always branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### Development Process
```bash
# Make changes, commit
git add .
git commit -m "Description of changes"

# Push (triggers automatic Vercel preview)
git push origin feature/your-feature-name

# Test preview URL (Vercel bot comments on PR with link)
```

### Deploying to Staging
```bash
# Create PR on GitHub: feature/your-feature → staging
# Review, approve, merge

# Staging site auto-deploys: staging-buildup.vercel.app
# Test thoroughly on staging
```

### Deploying to Production
```bash
# Create PR on GitHub: staging → main
# Final review, approve, merge

# Production site auto-deploys: buildup.capital
```

### Cleanup
```bash
# After merge, delete feature branch
git checkout main
git pull origin main
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

## Automated Checks (CI)

Every push and PR triggers:
- ✅ ESLint (code quality)
- ✅ Type checking (if configured)
- ✅ Build verification
- ✅ Vercel preview deployment

## Branch Protection Rules

**main (production):**
- ✅ Require pull request before merging
- ✅ Require status checks to pass
- ❌ No direct pushes

**staging (pre-production):**
- ✅ Require pull request before merging
- ✅ Require status checks to pass
- ❌ No direct pushes

## Vercel Setup Required

**You need to configure in Vercel dashboard:**

1. Go to: https://vercel.com/brandons-projects-1ecf26a5
2. Select BuildUp Capital project
3. Settings → Git
   - Production Branch: `main`
4. Settings → Domains
   - Add custom domain for staging (optional): `staging.buildup.capital`
   - Or use Vercel subdomain: `staging-buildup.vercel.app`
5. Settings → Git → Staging Branch
   - Set `staging` branch to deploy to staging environment

## Testing Strategy

**Preview (feature branches):**
- Quick visual checks
- Test new functionality
- Share with team for feedback

**Staging:**
- Full QA testing
- Cross-browser testing
- Mobile responsive checks
- Form submissions
- Underwriting calculator testing
- Performance testing

**Production:**
- Smoke test after deploy
- Monitor error logs
- Check analytics

## Rollback Strategy

**If production breaks:**
```bash
# Option 1: Revert the merge commit
git checkout main
git revert HEAD
git push origin main

# Option 2: Redeploy previous commit in Vercel dashboard
# Go to: Deployments → Find last good deploy → Promote to Production
```

## Common Commands

```bash
# Check current branch
git branch

# Switch branches
git checkout staging
git checkout main

# See pending changes
git status

# View commit history
git log --oneline -10

# Fetch latest without merging
git fetch origin

# See what's different between branches
git diff staging..main
```

## Team Guidelines

- **Feature branches:** Keep short-lived (1-3 days max)
- **Commit messages:** Clear, descriptive (e.g., "Add loan calculator widget")
- **PR descriptions:** Include what changed and why
- **Testing:** Always test preview URL before merging to staging
- **Communication:** Tag reviewers on PRs, respond to feedback promptly

## Emergency Hotfix Process

**For critical production bugs:**
```bash
# Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-name

# Fix, test locally
# Push, create PR to main (skip staging for emergencies)
git push origin hotfix/critical-bug-name

# After deploy, merge main back to staging
git checkout staging
git merge main
git push origin staging
```

## Next Steps

1. **Set up Vercel staging environment** (10 min)
   - Configure domains and branch settings in Vercel dashboard
   - See: https://vercel.com/docs/concepts/deployments/environments

2. **Configure branch protection** (5 min)
   - Go to: https://github.com/brandonaarner-cpu/buildup-capital/settings/branches
   - Add rules for `main` and `staging`

3. **Add testing** (optional, future enhancement)
   - Playwright for E2E tests
   - Lighthouse CI for performance
   - Visual regression testing

## Resources

- [GitHub Flow Guide](https://docs.github.com/en/get-started/using-github/github-flow)
- [Vercel Environments Docs](https://vercel.com/docs/concepts/deployments/environments)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

**Questions?** Ask Sammy or reference `staging-deployment-roadmap.md` for full details.
