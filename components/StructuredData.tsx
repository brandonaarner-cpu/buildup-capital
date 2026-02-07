export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "BuildUp Capital",
    "url": "https://buildup.capital",
    "logo": "https://buildup.capital/logo.png",
    "description": "Fast, flexible financing for real estate investors and small businesses. Get approved in 24-48 hours.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@buildup.capital"
    },
    "sameAs": [
      "https://www.linkedin.com/company/buildup-capital",
      "https://twitter.com/buildupCAPI"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Lending",
    "provider": {
      "@type": "FinancialService",
      "name": "BuildUp Capital"
    },
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Loan Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Rehab & Flip Loans",
            "description": "Fix-and-flip financing for real estate investors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Acquisition Bridge Loans",
            "description": "Fast funding for property acquisitions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Asset-Backed Business Loans",
            "description": "Leverage business assets for working capital"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "SBA Bridge Loans",
            "description": "Bridge financing during SBA loan processing"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
