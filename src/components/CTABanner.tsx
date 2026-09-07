const DEMO_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=King Capital Services Demo Request";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline = "Ready to see it in action?",
  subheadline = "Book a 20-minute call with Josh. No sales pitch — just a real look at how King Capital Services runs.",
  primaryLabel = "Book a Demo",
  primaryHref = DEMO_HREF,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-navy-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {headline}
        </h2>
        <p className="text-navy-200 text-base sm:text-lg mb-8 leading-relaxed">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={primaryHref}
            className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-base px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
          >
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className="border border-navy-400 hover:border-white text-white font-semibold text-base px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
