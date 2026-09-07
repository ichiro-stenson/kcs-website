import Link from "next/link";

const DEMO_HREF =
  "mailto:josh@kingcapitalgrp.com?subject=King Capital Services Demo Request";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-400 font-bold text-lg">King Capital</span>
              <span className="text-white font-semibold text-lg">Services</span>
            </div>
            <p className="text-sm text-navy-300 max-w-sm leading-relaxed">
              FedEx Ground contractors run better on King Capital Services. Driver
              recruiting, onboarding, safety compliance, and operations management —
              all in one platform.
            </p>
            <p className="text-xs text-navy-400 mt-4">
              Powered by{" "}
              <span className="text-navy-200 font-medium">Mission Control</span>
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/recruiting" className="text-navy-300 hover:text-white transition-colors">
                  Managed Recruiting
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-navy-300 hover:text-white transition-colors">
                  Mission Control
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-navy-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-navy-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={DEMO_HREF}
                  className="text-navy-300 hover:text-white transition-colors"
                >
                  Book a Demo
                </a>
              </li>
              <li>
                <a
                  href="mailto:josh@kingcapitalgrp.com"
                  className="text-navy-300 hover:text-white transition-colors"
                >
                  josh@kingcapitalgrp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} King Capital Group LLC. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            kingcapitalservices.com
          </p>
        </div>
      </div>
    </footer>
  );
}
