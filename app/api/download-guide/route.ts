import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Client } from '@notionhq/client';
import * as fs from 'fs';
import * as path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, portfolio } = body;

    // Validation
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Read PDF file
    const pdfPath = path.join(process.cwd(), 'public', 'downloads', 'beyond-rentals-guide.pdf');
    
    if (!fs.existsSync(pdfPath)) {
      console.error('PDF not found:', pdfPath);
      return NextResponse.json(
        { error: 'Guide not available' },
        { status: 500 }
      );
    }

    const pdfBuffer = fs.readFileSync(pdfPath);
    const pdfBase64 = pdfBuffer.toString('base64');

    // Send immediate email with PDF
    const emailResult = await resend.emails.send({
      from: 'BuildUp Capital <info@buildup.capital>',
      to: email,
      subject: '📖 Your "Beyond Rentals" Guide is Here',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0A2540 0%, #1e3a5f 100%); color: white; padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">BUILDUP CAPITAL</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Private Credit for Sophisticated Investors</p>
          </div>
          
          <div style="padding: 30px 20px; background: #ffffff;">
            <p style="font-size: 16px; color: #1a1a1a;">Hi ${name},</p>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              Thanks for downloading <strong>"Beyond Rentals: The Sophisticated Investor's Guide to Private Credit"</strong>! 📖
            </p>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              You now have access to the same investment strategy we use to generate predictable income without the headaches of property management.
            </p>
            
            <div style="background: #fef3c7; border-left: 4px solid #F59E0B; padding: 20px; margin: 25px 0;">
              <p style="margin: 0; color: #78350f; font-weight: bold; font-size: 16px;">📦 Your Guide Includes:</p>
              <ul style="margin: 15px 0 0 0; color: #92400e; line-height: 1.8;">
                <li>Asset Comparison Matrix (Airbnb, rentals, stocks, private credit)</li>
                <li>Real Case Study: How Sarah increased income while reducing time by 70%</li>
                <li>5-Point Evaluation Checklist for any private credit opportunity</li>
                <li>Risk Management Framework (downside-first approach)</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              The 20-page PDF is attached to this email. <strong>Download it now</strong> and keep it handy as you explore private credit opportunities.
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <h2 style="color: #0A2540; font-size: 20px; margin-bottom: 15px;">What's Next?</h2>
            
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              Over the next few weeks, I'll share:
            </p>
            
            <ul style="color: #374151; line-height: 1.8; font-size: 16px;">
              <li>How we evaluate collateral (the downside-first approach)</li>
              <li>Real deal examples (LTV, DSCR, terms, outcomes)</li>
              <li>When DIY makes sense vs. when to partner with professionals</li>
              <li>Common mistakes that lose investors money</li>
            </ul>
            
            <div style="text-align: center; margin: 35px 0;">
              <a href="https://buildup.capital/contact" style="display: inline-block; background: #F59E0B; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Schedule Free Consultation
              </a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
              <strong>Questions?</strong> Just reply to this email—we read every message.
            </p>
            
            <p style="font-size: 16px; color: #1a1a1a; margin-top: 25px;">
              To your success,<br>
              <strong>The BuildUp Capital Team</strong><br>
              <span style="color: #6b7280; font-size: 14px;">Salt Lake City, Utah</span>
            </p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              BuildUp Capital | Salt Lake City, Utah<br>
              <a href="mailto:info@buildup.capital" style="color: #F59E0B;">info@buildup.capital</a> | 
              <a href="https://buildup.capital" style="color: #F59E0B;">buildup.capital</a>
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'beyond-rentals-guide.pdf',
          content: pdfBase64,
        }
      ],
    });

    // Log to Notion (if configured)
    let notionPageId: string | null = null;
    if (process.env.NOTION_INVESTORS_DB_ID) {
      try {
        const notionResponse = await notion.pages.create({
          parent: { database_id: process.env.NOTION_INVESTORS_DB_ID },
          properties: {
            Name: {
              title: [{ text: { content: name } }],
            },
            Email: {
              email: email,
            },
            'Portfolio Type': {
              select: { name: portfolio || 'Not specified' },
            },
            Source: {
              select: { name: 'Beyond Rentals Download' },
            },
            Status: {
              select: { name: 'New Lead' },
            },
            'Lead Type': {
              select: { name: 'Investor' },
            },
            'Created At': {
              date: { start: new Date().toISOString() },
            },
          },
        });
        notionPageId = notionResponse.id;
      } catch (notionError) {
        console.error('Notion logging failed:', notionError);
        // Continue even if Notion fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Guide sent! Check your email.',
      emailId: emailResult.data?.id,
      notionPageId,
    });

  } catch (error: any) {
    console.error('Download guide error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send guide' },
      { status: 500 }
    );
  }
}
