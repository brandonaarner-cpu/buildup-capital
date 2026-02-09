import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">BuildUp Capital</h3>
            <p className="text-slate-300 mb-4">
              Asset-backed private credit delivering monthly income without tenants, toilets, or market whiplash.
            </p>
            <p className="text-slate-400 text-sm">
              25 years of lending experience. Real assets. Real returns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/investors" className="hover:text-white transition-colors">
                  For Investors
                </Link>
              </li>
              <li>
                <Link href="/borrowers" className="hover:text-white transition-colors">
                  For Borrowers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} BuildUp Capital. All rights reserved.</p>
          <p className="mt-2">
            Investment opportunities are offered to accredited investors only. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
