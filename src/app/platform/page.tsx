import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Mission Control Platform — King Capital Services",
  description:
    "The operations platform built for FedEx Ground ISPs. Start with recruiting, expand when you're ready.",
};

const DEMO_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=King Capital Services Demo Request";

const modules = [
  {
    icon: "📊",
    tag: "Operations",
    title: "Operations Dashboard",
    description:
      "Real-time visibility into your entire operation. DSW performance, DRO scores, driver metrics, and route status — in one place. Stop managing by spreadsheet and phone calls.",
    details: [
      "Daily Standing Worksheet (DSW) tracking",
      "Driver reliability scores (DRO)",
      "Route completion and on-time metrics",
      "Multi-terminal rollup view",
    ],
  },
  {
    icon: "📱",
    tag: "Driver",
    title: "Driver App",
    description:
      "A FedEx Ground–specific app your drivers actually use. End-of-day reporting, pre-trip inspections, and VEDR compliance built in. No extra hardware, no confusing UI.",
    details: [
      "EOD reporting and check-in",
      "Pre-trip inspection checklists",
      "VEDR compliance confirmation",
      "Direct messaging to dispatch",
    ],
  },
  {
    icon: "📋",
    tag: "Onboarding",
    title: "Onboarding Kanban",
    description:
      "From hired to first route without a single dropped ball. Every FedEx-specific onboarding task tracked on a visual board — automated reminders, compliance gates, and document collection.",
    details: [
      "FedEx-specific task automation",
      "Document collection and storage",
      "Compliance gate enforcement",
      "Integration with background checks",
    ],
  },
  {
    icon: "🛡️",
    tag: "Safety",
    title: "Safety & Compliance",
    description:
      "VEDR coaching, ride-along scheduling, and compliance tracking — managed in one place. When your driver scores dip, you'll know before FedEx calls you.",
    details: [
      "VEDR event review and coaching logs",
      "Ride-along scheduling and tracking",
      "Compliance gate management",
      "Safety score trend monitoring",
    ],
  },
  {
    icon: "📁",
    tag: "Disputes",
    title: "CEBS / Customer Cases",
    description:
      "Dispute management built for FedEx Ground contractors. Track customer exception cases, attach driver documentation, and respond before the window closes.",
    details: [
      "CEBS case tracking and management",
      "Driver alert documentation",
      "Case deadline monitoring",
      "Response template management",
    ],
  },
  {
    icon: "💰",
    tag: "Accounting",
    title: "Accounting (kct-financials)",
    description:
      "FedEx ISP–specific chart of accounts. GF statement import, fuel reconciliation, driver settlement, and P&L that actually reflects how your operation works — not how QuickBooks thinks it works.",
    details: [
      "FedEx ISP chart of accounts",
      "GF statement import and reconciliation",
      "Driver settlement tracking",
      "P&L tailored to ISP operations",
    ],
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Mission Control
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            The operations platform built<br className="hidden sm:block" />
            for FedEx Ground ISPs.
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Mission Control started as the internal tool we built to run King Capital
            Transport — 6 terminals, ~300 drivers. Every module exists because we
            needed it ourselves.
          </p>
          <div className="inline-flex items-center gap-2 bg-navy-800 rounded-lg px-5 py-2.5">
            <span className="text-amber-400 font-semibold text-sm">Start with Recruiting.</span>
            <span className="text-navy-300 text-sm">Expand when you&apos;re ready.</span>
          </div>
        </div>
      </section>

      {/* ── Module Sections ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {modules.map((mod, index) => (
              <div
                key={mod.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{mod.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      {mod.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-4">
                    {mod.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {mod.description}
                  </p>
                  <ul className="space-y-2">
                    {mod.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-amber-500 mt-0.5 shrink-0 font-bold">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-navy-50 border border-navy-200 rounded-xl p-8 min-h-[220px] flex flex-col justify-center">
                    <div className="text-5xl mb-4 text-center">{mod.icon}</div>
                    <div className="space-y-2">
                      <div className="h-2 bg-navy-200 rounded w-3/4 mx-auto" />
                      <div className="h-2 bg-navy-100 rounded w-1/2 mx-auto" />
                      <div className="h-2 bg-navy-100 rounded w-5/6 mx-auto" />
                      <div className="h-2 bg-navy-200 rounded w-2/3 mx-auto mt-3" />
                    </div>
                    <p className="text-center text-navy-400 text-xs mt-4 font-medium">
                      Mission Control · {mod.tag} Module
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expansion path ───────────────────────────────────── */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">
            You don&apos;t have to take it all at once
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Most operators start with Managed Recruiting. Once your pipeline is
            running, you can bring in Onboarding, Safety, and the full operations
            dashboard — module by module, as your operation grows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-navy-600">
            <span className="bg-white border border-navy-200 rounded px-3 py-1">Recruiting</span>
            <span className="text-navy-400">→</span>
            <span className="bg-white border border-navy-200 rounded px-3 py-1">Onboarding</span>
            <span className="text-navy-400">→</span>
            <span className="bg-white border border-navy-200 rounded px-3 py-1">Safety</span>
            <span className="text-navy-400">→</span>
            <span className="bg-white border border-navy-200 rounded px-3 py-1">Accounting</span>
            <span className="text-navy-400">→</span>
            <span className="bg-amber-100 border border-amber-400 text-amber-700 rounded px-3 py-1">Full Command</span>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTABanner
        headline="Start with Recruiting, expand when you're ready"
        subheadline="See Mission Control in action. 20-minute demo with Josh — the contractor who built it."
        primaryLabel="Book a Demo"
        primaryHref={DEMO_HREF}
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
