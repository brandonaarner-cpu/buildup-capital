import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      leadType, // 'investor' or 'borrower'
      // Investor fields
      investorType,
      investmentAmount,
      currentInvestments,
      biggestQuestion,
      // Borrower fields
      loanAmount,
      propertyType,
      collateralValue,
      timeframe,
      situation,
      source
    } = body;

    // Basic validation
    if (!name || !email || !leadType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate lead score (reuse scoring algorithm from lead-automation)
    const score = calculateLeadScore({
      email,
      phone,
      leadType,
      investorType,
      investmentAmount,
      loanAmount,
      collateralValue,
      timeframe
    });

    // Prepare lead data
    const leadData = {
      name,
      email,
      phone,
      leadType,
      score: score.score,
      tier: score.tier,
      ...(leadType === 'investor' && {
        investorType,
        investmentAmount,
        currentInvestments,
        biggestQuestion
      }),
      ...(leadType === 'borrower' && {
        loanAmount,
        propertyType,
        collateralValue,
        timeframe,
        situation
      }),
      source,
      submittedAt: new Date().toISOString()
    };

    // TODO: Save to Notion CRM (same as Collection Kings)
    // await saveToNotionCRM(leadData, 'BuildUp Capital Leads');

    // TODO: Send to lead automation system for routing
    // await processLead(leadData);

    // Send welcome email based on lead type
    const emailTemplate = leadType === 'investor' 
      ? 'buildup-investor-welcome'
      : 'buildup-borrower-welcome';
    
    // TODO: Send email via Gmail API
    // await sendWelcomeEmail(email, name, emailTemplate);

    // For now, just log
    console.log('BuildUp Capital Lead:', leadData);

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      leadType,
      score: score.score
    });
  } catch (error) {
    console.error('Error processing BuildUp lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Calculate lead score (simplified version)
 */
function calculateLeadScore(data: any) {
  let score = 0;

  // Email domain scoring
  const domain = data.email.split('@')[1];
  const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  score += personalDomains.includes(domain) ? 10 : 30;

  // Phone provided
  if (data.phone) score += 20;

  // Investor-specific scoring
  if (data.leadType === 'investor') {
    if (data.investorType === 'accredited') score += 40;
    
    const amount = parseInt(data.investmentAmount?.replace(/[^0-9]/g, '') || '0');
    if (amount >= 500000) score += 30;
    else if (amount >= 100000) score += 20;
  }

  // Borrower-specific scoring
  if (data.leadType === 'borrower') {
    const amount = parseInt(data.loanAmount?.replace(/[^0-9]/g, '') || '0');
    if (amount >= 1000000) score += 25;
    else if (amount >= 500000) score += 15;

    if (data.collateralValue) score += 20;
    if (data.timeframe === 'Immediately') score += 15;
  }

  score = Math.min(score, 100);

  const tier = score >= 80 ? 'hot' : score >= 60 ? 'warm' : score >= 40 ? 'cold' : 'ice-cold';

  return { score, tier };
}
