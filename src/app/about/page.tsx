import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About — King Capital Services",
  description:
    "Built by Josh Stenson, founder of King Capital Transport — 6 terminals, ~300 drivers. This is why King Capital Services exists.",
};

const DEMO_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=King Capital Services Demo Request";

const timeline = [
  {
    year: "2019",
    title: "King Capital Transport founded",
    description:
      "Josh Stenson started as a FedEx Ground ISP contractor with a single terminal in Wisconsin. Built from nothing — one vehicle, one route, one driver at a time.",
  },
  {
    year: "2021",
    title: "Scaled to multiple terminals",
    description:
      "Rapid growth across Wisconsin and surrounding states revealed what every growing ISP contractor eventually faces: the tools don't exist. Ancile for recruiting, QuickBooks for financials, spreadsheets for everything else. Nothing talks to anything.",
  },
  {
    year: "2022",
    title: "Mission Control v1",
    description:
      "Built the first internal version of Mission Control to manage driver pipelines, onboarding, and daily operations. Not because we wanted to build software — because we needed it and it didn't exist.",
  },
  {
    year: "2023",
    title: "6 terminals, ~300 drivers",
    description:
      "King Capital Transport grew to six terminals across Wisconsin, Missouri, North Dakota, Wyoming, and Montana. Mission Control grew with it — adding safety compliance, CEBS case management, and FedEx-specific accounting.",
  },
  {
    year: "2024",
    title: "Other contractors started asking",
    description:
      "Peer ISP contractors kept asking how we managed our operation — how we filled routes faster, why our driver retention was better, how we handled compliance without a full-time team for it. The answer was Mission Control.",
  },
  {
    year: "2025",
    title: "King Capital Services launched",
    description:
      "We turned our internal platform into a service. King Capital Services is the answer to every contractor who asked. Same tools. Same knowledge. Backed by a team that runs a real operation with them every day.",
  },
];

const values = [
  {
    title: "Operator-first thinking",
    description:
      "Every feature in Mission Control came from a real problem we had running King Capital Transport. We don't build for investors or demos — we build for operations.",
  },
  {
    title: "FedEx Ground only",
    description:
      "We don't serve UPS contractors or Amazon DSPs. FedEx Ground ISPs have specific compliance, specific terminology, specific problems. We know them because we live them.",
  },
  {
    title: "Honest answers",
    description:
      "We'll tell you if we can't fill your routes. We'll tell you what the market looks like. We won't hide behind vague SLAs or upsell you into services you don't need.",
  },
  {
    title: "No lock-in",
    description:
      "Month-to-month pricing. Your data is yours. If we stop delivering results, you should be able to leave. That accountability keeps us sharp.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Built by a contractor.<br className="hidden sm:block" />
            For contractors.
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed">
            King Capital Services exists because the tools ISP contractors need don&apos;t
            exist anywhere else. We built Mission Control to run our own operation — then
            realized other contractors needed it too.
          </p>
        </div>
      </section>

      {/* ── Josh's Story ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
            <div className="shrink-0">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-navy-800 flex items-center justify-center text-white text-2xl font-bold">
                JS
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-1">Josh Stenson</h2>
              <p className="text-amber-600 font-semibold text-sm mb-3">
                Founder, King Capital Transport &amp; King Capital Services
              </p>
              <p className="text-gray-500 text-sm">
                6 terminals · ~300 drivers · Operating since 2019 · Wisconsin-based
              </p>
            </div>
          </div>

          <div className="prose prose-base max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              I started King Capital Transport in 2019. One terminal. A handful of
              drivers. The kind of operation where you know every route and every
              driver by name.
            </p>
            <p>
              As we grew, the problems got harder — not because FedEx Ground got
              harder, but because the tools didn&apos;t exist. Recruiting meant paying
              Ancile $1,200 a month for something that still required three business
              days to respond to an applicant. Financials meant forcing QuickBooks
              to do things it wasn&apos;t designed for. Operations meant spreadsheets,
              phone calls, and hoping nothing fell through.
            </p>
            <p>
              So I built Mission Control. First to solve our own recruiting problem.
              Then to track onboarding. Then to manage driver scores and VEDR
              compliance. Then to make sense of our GF statement without hiring an
              accountant who had to be taught what a FedEx ISP actually is.
            </p>
            <p>
              By the time we got to six terminals and three hundred drivers, Mission
              Control was running our entire operation. Not perfectly — nothing is —
              but better than anything else we could buy.
            </p>
            <p>
              Other contractors started noticing. At terminal meetings, on the ISP
              forums, in conversations with peers who were running into the same walls
              we had climbed over. &ldquo;How do you staff so fast?&rdquo; &ldquo;How do you keep your
              driver scores up?&rdquo; &ldquo;How are you managing compliance for six terminals
              without a dedicated team?&rdquo;
            </p>
            <p className="font-semibold text-navy-800 text-lg">
              King Capital Services is the answer to those questions.
            </p>
            <p>
              We opened the platform to other operators because we genuinely believe
              it makes the ISP industry better. Better-run operations fill routes
              faster, retain drivers longer, and stay compliant. That&apos;s good for
              contractors and good for the network.
            </p>
            <p>
              If you&apos;re running a FedEx Ground operation and you&apos;re still doing this
              the old way — Ancile for recruiting, QuickBooks for financials,
              spreadsheets for everything in between — I&apos;d like to show you what we
              built.
            </p>
          </div>

          <div className="mt-8">
            <a
              href={DEMO_HREF}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-8 py-3 rounded transition-colors"
            >
              Book a call with Josh
            </a>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-12 text-center">
            How we got here
          </h2>
          <div className="relative">
            <div className="absolute left-9 top-0 bottom-0 w-px bg-navy-200 hidden sm:block" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-6">
                  <div className="shrink-0 w-18 sm:w-18">
                    <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center z-10 relative">
                      <span className="text-amber-400 text-xs font-bold">{item.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="pt-1 pb-2">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-base font-bold text-navy-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-10 text-center">
            How we operate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-base font-bold text-navy-800 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── King Capital Group ───────────────────────────────── */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-white mb-4">King Capital Group</h2>
          <p className="text-navy-300 text-sm leading-relaxed max-w-xl mx-auto">
            King Capital Services and King Capital Transport are part of King Capital
            Group LLC — an operating company built around FedEx Ground ISP contracting.
            The platform we sell is the same platform we use to run our own operation,
            every single day.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTABanner
        headline="Talk to the operator who built it."
        subheadline="Book 20 minutes with Josh. He'll tell you exactly what King Capital Services can and can't do for your operation."
        primaryLabel="Book a Demo"
        primaryHref={DEMO_HREF}
      />
    </>
  );
}
