/**
 * Notion CRM Client for BuildUp Capital
 * Tracks leads in Notion database
 */

import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const BC_DATABASE_ID = process.env.NOTION_BC_LEADS_DB || '';

/**
 * Add lead to BuildUp Capital database
 */
export async function addBCLead({
  name,
  email,
  phone,
  businessType,
  loanAmount,
  realEstateValue,
  timeline,
  source = 'Website',
  leadScore = 0,
}: {
  name: string;
  email: string;
  phone?: string;
  businessType?: string;
  loanAmount?: number;
  realEstateValue?: number;
  timeline?: string;
  source?: string;
  leadScore?: number;
}) {
  if (!BC_DATABASE_ID) {
    console.warn('[Notion] BC database ID not set, skipping');
    return { success: false, error: 'Database not configured' };
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const properties: Record<string, any> = {
      Name: { title: [{ text: { content: name } }] },
      Email: { email },
      Source: { select: { name: source } },
      Status: { select: { name: 'New' } },
      'Lead Score': { number: leadScore },
      'Created Date': { date: { start: new Date().toISOString() } },
    };

    if (phone) properties.Phone = { phone_number: phone };
    if (businessType) properties['Business Type'] = { select: { name: businessType } };
    if (loanAmount) properties['Loan Amount'] = { number: loanAmount };
    if (realEstateValue) properties['Real Estate Value'] = { number: realEstateValue };
    if (timeline) properties.Timeline = { select: { name: timeline } };

    const response = await notion.pages.create({
      parent: { database_id: BC_DATABASE_ID },
      properties,
    });

    console.log('[Notion] BC lead added:', response.id);
    return { success: true, id: response.id };
  } catch (error) {
    console.error('[Notion] Failed to add BC lead:', error);
    return { success: false, error };
  }
}

export default notion;
