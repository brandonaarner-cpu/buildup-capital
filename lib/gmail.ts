/**
 * Gmail API Client for BuildUp Capital
 * Sends emails from brandon@buildup.capital
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const CREDENTIALS_PATH = path.join(process.cwd(), '.config/credentials.json');
const TOKEN_PATH = path.join(process.cwd(), '.config/token.json');

/**
 * Get authenticated Gmail client
 */
function getGmailClient() {
  let credentials, token;
  
  if (process.env.GOOGLE_CREDENTIALS && process.env.GOOGLE_TOKEN) {
    credentials = JSON.parse(Buffer.from(process.env.GOOGLE_CREDENTIALS, 'base64').toString('utf-8'));
    token = JSON.parse(Buffer.from(process.env.GOOGLE_TOKEN, 'base64').toString('utf-8'));
  } else if (fs.existsSync(CREDENTIALS_PATH) && fs.existsSync(TOKEN_PATH)) {
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));
    token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));
  } else {
    throw new Error('Gmail credentials not found');
  }

  const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  oAuth2Client.setCredentials(token);

  return google.gmail({ version: 'v1', auth: oAuth2Client });
}

/**
 * Encode email subject for RFC 2047
 */
function encodeSubject(subject: string): string {
  if (!/^[\x00-\x7F]*$/.test(subject)) {
    const encoded = Buffer.from(subject, 'utf-8').toString('base64');
    return `=?utf-8?B?${encoded}?=`;
  }
  return subject;
}

/**
 * Create MIME email message
 */
function createMimeMessage(to: string, from: string, subject: string, body: string): string {
  const encodedSubject = encodeSubject(subject);
  
  const message = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${encodedSubject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    '',
    body
  ].join('\r\n');

  return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Send email via Gmail
 */
export async function sendEmail(
  to: string,
  subject: string,
  htmlBody: string,
  fromName: string = 'BuildUp Capital'
): Promise<boolean> {
  try {
    const gmail = getGmailClient();
    const from = `${fromName} <brandon@buildup.capital>`;
    
    const encodedMessage = createMimeMessage(to, from, subject, htmlBody);

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    return true;
  } catch (error) {
    console.error('[Gmail] Failed to send email:', error);
    return false;
  }
}

export default sendEmail;
