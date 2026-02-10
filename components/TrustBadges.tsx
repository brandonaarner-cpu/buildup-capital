import React from 'react';

interface TrustBadge {
  icon: string;
  title: string;
  subtitle: string;
}

const collectionKingsBadges: TrustBadge[] = [
  {
    icon: "⚖️",
    title: "FDCPA Compliant",
    subtitle: "Full regulatory compliance"
  },
  {
    icon: "🛡️",
    title: "20 Years Experience",
    subtitle: "Proven track record"
  },
  {
    icon: "🤝",
    title: "Ethical Collections",
    subtitle: "Relationship-first approach"
  },
  {
    icon: "📊",
    title: "92% Recovery Rate",
    subtitle: "Industry-leading results"
  }
];

const buildupCapitalBadges: TrustBadge[] = [
  {
    icon: "🏦",
    title: "Real Estate Secured",
    subtitle: "Asset-backed lending"
  },
  {
    icon: "⚡",
    title: "7-Day Funding",
    subtitle: "Fast approvals"
  },
  {
    icon: "💼",
    title: "Accredited Investors",
    subtitle: "Qualified capital partners"
  },
  {
    icon: "📈",
    title: "65% Avg LTV",
    subtitle: "Conservative underwriting"
  }
];

export function TrustBadges({ type }: { type: 'collection-kings' | 'buildup-capital' }) {
  const badges = type === 'collection-kings' ? collectionKingsBadges : buildupCapitalBadges;

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <div className="font-bold text-gray-900 mb-1">{badge.title}</div>
              <div className="text-sm text-gray-600">{badge.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatsBar({ stats }: { stats: Array<{ value: string; label: string }> }) {
  return (
    <div className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-black text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wide text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
