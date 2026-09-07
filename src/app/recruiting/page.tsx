import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Managed Recruiting — King Capital Services",
  description:
    "We run your entire driver recruiting pipeline — branded to your company, powered by AI, and cheaper than Ancile.",
};

const DEMO_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=King Capital Services Demo Request";
const PILOT_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=Start a Pilot — King Capital Services";

const steps = [
  {
    number: "1",
    title: "We set up your apply form",
    description:
      "Your brand, your URL. Drivers apply directly to your company — not a generic job board. We handle the setup.",
  },
  {
    number: "2",
    title: "AI outreach contacts applicants within minutes",
    description:
      "24/7. No business hours. Candidates get a response while they're still thinking about the job, not three days later.",
  },
  {
    number: "3",
    title: "Background checks automated",
    description:
      "FADV/Sterling integrations handle pre-employment screening. No manual ordering, no chasing status updates.",
  },
  {
    number: "4",
    title: "You watch the pipeline live in Mission Control",
    description:
      "Every applicant, every stage, in real time. See where candidates are without calling us. You own the data.",
  },
  {
    number: "5",
    title: "Hired driver flows directly into onboarding",
    description:
      "No handoff gaps. When someone clears the pipeline, onboarding starts automatically — FedEx-specific from day one.",
  },
];

const ancileComparison = [
  {
    feature: "Price",
    ancile: "~$1,200/mo",
    kcs: "$600–800/terminal/mo",
    kcsWins: true,
  },
  {
    feature: "Response time",
    ancile: "Business hours",
    kcs: "Minutes, 24/7 (AI)",
    kcsWins: true,
  },
  {
    feature: "Pipeline visibility",
    ancile: "None",
    kcs: "Live in Mission Control",
    kcsWins: true,
  },
  {
    feature: "FedEx onboarding knowledge",
    ancile: "Partial",
    kcs: "Built-in",
    kcsWins: true,
  },
  {
    feature: "Data ownership",
    ancile: "Theirs",
    kcs: "Yours",
    kcsWins: true,
  },
  {
    feature: "Fill time",
    ancile: "3–8 weeks",
    kcs: "Faster",
    kcsWins: true,
  },
];

const pricingTiers = [
  {
    label: "1 Terminal",
    price: "$600",
    period: "/mo",
    features: [
      "Full pipeline management",
      "Branded apply form",
      "AI outreach 24/7",
      "Background check automation",
      "Mission Control access",
    ],
  },
  {
    label: "2–3 Terminals",
    price: "$700",
    period: "/terminal/mo",
    popular: true,
    features: [
      "Everything in 1 terminal",
      "Cross-terminal pipeline view",
      "Priority support",
      "Coordinated hiring across locations",
    ],
  },
  {
    label: "4+ Terminals",
    price: "$800",
    period: "/terminal/mo",
    features: [
      "Everything in 2–3 terminals",
      "Enterprise dashboard",
      "Dedicated account manager",
      "Custom reporting",
    ],
  },
];

export default function RecruitingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Managed Recruiting
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            We find your drivers.<br className="hidden sm:block" />
            You run your routes.
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            King Capital Services runs your entire driver recruiting pipeline —
            branded to your company, powered by AI, and cheaper than Ancile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PILOT_HREF}
              className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-lg px-8 py-3.5 rounded transition-colors w-full sm:w-auto text-center"
            >
              Start a Pilot
            </a>
            <a
              href={DEMO_HREF}
              className="border border-navy-500 hover:border-white text-white font-semibold text-lg px-8 py-3.5 rounded transition-colors w-full sm:w-auto text-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              How it works
            </h2>
            <p className="text-gray-500 text-lg">
              Five steps. Your pipeline running without you.
            </p>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-5 top-10 bottom-10 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-navy-950 font-bold text-base z-10">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-bold text-navy-800 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── vs Ancile ────────────────────────────────────────── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              How we compare to Ancile
            </h2>
            <p className="text-gray-500 text-lg">
              Side by side. No spin.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold">Ancile</th>
                  <th className="px-4 py-3 text-center font-semibold bg-amber-500 text-navy-950">
                    King Capital Services
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ancileComparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-500">
                      {row.ancile}
                    </td>
                    <td className="px-4 py-3 text-center font-semibold text-navy-700 bg-navy-50">
                      {row.kcs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-500 text-lg">
              Month-to-month. No long-term commitment required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl border p-7 relative flex flex-col ${
                  tier.popular
                    ? "border-amber-500 shadow-lg ring-1 ring-amber-500"
                    : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <p className="text-sm font-semibold text-gray-500 mb-1">{tier.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-navy-800">{tier.price}</span>
                    <span className="text-gray-400 text-sm">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={PILOT_HREF}
                  className={`block text-center font-bold text-sm px-6 py-3 rounded transition-colors ${
                    tier.popular
                      ? "bg-amber-500 hover:bg-amber-400 text-navy-950"
                      : "bg-navy-800 hover:bg-navy-700 text-white"
                  }`}
                >
                  Start a Pilot
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            90-day pilot available. No long-term commitment required to start.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTABanner
        headline="Start a Pilot — 90 days, no long-term commitment"
        subheadline="We'll set up your apply form, run your first pipeline, and show you what your operation looks like fully staffed."
        primaryLabel="Start a Pilot"
        primaryHref={PILOT_HREF}
        secondaryLabel="Book a Demo First"
        secondaryHref={DEMO_HREF}
      />
    </>
  );
}
