import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing — King Capital Services",
  description:
    "Month-to-month pricing for managed recruiting and software modules. Start with what you need.",
};

const DEMO_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=King Capital Services Demo Request";
const PILOT_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=Start a Pilot — King Capital Services";

const managedTiers = [
  {
    label: "1 Terminal",
    price: "$600",
    period: "/mo",
    description: "Full-service recruiting management for a single terminal operation.",
    features: [
      "Branded apply form, your URL",
      "AI applicant outreach, 24/7",
      "Background check automation (FADV/Sterling)",
      "Live pipeline in Mission Control",
      "Onboarding integration",
    ],
    cta: "Start a Pilot",
    href: PILOT_HREF,
    highlight: false,
  },
  {
    label: "2–3 Terminals",
    price: "$700",
    period: "/terminal/mo",
    description: "Multi-terminal recruiting with coordinated pipeline management.",
    features: [
      "Everything in 1 terminal",
      "Cross-terminal pipeline view",
      "Coordinated hiring across locations",
      "Priority response and support",
    ],
    cta: "Start a Pilot",
    href: PILOT_HREF,
    highlight: true,
  },
  {
    label: "4+ Terminals",
    price: "$800",
    period: "/terminal/mo",
    description: "Enterprise-scale recruiting for large multi-terminal operators.",
    features: [
      "Everything in 2–3 terminals",
      "Enterprise dashboard",
      "Dedicated account manager",
      "Custom reporting and SLAs",
    ],
    cta: "Book a Call",
    href: DEMO_HREF,
    highlight: false,
  },
];

const softwareTiers = [
  {
    label: "Recruiting Only",
    price: "$199",
    period: "/terminal/mo",
    description: "Self-managed version of our recruiting platform.",
    features: [
      "Apply form builder",
      "Applicant tracking",
      "Basic AI outreach tools",
      "Pipeline dashboard",
    ],
    cta: "Get Started",
    href: DEMO_HREF,
  },
  {
    label: "Starter Ops",
    price: "$299",
    period: "/terminal/mo",
    description: "Recruiting + onboarding for growing operations.",
    features: [
      "Everything in Recruiting Only",
      "Onboarding Kanban",
      "Document collection",
      "Driver app access",
    ],
    cta: "Get Started",
    href: DEMO_HREF,
  },
  {
    label: "Operator",
    price: "$549",
    period: "/terminal/mo",
    description: "Full operations platform for serious ISP operators.",
    features: [
      "Everything in Starter Ops",
      "Operations Dashboard (DSW, DRO)",
      "Safety & Compliance module",
      "CEBS / Customer Case management",
    ],
    cta: "Get Started",
    href: DEMO_HREF,
    highlight: true,
  },
  {
    label: "Command",
    price: "$899",
    period: "/terminal/mo",
    description: "Complete platform for large multi-terminal operations.",
    features: [
      "Everything in Operator",
      "Multi-terminal enterprise view",
      "Advanced analytics",
      "Priority support + SLA",
    ],
    cta: "Book a Call",
    href: DEMO_HREF,
  },
];

const faqs = [
  {
    q: "Is there a contract?",
    a: "No. Everything is month-to-month. We earn your business by delivering results, not by locking you in. You can cancel any time.",
  },
  {
    q: "What if you don't find drivers?",
    a: "Honest answer: recruiting is a market problem as much as a process problem. We can't guarantee hires when the market is dry — but we can guarantee your pipeline is running 24/7, your response time is minutes not days, and you're not leaving candidates on the table due to slow follow-up. That's where most operations lose applicants, and that's what we fix.",
  },
  {
    q: "Do I need to provide FedEx credentials?",
    a: "Yes, for certain data integrations (DSW, DRO, performance data). We use read-only API access or secure credential storage. We do not store or share your FedEx login outside of the platform.",
  },
  {
    q: "Can I start with just recruiting and add more later?",
    a: "That's how most operators start. Managed Recruiting is the first step — once your pipeline is running, you can expand into onboarding, safety, and the full operations platform as your needs grow.",
  },
  {
    q: "What's the difference between Managed Recruiting and the software plan?",
    a: "Managed Recruiting means we run it for you — we set up the apply form, manage outreach, handle background checks, and staff the pipeline. The software plans give you the tools to run it yourself.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Simple pricing.<br className="hidden sm:block" />Month-to-month.
          </h1>
          <p className="text-navy-200 text-lg leading-relaxed">
            Start with what you need. Expand when you&apos;re ready. No long-term
            commitments, no surprise fees.
          </p>
        </div>
      </section>

      {/* ── Managed Recruiting ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-2">
              Managed Recruiting
            </h2>
            <p className="text-gray-500">
              We run your driver pipeline end-to-end. You watch it happen in Mission Control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {managedTiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl border p-7 relative flex flex-col ${
                  tier.highlight
                    ? "border-amber-500 shadow-lg ring-1 ring-amber-500"
                    : "border-gray-200"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    {tier.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-navy-800">{tier.price}</span>
                    <span className="text-gray-400 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={`block text-center font-bold text-sm px-6 py-3 rounded transition-colors ${
                    tier.highlight
                      ? "bg-amber-500 hover:bg-amber-400 text-navy-950"
                      : "bg-navy-800 hover:bg-navy-700 text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Software Plans ───────────────────────────────────── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-2">
              Software Plans
            </h2>
            <p className="text-gray-500">
              Prefer to run it yourself? Get access to Mission Control directly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {softwareTiers.map((tier) => (
              <div
                key={tier.label}
                className={`bg-white rounded-xl border p-6 relative flex flex-col ${
                  tier.highlight
                    ? "border-amber-500 shadow-md ring-1 ring-amber-500"
                    : "border-gray-200"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    {tier.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-navy-800">{tier.price}</span>
                    <span className="text-gray-400 text-xs">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={`block text-center font-bold text-xs px-4 py-2.5 rounded transition-colors ${
                    tier.highlight
                      ? "bg-amber-500 hover:bg-amber-400 text-navy-950"
                      : "bg-navy-800 hover:bg-navy-700 text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Add-on */}
          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                Add-on · Available on any plan
              </p>
              <h3 className="text-lg font-bold text-navy-800">
                Accounting Module{" "}
                <span className="text-sm font-normal text-gray-500 ml-1">+$149/mo</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                FedEx ISP chart of accounts, GF statement import, driver settlement, and ISP-specific P&amp;L.
              </p>
            </div>
            <a
              href={DEMO_HREF}
              className="shrink-0 bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm px-5 py-2.5 rounded transition-colors"
            >
              Add to My Plan
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="text-base font-bold text-navy-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTABanner
        headline="Still have questions? Talk to Josh."
        subheadline="20 minutes. Real answers. No sales script — just a contractor who built this talking to another contractor."
        primaryLabel="Book a Demo"
        primaryHref={DEMO_HREF}
      />
    </>
  );
}
