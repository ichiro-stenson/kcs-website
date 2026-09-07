import Link from "next/link";
import CTABanner from "@/components/CTABanner";

const DEMO_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=King Capital Services Demo Request";

const steps = [
  {
    number: "1",
    title: "We find your drivers",
    description:
      "Apply form, AI outreach, and background checks — your pipeline running 24/7 without your involvement.",
  },
  {
    number: "2",
    title: "We onboard them right",
    description:
      "FedEx-specific onboarding from day one. Every step tracked, nothing missed. Compliant before they touch a route.",
  },
  {
    number: "3",
    title: "You run your routes",
    description:
      "Mission Control keeps your operation visible and in control — DSW, driver scores, financials, and more.",
  },
];

const modules = [
  {
    icon: "🚗",
    title: "Managed Recruiting",
    description: "We run your driver pipeline",
    href: "/recruiting",
  },
  {
    icon: "📋",
    title: "Onboarding",
    description: "From hired to first route, handled",
    href: "/platform",
  },
  {
    icon: "🛡️",
    title: "Safety & Compliance",
    description: "VEDR, CEBS, driver scores — all in one place",
    href: "/platform",
  },
  {
    icon: "💰",
    title: "Accounting",
    description: "FedEx-specific financials, not QuickBooks guessing",
    href: "/platform",
  },
];

const comparisonRows = [
  {
    feature: "FedEx Ground–specific",
    ancile: true,
    samsara: false,
    quickbooks: false,
    kcs: true,
  },
  {
    feature: "Managed recruiting",
    ancile: true,
    samsara: false,
    quickbooks: false,
    kcs: true,
  },
  {
    feature: "Live pipeline visibility",
    ancile: false,
    samsara: false,
    quickbooks: false,
    kcs: true,
  },
  {
    feature: "Operations platform",
    ancile: false,
    samsara: "partial",
    quickbooks: false,
    kcs: true,
  },
  {
    feature: "Built by an ISP contractor",
    ancile: false,
    samsara: false,
    quickbooks: false,
    kcs: true,
  },
  {
    feature: "Monthly price",
    ancile: "~$1,200",
    samsara: "~$1,500",
    quickbooks: "~$90",
    kcs: "From $600",
  },
];

type CellValue = boolean | string;

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return (
      <td
        className={`px-4 py-3 text-center text-lg ${highlight ? "bg-navy-50" : ""}`}
      >
        {value ? (
          <span className="text-green-600 font-bold">✓</span>
        ) : (
          <span className="text-gray-300 font-bold">✗</span>
        )}
      </td>
    );
  }
  if (value === "partial") {
    return (
      <td
        className={`px-4 py-3 text-center text-sm text-amber-600 font-medium ${highlight ? "bg-navy-50" : ""}`}
      >
        Partial
      </td>
    );
  }
  return (
    <td
      className={`px-4 py-3 text-center text-sm font-semibold ${
        highlight ? "bg-navy-50 text-navy-800" : "text-gray-600"
      }`}
    >
      {value}
    </td>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Built by a FedEx Ground contractor · 300 drivers · 6 terminals
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your FedEx Ground operation,<br className="hidden sm:block" />
            fully staffed and running.
          </h1>
          <p className="text-navy-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            King Capital Services handles driver recruiting, onboarding, safety
            compliance, and operations management — powered by Mission Control, the
            platform we built to run our own 300-driver operation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DEMO_HREF}
              className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-lg px-8 py-3.5 rounded transition-colors w-full sm:w-auto text-center"
            >
              Book a Demo
            </a>
            <Link
              href="/pricing"
              className="border border-navy-500 hover:border-white text-white font-semibold text-lg px-8 py-3.5 rounded transition-colors w-full sm:w-auto text-center"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Social proof strip ───────────────────────────────── */}
      <div className="bg-navy-800 py-4">
        <p className="text-center text-navy-200 text-sm font-medium">
          Trusted by FedEx Ground ISPs across Wisconsin, Missouri, North Dakota, Wyoming, and Montana
        </p>
      </div>

      {/* ── 3-Step Section ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              How it works
            </h2>
            <p className="text-gray-500 text-lg">
              Three steps. Your operation fully covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-navy-950 font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Module Cards ─────────────────────────────────────── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              Everything your operation needs
            </h2>
            <p className="text-gray-500 text-lg">
              Start with recruiting. Expand when you&apos;re ready.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-navy-600 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{mod.icon}</div>
                <h3 className="text-base font-bold text-navy-800 mb-1 group-hover:text-navy-600 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-gray-500">{mod.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              Why not Ancile or QuickBooks?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Other tools were built for fleets in general. King Capital Services
              was built for FedEx Ground ISPs specifically.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold">Ancile</th>
                  <th className="px-4 py-3 text-center font-semibold">Samsara</th>
                  <th className="px-4 py-3 text-center font-semibold">QuickBooks</th>
                  <th className="px-4 py-3 text-center font-semibold bg-amber-500 text-navy-950">
                    King Capital Services
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {row.feature}
                    </td>
                    <Cell value={row.ancile} />
                    <Cell value={row.samsara} />
                    <Cell value={row.quickbooks} />
                    <Cell value={row.kcs} highlight />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Built by a contractor ────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-navy-800 rounded-full px-4 py-1 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
              Founder Story
            </div>
            <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8">
              &ldquo;I built Mission Control to run my own operation. Then other contractors
              started asking how we did it. King Capital Services is the answer.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-2 mb-8">
              <p className="text-white font-bold text-lg">Josh Stenson</p>
              <p className="text-navy-300 text-sm">
                Founder, King Capital Transport &amp; King Capital Services
              </p>
              <p className="text-navy-400 text-sm">
                6 terminals · ~300 drivers · Operating since 2019
              </p>
            </div>
            <a
              href={DEMO_HREF}
              className="inline-block bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-8 py-3 rounded transition-colors"
            >
              Book a 20-Minute Call
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <CTABanner
        headline="Ready to replace Ancile, QuickBooks, and your spreadsheets?"
        subheadline="One platform. Built for FedEx Ground. Running in your operation within weeks."
        primaryLabel="Book a Demo"
        primaryHref={DEMO_HREF}
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
