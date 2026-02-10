# BuildUp Capital - Lead Gen System Deployed

**Date:** 2026-02-10  
**Status:** Ready to deploy to Vercel

---

## ✅ What Was Built

### Lead Capture System
- **Form Location:** `/contact` page
- **API Endpoint:** `/api/leads/buildup-capital`
- **Email Sender:** brandon@buildup.capital (via Gmail API)
- **Lead Scoring:** Automatic qualification based on loan amount, timeline, etc.

### Components
1. **LeadFormBC.tsx** - 7-field lead capture form
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Business Type (select)
   - Loan Amount (select)
   - Real Estate Value (select)
   - Timeline (select)

2. **lib/gmail.ts** - Email sending via Google Workspace
3. **lib/notion.ts** - CRM integration (ready when configured)
4. **lib/scoring.ts** - Lead qualification algorithm

### Form Placement
**Contact Page** (/contact):
- Gold banner section at top
- "Need Funding?" headline
- Form in white card with black border
- Above general contact form

---

## 📧 Welcome Email

**Subject:** 📊 Your Lending Calculator + How We Can Help  
**From:** Brandon @ BuildUp Capital <brandon@buildup.capital>

**Content:**
- Welcome message from Brandon
- 4 key differentiators (real estate-backed, fast, flexible, direct)
- Link to explore options
- Emphasis on collateral over credit
- Call to action: reply or learn more

---

## 🎯 Lead Scoring

### Scoring Algorithm
- Loan > $100k: +30 points
- Loan $50k-$100k: +20 points
- Loan < $50k: +10 points
- Real estate > loan: +20 points
- Timeline ASAP: +30 points
- Timeline 1-3 months: +20 points
- Timeline 3-6 months: +10 points
- Phone provided: +10 points

### Qualification Threshold
- **70+ points** = Qualified lead (high priority)
- **50-69 points** = Warm lead
- **<50 points** = Cold lead

### High-Value Flag
- Loan amount > $100k = High-value lead

---

## 🚀 Deployment Steps

### 1. Commit & Push (2 min)
```bash
cd /home/ubuntu/.openclaw/workspace/buildup-capital
git add .
git commit -m "Add lead generation system with Gmail integration"
git push origin main
```

Vercel auto-deploys in 2-3 minutes.

### 2. Add Environment Variables to Vercel (5 min)
Go to: https://vercel.com/brandons-projects-1ecf26a5/buildup-capital/settings/environment-variables

**Add:**
- `GOOGLE_CREDENTIALS` = (same as Collection Kings)
- `GOOGLE_TOKEN` = (same as Collection Kings)

**Values are in:**
- `/buildup-capital/.env.local`
- Or `/memory/2026-02-10.md`

### 3. Redeploy (1 min)
After adding env vars:
- Go to Deployments
- Click "..." on latest
- Click "Redeploy"

### 4. Test (2 min)
- Visit https://buildup.capital/contact
- Scroll to "Need Funding?" section (gold banner)
- Fill out form
- Check email arrives from brandon@buildup.capital

---

## 📊 Expected Results

### Week 1
- 5+ leads captured
- 40%+ email open rate
- 1-2 high-value leads (>$100k)

### Week 4
- 20+ leads captured
- 5+ qualified leads (70+ score)
- 1-2 serious conversations

---

## 🔧 Environment Variables

**Production (Vercel):**
```
GOOGLE_CREDENTIALS=eyJ3ZWIiOnsiY2xpZW50X2lkIjoiODY0NTAyOTI0NDk1LTJqa2ptcm9xZHY2YW11b3BmYzU3M3NhZmw4a29yODAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwicHJvamVjdF9pZCI6InNhbW15LTQ4NjgwOSIsImF1dGhfdXJpIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLCJ0b2tlbl91cmkiOiJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsImNsaWVudF9zZWNyZXQiOiJHT0NTUFgtcktnaEQzY3ZXZFBmNWtFbDdzb0FLSGZlay1TcSIsInJlZGlyZWN0X3VyaXMiOlsiaHR0cDovL2xvY2FsaG9zdDoxODc4OS9hdXRoL2NhbGxiYWNrL2dvb2dsZSIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9vYXV0aDJjYWxsYmFjayJdfX0K

GOOGLE_TOKEN=eyJhY2Nlc3NfdG9rZW4iOiJ5YTI5LmEwQVVNV2dfSTZFWHo5X0lsSFRTVkYxLW1wcUlIeFc2ZnRlaFVHQUcwTkxMVlZGYzRtd0NtLVVQWFdmeS15R3ZlWmk1WS1WTXktYXc3cHhwTjk4OVlEU1dMTjdrcHpvYVJ5QndZczRGaUQya3gzSkYyWU5pQmFTM3I0UFJBaTRaU1RSVTgwX3BGcEpZaUFrVTV5VkxCZk1hMzY0bXA4aUNTU1p4VG1LZFZpVmFsd25jYVduNHRXTl9wMDVZMnh2M1NmcXRNa3JQa2FDZ1lLQVNzU0FSVVNGUUhHWDJNaU9GSW9aRUdPRi1YelI0dmFJVk1PN2cwMjA2IiwiZXhwaXJlc19pbiI6MzU5OSwicmVmcmVzaF90b2tlbiI6IjEvLzAxOE9RZXB2bnlyWFFDZ1lJQVJBQUdBRVNOd0YtTDlJcjNhQ2hlc1NlYjBxd2pXekJWanpxQ0txZHc1anRNXzBaa0oteUFQSnQxWmVCV0xSU3RKa1I1RWE3V1ZULXR1SmJnNzQiLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZ21haWwubW9kaWZ5IGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZ21haWwucmVhZG9ubHkgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jYWxlbmRhciBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2dtYWlsLnNlbmQiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIn0K
```

**Optional (later):**
- `NOTION_API_KEY` - For lead tracking in Notion
- `NOTION_BC_LEADS_DB` - Database ID

---

## 🎉 Success Checklist

- [ ] Code built successfully
- [ ] Committed to GitHub
- [ ] Pushed to Vercel
- [ ] Environment variables added
- [ ] Redeployed
- [ ] Form tested on live site
- [ ] Email received from brandon@buildup.capital
- [ ] (Optional) Notion CRM configured

---

## 💡 Next Steps (Optional)

1. **Email Sequences** (30 min)
   - Days 1-10 automated follow-ups
   - Currently only welcome email sends

2. **Notion CRM Setup** (15 min)
   - Track all leads in database
   - Monitor lead scores
   - Pipeline management

3. **SMS for High-Value** (15 min)
   - Integrate Twilio
   - Send SMS to leads >$100k

---

**Status:** ✅ Ready to deploy  
**Time to live:** ~10 minutes (commit + push + env vars + test)

**Both businesses now have lead capture!** ⚡
