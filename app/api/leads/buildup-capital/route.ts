/**
 * BuildUp Capital Lead Capture API
 * POST /api/leads/buildup-capital
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';
import { addBCLead } from '@/lib/notion';
import { scoreBCLead, isHighValueLead } from '@/lib/scoring';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      businessType,
      loanAmount,
      realEstateValue,
      timeline,
    } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Parse numbers
    const loanAmountNum = loanAmount ? parseFloat(loanAmount) : undefined;
    const realEstateValueNum = realEstateValue ? parseFloat(realEstateValue) : undefined;

    // Calculate lead score
    const leadScore = scoreBCLead({
      loanAmount: loanAmountNum,
      realEstateValue: realEstateValueNum,
      timeline,
      hasPhone: !!phone,
    });

    // Send welcome email via Gmail
    const welcomeHTML = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px 20px;">
        <h1 style="color: #1e293b; font-size: 32px; font-weight: 900; text-align: center; margin: 40px 0;">📊 Welcome to BuildUp Capital</h1>
        
        <p style="color: #334155; font-size: 16px; line-height: 26px;">Hi ${name},</p>
        
        <p style="color: #334155; font-size: 16px; line-height: 26px;">Brandon here. Thanks for your interest in BuildUp Capital. I've put together a simple calculator to help you understand your lending potential.</p>
        
        <div style="text-align: center; margin: 32px 0;">
          <a href="https://buildup.capital" style="background-color: #D4AF37; border: 2px solid #1e293b; color: #1e293b; font-size: 18px; font-weight: 900; text-decoration: none; padding: 16px 32px; display: inline-block;">LEARN MORE ABOUT YOUR OPTIONS →</a>
        </div>
        
        <p style="color: #334155; font-size: 16px; line-height: 26px;"><strong>What makes us different:</strong></p>
        <ul style="color: #334155; font-size: 16px; line-height: 28px;">
          <li><strong>Real estate-backed:</strong> Lower rates, better terms</li>
          <li><strong>Fast decisions:</strong> 48-72 hours from application</li>
          <li><strong>Flexible underwriting:</strong> We look at the full picture</li>
          <li><strong>Direct capital:</strong> No middlemen, no runarounds</li>
        </ul>
        
        <hr style="border: 1px solid #e2e8f0; margin: 32px 0;" />
        
        <p style="color: #334155; font-size: 16px; line-height: 26px;">Most lenders focus on credit scores. We focus on <em>collateral</em> and <em>cash flow</em>.</p>
        
        <p style="color: #334155; font-size: 16px; line-height: 26px;">If you own real estate (commercial or personal), that changes everything. It gives us security, which means we can offer you better terms — even if your credit isn't perfect.</p>
        
        <p style="color: #334155; font-size: 16px; line-height: 26px;">If you're ready to talk sooner, just hit reply.</p>
        
        <p style="color: #334155; font-size: 16px; line-height: 26px;">Best,<br><strong>Brandon Arner</strong><br>Founder, BuildUp Capital</p>
        
        <hr style="border: 1px solid #e2e8f0; margin: 32px 0;" />
        
        <p style="color: #64748b; font-size: 14px; text-align: center; margin-top: 32px;">BuildUp Capital | <a href="https://buildup.capital" style="color: #D4AF37;">buildup.capital</a></p>
      </div>
    `;
    
    const emailSent = await sendEmail(
      email,
      '📊 Your Lending Calculator + How We Can Help',
      welcomeHTML,
      'Brandon @ BuildUp Capital'
    );
    
    if (!emailSent) {
      console.error('[BC API] Email failed');
    }

    // Add to Notion CRM
    const notionResult = await addBCLead({
      name,
      email,
      phone,
      businessType,
      loanAmount: loanAmountNum,
      realEstateValue: realEstateValueNum,
      timeline,
      source: 'Website',
      leadScore,
    });

    // Log success
    console.log('[BC API] Lead captured:', {
      name,
      email,
      score: leadScore,
      loanAmount: loanAmountNum,
      highValue: isHighValueLead(loanAmountNum),
      emailSent,
      notionAdded: notionResult.success,
    });

    return NextResponse.json({
      success: true,
      leadScore,
      highValue: isHighValueLead(loanAmountNum),
      message: 'Thanks! Check your email for next steps.',
    });

  } catch (error) {
    console.error('[BC API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
