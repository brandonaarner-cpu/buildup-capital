import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const loanPrograms = [
    { name: 'Rehab & Flip Loans', href: '/rehab-flip-loans' },
    { name: 'Acquisition Bridge Loans', href: '/acquisition-bridge-loans' },
    { name: 'Asset-Backed Business Loans', href: '/asset-backed-business-loans' },
    { name: 'SBA Bridge Loans', href: '/sba-bridge-loans' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Borrowers', href: '/borrowers' },
    { name: 'For Lenders', href: '/lenders' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-brand-blue-400">BuildUp</span> Capital
            </div>
            <p className="text-gray-400 text-sm">
              Fast, flexible financing for real estate investors and small businesses.
            </p>
          </div>

          {/* Loan Programs */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Loan Programs</h3>
            <ul className="space-y-2">
              {loanPrograms.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Get Started</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ready to grow? Apply now and get approved in 24-48 hours.
            </p>
            <Link href="/apply" className="btn-primary inline-block">
              Apply Now
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BuildUp Capital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
