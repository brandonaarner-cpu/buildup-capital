#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const HTML_TEMPLATE = (title, content) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    @page { size: Letter; margin: 0.75in; }
    
    body {
      font-family: 'Georgia', serif;
      font-size: 11pt;
      line-height: 1.7;
      color: #1a1a1a;
      max-width: 100%;
    }
    
    .cover {
      text-align: center;
      padding: 100px 0;
      page-break-after: always;
    }
    
    .cover h1 {
      color: #0A2540;
      font-size: 36pt;
      font-weight: bold;
      margin-bottom: 30px;
      line-height: 1.3;
    }
    
    .cover .subtitle {
      color: #6b7280;
      font-size: 16pt;
      margin-bottom: 60px;
      font-style: italic;
    }
    
    .cover .logo {
      color: #F59E0B;
      font-size: 18pt;
      font-weight: bold;
      margin-top: 80px;
    }
    
    h1 {
      color: #0A2540;
      font-size: 22pt;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 20px;
      page-break-after: avoid;
    }
    
    h2 {
      color: #0A2540;
      font-size: 18pt;
      font-weight: bold;
      margin-top: 30px;
      margin-bottom: 15px;
      page-break-after: avoid;
    }
    
    h3 {
      color: #374151;
      font-size: 14pt;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 12px;
      page-break-after: avoid;
    }
    
    p {
      margin-bottom: 15px;
      text-align: justify;
    }
    
    ul, ol {
      margin-left: 30px;
      margin-bottom: 18px;
    }
    
    li {
      margin-bottom: 10px;
    }
    
    strong {
      color: #0A2540;
      font-weight: bold;
    }
    
    em {
      font-style: italic;
      color: #4b5563;
    }
    
    blockquote {
      border-left: 5px solid #F59E0B;
      padding-left: 25px;
      margin: 25px 0;
      font-style: italic;
      color: #4b5563;
      background: #fef3c7;
      padding: 20px 25px;
      border-radius: 5px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 10pt;
    }
    
    th {
      background: #0A2540;
      color: white;
      padding: 12px;
      text-align: left;
      font-weight: bold;
    }
    
    td {
      border: 1px solid #d1d5db;
      padding: 12px;
    }
    
    tr:nth-child(even) {
      background: #f9fafb;
    }
    
    .callout {
      background: #ecfdf5;
      border: 3px solid #059669;
      border-radius: 10px;
      padding: 20px 25px;
      margin: 25px 0;
    }
    
    .callout-title {
      color: #047857;
      font-weight: bold;
      font-size: 13pt;
      margin-bottom: 10px;
    }
    
    code {
      background: #f3f4f6;
      padding: 3px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 10pt;
    }
    
    pre {
      background: #1f2937;
      color: #e5e7eb;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 20px 0;
      font-size: 9pt;
    }
    
    pre code {
      background: none;
      color: inherit;
      padding: 0;
    }
    
    .page-break {
      page-break-before: always;
    }
    
    hr {
      border: none;
      border-top: 2px solid #d1d5db;
      margin: 35px 0;
    }
    
    .footer {
      margin-top: 60px;
      padding-top: 25px;
      border-top: 3px solid #F59E0B;
      text-align: center;
      font-size: 9pt;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="cover">
    <h1>Beyond Rentals</h1>
    <div class="subtitle">The Sophisticated Investor's Guide to Private Credit</div>
    <div style="color: #6b7280; font-size: 12pt; margin-bottom: 20px;">
      For accredited investors who've outgrown rental real estate
    </div>
    <div class="logo">BUILDUP CAPITAL</div>
    <div style="color: #6b7280; font-size: 11pt; margin-top: 10px;">
      Salt Lake City, Utah
    </div>
  </div>
  
  <div class="content">
    ${content}
  </div>
  
  <div class="footer">
    <p><strong>BuildUp Capital</strong> | Salt Lake City, Utah</p>
    <p>Website: buildup.capital | Email: info@buildup.capital</p>
    <p style="margin-top: 15px; font-size: 8pt;">
      © 2024 BuildUp Capital. All rights reserved.<br>
      This guide is for educational purposes only and does not constitute investment advice.
    </p>
  </div>
</body>
</html>
`;

const inputFile = path.join(__dirname, '../lead-magnets/beyond-rentals-guide.md');
const outputHTML = path.join(__dirname, '../public/downloads/beyond-rentals-guide.html');
const outputPDF = path.join(__dirname, '../public/downloads/beyond-rentals-guide.pdf');

console.log('📄 Generating "Beyond Rentals" lead magnet...\n');

// Read markdown
const markdown = fs.readFileSync(inputFile, 'utf-8');

// Convert to HTML
const htmlContent = marked.parse(markdown);

// Wrap in template
const fullHTML = HTML_TEMPLATE('Beyond Rentals Guide', htmlContent);

// Ensure output directory exists
const outputDir = path.dirname(outputHTML);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write HTML
fs.writeFileSync(outputHTML, fullHTML, 'utf-8');
console.log(`✅ HTML generated: ${outputHTML}`);

// Generate PDF using wkhtmltopdf
const { execSync } = require('child_process');

try {
  execSync(`wkhtmltopdf --enable-local-file-access --page-size Letter --margin-top 0.75in --margin-right 0.75in --margin-bottom 0.75in --margin-left 0.75in "${outputHTML}" "${outputPDF}"`, {
    stdio: 'inherit'
  });
  
  const stats = fs.statSync(outputPDF);
  const sizeKB = (stats.size / 1024).toFixed(1);
  
  console.log(`✅ PDF generated: ${outputPDF} (${sizeKB} KB)`);
} catch (error) {
  console.error('❌ PDF generation failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 Lead magnet ready for deployment!');
